<?php
/**
 * Shipments API
 * Manages shipment creation and tracking
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/shipping/ShippingManager.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

define('SHIPMENTS_FILE', DATA_DIR . '/shipments.json');
define('ORDERS_FILE', DATA_DIR . '/orders.json');
define('SHIPPING_PROVIDERS_FILE', DATA_DIR . '/shipping_providers.json');

// Initialize file if not exists
if (!file_exists(SHIPMENTS_FILE)) {
    writeJsonFile(SHIPMENTS_FILE, []);
}

// Parse URL
$requestUri = $_SERVER['REQUEST_URI'];
$orderId = null;

if (preg_match('/\/orders\/([^\/]+)\/shipments/', $requestUri, $matches)) {
    $orderId = $matches[1];
}

switch ($method) {
    case 'GET':
        handleGet();
        break;
    case 'POST':
        if ($orderId) {
            handleCreateShipment($orderId);
        } else {
            respondError('Order ID gerekli');
        }
        break;
    default:
        respondError('Method not allowed', 405);
}

function handleGet()
{
    $shipments = readJsonFile(SHIPMENTS_FILE);
    
    // Filter by order_id if provided
    $orderIdFilter = $_GET['order_id'] ?? null;
    if ($orderIdFilter) {
        $shipments = array_filter($shipments, fn($s) => $s['order_id'] === $orderIdFilter);
    }
    
    respondSuccess(['shipments' => array_values($shipments)]);
}

function handleCreateShipment($orderId)
{
    $input = json_decode(file_get_contents('php://input'), true);
    
    $providerCode = $input['provider_code'] ?? null;
    if (!$providerCode) {
        respondError('provider_code gerekli');
    }
    
    // Get order
    $orders = readJsonFile(ORDERS_FILE);
    $order = null;
    
    foreach ($orders as &$o) {
        if ($o['id'] === $orderId) {
            $order = &$o;
            break;
        }
    }
    
    if (!$order) {
        respondError('Sipariş bulunamadı', 404);
    }
    
    // Get provider config
    $providers = readJsonFile(SHIPPING_PROVIDERS_FILE);
    $providerConfig = null;
    
    foreach ($providers as $p) {
        if ($p['code'] === $providerCode) {
            if (!$p['is_active']) {
                respondError('Bu kargo sağlayıcısı aktif değil');
            }
            $providerConfig = $p;
            break;
        }
    }
    
    if (!$providerConfig) {
        respondError('Kargo sağlayıcısı bulunamadı', 404);
    }
    
    // Get shipping provider instance
    $shippingManager = new ShippingManager();
    $provider = $shippingManager->getProvider($providerCode);
    
    if (!$provider) {
        respondError('Kargo sağlayıcısı sınıfı bulunamadı');
    }
    
    // Create shipment
    $result = $provider->createShipment($order, $providerConfig);
    
    if (!$result['success']) {
        respondError($result['error'] ?? 'Kargo oluşturulamadı');
    }
    
    // Save shipment record
    $shipments = readJsonFile(SHIPMENTS_FILE);
    
    $newShipment = [
        'id' => generateId(),
        'order_id' => $orderId,
        'provider_id' => $providerConfig['id'],
        'provider_code' => $providerCode,
        'provider_name' => $providerConfig['name'],
        'tracking_number' => $result['tracking_number'],
        'label_url' => $result['label_url'] ?? '',
        'status' => 'created',
        'payload_request' => $result['payload_request'] ?? null,
        'payload_response' => $result['payload_response'] ?? null,
        'created_by' => $_SESSION['admin_email'] ?? 'system',
        'created_at' => date('c'),
        'updated_at' => date('c')
    ];
    
    $shipments[] = $newShipment;
    writeJsonFile(SHIPMENTS_FILE, $shipments);
    
    // Update order status
    $order['status'] = 'shipped';
    $order['shipment_id'] = $newShipment['id'];
    $order['tracking_number'] = $result['tracking_number'];
    $order['updated_at'] = date('c');
    writeJsonFile(ORDERS_FILE, $orders);
    
    logAdminAction('shipment_created', [
        'order_id' => $orderId,
        'provider' => $providerCode,
        'tracking_number' => $result['tracking_number']
    ]);
    
    respondSuccess([
        'shipment' => $newShipment,
        'tracking_number' => $result['tracking_number'],
        'label_url' => $result['label_url'] ?? '',
        'message' => 'Kargo oluşturuldu'
    ]);
}
