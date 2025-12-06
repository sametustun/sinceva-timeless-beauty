<?php
/**
 * SincEva API Test Endpoint
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$checks = [];

// PHP version
$checks['php_version'] = PHP_VERSION;
$checks['php_ok'] = version_compare(PHP_VERSION, '7.4.0', '>=');

// Vendor autoload
$checks['composer_installed'] = file_exists(__DIR__ . '/vendor/autoload.php');

// .env file
$checks['env_exists'] = file_exists(__DIR__ . '/.env');

// Logs directory
$checks['logs_writable'] = is_writable(__DIR__ . '/logs') || @mkdir(__DIR__ . '/logs', 0755, true);

// Rate limit directory
$checks['rate_limit_writable'] = is_writable(__DIR__ . '/rate-limit') || @mkdir(__DIR__ . '/rate-limit', 0755, true);

// Overall status
$allOk = $checks['php_ok'] && $checks['composer_installed'] && $checks['env_exists'];

echo json_encode([
    'status' => $allOk ? 'ready' : 'setup_required',
    'message' => $allOk ? 'API hazır!' : 'Kurulum gerekli',
    'checks' => $checks,
    'next_steps' => $allOk ? [] : [
        !$checks['composer_installed'] ? 'SSH ile: cd /home/sin66vacom/public_html/api && bash install.sh' : null,
        !$checks['env_exists'] ? '.env dosyası oluşturun: cp .env.example .env' : null,
    ]
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
