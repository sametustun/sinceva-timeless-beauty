<?php
/**
 * Trendyol Product Sync & Matching API
 * Handles product matching between local and Trendyol products
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/trendyol/TrendyolAPI.php';

setCorsHeaders();
handlePreflight();
requireAuth();

define('PRODUCTS_FILE', DATA_DIR . '/products.json');
define('TRENDYOL_PRODUCTS_FILE', DATA_DIR . '/trendyol_products.json');
define('PRODUCT_MAPPING_FILE', DATA_DIR . '/product_mapping.json');

// Initialize files
if (!file_exists(TRENDYOL_PRODUCTS_FILE)) {
    writeJsonFile(TRENDYOL_PRODUCTS_FILE, []);
}
if (!file_exists(PRODUCT_MAPPING_FILE)) {
    writeJsonFile(PRODUCT_MAPPING_FILE, []);
}

function getTrendyolSettings(): ?array {
    $settingsFile = DATA_DIR . '/settings.json';
    $settings = file_exists($settingsFile) ? readJsonFile($settingsFile) : [];
    $trendyol = $settings['trendyol'] ?? [];
    
    if (empty($trendyol['apiKey']) || empty($trendyol['apiSecret']) || empty($trendyol['sellerId'])) {
        return null;
    }
    
    return $trendyol;
}

function getTrendyolAPI(): ?TrendyolAPI {
    $settings = getTrendyolSettings();
    if (!$settings) return null;
    return new TrendyolAPI($settings['apiKey'], $settings['apiSecret'], $settings['sellerId']);
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

switch ($method) {
    case 'GET':
        switch ($action) {
            case 'mappings':
                handleGetMappings();
                break;
            case 'unmatched':
                handleGetUnmatched();
                break;
            case 'sync-products':
                handleSyncTrendyolProducts();
                break;
            default:
                respondError('Unknown action', 400);
        }
        break;
        
    case 'POST':
        switch ($action) {
            case 'match':
                handleMatchProduct();
                break;
            case 'auto-match':
                handleAutoMatch();
                break;
            case 'bulk-update-stock':
                handleBulkUpdateStock();
                break;
            case 'import-csv':
                handleImportCSV();
                break;
            default:
                respondError('Unknown action', 400);
        }
        break;
        
    case 'DELETE':
        if ($action === 'unmatch') {
            handleUnmatchProduct();
        } else {
            respondError('Unknown action', 400);
        }
        break;
        
    default:
        respondError('Method not allowed', 405);
}

// ========== HANDLERS ==========

function handleGetMappings() {
    $mappings = readJsonFile(PRODUCT_MAPPING_FILE);
    $localProducts = readJsonFile(PRODUCTS_FILE);
    $trendyolProducts = readJsonFile(TRENDYOL_PRODUCTS_FILE);
    
    // Enrich mappings with product details
    $enrichedMappings = [];
    foreach ($mappings as $mapping) {
        $localProduct = null;
        $trendyolProduct = null;
        
        foreach ($localProducts as $p) {
            if ($p['id'] === $mapping['local_product_id']) {
                $localProduct = $p;
                break;
            }
        }
        
        foreach ($trendyolProducts as $p) {
            if ($p['barcode'] === $mapping['trendyol_barcode']) {
                $trendyolProduct = $p;
                break;
            }
        }
        
        $enrichedMappings[] = [
            'id' => $mapping['id'],
            'local_product_id' => $mapping['local_product_id'],
            'trendyol_barcode' => $mapping['trendyol_barcode'],
            'local_product' => $localProduct ? [
                'id' => $localProduct['id'],
                'name' => $localProduct['name']['tr'] ?? $localProduct['name'],
                'barcode' => $localProduct['barcode'] ?? null
            ] : null,
            'trendyol_product' => $trendyolProduct ? [
                'barcode' => $trendyolProduct['barcode'],
                'title' => $trendyolProduct['title'],
                'quantity' => $trendyolProduct['quantity'],
                'salePrice' => $trendyolProduct['salePrice']
            ] : null,
            'created_at' => $mapping['created_at']
        ];
    }
    
    respondSuccess(['mappings' => $enrichedMappings]);
}

function handleGetUnmatched() {
    $localProducts = readJsonFile(PRODUCTS_FILE);
    $trendyolProducts = readJsonFile(TRENDYOL_PRODUCTS_FILE);
    $mappings = readJsonFile(PRODUCT_MAPPING_FILE);
    
    $mappedLocalIds = array_column($mappings, 'local_product_id');
    $mappedBarcodes = array_column($mappings, 'trendyol_barcode');
    
    $unmatchedLocal = array_filter($localProducts, function($p) use ($mappedLocalIds) {
        return !in_array($p['id'], $mappedLocalIds);
    });
    
    $unmatchedTrendyol = array_filter($trendyolProducts, function($p) use ($mappedBarcodes) {
        return !in_array($p['barcode'], $mappedBarcodes);
    });
    
    respondSuccess([
        'unmatched_local' => array_values($unmatchedLocal),
        'unmatched_trendyol' => array_values($unmatchedTrendyol)
    ]);
}

function handleSyncTrendyolProducts() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $allProducts = [];
    $page = 0;
    $size = 100;
    
    do {
        $result = $api->getProducts($page, $size);
        if (!$result['success']) {
            respondError('Ürünler alınamadı: ' . $result['error']);
        }
        
        $content = $result['data']['content'] ?? [];
        $allProducts = array_merge($allProducts, $content);
        $totalPages = $result['data']['totalPages'] ?? 0;
        $page++;
    } while ($page < $totalPages && $page < 20);
    
    writeJsonFile(TRENDYOL_PRODUCTS_FILE, $allProducts);
    
    logAdminAction('trendyol_products_synced', ['count' => count($allProducts)]);
    
    respondSuccess([
        'message' => count($allProducts) . ' ürün senkronize edildi',
        'count' => count($allProducts)
    ]);
}

function handleMatchProduct() {
    $input = json_decode(file_get_contents('php://input'), true);
    $localProductId = $input['local_product_id'] ?? '';
    $trendyolBarcode = $input['trendyol_barcode'] ?? '';
    
    if (!$localProductId || !$trendyolBarcode) {
        respondError('Ürün ID ve barkod gerekli');
    }
    
    $mappings = readJsonFile(PRODUCT_MAPPING_FILE);
    
    // Check if already mapped
    foreach ($mappings as $m) {
        if ($m['local_product_id'] === $localProductId || $m['trendyol_barcode'] === $trendyolBarcode) {
            respondError('Bu ürün zaten eşleştirilmiş');
        }
    }
    
    $newMapping = [
        'id' => generateId(),
        'local_product_id' => $localProductId,
        'trendyol_barcode' => $trendyolBarcode,
        'created_at' => date('c')
    ];
    
    $mappings[] = $newMapping;
    writeJsonFile(PRODUCT_MAPPING_FILE, $mappings);
    
    logAdminAction('product_matched', ['local_id' => $localProductId, 'barcode' => $trendyolBarcode]);
    
    respondSuccess(['message' => 'Ürün eşleştirildi', 'mapping' => $newMapping]);
}

function handleAutoMatch() {
    $localProducts = readJsonFile(PRODUCTS_FILE);
    $trendyolProducts = readJsonFile(TRENDYOL_PRODUCTS_FILE);
    $mappings = readJsonFile(PRODUCT_MAPPING_FILE);
    
    $mappedLocalIds = array_column($mappings, 'local_product_id');
    $mappedBarcodes = array_column($mappings, 'trendyol_barcode');
    
    // Create lookup by barcode for Trendyol products
    $trendyolByBarcode = [];
    foreach ($trendyolProducts as $tp) {
        $trendyolByBarcode[$tp['barcode']] = $tp;
    }
    
    $matched = 0;
    $newMappings = [];
    
    foreach ($localProducts as $localProduct) {
        if (in_array($localProduct['id'], $mappedLocalIds)) {
            continue;
        }
        
        $localBarcode = $localProduct['barcode'] ?? null;
        
        if ($localBarcode && isset($trendyolByBarcode[$localBarcode])) {
            if (in_array($localBarcode, $mappedBarcodes)) {
                continue;
            }
            
            $newMapping = [
                'id' => generateId(),
                'local_product_id' => $localProduct['id'],
                'trendyol_barcode' => $localBarcode,
                'created_at' => date('c')
            ];
            
            $mappings[] = $newMapping;
            $newMappings[] = $newMapping;
            $mappedLocalIds[] = $localProduct['id'];
            $mappedBarcodes[] = $localBarcode;
            $matched++;
        }
    }
    
    if ($matched > 0) {
        writeJsonFile(PRODUCT_MAPPING_FILE, $mappings);
        logAdminAction('products_auto_matched', ['count' => $matched]);
    }
    
    respondSuccess([
        'message' => "$matched ürün otomatik eşleştirildi",
        'matched' => $matched,
        'mappings' => $newMappings
    ]);
}

function handleUnmatchProduct() {
    $mappingId = $_GET['id'] ?? '';
    
    if (!$mappingId) {
        respondError('Mapping ID gerekli');
    }
    
    $mappings = readJsonFile(PRODUCT_MAPPING_FILE);
    $filtered = array_filter($mappings, fn($m) => $m['id'] !== $mappingId);
    
    if (count($filtered) === count($mappings)) {
        respondError('Eşleştirme bulunamadı', 404);
    }
    
    writeJsonFile(PRODUCT_MAPPING_FILE, array_values($filtered));
    logAdminAction('product_unmatched', ['mapping_id' => $mappingId]);
    
    respondSuccess(['message' => 'Eşleştirme kaldırıldı']);
}

function handleBulkUpdateStock() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $items = $input['items'] ?? [];
    
    if (empty($items)) {
        respondError('Güncellenecek ürün bulunamadı');
    }
    
    // Validate items
    $formattedItems = [];
    foreach ($items as $item) {
        if (empty($item['barcode'])) {
            continue;
        }
        
        $formattedItems[] = [
            'barcode' => trim($item['barcode']),
            'quantity' => (int)($item['quantity'] ?? 0),
            'salePrice' => (float)($item['salePrice'] ?? $item['sale_price'] ?? 0),
            'listPrice' => (float)($item['listPrice'] ?? $item['list_price'] ?? $item['salePrice'] ?? 0)
        ];
    }
    
    if (empty($formattedItems)) {
        respondError('Geçerli ürün bulunamadı');
    }
    
    // Split into batches of 100 (Trendyol API limit)
    $batches = array_chunk($formattedItems, 100);
    $results = [];
    $totalSuccess = 0;
    
    foreach ($batches as $index => $batch) {
        $result = $api->updatePriceAndInventory($batch);
        $results[] = [
            'batch' => $index + 1,
            'count' => count($batch),
            'success' => $result['success'],
            'batchId' => $result['data']['batchRequestId'] ?? null,
            'error' => $result['error'] ?? null
        ];
        
        if ($result['success']) {
            $totalSuccess += count($batch);
        }
    }
    
    logAdminAction('bulk_stock_update', [
        'total_items' => count($formattedItems),
        'success_count' => $totalSuccess,
        'batch_count' => count($batches)
    ]);
    
    respondSuccess([
        'message' => "$totalSuccess ürün güncelleme isteği gönderildi",
        'total' => count($formattedItems),
        'success' => $totalSuccess,
        'batches' => $results
    ]);
}

function handleImportCSV() {
    $input = json_decode(file_get_contents('php://input'), true);
    $data = $input['data'] ?? [];
    $updateTrendyol = $input['update_trendyol'] ?? false;
    
    if (empty($data)) {
        respondError('CSV verisi bulunamadı');
    }
    
    // Validate and process CSV data
    $validItems = [];
    $errors = [];
    
    foreach ($data as $index => $row) {
        $barcode = trim($row['barcode'] ?? $row['Barkod'] ?? $row['BARKOD'] ?? '');
        $quantity = $row['quantity'] ?? $row['stock'] ?? $row['Stok'] ?? $row['STOK'] ?? $row['miktar'] ?? $row['Miktar'] ?? null;
        $salePrice = $row['sale_price'] ?? $row['salePrice'] ?? $row['price'] ?? $row['Fiyat'] ?? $row['FİYAT'] ?? $row['satis_fiyati'] ?? null;
        $listPrice = $row['list_price'] ?? $row['listPrice'] ?? $row['Liste Fiyatı'] ?? $salePrice;
        
        if (empty($barcode)) {
            $errors[] = "Satır " . ($index + 2) . ": Barkod eksik";
            continue;
        }
        
        if ($quantity === null && $salePrice === null) {
            $errors[] = "Satır " . ($index + 2) . ": Stok veya fiyat bilgisi eksik";
            continue;
        }
        
        $validItems[] = [
            'barcode' => $barcode,
            'quantity' => $quantity !== null ? (int)$quantity : null,
            'salePrice' => $salePrice !== null ? (float)$salePrice : null,
            'listPrice' => $listPrice !== null ? (float)$listPrice : null
        ];
    }
    
    if (empty($validItems)) {
        respondError('Geçerli veri bulunamadı. Hatalar: ' . implode(', ', array_slice($errors, 0, 5)));
    }
    
    $result = [
        'parsed' => count($validItems),
        'errors' => $errors,
        'items' => $validItems
    ];
    
    // If update_trendyol is true, also send to Trendyol
    if ($updateTrendyol) {
        $api = getTrendyolAPI();
        if ($api) {
            // Filter items with valid data
            $updateItems = array_filter($validItems, function($item) {
                return $item['quantity'] !== null || $item['salePrice'] !== null;
            });
            
            if (!empty($updateItems)) {
                // Fill in missing values
                $formattedItems = array_map(function($item) {
                    return [
                        'barcode' => $item['barcode'],
                        'quantity' => $item['quantity'] ?? 0,
                        'salePrice' => $item['salePrice'] ?? 0,
                        'listPrice' => $item['listPrice'] ?? $item['salePrice'] ?? 0
                    ];
                }, $updateItems);
                
                $apiResult = $api->updatePriceAndInventory($formattedItems);
                $result['trendyol_update'] = [
                    'success' => $apiResult['success'],
                    'batchId' => $apiResult['data']['batchRequestId'] ?? null,
                    'error' => $apiResult['error'] ?? null
                ];
                
                logAdminAction('csv_import_with_trendyol_update', [
                    'items' => count($formattedItems),
                    'success' => $apiResult['success']
                ]);
            }
        } else {
            $result['trendyol_update'] = [
                'success' => false,
                'error' => 'Trendyol API yapılandırılmamış'
            ];
        }
    }
    
    respondSuccess($result);
}
