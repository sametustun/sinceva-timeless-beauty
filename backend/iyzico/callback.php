<?php
/**
 * iyzico Callback Handler
 * Receives payment result from iyzico and updates order status
 */

require_once __DIR__ . '/../admin/config.php';
require_once __DIR__ . '/IyzicoConfig.php';

// Log all incoming data
$logData = [
    'timestamp' => date('c'),
    'method' => $_SERVER['REQUEST_METHOD'],
    'get' => $_GET,
    'post' => $_POST,
];
file_put_contents(LOG_DIR . '/iyzico_callback.log', json_encode($logData) . "\n", FILE_APPEND);

$orderId = $_GET['order'] ?? '';
$token = $_POST['token'] ?? '';

if (empty($orderId)) {
    header('Location: /checkout/fail?error=missing_order');
    exit;
}

// Find order
$ordersFile = DATA_DIR . '/orders.json';
$orders = file_exists($ordersFile) ? json_decode(file_get_contents($ordersFile), true) : [];

$orderIndex = null;
$order = null;
foreach ($orders as $idx => $o) {
    if ($o['order_number'] === $orderId) {
        $orderIndex = $idx;
        $order = $o;
        break;
    }
}

if ($order === null) {
    file_put_contents(LOG_DIR . '/iyzico_callback.log', "ORDER NOT FOUND: $orderId\n", FILE_APPEND);
    header('Location: /checkout/fail?error=order_not_found');
    exit;
}

// Use stored token if POST token is empty
if (empty($token)) {
    $token = $order['iyzico_token'] ?? '';
}

if (empty($token)) {
    file_put_contents(LOG_DIR . '/iyzico_callback.log', "TOKEN NOT FOUND for: $orderId\n", FILE_APPEND);
    header('Location: /checkout/fail?order=' . $orderId . '&error=missing_token');
    exit;
}

// Verify payment
$iyzico = new IyzicoConfig();
$result = $iyzico->retrieveCheckoutForm($token);

file_put_contents(LOG_DIR . '/iyzico_callback.log', "Retrieve result for $orderId: " . json_encode($result) . "\n", FILE_APPEND);

if ($result['success']) {
    $orders[$orderIndex]['status'] = 'pending'; // Ready for processing
    $orders[$orderIndex]['payment_status'] = 'paid';
    $orders[$orderIndex]['paid_at'] = date('c');
    $orders[$orderIndex]['payment_id'] = $result['paymentId'];
    $orders[$orderIndex]['payment_amount'] = $result['paidPrice'];
    $orders[$orderIndex]['installment'] = $result['installment'];
    $orders[$orderIndex]['iyzico_result'] = $result;
    $orders[$orderIndex]['updated_at'] = date('c');
    
    writeJsonFile($ordersFile, $orders);
    
    file_put_contents(LOG_DIR . '/iyzico_callback.log', "PAYMENT SUCCESS for $orderId\n", FILE_APPEND);
    header('Location: /checkout/success?order=' . $orderId);
    exit;
} else {
    $orders[$orderIndex]['status'] = 'payment_failed';
    $orders[$orderIndex]['payment_status'] = 'failed';
    $orders[$orderIndex]['payment_error'] = $result['error'];
    $orders[$orderIndex]['updated_at'] = date('c');
    
    writeJsonFile($ordersFile, $orders);
    
    file_put_contents(LOG_DIR . '/iyzico_callback.log', "PAYMENT FAILED for $orderId: " . $result['error'] . "\n", FILE_APPEND);
    header('Location: /checkout/fail?order=' . $orderId . '&error=' . urlencode($result['error']));
    exit;
}
