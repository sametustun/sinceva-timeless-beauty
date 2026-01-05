<?php
/**
 * Payment Methods Status - Public endpoint
 * Returns which payment methods are enabled/configured
 */

require_once __DIR__ . '/admin/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respondError('Method not allowed', 405);
}

$settings = readJsonFile(DATA_DIR . '/settings.json');

// Check if PayTR is configured
$paytrConfigured = !empty($settings['paytr']['merchant_id']) && 
                   !empty($settings['paytr']['merchant_key']) && 
                   !empty($settings['paytr']['merchant_salt']);

// Check if iyzico is configured
$iyzicoConfigured = !empty($settings['iyzico']['api_key']) && 
                    !empty($settings['iyzico']['secret_key']);

respondSuccess([
    'paytr' => [
        'enabled' => $paytrConfigured,
        'test_mode' => $settings['paytr']['test_mode'] ?? true
    ],
    'iyzico' => [
        'enabled' => $iyzicoConfigured,
        'test_mode' => $settings['iyzico']['test_mode'] ?? true
    ]
]);
