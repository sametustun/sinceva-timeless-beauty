<?php
/**
 * SincEva Contact Form Handler
 * API: api.sinceva.com/contact/contact.php
 * 
 * Features:
 * - Cloudflare Turnstile verification
 * - CORS protection (sinceva.com only)
 * - Rate limiting (IP + email)
 * - SMTP email sending with PHPMailer
 * - Comprehensive logging
 * - Input validation & sanitization
 */

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// Load environment variables
$vendorAutoload = __DIR__ . '/vendor/autoload.php';
if (file_exists($vendorAutoload)) {
    require_once $vendorAutoload;
    
    // Load .env file using vlucas/phpdotenv
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->safeLoad();
} else {
    // Log error if composer not installed
    error_log('Composer autoload not found. Run: composer install');
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'SERVER_CONFIG_ERROR']);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Configuration
define('TURNSTILE_SECRET', $_ENV['TURNSTILE_SECRET'] ?? '');
define('ALLOWED_ORIGINS', [
    'https://sinceva.com',
    'https://www.sinceva.com'
]);
define('MAIL_TO', $_ENV['MAIL_TO'] ?? 'info@sinceva.com');
define('MAIL_TO_NAME', $_ENV['MAIL_TO_NAME'] ?? 'SincEva İletişim');
define('SMTP_HOST', $_ENV['SMTP_HOST'] ?? 'smtp.turkticaret.net');
define('SMTP_PORT', (int)($_ENV['SMTP_PORT'] ?? 465));
define('SMTP_USER', $_ENV['SMTP_USER'] ?? 'info@sinceva.com');
define('SMTP_PASS', $_ENV['SMTP_PASS'] ?? '');
define('SMTP_SECURE', $_ENV['SMTP_SECURE'] ?? 'ssl');
define('LOG_FILE', __DIR__ . '/logs/contact.log');
define('RATE_LIMIT_DIR', __DIR__ . '/rate-limit');

// Ensure directories exist
if (!is_dir(__DIR__ . '/logs')) mkdir(__DIR__ . '/logs', 0755, true);
if (!is_dir(RATE_LIMIT_DIR)) mkdir(RATE_LIMIT_DIR, 0755, true);

// CORS Headers
header('Content-Type: application/json; charset=utf-8');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigin = in_array($origin, ALLOWED_ORIGINS) ? $origin : '';
if ($allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

// Handle OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

// Verify origin
if (!in_array($origin, ALLOWED_ORIGINS)) {
    logRequest('ORIGIN_DENIED', ['origin' => $origin]);
    respondError('FORBIDDEN', 403);
}

// Get client IP
$clientIP = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'];

// Parse JSON input
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    logRequest('INVALID_JSON', ['ip' => $clientIP]);
    respondError('INVALID_JSON', 400);
}

// Extract and validate fields
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$subject = trim($input['subject'] ?? '');
$message = trim($input['message'] ?? '');
$cfToken = trim($input['cf_turnstile_token'] ?? '');

// Basic validation
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    logRequest('VALIDATION_ERROR', ['ip' => $clientIP, 'email' => $email]);
    respondError('VALIDATION_ERROR', 400);
}

// Validate lengths
if (strlen($name) > 100 || strlen($email) > 255 || strlen($subject) > 200 || strlen($message) > 2000) {
    logRequest('VALIDATION_ERROR_LENGTH', ['ip' => $clientIP]);
    respondError('VALIDATION_ERROR', 400);
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    logRequest('INVALID_EMAIL', ['ip' => $clientIP, 'email' => $email]);
    respondError('INVALID_EMAIL', 400);
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Check configuration
if (empty(TURNSTILE_SECRET) || empty(SMTP_HOST) || empty(SMTP_USER)) {
    logRequest('SERVER_MISCONFIGURED', ['ip' => $clientIP]);
    respondError('SERVER_MISCONFIGURED', 500);
}

// Verify Turnstile token
if (!verifyTurnstile($cfToken, $clientIP)) {
    logRequest('TURNSTILE_FAILED', ['ip' => $clientIP, 'email' => $email]);
    respondError('TURNSTILE_FAILED', 403);
}

// Rate limiting
if (!checkRateLimit($clientIP, $email)) {
    logRequest('RATE_LIMITED', ['ip' => $clientIP, 'email' => $email]);
    respondError('RATE_LIMITED', 429);
}

// Send email
$emailSent = sendEmail($name, $email, $phone, $subject, $message);

// Save to contacts.json for admin panel
saveContactMessage($name, $email, $phone, $subject, $message);

if ($emailSent) {
    logRequest('SUCCESS', ['ip' => $clientIP, 'email' => $email, 'name' => $name]);
    respondSuccess();
} else {
    logRequest('MAIL_SEND_FAILED', ['ip' => $clientIP, 'email' => $email]);
    respondError('MAIL_SEND_FAILED', 500);
}

// ============= FUNCTIONS =============

/**
 * Verify Cloudflare Turnstile token
 */
function verifyTurnstile($token, $ip) {
    if (empty($token)) return false;
    
    $data = [
        'secret' => TURNSTILE_SECRET,
        'response' => $token,
        'remoteip' => $ip
    ];
    
    $options = [
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($data),
            'timeout' => 10
        ]
    ];
    
    $context = stream_context_create($options);
    $result = @file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $context);
    
    if ($result === false) {
        logRequest('TURNSTILE_UNAVAILABLE', ['ip' => $ip]);
        return false;
    }
    
    $response = json_decode($result, true);
    return isset($response['success']) && $response['success'] === true;
}

