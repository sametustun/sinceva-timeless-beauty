<?php
/**
 * Orders API
 * Manages orders (manual and imported from Trendyol)
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

define('ORDERS_FILE', DATA_DIR . '/orders.json');

// Initialize file if not exists
if (!file_exists(ORDERS_FILE)) {
    writeJsonFile(ORDERS_FILE, []);
}

// Parse URL for order ID
$requestUri = $_SERVER['REQUEST_URI'];
$orderId = null;
$subResource = null;

if (preg_match('/\/orders\/([^\/]+)(?:\/(.+))?/', $requestUri, $matches)) {
    $orderId = $matches[1];
    $subResource = $matches[2] ?? null;
}

switch ($method) {
    case 'GET':
        if ($orderId) {
            handleGetOne($orderId);
        } else {
            handleGetAll();
        }
        break;
    case 'POST':
        handlePost();
        break;
    case 'PUT':
        if ($orderId) {
            handlePut($orderId);
        } else {
            respondError('Order ID gerekli');
        }
        break;
    case 'DELETE':
        if ($orderId) {
            handleDelete($orderId);
        } else {
            respondError('Order ID gerekli');
        }
        break;
    default:
        respondError('Method not allowed', 405);
}

function handleGetAll()
{
    $orders = readJsonFile(ORDERS_FILE);
    
    // Sort by created_at descending
    usort($orders, function($a, $b) {
        return strtotime($b['created_at'] ?? 0) - strtotime($a['created_at'] ?? 0);
    });
    
    // Apply filters
    $status = $_GET['status'] ?? null;
    $source = $_GET['source'] ?? null;
    $search = $_GET['search'] ?? null;
    
    if ($status) {
        $orders = array_filter($orders, fn($o) => $o['status'] === $status);
    }
    
    if ($source) {
        $orders = array_filter($orders, fn($o) => $o['source'] === $source);
    }
    
    if ($search) {
        $search = strtolower($search);
        $orders = array_filter($orders, fn($o) => 
            str_contains(strtolower($o['order_number'] ?? ''), $search) ||
            str_contains(strtolower($o['customer_name'] ?? ''), $search) ||
            str_contains(strtolower($o['customer_email'] ?? ''), $search)
        );
    }
    
    respondSuccess(['orders' => array_values($orders)]);
}

function handleGetOne($orderId)
{
    $orders = readJsonFile(ORDERS_FILE);
    
    foreach ($orders as $order) {
        if ($order['id'] === $orderId) {
            respondSuccess(['order' => $order]);
        }
    }
    
    respondError('Sipariş bulunamadı', 404);
}

function handlePost()
{
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Check if this is a Trendyol import request
    if (isset($input['action']) && $input['action'] === 'import_trendyol') {
        handleTrendyolImport();
        return;
    }
    
    // Validate required fields for manual order
    $required = ['customer_name', 'customer_phone', 'shipping_address', 'shipping_city'];
    foreach ($required as $field) {
        if (empty($input[$field])) {
            respondError("$field alanı gerekli");
        }
    }
    
    $orders = readJsonFile(ORDERS_FILE);
    
    // Generate order number
    $orderNumber = 'SE' . date('Ymd') . '-' . str_pad(count($orders) + 1, 4, '0', STR_PAD_LEFT);
    
    $newOrder = [
        'id' => generateId(),
        'order_number' => $orderNumber,
        'source' => 'manual',
        'status' => 'pending',
        'customer_name' => sanitizeInput($input['customer_name']),
        'customer_email' => sanitizeInput($input['customer_email'] ?? ''),
        'customer_phone' => sanitizeInput($input['customer_phone']),
        'shipping_address' => sanitizeInput($input['shipping_address']),
        'shipping_city' => sanitizeInput($input['shipping_city']),
        'shipping_district' => sanitizeInput($input['shipping_district'] ?? ''),
        'shipping_postal_code' => sanitizeInput($input['shipping_postal_code'] ?? ''),
        'items' => $input['items'] ?? [],
        'total_amount' => (float)($input['total_amount'] ?? 0),
        'payment_method' => $input['payment_method'] ?? 'prepaid',
        'notes' => sanitizeInput($input['notes'] ?? ''),
        'created_at' => date('c'),
        'updated_at' => date('c')
    ];
    
    $orders[] = $newOrder;
    writeJsonFile(ORDERS_FILE, $orders);
    
    logAdminAction('order_created', ['order_id' => $newOrder['id'], 'order_number' => $orderNumber]);
    
    respondSuccess(['order' => $newOrder, 'message' => 'Sipariş oluşturuldu']);
}

function handleTrendyolImport()
{
    // Read Trendyol settings
    $settingsFile = DATA_DIR . '/settings.json';
    $settings = file_exists($settingsFile) ? readJsonFile($settingsFile) : [];
    $trendyol = $settings['trendyol'] ?? [];
    
    if (empty($trendyol['api_key']) || empty($trendyol['api_secret']) || empty($trendyol['seller_id'])) {
        respondError('Trendyol API ayarları yapılandırılmamış');
    }
    
    $apiUrl = 'https://api.trendyol.com/sapigw';
    $authHeader = base64_encode($trendyol['api_key'] . ':' . $trendyol['api_secret']);
    
    // Get orders from Trendyol (last 7 days, status: Created, Picking, Invoiced)
    $startDate = strtotime('-7 days') * 1000; // Trendyol uses milliseconds
    $endDate = time() * 1000;
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $apiUrl . '/sapigw/suppliers/' . $trendyol['seller_id'] . '/orders?startDate=' . $startDate . '&endDate=' . $endDate . '&status=Created,Picking,Invoiced');
    curl_setopt($ch, CURLOPT_HTTPGET, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Basic ' . $authHeader,
        'Content-Type: application/json',
        'User-Agent: SincEva-Integration'
    ]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($error) {
        respondError('Trendyol API bağlantı hatası: ' . $error);
    }
    
    if ($httpCode < 200 || $httpCode >= 300) {
        $responseData = json_decode($response, true);
        respondError('Trendyol API hatası: ' . ($responseData['errors'][0]['message'] ?? 'HTTP ' . $httpCode));
    }
    
    $responseData = json_decode($response, true);
    $trendyolOrders = $responseData['content'] ?? [];
    
    if (empty($trendyolOrders)) {
        respondSuccess(['imported' => 0, 'message' => 'İmport edilecek yeni sipariş bulunamadı']);
    }
    
    $orders = readJsonFile(ORDERS_FILE);
    $existingMarketplaceNumbers = array_column($orders, 'marketplace_order_number');
    $imported = 0;
    
    foreach ($trendyolOrders as $tOrder) {
        $marketplaceOrderNumber = (string)$tOrder['orderNumber'];
        
        // Skip if already imported
        if (in_array($marketplaceOrderNumber, $existingMarketplaceNumbers)) {
            continue;
        }
        
        // Extract shipping address
        $shipmentAddress = $tOrder['shipmentAddress'] ?? [];
        
        // Extract items
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
            'order_number' => 'TY-' . $marketplaceOrderNumber,
            'marketplace_order_number' => $marketplaceOrderNumber,
            'trendyol_order_number' => $marketplaceOrderNumber,
            'source' => 'trendyol',
            'status' => 'pending',
            'customer_name' => ($shipmentAddress['firstName'] ?? '') . ' ' . ($shipmentAddress['lastName'] ?? ''),
            'customer_email' => $tOrder['customerEmail'] ?? '',
            'customer_phone' => $shipmentAddress['phone'] ?? '',
            'shipping_address' => ($shipmentAddress['address1'] ?? '') . ' ' . ($shipmentAddress['address2'] ?? ''),
            'shipping_city' => $shipmentAddress['city'] ?? '',
            'shipping_district' => $shipmentAddress['district'] ?? '',
            'shipping_postal_code' => $shipmentAddress['postalCode'] ?? '',
            'items' => $items,
            'total_amount' => (float)($tOrder['totalPrice'] ?? 0),
            'payment_method' => 'prepaid',
            'notes' => 'Trendyol Siparişi',
            'trendyol_data' => $tOrder,
            'created_at' => date('c'),
            'updated_at' => date('c')
        ];
        
        $orders[] = $newOrder;
        $imported++;
    }
    
    if ($imported > 0) {
        writeJsonFile(ORDERS_FILE, $orders);
        logAdminAction('trendyol_orders_imported', ['count' => $imported]);
    }
    
    respondSuccess(['imported' => $imported, 'message' => $imported . ' sipariş import edildi']);
}

function handlePut($orderId)
{
    $input = json_decode(file_get_contents('php://input'), true);
    $orders = readJsonFile(ORDERS_FILE);
    $found = false;
    
    foreach ($orders as &$order) {
        if ($order['id'] === $orderId) {
            // Update allowed fields
            $allowedFields = ['status', 'customer_name', 'customer_email', 'customer_phone', 
                'shipping_address', 'shipping_city', 'shipping_district', 'shipping_postal_code',
                'items', 'total_amount', 'payment_method', 'notes'];
            
            foreach ($allowedFields as $field) {
                if (isset($input[$field])) {
                    $order[$field] = is_string($input[$field]) ? sanitizeInput($input[$field]) : $input[$field];
                }
            }
            
            $order['updated_at'] = date('c');
            $found = true;
            break;
        }
    }
    
    if (!$found) {
        respondError('Sipariş bulunamadı', 404);
    }
    
    writeJsonFile(ORDERS_FILE, $orders);
    logAdminAction('order_updated', ['order_id' => $orderId]);
    
    respondSuccess(['message' => 'Sipariş güncellendi']);
}

function handleDelete($orderId)
{
    $orders = readJsonFile(ORDERS_FILE);
    $filtered = array_filter($orders, fn($o) => $o['id'] !== $orderId);
    
    if (count($filtered) === count($orders)) {
        respondError('Sipariş bulunamadı', 404);
    }
    
    writeJsonFile(ORDERS_FILE, array_values($filtered));
    logAdminAction('order_deleted', ['order_id' => $orderId]);
    
    respondSuccess(['message' => 'Sipariş silindi']);
}
