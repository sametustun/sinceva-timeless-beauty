<?php
/**
 * Admin Panel Configuration
 * SincEva Admin System
 */

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// Load environment variables using vlucas/phpdotenv
$vendorAutoload = dirname(__DIR__) . '/vendor/autoload.php';
if (file_exists($vendorAutoload)) {
    require_once $vendorAutoload;
    $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
    $dotenv->safeLoad();
}

// Configuration constants - ALLOWED_ORIGINS for CORS
define('ALLOWED_ORIGINS', [
    'https://sinceva.com',
    'https://www.sinceva.com'
]);
define('DATA_DIR', dirname(__DIR__) . '/data/');
define('LOG_DIR', dirname(__DIR__) . '/logs/');

// Admin credentials (should be in .env in production)
define('ADMIN_EMAIL', $_ENV['ADMIN_EMAIL'] ?? 'admin@sinceva.com');
define('ADMIN_PASSWORD_HASH', $_ENV['ADMIN_PASSWORD_HASH'] ?? password_hash('sinceva2024', PASSWORD_DEFAULT));

// Data files
define('SUBSCRIBERS_FILE', DATA_DIR . 'subscribers.json');
define('CONTACTS_FILE', DATA_DIR . 'contacts.json');
define('BLOG_FILE', DATA_DIR . 'blog.json');
define('PRODUCTS_FILE', DATA_DIR . 'products.json');
define('ADMIN_LOG_FILE', LOG_DIR . 'admin.log');

// Ensure directories exist
if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}
if (!is_dir(LOG_DIR)) {
    mkdir(LOG_DIR, 0755, true);
}

// Initialize data files if they don't exist
$dataFiles = [
    SUBSCRIBERS_FILE => [],
    CONTACTS_FILE => [],
    BLOG_FILE => [],
    PRODUCTS_FILE => []
];

foreach ($dataFiles as $file => $defaultData) {
    if (!file_exists($file)) {
        file_put_contents($file, json_encode($defaultData, JSON_PRETTY_PRINT));
    }
}

// CORS headers
function setCorsHeaders() {
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowedOrigins = array_merge(
        ALLOWED_ORIGINS, 
        ['http://localhost:5173', 'http://localhost:8080']
    );
    
    // Allow Lovable preview domains (both .lovable.app and .lovableproject.com)
    $isLovablePreview = preg_match('/^https:\/\/[a-z0-9-]+\.lovable\.app$/', $origin) ||
                        preg_match('/^https:\/\/[a-z0-9-]+\.lovableproject\.com$/', $origin) ||
                        preg_match('/^https:\/\/id-preview--[a-z0-9-]+\.lovable\.app$/', $origin);
    
    if (in_array($origin, $allowedOrigins) || $isLovablePreview) {
        header("Access-Control-Allow-Origin: $origin");
    } else {
        // Fallback: allow all origins in development (remove in production if needed)
        header("Access-Control-Allow-Origin: *");
    }
    
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json; charset=UTF-8");
}

// Handle preflight requests
function handlePreflight() {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        setCorsHeaders();
        http_response_code(200);
        exit();
    }
}

// Check if admin is authenticated
function isAuthenticated(): bool {
    return isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;
}

// Require authentication
function requireAuth() {
    if (!isAuthenticated()) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'UNAUTHORIZED']);
        exit();
    }
}

// Log admin actions
function logAdminAction(string $action, array $data = []) {
    $logEntry = [
        'timestamp' => date('Y-m-d H:i:s'),
        'action' => $action,
        'admin' => $_SESSION['admin_email'] ?? 'unknown',
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'data' => $data
    ];
    
    file_put_contents(
        ADMIN_LOG_FILE,
        json_encode($logEntry) . "\n",
        FILE_APPEND | LOCK_EX
    );
}

// Read JSON file
function readJsonFile(string $file): array {
    if (!file_exists($file)) {
        return [];
    }
    $content = file_get_contents($file);
    return json_decode($content, true) ?? [];
}

// Write JSON file
function writeJsonFile(string $file, array $data): bool {
    return file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)) !== false;
}

// Generate unique ID
function generateId(): string {
    return uniqid() . bin2hex(random_bytes(4));
}

// Sanitize input
function sanitizeInput(string $input): string {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

// Response helpers
function respondSuccess(array $data = []) {
    echo json_encode(array_merge(['success' => true], $data));
    exit();
}

function respondError(string $error, int $code = 400) {
    http_response_code($code);
    echo json_encode(['success' => false, 'error' => $error]);
    exit();
}