/**
 * Rate limiting (simple file-based)
 * IP: 10 requests per minute
 * Email: 5 requests per minute
 */
function checkRateLimit($ip, $email) {
    $now = time();
    $ipFile = RATE_LIMIT_DIR . '/' . md5($ip) . '.txt';
    $emailFile = RATE_LIMIT_DIR . '/' . md5($email) . '.txt';
    
    // Check IP rate limit
    if (file_exists($ipFile)) {
        $timestamps = array_filter(
            explode("\n", file_get_contents($ipFile)),
            fn($t) => ($now - (int)$t) < 60
        );
        if (count($timestamps) >= 10) return false;
        $timestamps[] = $now;
        file_put_contents($ipFile, implode("\n", $timestamps));
    } else {
        file_put_contents($ipFile, $now);
    }
    
    // Check email rate limit
    if (file_exists($emailFile)) {
        $timestamps = array_filter(
            explode("\n", file_get_contents($emailFile)),
            fn($t) => ($now - (int)$t) < 60
        );
        if (count($timestamps) >= 5) return false;
        $timestamps[] = $now;
        file_put_contents($emailFile, implode("\n", $timestamps));
    } else {
        file_put_contents($emailFile, $now);
    }
    
    return true;
}

/**
 * Send email using PHPMailer with SMTP
 */
function sendEmail($name, $email, $phone, $subject, $message) {
    $mail = new PHPMailer(true);
    
    try {
        // SMTP settings - Turkticaret SMTP
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL for port 465
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';
        
        // Enable debug output for troubleshooting (logs to error_log)
        $mail->SMTPDebug = SMTP::DEBUG_OFF; // Set to DEBUG_SERVER for debugging
        $mail->Debugoutput = function($str, $level) {
            error_log("SMTP DEBUG [$level]: $str");
        };
        
        // From address MUST match SMTP_USER
        $mail->setFrom(SMTP_USER, 'SincEva');
        $mail->addAddress(MAIL_TO, MAIL_TO_NAME);
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = "İletişim Formu: $subject";
        
        $phoneSection = $phone ? "<p><strong>Telefon:</strong> $phone</p>" : '';
        
        $mail->Body = "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
                    .content { background: #f9f9f9; padding: 20px; }
                    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h2>Yeni İletişim Formu Mesajı</h2>
                    </div>
                    <div class='content'>
                        <p><strong>İsim:</strong> $name</p>
                        <p><strong>E-posta:</strong> $email</p>
                        $phoneSection
                        <p><strong>Konu:</strong> $subject</p>
                        <p><strong>Mesaj:</strong></p>
                        <p>" . nl2br($message) . "</p>
                    </div>
                    <div class='footer'>
                        <p>Bu mesaj sinceva.com iletişim formundan gönderildi.</p>
                    </div>
                </div>
            </body>
            </html>
        ";
        
        $mail->AltBody = "İsim: $name\nE-posta: $email\nTelefon: $phone\nKonu: $subject\n\nMesaj:\n$message";
        
        $mail->send();
        return true;
        
    } catch (Exception $e) {
        // Log SMTP errors to error_log for debugging
        error_log("SMTP Error: " . $mail->ErrorInfo);
        logRequest('PHPMAILER_ERROR', ['error' => $mail->ErrorInfo]);
        
        // No fallback - if SMTP fails, report the error
        return false;
    }
}

/**
 * Log request to file
 */
function logRequest($status, $data = []) {
    $timestamp = date('c');
    $logData = array_merge(['timestamp' => $timestamp, 'status' => $status], $data);
    $logLine = json_encode($logData, JSON_UNESCAPED_UNICODE) . "\n";
    @file_put_contents(LOG_FILE, $logLine, FILE_APPEND | LOCK_EX);
}

/**
 * Save contact message to contacts.json for admin panel
 */
function saveContactMessage($name, $email, $phone, $subject, $message) {
    // Use the same path as admin config - relative to backend directory
    $contactsFile = __DIR__ . '/data/contacts.json';
    
    // Ensure data directory exists
    $dataDir = __DIR__ . '/data';
    if (!is_dir($dataDir)) {
        mkdir($dataDir, 0755, true);
    }
    
    // Read existing contacts
    $contacts = [];
    if (file_exists($contactsFile)) {
        $content = file_get_contents($contactsFile);
        $contacts = json_decode($content, true) ?? [];
    }
    
    // Add new contact
    $contacts[] = [
        'id' => uniqid() . bin2hex(random_bytes(4)),
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'subject' => $subject,
        'message' => $message,
        'read' => false,
        'created_at' => date('Y-m-d H:i:s')
    ];
    
    // Save contacts
    file_put_contents($contactsFile, json_encode($contacts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

/**
 * Respond with success
 */
function respondSuccess() {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

/**
 * Respond with error
 */
function respondError($errorCode, $httpCode = 400) {
    http_response_code($httpCode);
    echo json_encode(['ok' => false, 'error' => $errorCode]);
    exit;
}
