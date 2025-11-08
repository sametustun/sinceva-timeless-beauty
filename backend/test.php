<?php
/**
 * SincEva Backend Test Endpoint
 * URL: https://api.sinceva.com/contact/test.php
 * 
 * Tests:
 * - PHP version
 * - Required extensions
 * - File permissions
 * - SMTP configuration
 * - Composer autoload
 */

header('Content-Type: application/json; charset=utf-8');

$tests = [];

// PHP Version
$tests['php_version'] = [
    'status' => version_compare(PHP_VERSION, '8.0.0', '>=') ? 'OK' : 'FAIL',
    'value' => PHP_VERSION,
    'required' => '8.0.0+'
];

// Required Extensions
$requiredExtensions = ['json', 'curl', 'mbstring', 'openssl'];
foreach ($requiredExtensions as $ext) {
    $tests["ext_$ext"] = [
        'status' => extension_loaded($ext) ? 'OK' : 'FAIL',
        'required' => true
    ];
}

// Composer Autoload
$tests['composer_autoload'] = [
    'status' => file_exists(__DIR__ . '/vendor/autoload.php') ? 'OK' : 'FAIL',
    'message' => file_exists(__DIR__ . '/vendor/autoload.php') 
        ? 'Composer dependencies installed' 
        : 'Run: composer install'
];

// .env File
$tests['env_file'] = [
    'status' => file_exists(__DIR__ . '/.env') ? 'OK' : 'WARN',
    'message' => file_exists(__DIR__ . '/.env') 
        ? '.env file exists' 
        : 'Copy .env.example to .env and configure'
];

// Directories
$dirs = ['logs', 'rate-limit'];
foreach ($dirs as $dir) {
    $path = __DIR__ . '/' . $dir;
    $writable = is_dir($path) && is_writable($path);
    $tests["dir_$dir"] = [
        'status' => $writable ? 'OK' : 'WARN',
        'writable' => $writable,
        'message' => $writable ? "/$dir/ is writable" : "Create /$dir/ or set permissions to 755"
    ];
}

// Load .env if exists
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $env = [];
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($key, $value) = array_map('trim', explode('=', $line, 2));
        $env[$key] = $value;
    }
    
    // SMTP Configuration
    $tests['smtp_config'] = [
        'status' => (!empty($env['SMTP_HOST']) && !empty($env['SMTP_USER'])) ? 'OK' : 'FAIL',
        'configured' => [
            'SMTP_HOST' => !empty($env['SMTP_HOST']),
            'SMTP_PORT' => !empty($env['SMTP_PORT']),
            'SMTP_USER' => !empty($env['SMTP_USER']),
            'SMTP_PASS' => !empty($env['SMTP_PASS'])
        ]
    ];
    
    // Turnstile Configuration
    $tests['turnstile_config'] = [
        'status' => !empty($env['TURNSTILE_SECRET']) ? 'OK' : 'WARN',
        'message' => !empty($env['TURNSTILE_SECRET']) 
            ? 'Turnstile configured' 
            : 'Optional: Set TURNSTILE_SECRET for enhanced security'
    ];
}

// Overall Status
$failCount = count(array_filter($tests, fn($t) => $t['status'] === 'FAIL'));
$warnCount = count(array_filter($tests, fn($t) => $t['status'] === 'WARN'));

$overall = [
    'status' => $failCount === 0 ? ($warnCount === 0 ? 'READY' : 'READY_WITH_WARNINGS') : 'NOT_READY',
    'message' => $failCount === 0 
        ? 'Backend is ready to use' 
        : 'Backend has configuration issues',
    'failed' => $failCount,
    'warnings' => $warnCount,
    'passed' => count($tests) - $failCount - $warnCount
];

// Response
echo json_encode([
    'overall' => $overall,
    'tests' => $tests,
    'timestamp' => date('c')
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
