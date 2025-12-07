<?php
/**
 * Trendyol Order Status Cron Job
 * Automatically syncs order statuses from Trendyol
 * Run via cron: */5 * * * * php /path/to/trendyol-cron.php
 * Or via URL with API key: https://sinceva.com/api/admin/trendyol-cron.php?key=YOUR_CRON_KEY
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/trendyol/TrendyolAPI.php';

// Allow CLI or API key authentication
$isCli = php_sapi_name() === 'cli';
$cronKey = $_GET['key'] ?? '';
$expectedKey = getenv('CRON_API_KEY') ?: 'sinceva_cron_2024';

if (!$isCli && $cronKey !== $expectedKey) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

define('ORDERS_FILE', DATA_DIR . '/orders.json');
define('TRENDYOL_SYNC_FILE', DATA_DIR . '/trendyol_sync.json');
define('CRON_LOG_FILE', DATA_DIR . '/trendyol_cron.log');

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

function logCron(string $message): void {
    $timestamp = date('Y-m-d H:i:s');
    $logLine = "[$timestamp] $message\n";
    file_put_contents(CRON_LOG_FILE, $logLine, FILE_APPEND);
    if (php_sapi_name() === 'cli') {
        echo $logLine;
    }
}

function syncOrderStatuses(): array {
    $settings = getTrendyolSettings();
    if (!$settings) {
        return ['success' => false, 'error' => 'Trendyol API not configured'];
    }
    
    $api = new TrendyolAPI($settings['apiKey'], $settings['apiSecret'], $settings['sellerId']);
    
    // Load local orders
    $orders = file_exists(ORDERS_FILE) ? readJsonFile(ORDERS_FILE) : [];
    
    // Filter only Trendyol orders that are not completed/cancelled
    $pendingStatuses = ['pending', 'processing', 'picking', 'invoiced', 'shipped'];
    $trendyolOrders = array_filter($orders, function($order) use ($pendingStatuses) {
        return $order['source'] === 'trendyol' && in_array($order['status'], $pendingStatuses);
    });
    
    if (empty($trendyolOrders)) {
        logCron("No pending Trendyol orders to sync");
        return ['success' => true, 'synced' => 0, 'message' => 'No orders to sync'];
    }
    
    // Get order numbers to check
    $orderNumbers = array_column($trendyolOrders, 'marketplace_order_number');
    
    // Fetch orders from Trendyol (last 30 days to cover all pending)
    $result = $api->getOrders([
        'size' => 200,
        'startDate' => (time() - (30 * 24 * 60 * 60)) * 1000,
        'endDate' => time() * 1000
    ]);
    
    if (!$result['success']) {
        logCron("Failed to fetch orders from Trendyol: " . $result['error']);
        return ['success' => false, 'error' => $result['error']];
    }
    
    $trendyolData = $result['data']['content'] ?? [];
    $updated = 0;
    $changes = [];
    
    // Map Trendyol status to local status
    $statusMap = [
        'Created' => 'pending',
        'Picking' => 'processing',
        'Invoiced' => 'invoiced',
        'Shipped' => 'shipped',
        'Delivered' => 'delivered',
        'Cancelled' => 'cancelled',
        'UnDelivered' => 'undelivered',
        'Returned' => 'returned'
    ];
    
    // Create lookup by order number
    $trendyolLookup = [];
    foreach ($trendyolData as $tOrder) {
        $trendyolLookup[(string)$tOrder['orderNumber']] = $tOrder;
    }
    
    // Update local orders
    foreach ($orders as &$order) {
        if ($order['source'] !== 'trendyol') continue;
        
        $orderNumber = $order['marketplace_order_number'] ?? '';
        if (!isset($trendyolLookup[$orderNumber])) continue;
        
        $tOrder = $trendyolLookup[$orderNumber];
        $trendyolStatus = $tOrder['status'] ?? '';
        $newStatus = $statusMap[$trendyolStatus] ?? $order['status'];
        
        // Check if status changed
        if ($newStatus !== $order['status']) {
            $oldStatus = $order['status'];
            $order['status'] = $newStatus;
            $order['trendyol_status'] = $trendyolStatus;
            $order['updated_at'] = date('c');
            
            // Update cargo info if available
            if (!empty($tOrder['cargoTrackingNumber'])) {
                $order['cargo_tracking'] = $tOrder['cargoTrackingNumber'];
            }
            if (!empty($tOrder['cargoProviderName'])) {
                $order['cargo_provider'] = $tOrder['cargoProviderName'];
            }
            
            $changes[] = [
                'order_number' => $order['order_number'],
                'old_status' => $oldStatus,
                'new_status' => $newStatus
            ];
            $updated++;
            
            logCron("Updated order {$order['order_number']}: $oldStatus -> $newStatus");
        }
    }
    
    if ($updated > 0) {
        writeJsonFile(ORDERS_FILE, $orders);
        
        // Update sync data
        $syncData = file_exists(TRENDYOL_SYNC_FILE) ? readJsonFile(TRENDYOL_SYNC_FILE) : [];
        $syncData['last_order_sync'] = date('c');
        $syncData['last_cron_run'] = date('c');
        $syncData['last_cron_changes'] = $changes;
        writeJsonFile(TRENDYOL_SYNC_FILE, $syncData);
        
        logAdminAction('trendyol_cron_sync', ['updated' => $updated, 'changes' => $changes]);
    }
    
    logCron("Sync completed: $updated orders updated");
    
    return [
        'success' => true,
        'synced' => $updated,
        'changes' => $changes,
        'message' => "$updated sipariş güncellendi"
    ];
}

// Import new orders automatically
function importNewOrders(): array {
    $settings = getTrendyolSettings();
    if (!$settings) {
        return ['success' => false, 'error' => 'Trendyol API not configured'];
    }
    
    $api = new TrendyolAPI($settings['apiKey'], $settings['apiSecret'], $settings['sellerId']);
    
    $orders = file_exists(ORDERS_FILE) ? readJsonFile(ORDERS_FILE) : [];
    $existingNumbers = array_column($orders, 'marketplace_order_number');
    
    // Get recent orders (last 3 days)
    $result = $api->getOrders([
        'size' => 100,
        'startDate' => (time() - (3 * 24 * 60 * 60)) * 1000,
        'endDate' => time() * 1000,
        'status' => 'Created'
    ]);
    
    if (!$result['success']) {
        logCron("Failed to fetch new orders: " . $result['error']);
        return ['success' => false, 'error' => $result['error']];
    }
    
    $trendyolOrders = $result['data']['content'] ?? [];
    $imported = 0;
    
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
            'notes' => 'Trendyol Siparişi (Auto-imported)',
            'trendyol_data' => $tOrder,
            'created_at' => date('c'),
            'updated_at' => date('c')
        ];
        
        $orders[] = $newOrder;
        $existingNumbers[] = $marketplaceNumber;
        $imported++;
        
        logCron("Imported new order: TY-$marketplaceNumber");
    }
    
    if ($imported > 0) {
        writeJsonFile(ORDERS_FILE, $orders);
        logAdminAction('trendyol_cron_import', ['imported' => $imported]);
    }
    
    return ['success' => true, 'imported' => $imported];
}

// Main execution
logCron("=== Trendyol Cron Job Started ===");

$importResult = importNewOrders();
$syncResult = syncOrderStatuses();

$response = [
    'success' => true,
    'timestamp' => date('c'),
    'import' => $importResult,
    'sync' => $syncResult
];

logCron("=== Cron Job Completed ===\n");

if (!$isCli) {
    header('Content-Type: application/json');
    echo json_encode($response);
}
