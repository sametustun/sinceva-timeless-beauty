<?php
/**
 * PayTR Status Check
 * Check payment status for an order
 */

require_once __DIR__ . '/../admin/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respondError('Method not allowed', 405);
}

$orderId = $_GET['order_id'] ?? '';

if (empty($orderId)) {
    respondError('order_id gerekli');
}

$ordersFile = DATA_DIR . '/orders.json';
$orders = file_exists($ordersFile) ? json_decode(file_get_contents($ordersFile), true) : [];

foreach ($orders as $order) {
    if ($order['order_number'] === $orderId || $order['id'] === $orderId) {
        respondSuccess([
            'order_number' => $order['order_number'],
            'status' => $order['status'],
            'payment_status' => $order['payment_status'] ?? 'unknown',
            'total_amount' => $order['total_amount'],
            'paid_at' => $order['paid_at'] ?? null
        ]);
    }
}

respondError('Sipariş bulunamadı', 404);
