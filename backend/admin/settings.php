<?php
/**
 * Settings API Endpoint
 * Handles storage and retrieval of various settings including Trendyol API credentials
 */

require_once 'config.php';

setCorsHeaders();
handlePreflight();

// Settings file paths
define('SETTINGS_FILE', DATA_DIR . '/settings.json');

// Initialize settings file if not exists
if (!file_exists(SETTINGS_FILE)) {
    writeJsonFile(SETTINGS_FILE, [
        'integrations' => [],
        'trendyol' => [],
        'paytr' => [
            'merchant_id' => '',
            'merchant_key' => '',
            'merchant_salt' => '',
            'test_mode' => true
        ]
    ]);
}

$method = $_SERVER['REQUEST_METHOD'];

// GET - Retrieve settings
if ($method === 'GET') {
    requireAuth();
    
    $type = $_GET['type'] ?? 'all';
    $settings = readJsonFile(SETTINGS_FILE);
    
    switch ($type) {
        case 'trendyol':
            // Return Trendyol settings with masked secret
            $trendyolSettings = $settings['trendyol'] ?? [];
            if (!empty($trendyolSettings['apiSecret'])) {
                // Return partial mask for display
                $secret = $trendyolSettings['apiSecret'];
                $trendyolSettings['apiSecret'] = strlen($secret) > 8 
                    ? substr($secret, 0, 4) . str_repeat('*', strlen($secret) - 8) . substr($secret, -4)
                    : str_repeat('*', strlen($secret));
            }
            respondSuccess(['data' => $trendyolSettings]);
            break;
            
        case 'paytr':
            // Return PayTR settings with masked secrets
            $paytrSettings = $settings['paytr'] ?? [];
            if (!empty($paytrSettings['merchant_key'])) {
                $key = $paytrSettings['merchant_key'];
                $paytrSettings['merchant_key'] = strlen($key) > 8 
                    ? substr($key, 0, 4) . str_repeat('*', strlen($key) - 8) . substr($key, -4)
                    : str_repeat('*', strlen($key));
            }
            if (!empty($paytrSettings['merchant_salt'])) {
                $salt = $paytrSettings['merchant_salt'];
                $paytrSettings['merchant_salt'] = strlen($salt) > 8 
                    ? substr($salt, 0, 4) . str_repeat('*', strlen($salt) - 8) . substr($salt, -4)
                    : str_repeat('*', strlen($salt));
            }
            respondSuccess(['data' => $paytrSettings]);
            break;
            
        case 'integrations':
            respondSuccess(['data' => $settings['integrations'] ?? []]);
            break;
            
        default:
            respondSuccess(['data' => $settings]);
    }
}

// POST - Save settings
if ($method === 'POST') {
    requireAuth();
    
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['type']) || !isset($input['data'])) {
        respondError('Missing type or data', 400);
    }
    
    $type = $input['type'];
    $data = $input['data'];
    $settings = readJsonFile(SETTINGS_FILE);
    
    switch ($type) {
        case 'trendyol':
            // Validate Trendyol settings
            $trendyolSettings = [
                'apiKey' => sanitizeInput($data['apiKey'] ?? ''),
                'apiSecret' => $data['apiSecret'] ?? '', // Don't sanitize secret, might contain special chars
                'sellerId' => sanitizeInput($data['sellerId'] ?? ''),
                'updatedAt' => date('c')
            ];
            
            // If apiSecret is masked (contains asterisks), keep the old one
            if (!empty($settings['trendyol']['apiSecret']) && strpos($data['apiSecret'] ?? '', '*') !== false) {
                $trendyolSettings['apiSecret'] = $settings['trendyol']['apiSecret'];
            }
            
            $settings['trendyol'] = $trendyolSettings;
            
            logAdminAction('trendyol_settings_updated', [
                'sellerId' => $trendyolSettings['sellerId'],
                'hasApiKey' => !empty($trendyolSettings['apiKey']),
                'hasApiSecret' => !empty($trendyolSettings['apiSecret'])
            ]);
            break;
            
        case 'paytr':
            $paytrSettings = [
                'merchant_id' => sanitizeInput($data['merchant_id'] ?? ''),
                'merchant_key' => $data['merchant_key'] ?? '',
                'merchant_salt' => $data['merchant_salt'] ?? '',
                'test_mode' => (bool)($data['test_mode'] ?? true),
                'updatedAt' => date('c')
            ];
            
            // If secrets are masked, keep the old ones
            if (!empty($settings['paytr']['merchant_key']) && strpos($data['merchant_key'] ?? '', '*') !== false) {
                $paytrSettings['merchant_key'] = $settings['paytr']['merchant_key'];
            }
            if (!empty($settings['paytr']['merchant_salt']) && strpos($data['merchant_salt'] ?? '', '*') !== false) {
                $paytrSettings['merchant_salt'] = $settings['paytr']['merchant_salt'];
            }
            
            $settings['paytr'] = $paytrSettings;
            
            logAdminAction('paytr_settings_updated', [
                'merchant_id' => $paytrSettings['merchant_id'],
                'test_mode' => $paytrSettings['test_mode']
            ]);
            break;
            
        case 'integrations':
            $settings['integrations'] = [
                'googleAnalyticsId' => sanitizeInput($data['googleAnalyticsId'] ?? ''),
                'googleSearchConsoleId' => sanitizeInput($data['googleSearchConsoleId'] ?? ''),
                'facebookPixelId' => sanitizeInput($data['facebookPixelId'] ?? ''),
                'googleTagManagerId' => sanitizeInput($data['googleTagManagerId'] ?? ''),
                'hotjarId' => sanitizeInput($data['hotjarId'] ?? ''),
                'clarityId' => sanitizeInput($data['clarityId'] ?? ''),
                'updatedAt' => date('c')
            ];
            
            logAdminAction('integrations_updated', $settings['integrations']);
            break;
            
        default:
            respondError('Unknown settings type', 400);
    }
    
    if (writeJsonFile(SETTINGS_FILE, $settings)) {
        respondSuccess(['message' => 'Settings saved successfully']);
    } else {
        respondError('Failed to save settings', 500);
    }
}

respondError('Method not allowed', 405);
