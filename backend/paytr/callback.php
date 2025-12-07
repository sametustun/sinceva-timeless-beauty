<?php
/**
 * PayTR Callback Handler
 * Receives payment notification from PayTR and updates order status
 */

require_once __DIR__ . '/../admin/config.php';
require_once __DIR__ . '/PayTRConfig.php';

// PayTR sends POST callback
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die('PAYTR_ERROR: Invalid method');
}

// Get POST data
$merchant_oid = $_POST['merchant_oid'] ?? '';
$status = $_POST['status'] ?? '';
$total_amount = $_POST['total_amount'] ?? '';
$hash = $_POST['hash'] ?? '';
$failed_reason_code = $_POST['failed_reason_code'] ?? '';
$failed_reason_msg = $_POST['failed_reason_msg'] ?? '';
$test_mode = $_POST['test_mode'] ?? '';
$payment_type = $_POST['payment_type'] ?? '';
$currency = $_POST['currency'] ?? '';
$payment_amount = $_POST['payment_amount'] ?? '';

// Log callback
$logData = [
    'timestamp' => date('c'),
    'merchant_oid' => $merchant_oid,
    'status' => $status,
    'total_amount' => $total_amount,
    'failed_reason_code' => $failed_reason_code,
    'failed_reason_msg' => $failed_reason_msg,
    'test_mode' => $test_mode,
    'payment_type' => $payment_type
];
file_put_contents(LOG_DIR . '/paytr_callback.log', json_encode($logData) . "\n", FILE_APPEND);

// Verify hash
$paytr = new PayTRConfig();

if (!$paytr->verifyCallback($_POST)) {
    file_put_contents(LOG_DIR . '/paytr_callback.log', "HASH VERIFICATION FAILED for $merchant_oid\n", FILE_APPEND);
    die('PAYTR_ERROR: Invalid hash');
}

// Find and update order
$ordersFile = DATA_DIR . '/orders.json';
$orders = file_exists($ordersFile) ? json_decode(file_get_contents($ordersFile), true) : [];

$orderFound = false;
foreach ($orders as &$order) {
    if ($order['order_number'] === $merchant_oid) {
        $orderFound = true;
        
        if ($status === 'success') {
            $order['status'] = 'pending'; // Ready for processing
            $order['payment_status'] = 'paid';
            $order['paid_at'] = date('c');
            $order['payment_type'] = $payment_type;
            $order['payment_amount'] = $payment_amount / 100; // Convert from kuruş
            
            file_put_contents(LOG_DIR . '/paytr_callback.log', "PAYMENT SUCCESS for $merchant_oid\n", FILE_APPEND);
        } else {
            $order['status'] = 'payment_failed';
            $order['payment_status'] = 'failed';
            $order['payment_error'] = $failed_reason_msg;
            $order['payment_error_code'] = $failed_reason_code;
            
            file_put_contents(LOG_DIR . '/paytr_callback.log', "PAYMENT FAILED for $merchant_oid: $failed_reason_msg\n", FILE_APPEND);
        }
        
        $order['paytr_callback'] = $logData;
        $order['updated_at'] = date('c');
        break;
    }
}

if (!$orderFound) {
    file_put_contents(LOG_DIR . '/paytr_callback.log', "ORDER NOT FOUND: $merchant_oid\n", FILE_APPEND);
    die('PAYTR_ERROR: Order not found');
}

writeJsonFile($ordersFile, $orders);

// PayTR requires this exact response
echo 'OK';
