<?php
/**
 * iyzico Payment Initiation
 * Creates pending order and returns checkout form
 */

require_once __DIR__ . '/../admin/config.php';
require_once __DIR__ . '/IyzicoConfig.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('Method not allowed', 405);
}

$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['customer_name', 'customer_email', 'customer_phone', 'customer_address', 'customer_city', 'items'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        respondError("$field alanı gerekli");
    }
}

if (empty($input['items']) || !is_array($input['items'])) {
    respondError('Sepet boş olamaz');
}

// Calculate total
$totalAmount = 0;
$basket = [];
foreach ($input['items'] as $item) {
    $itemTotal = (float)$item['price'] * (int)$item['quantity'];
    $totalAmount += $itemTotal;
    $basket[] = [
        $item['name'],
        number_format($item['price'], 2, '.', ''),
        $item['quantity']
    ];
}

// Generate unique order ID
$orderId = 'SI' . date('YmdHis') . rand(1000, 9999);

// Create pending order
$ordersFile = DATA_DIR . '/orders.json';
$orders = file_exists($ordersFile) ? json_decode(file_get_contents($ordersFile), true) : [];

$newOrder = [
    'id' => generateId(),
    'order_number' => $orderId,
    'source' => 'website_iyzico',
    'status' => 'pending_payment',
    'payment_status' => 'pending',
    'customer_name' => sanitizeInput($input['customer_name']),
    'customer_email' => sanitizeInput($input['customer_email']),
    'customer_phone' => sanitizeInput($input['customer_phone']),
    'shipping_address' => sanitizeInput($input['customer_address']),
    'shipping_city' => sanitizeInput($input['customer_city']),
    'shipping_district' => sanitizeInput($input['customer_district'] ?? ''),
    'shipping_postal_code' => sanitizeInput($input['customer_postal_code'] ?? ''),
    'items' => $input['items'],
    'total_amount' => $totalAmount,
    'payment_method' => 'iyzico',
    'notes' => sanitizeInput($input['notes'] ?? ''),
    'created_at' => date('c'),
    'updated_at' => date('c')
];

$orders[] = $newOrder;
writeJsonFile($ordersFile, $orders);

// Get iyzico checkout form
$iyzico = new IyzicoConfig();

$baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . ($_SERVER['HTTP_HOST'] ?? 'sinceva.com');

$result = $iyzico->initializeCheckoutForm([
    'order_id' => $orderId,
    'email' => $input['customer_email'],
    'amount' => $totalAmount,
    'basket' => $basket,
    'user_name' => $input['customer_name'],
    'user_address' => $input['customer_address'],
    'user_city' => $input['customer_city'],
    'user_phone' => $input['customer_phone'],
    'callback_url' => $baseUrl . '/api/iyzico/callback.php?order=' . $orderId,
]);

if (!$result['success']) {
    // Mark order as failed
    foreach ($orders as &$order) {
        if ($order['order_number'] === $orderId) {
            $order['status'] = 'payment_failed';
            $order['payment_status'] = 'failed';
            $order['payment_error'] = $result['error'];
            break;
        }
    }
    writeJsonFile($ordersFile, $orders);
    
    respondError($result['error']);
}

// Store token for callback verification
foreach ($orders as &$order) {
    if ($order['order_number'] === $orderId) {
        $order['iyzico_token'] = $result['token'];
        break;
    }
}
writeJsonFile($ordersFile, $orders);

respondSuccess([
    'order_id' => $orderId,
    'order_internal_id' => $newOrder['id'],
    'token' => $result['token'],
    'checkoutFormContent' => $result['checkoutFormContent'],
    'total_amount' => $totalAmount
]);
