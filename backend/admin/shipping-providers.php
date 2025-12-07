<?php
/**
 * Shipping Providers API
 * Manages shipping provider configurations
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

$method = $_SERVER['REQUEST_METHOD'];

define('SHIPPING_PROVIDERS_FILE', DATA_DIR . '/shipping_providers.json');

// Initialize file if not exists
if (!file_exists(SHIPPING_PROVIDERS_FILE)) {
    $defaultProviders = [
        [
            'id' => 'yurtici',
            'name' => 'Yurtiçi Kargo',
            'code' => 'yurtici',
            'is_active' => false,
            'settings' => [
                'api_url' => '',
                'username' => '',
                'password' => '',
                'customer_code' => '',
                'sender_name' => '',
                'sender_address' => '',
                'sender_city' => '',
                'sender_district' => '',
                'sender_phone' => ''
            ],
            'created_at' => date('c'),
            'updated_at' => date('c')
        ],
        [
            'id' => 'hepsijet',
            'name' => 'HepsiJet',
            'code' => 'hepsijet',
            'is_active' => false,
            'settings' => [
                'api_url' => '',
                'api_key' => '',
                'api_secret' => '',
                'merchant_id' => '',
                'sender_name' => '',
                'sender_address' => '',
                'sender_city' => '',
                'sender_district' => '',
                'sender_phone' => ''
            ],
            'created_at' => date('c'),
            'updated_at' => date('c')
        ],
        [
            'id' => 'trendyol_express',
            'name' => 'Trendyol Express',
            'code' => 'trendyol_express',
            'is_active' => false,
            'settings' => [
                'api_url' => 'https://api.trendyol.com/sapigw',
                'api_key' => '',
                'api_secret' => '',
                'seller_id' => ''
            ],
            'created_at' => date('c'),
            'updated_at' => date('c')
        ]
    ];
    writeJsonFile(SHIPPING_PROVIDERS_FILE, $defaultProviders);
}

switch ($method) {
    case 'GET':
        handleGet();
        break;
    case 'PUT':
        requireAuth();
        handlePut();
        break;
    default:
        respondError('Method not allowed', 405);
}

function handleGet()
{
    $providers = readJsonFile(SHIPPING_PROVIDERS_FILE);
    
    // Mask sensitive data for non-authenticated users
    if (!isAuthenticated()) {
        foreach ($providers as &$provider) {
            if (isset($provider['settings']['password'])) {
                $provider['settings']['password'] = $provider['settings']['password'] ? '********' : '';
            }
            if (isset($provider['settings']['api_secret'])) {
                $provider['settings']['api_secret'] = $provider['settings']['api_secret'] ? '********' : '';
            }
        }
    }
    
    respondSuccess(['providers' => $providers]);
}

function handlePut()
{
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (empty($input['id'])) {
        respondError('Provider ID gerekli');
    }
    
    $providers = readJsonFile(SHIPPING_PROVIDERS_FILE);
    $found = false;
    
    foreach ($providers as &$provider) {
        if ($provider['id'] === $input['id']) {
            // Update is_active if provided
            if (isset($input['is_active'])) {
                $provider['is_active'] = (bool)$input['is_active'];
            }
            
            // Update settings if provided
            if (isset($input['settings']) && is_array($input['settings'])) {
                // Don't overwrite password/secret if masked
                foreach ($input['settings'] as $key => $value) {
                    if ($value === '********') {
                        continue; // Keep existing value
                    }
                    $provider['settings'][$key] = sanitizeInput($value);
                }
            }
            
            $provider['updated_at'] = date('c');
            $found = true;
            break;
        }
    }
    
    if (!$found) {
        respondError('Provider bulunamadı', 404);
    }
    
    writeJsonFile(SHIPPING_PROVIDERS_FILE, $providers);
    logAdminAction('shipping_provider_updated', ['provider_id' => $input['id']]);
    
    respondSuccess(['message' => 'Provider güncellendi']);
}
