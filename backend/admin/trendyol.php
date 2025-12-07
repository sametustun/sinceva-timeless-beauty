<?php
/**
 * Trendyol Integration API
 * Handles product sync, orders, stock updates, questions
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/trendyol/TrendyolAPI.php';

setCorsHeaders();
handlePreflight();
requireAuth();

define('PRODUCTS_FILE', DATA_DIR . '/products.json');
define('TRENDYOL_SYNC_FILE', DATA_DIR . '/trendyol_sync.json');

// Initialize sync file
if (!file_exists(TRENDYOL_SYNC_FILE)) {
    writeJsonFile(TRENDYOL_SYNC_FILE, [
        'last_product_sync' => null,
        'last_order_sync' => null,
        'synced_products' => [],
        'sync_errors' => []
    ]);
}

// Get Trendyol settings
function getTrendyolSettings(): ?array {
    $settingsFile = DATA_DIR . '/settings.json';
    $settings = file_exists($settingsFile) ? readJsonFile($settingsFile) : [];
    $trendyol = $settings['trendyol'] ?? [];
    
    if (empty($trendyol['apiKey']) || empty($trendyol['apiSecret']) || empty($trendyol['sellerId'])) {
        return null;
    }
    
    return $trendyol;
}

// Get API instance
function getTrendyolAPI(): ?TrendyolAPI {
    $settings = getTrendyolSettings();
    if (!$settings) {
        return null;
    }
    return new TrendyolAPI($settings['apiKey'], $settings['apiSecret'], $settings['sellerId']);
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

// Route requests
switch ($method) {
    case 'GET':
        switch ($action) {
            case 'test-connection':
                handleTestConnection();
                break;
            case 'products':
                handleGetProducts();
                break;
            case 'orders':
                handleGetOrders();
                break;
            case 'questions':
                handleGetQuestions();
                break;
            case 'sync-status':
                handleGetSyncStatus();
                break;
            case 'categories':
                handleGetCategories();
                break;
            case 'brands':
                handleGetBrands();
                break;
            case 'analytics':
                handleGetAnalytics();
                break;
            case 'invoiceable-orders':
                handleGetInvoiceableOrders();
                break;
            default:
                respondError('Unknown action', 400);
        }
        break;
        
    case 'POST':
        switch ($action) {
            case 'sync-products':
                handleSyncProducts();
                break;
            case 'import-orders':
                handleImportOrders();
                break;
            case 'update-stock':
                handleUpdateStock();
                break;
            case 'send-invoice':
                handleSendInvoice();
                break;
            case 'answer-question':
                handleAnswerQuestion();
                break;
            case 'upload-product':
                handleUploadProduct();
                break;
            case 'send-einvoice':
                handleSendEInvoice();
                break;
            case 'bulk-einvoice':
                handleBulkEInvoice();
                break;
            default:
                respondError('Unknown action', 400);
        }
        break;
        
    default:
        respondError('Method not allowed', 405);
}

// ========== HANDLERS ==========

function handleTestConnection() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $result = $api->testConnection();
    if ($result['success']) {
        respondSuccess(['message' => 'Bağlantı başarılı']);
    } else {
        respondError($result['message']);
    }
}

function handleGetProducts() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $page = (int)($_GET['page'] ?? 0);
    $size = (int)($_GET['size'] ?? 50);
    
    $result = $api->getProducts($page, $size);
    
    if ($result['success']) {
        $content = $result['data']['content'] ?? [];
        $totalElements = $result['data']['totalElements'] ?? 0;
        $totalPages = $result['data']['totalPages'] ?? 0;
        
        respondSuccess([
            'products' => $content,
            'pagination' => [
                'page' => $page,
                'size' => $size,
                'totalElements' => $totalElements,
                'totalPages' => $totalPages
            ]
        ]);
    } else {
        respondError($result['error']);
    }
}

function handleGetOrders() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $status = $_GET['status'] ?? '';
    $days = (int)($_GET['days'] ?? 7);
    
    $params = [
        'page' => (int)($_GET['page'] ?? 0),
        'size' => (int)($_GET['size'] ?? 50)
    ];
    
    if ($status) {
        $params['status'] = $status;
    }
    
    // Date filter
    $params['startDate'] = (time() - ($days * 24 * 60 * 60)) * 1000;
    $params['endDate'] = time() * 1000;
    
    $result = $api->getOrders($params);
    
    if ($result['success']) {
        $content = $result['data']['content'] ?? [];
        respondSuccess([
            'orders' => $content,
            'pagination' => [
                'page' => $result['data']['page'] ?? 0,
                'size' => $result['data']['size'] ?? 50,
                'totalElements' => $result['data']['totalElements'] ?? 0,
                'totalPages' => $result['data']['totalPages'] ?? 0
            ]
        ]);
    } else {
        respondError($result['error']);
    }
}

function handleGetQuestions() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $status = $_GET['status'] ?? 'WAITING_FOR_ANSWER';
    
    $result = $api->getQuestions(['status' => $status]);
    
    if ($result['success']) {
        respondSuccess([
            'questions' => $result['data']['content'] ?? [],
            'pagination' => [
                'page' => $result['data']['page'] ?? 0,
                'totalElements' => $result['data']['totalElements'] ?? 0
            ]
        ]);
    } else {
        respondError($result['error']);
    }
}

function handleGetSyncStatus() {
    $syncData = readJsonFile(TRENDYOL_SYNC_FILE);
    $settings = getTrendyolSettings();
    
    respondSuccess([
        'configured' => $settings !== null,
        'lastProductSync' => $syncData['last_product_sync'] ?? null,
        'lastOrderSync' => $syncData['last_order_sync'] ?? null,
        'syncedProductCount' => count($syncData['synced_products'] ?? []),
        'recentErrors' => array_slice($syncData['sync_errors'] ?? [], -10)
    ]);
}

function handleGetCategories() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $result = $api->getCategories();
    
    if ($result['success']) {
        respondSuccess(['categories' => $result['data']['categories'] ?? []]);
    } else {
        respondError($result['error']);
    }
}

function handleGetBrands() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $search = $_GET['search'] ?? '';
    
    if ($search) {
        $result = $api->searchBrands($search);
    } else {
        $result = $api->getBrands();
    }
    
    if ($result['success']) {
        respondSuccess(['brands' => $result['data'] ?? []]);
    } else {
        respondError($result['error']);
    }
}

function handleSyncProducts() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $direction = $input['direction'] ?? 'download'; // download = from Trendyol, upload = to Trendyol
    
    $syncData = readJsonFile(TRENDYOL_SYNC_FILE);
    
    if ($direction === 'download') {
        // Download products from Trendyol to local
        $allProducts = [];
        $page = 0;
        $size = 100;
        
        do {
            $result = $api->getProducts($page, $size);
            if (!$result['success']) {
                $syncData['sync_errors'][] = [
                    'time' => date('c'),
                    'type' => 'product_download',
                    'error' => $result['error']
                ];
                writeJsonFile(TRENDYOL_SYNC_FILE, $syncData);
                respondError('Ürün listesi alınamadı: ' . $result['error']);
            }
            
            $content = $result['data']['content'] ?? [];
            $allProducts = array_merge($allProducts, $content);
            $totalPages = $result['data']['totalPages'] ?? 0;
            $page++;
        } while ($page < $totalPages && $page < 10); // Max 10 pages for safety
        
        // Update sync data
        $syncData['last_product_sync'] = date('c');
        $syncData['synced_products'] = array_column($allProducts, 'barcode');
        writeJsonFile(TRENDYOL_SYNC_FILE, $syncData);
        
        logAdminAction('trendyol_products_synced', ['count' => count($allProducts), 'direction' => 'download']);
        
        respondSuccess([
            'message' => count($allProducts) . ' ürün Trendyol\'dan alındı',
            'products' => $allProducts,
            'count' => count($allProducts)
        ]);
    } else {
        // Upload local products to Trendyol - requires more complex mapping
        respondError('Ürün yükleme özelliği henüz aktif değil');
    }
}

function handleImportOrders() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $days = (int)($input['days'] ?? 7);
    $statuses = $input['statuses'] ?? ['Created', 'Picking', 'Invoiced'];
    
    $ordersFile = DATA_DIR . '/orders.json';
    $orders = file_exists($ordersFile) ? readJsonFile($ordersFile) : [];
    $existingNumbers = array_column($orders, 'marketplace_order_number');
    
    $imported = 0;
    $errors = [];
    
    foreach ($statuses as $status) {
        $result = $api->getOrdersByStatus($status, $days);
        
        if (!$result['success']) {
            $errors[] = "Status $status: " . $result['error'];
            continue;
        }
        
        $trendyolOrders = $result['data']['content'] ?? [];
        
        foreach ($trendyolOrders as $tOrder) {
            $marketplaceNumber = (string)$tOrder['orderNumber'];
            
            if (in_array($marketplaceNumber, $existingNumbers)) {
                continue;
            }
            
            $shipmentAddress = $tOrder['shipmentAddress'] ?? [];
            $items = [];
            
            foreach ($tOrder['lines'] ?? [] as $line) {
                $items[] = [
                    'product_id' => $line['productCode'] ?? '',
                    'barcode' => $line['barcode'] ?? '',
                    'name' => $line['productName'] ?? '',
                    'quantity' => $line['quantity'] ?? 1,
                    'price' => $line['price'] ?? 0
                ];
            }
            
            $newOrder = [
                'id' => generateId(),
                'order_number' => 'TY-' . $marketplaceNumber,
                'marketplace_order_number' => $marketplaceNumber,
                'trendyol_order_number' => $marketplaceNumber,
                'trendyol_package_id' => $tOrder['id'] ?? null,
                'source' => 'trendyol',
                'status' => 'pending',
                'trendyol_status' => $tOrder['status'] ?? '',
                'customer_name' => trim(($shipmentAddress['firstName'] ?? '') . ' ' . ($shipmentAddress['lastName'] ?? '')),
                'customer_email' => $tOrder['customerEmail'] ?? '',
                'customer_phone' => $shipmentAddress['phone'] ?? '',
                'shipping_address' => trim(($shipmentAddress['address1'] ?? '') . ' ' . ($shipmentAddress['address2'] ?? '')),
                'shipping_city' => $shipmentAddress['city'] ?? '',
                'shipping_district' => $shipmentAddress['district'] ?? '',
                'shipping_postal_code' => $shipmentAddress['postalCode'] ?? '',
                'cargo_provider' => $tOrder['cargoProviderName'] ?? '',
                'cargo_tracking' => $tOrder['cargoTrackingNumber'] ?? '',
                'items' => $items,
                'total_amount' => (float)($tOrder['totalPrice'] ?? 0),
                'payment_method' => 'prepaid',
                'notes' => 'Trendyol Siparişi - ' . ($tOrder['status'] ?? ''),
                'trendyol_data' => $tOrder,
                'created_at' => date('c'),
                'updated_at' => date('c')
            ];
            
            $orders[] = $newOrder;
            $existingNumbers[] = $marketplaceNumber;
            $imported++;
        }
    }
    
    if ($imported > 0) {
        writeJsonFile($ordersFile, $orders);
        
        // Update sync data
        $syncData = readJsonFile(TRENDYOL_SYNC_FILE);
        $syncData['last_order_sync'] = date('c');
        writeJsonFile(TRENDYOL_SYNC_FILE, $syncData);
        
        logAdminAction('trendyol_orders_imported', ['count' => $imported]);
    }
    
    respondSuccess([
        'imported' => $imported,
        'errors' => $errors,
        'message' => $imported > 0 ? "$imported yeni sipariş import edildi" : 'İmport edilecek yeni sipariş bulunamadı'
    ]);
}

function handleUpdateStock() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $items = $input['items'] ?? [];
    
    if (empty($items)) {
        respondError('Güncellenecek ürün bulunamadı');
    }
    
    // Format items for Trendyol API
    $formattedItems = array_map(function($item) {
        return [
            'barcode' => $item['barcode'],
            'quantity' => (int)$item['quantity'],
            'salePrice' => (float)$item['salePrice'],
            'listPrice' => (float)($item['listPrice'] ?? $item['salePrice'])
        ];
    }, $items);
    
    $result = $api->updatePriceAndInventory($formattedItems);
    
    if ($result['success']) {
        logAdminAction('trendyol_stock_updated', ['count' => count($items)]);
        respondSuccess([
            'message' => count($items) . ' ürünün stok/fiyat bilgisi güncellendi',
            'batchId' => $result['data']['batchRequestId'] ?? null
        ]);
    } else {
        respondError('Güncelleme başarısız: ' . $result['error']);
    }
}

function handleSendInvoice() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $packageId = (int)($input['packageId'] ?? 0);
    $invoiceLink = $input['invoiceLink'] ?? '';
    
    if (!$packageId || !$invoiceLink) {
        respondError('Paket ID ve fatura linki gerekli');
    }
    
    $result = $api->sendInvoiceLink($packageId, $invoiceLink);
    
    if ($result['success']) {
        logAdminAction('trendyol_invoice_sent', ['packageId' => $packageId]);
        respondSuccess(['message' => 'Fatura linki gönderildi']);
    } else {
        respondError('Fatura gönderilemedi: ' . $result['error']);
    }
}

function handleAnswerQuestion() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $questionId = (int)($input['questionId'] ?? 0);
    $answer = trim($input['answer'] ?? '');
    
    if (!$questionId || !$answer) {
        respondError('Soru ID ve cevap gerekli');
    }
    
    $result = $api->answerQuestion($questionId, $answer);
    
    if ($result['success']) {
        logAdminAction('trendyol_question_answered', ['questionId' => $questionId]);
        respondSuccess(['message' => 'Cevap gönderildi']);
    } else {
        respondError('Cevap gönderilemedi: ' . $result['error']);
    }
}

function handleUploadProduct() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $product = $input['product'] ?? null;
    
    if (!$product) {
        respondError('Ürün verisi gerekli');
    }
    
    // Validate required fields
    $required = ['barcode', 'title', 'productMainId', 'brandId', 'categoryId', 'quantity', 'listPrice', 'salePrice', 'currencyType', 'images'];
    foreach ($required as $field) {
        if (empty($product[$field])) {
            respondError("$field alanı gerekli");
        }
    }
    
    $result = $api->createProducts([$product]);
    
    if ($result['success']) {
        logAdminAction('trendyol_product_uploaded', ['barcode' => $product['barcode']]);
        respondSuccess([
            'message' => 'Ürün yükleme isteği gönderildi',
            'batchId' => $result['data']['batchRequestId'] ?? null
        ]);
    } else {
        respondError('Ürün yüklenemedi: ' . $result['error']);
    }
}

// ========== ANALYTICS HANDLERS ==========

function handleGetAnalytics() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $days = (int)($_GET['days'] ?? 30);
    
    $result = $api->getOrderAnalytics($days);
    
    if ($result['success']) {
        respondSuccess($result['data']);
    } else {
        respondError($result['error']);
    }
}

function handleGetInvoiceableOrders() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $days = (int)($_GET['days'] ?? 7);
    
    $result = $api->getInvoiceableOrders($days);
    
    if ($result['success']) {
        respondSuccess($result['data']);
    } else {
        respondError($result['error']);
    }
}

// ========== E-INVOICE HANDLERS ==========

function handleSendEInvoice() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $packageId = (int)($input['packageId'] ?? 0);
    $invoiceNumber = trim($input['invoiceNumber'] ?? '');
    $invoiceDate = $input['invoiceDate'] ?? null;
    $invoiceLink = trim($input['invoiceLink'] ?? '');
    
    if (!$packageId || !$invoiceNumber) {
        respondError('Paket ID ve fatura numarası gerekli');
    }
    
    $invoiceData = [
        'invoiceNumber' => $invoiceNumber,
        'invoiceDate' => $invoiceDate ? strtotime($invoiceDate) * 1000 : time() * 1000,
        'invoiceLink' => $invoiceLink
    ];
    
    $result = $api->sendEInvoice($packageId, $invoiceData);
    
    if ($result['success']) {
        logAdminAction('trendyol_einvoice_sent', ['packageId' => $packageId, 'invoiceNumber' => $invoiceNumber]);
        
        // Update local order if exists
        $ordersFile = DATA_DIR . '/orders.json';
        if (file_exists($ordersFile)) {
            $orders = readJsonFile($ordersFile);
            foreach ($orders as &$order) {
                if (($order['trendyol_package_id'] ?? null) == $packageId) {
                    $order['invoice_number'] = $invoiceNumber;
                    $order['invoice_date'] = date('Y-m-d', $invoiceData['invoiceDate'] / 1000);
                    $order['invoice_link'] = $invoiceLink;
                    $order['updated_at'] = date('c');
                    break;
                }
            }
            writeJsonFile($ordersFile, $orders);
        }
        
        respondSuccess(['message' => 'E-Fatura bilgisi gönderildi']);
    } else {
        respondError('E-Fatura gönderilemedi: ' . $result['error']);
    }
}

function handleBulkEInvoice() {
    $api = getTrendyolAPI();
    if (!$api) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $input = json_decode(file_get_contents('php://input'), true);
    $invoices = $input['invoices'] ?? [];
    
    if (empty($invoices)) {
        respondError('Fatura listesi boş');
    }
    
    $success = 0;
    $failed = 0;
    $errors = [];
    
    foreach ($invoices as $invoice) {
        $packageId = (int)($invoice['packageId'] ?? 0);
        $invoiceNumber = trim($invoice['invoiceNumber'] ?? '');
        
        if (!$packageId || !$invoiceNumber) {
            $failed++;
            $errors[] = "Eksik veri: packageId=$packageId";
            continue;
        }
        
        $invoiceData = [
            'invoiceNumber' => $invoiceNumber,
            'invoiceDate' => isset($invoice['invoiceDate']) ? strtotime($invoice['invoiceDate']) * 1000 : time() * 1000,
            'invoiceLink' => trim($invoice['invoiceLink'] ?? '')
        ];
        
        $result = $api->sendEInvoice($packageId, $invoiceData);
        
        if ($result['success']) {
            $success++;
        } else {
            $failed++;
            $errors[] = "Package $packageId: " . ($result['error'] ?? 'Unknown error');
        }
    }
    
    logAdminAction('trendyol_bulk_einvoice', ['success' => $success, 'failed' => $failed]);
    
    respondSuccess([
        'message' => "$success fatura gönderildi, $failed başarısız",
        'success' => $success,
        'failed' => $failed,
        'errors' => $errors
    ]);
}
