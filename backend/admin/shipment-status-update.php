<?php
/**
 * Shipment Status Update (Scheduled Job)
 * Updates status of pending shipments from providers
 * 
 * Run via cron: 0 * * * * php /path/to/shipment-status-update.php
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/shipping/ShippingManager.php';

define('SHIPMENTS_FILE', DATA_DIR . '/shipments.json');
define('ORDERS_FILE', DATA_DIR . '/orders.json');
define('SHIPPING_PROVIDERS_FILE', DATA_DIR . '/shipping_providers.json');

// Check if running from CLI or with valid API key
$isCli = php_sapi_name() === 'cli';
$apiKey = $_GET['api_key'] ?? $_SERVER['HTTP_X_API_KEY'] ?? null;
$validApiKey = getenv('CRON_API_KEY') ?: 'sinceva-cron-key-2024';

if (!$isCli && $apiKey !== $validApiKey) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// Main execution
updateShipmentStatuses();

function updateShipmentStatuses()
{
    echo "[" . date('Y-m-d H:i:s') . "] Starting shipment status update...\n";
    
    $shipments = readJsonFile(SHIPMENTS_FILE);
    $orders = readJsonFile(ORDERS_FILE);
    $providers = readJsonFile(SHIPPING_PROVIDERS_FILE);
    
    // Filter shipments that need status update
    $pendingStatuses = ['created', 'pending', 'picked_up', 'in_transit', 'out_for_delivery'];
    $shipmentsToUpdate = array_filter($shipments, fn($s) => in_array($s['status'], $pendingStatuses));
    
    if (empty($shipmentsToUpdate)) {
        echo "No shipments to update.\n";
        return;
    }
    
    $shippingManager = new ShippingManager();
    $updatedCount = 0;
    
    foreach ($shipmentsToUpdate as &$shipment) {
        $providerCode = $shipment['provider_code'];
        $trackingNumber = $shipment['tracking_number'];
        
        // Find provider config
        $providerConfig = null;
        foreach ($providers as $p) {
            if ($p['code'] === $providerCode && $p['is_active']) {
                $providerConfig = $p;
                break;
            }
        }
        
        if (!$providerConfig) {
            echo "Provider not found or inactive: $providerCode\n";
            continue;
        }
        
        // Get provider instance
        $provider = $shippingManager->getProvider($providerCode);
        if (!$provider) {
            echo "Provider class not found: $providerCode\n";
            continue;
        }
        
        // Query status
        $result = $provider->getShipmentStatus($trackingNumber, $providerConfig);
        
        if (!$result['success']) {
            echo "Status query failed for $trackingNumber: " . ($result['error'] ?? 'Unknown error') . "\n";
            continue;
        }
        
        $newStatus = $result['status'];
        $oldStatus = $shipment['status'];
        
        if ($newStatus !== $oldStatus) {
            echo "Updating $trackingNumber: $oldStatus -> $newStatus\n";
            
            // Update shipment
            foreach ($shipments as &$s) {
                if ($s['id'] === $shipment['id']) {
                    $s['status'] = $newStatus;
                    $s['status_description'] = $result['status_description'] ?? '';
                    $s['updated_at'] = date('c');
                    break;
                }
            }
            
            // Update order status if delivered or returned
            if (in_array($newStatus, ['delivered', 'returned', 'cancelled'])) {
                foreach ($orders as &$order) {
                    if ($order['id'] === $shipment['order_id']) {
                        $order['status'] = $newStatus;
                        $order['updated_at'] = date('c');
                        break;
                    }
                }
            }
            
            $updatedCount++;
        }
    }
    
    // Save changes
    if ($updatedCount > 0) {
        writeJsonFile(SHIPMENTS_FILE, $shipments);
        writeJsonFile(ORDERS_FILE, $orders);
        logAdminAction('shipment_status_batch_update', ['updated_count' => $updatedCount]);
    }
    
    echo "[" . date('Y-m-d H:i:s') . "] Updated $updatedCount shipments.\n";
}
