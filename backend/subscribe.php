<?php
/**
 * SincEva Newsletter Subscription Handler
 * API: sinceva.com/api/subscribe.php
 * 
 * Features:
 * - Email subscription with confirmation
 * - CORS protection (sinceva.com only)
 * - Rate limiting (IP + email)
 * - SMTP email sending with PHPMailer
 * - JSON file storage for subscribers
 * - Input validation & sanitization
 */

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// Load environment variables
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load .env file
if (file_exists(__DIR__ . '/.env')) {
    $lines = file(__DIR__ . '/.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($key, $value) = explode('=', $line, 2);
        $_ENV[trim($key)] = trim($value);
    }
}

// Configuration
define('ALLOWED_ORIGIN', $_ENV['ALLOWED_ORIGIN'] ?? 'https://sinceva.com');
define('SMTP_HOST', $_ENV['SMTP_HOST'] ?? '');
define('SMTP_PORT', (int)($_ENV['SMTP_PORT'] ?? 587));
define('SMTP_USER', $_ENV['SMTP_USER'] ?? '');
define('SMTP_PASS', $_ENV['SMTP_PASS'] ?? '');
define('SMTP_SECURE', $_ENV['SMTP_SECURE'] ?? 'tls');
define('SUBSCRIBERS_FILE', __DIR__ . '/data/subscribers.json');
define('LOG_FILE', __DIR__ . '/logs/subscribe.log');
define('RATE_LIMIT_DIR', __DIR__ . '/rate-limit');

// Ensure directories exist
if (!is_dir(__DIR__ . '/logs')) mkdir(__DIR__ . '/logs', 0755, true);
if (!is_dir(__DIR__ . '/data')) mkdir(__DIR__ . '/data', 0755, true);
if (!is_dir(RATE_LIMIT_DIR)) mkdir(RATE_LIMIT_DIR, 0755, true);

// Initialize subscribers file if not exists
if (!file_exists(SUBSCRIBERS_FILE)) {
    file_put_contents(SUBSCRIBERS_FILE, json_encode([]));
}

// CORS Headers
header('Content-Type: application/json; charset=utf-8');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === ALLOWED_ORIGIN) {
    header("Access-Control-Allow-Origin: $origin");
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
if ($origin !== ALLOWED_ORIGIN) {
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

// Extract and validate email
$email = trim($input['email'] ?? '');
$language = trim($input['language'] ?? 'tr');

// Basic validation
if (empty($email)) {
    logRequest('VALIDATION_ERROR', ['ip' => $clientIP]);
    respondError('VALIDATION_ERROR', 400);
}

// Validate email length
if (strlen($email) > 255) {
    logRequest('VALIDATION_ERROR_LENGTH', ['ip' => $clientIP]);
    respondError('VALIDATION_ERROR', 400);
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    logRequest('INVALID_EMAIL', ['ip' => $clientIP, 'email' => $email]);
    respondError('INVALID_EMAIL', 400);
}

// Sanitize email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Check configuration
if (empty(SMTP_HOST) || empty(SMTP_USER)) {
    logRequest('SERVER_MISCONFIGURED', ['ip' => $clientIP]);
    respondError('SERVER_MISCONFIGURED', 500);
}

// Rate limiting
if (!checkRateLimit($clientIP, $email)) {
    logRequest('RATE_LIMITED', ['ip' => $clientIP, 'email' => $email]);
    respondError('RATE_LIMITED', 429);
}

// Check if already subscribed
$subscribers = json_decode(file_get_contents(SUBSCRIBERS_FILE), true) ?: [];
$existingSubscriber = null;
foreach ($subscribers as $sub) {
    if ($sub['email'] === $email) {
        $existingSubscriber = $sub;
        break;
    }
}

if ($existingSubscriber && $existingSubscriber['confirmed']) {
    logRequest('ALREADY_SUBSCRIBED', ['ip' => $clientIP, 'email' => $email]);
    respondError('ALREADY_SUBSCRIBED', 409);
}

// Add or update subscriber
$token = bin2hex(random_bytes(32));
$now = date('c');

if ($existingSubscriber) {
    // Update existing unconfirmed subscriber
    foreach ($subscribers as &$sub) {
        if ($sub['email'] === $email) {
            $sub['token'] = $token;
            $sub['updated_at'] = $now;
            $sub['language'] = $language;
            break;
        }
    }
} else {
    // Add new subscriber
    $subscribers[] = [
        'email' => $email,
        'token' => $token,
        'confirmed' => false,
        'language' => $language,
        'created_at' => $now,
        'updated_at' => $now,
        'ip' => $clientIP
    ];
}

// Save subscribers
file_put_contents(SUBSCRIBERS_FILE, json_encode($subscribers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// Send confirmation email
$emailSent = sendConfirmationEmail($email, $token, $language);

if ($emailSent) {
    logRequest('SUCCESS', ['ip' => $clientIP, 'email' => $email]);
    respondSuccess();
} else {
    logRequest('MAIL_SEND_FAILED', ['ip' => $clientIP, 'email' => $email]);
    respondError('MAIL_SEND_FAILED', 500);
}

// ============= FUNCTIONS =============

/**
 * Rate limiting (simple file-based)
 * IP: 10 requests per minute
 * Email: 3 requests per minute
 */
function checkRateLimit($ip, $email) {
    $now = time();
    $ipFile = RATE_LIMIT_DIR . '/sub_' . md5($ip) . '.txt';
    $emailFile = RATE_LIMIT_DIR . '/sub_' . md5($email) . '.txt';
    
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
        if (count($timestamps) >= 3) return false;
        $timestamps[] = $now;
        file_put_contents($emailFile, implode("\n", $timestamps));
    } else {
        file_put_contents($emailFile, $now);
    }
    
    return true;
}

/**
 * Send confirmation email using PHPMailer with SMTP
 */
function sendConfirmationEmail($email, $token, $language) {
    $mail = new PHPMailer(true);
    
    // Email content based on language
    $subjects = [
        'tr' => 'Sinceva Bülten Aboneliğinizi Onaylayın',
        'en' => 'Confirm Your Sinceva Newsletter Subscription',
        'ar' => 'تأكيد اشتراكك في نشرة Sinceva الإخبارية'
    ];
    
    $greetings = [
        'tr' => 'Merhaba!',
        'en' => 'Hello!',
        'ar' => 'مرحباً!'
    ];
    
    $messages = [
        'tr' => 'Sinceva bültenine abone olduğunuz için teşekkür ederiz. Aboneliğinizi onaylamak için aşağıdaki butona tıklayın.',
        'en' => 'Thank you for subscribing to the Sinceva newsletter. Click the button below to confirm your subscription.',
        'ar' => 'شكراً لاشتراكك في نشرة Sinceva الإخبارية. انقر على الزر أدناه لتأكيد اشتراكك.'
    ];
    
    $buttonTexts = [
        'tr' => 'Aboneliği Onayla',
        'en' => 'Confirm Subscription',
        'ar' => 'تأكيد الاشتراك'
    ];
    
    $footerTexts = [
        'tr' => 'Bu e-postayı siz talep etmediyseniz, lütfen dikkate almayın.',
        'en' => 'If you did not request this email, please ignore it.',
        'ar' => 'إذا لم تطلب هذا البريد الإلكتروني، يرجى تجاهله.'
    ];
    
    $lang = in_array($language, ['tr', 'en', 'ar']) ? $language : 'tr';
    $confirmUrl = ALLOWED_ORIGIN . '/api/confirm.php?token=' . $token;
    $dir = $lang === 'ar' ? 'rtl' : 'ltr';
    
    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = SMTP_SECURE;
        $mail->Port = SMTP_PORT;
        $mail->CharSet = 'UTF-8';
        
        // Recipients
        $mail->setFrom(SMTP_USER, 'Sinceva');
        $mail->addAddress($email);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subjects[$lang];
        
        $mail->Body = "
            <html dir='$dir'>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
                    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                    .header { background: linear-gradient(135deg, #2c3e50, #3498db); color: white; padding: 30px; text-align: center; }
                    .header h1 { margin: 0; font-size: 28px; }
                    .content { padding: 30px; text-align: center; }
                    .content p { font-size: 16px; color: #555; margin-bottom: 25px; }
                    .button { display: inline-block; background: #D4AF37; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px; }
                    .button:hover { background: #b8962e; }
                    .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; background: #f9f9f9; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h1>SINCEVA</h1>
                        <p style='margin: 10px 0 0 0; opacity: 0.9;'>The Origin of Beauty</p>
                    </div>
                    <div class='content'>
                        <h2 style='color: #2c3e50;'>{$greetings[$lang]}</h2>
                        <p>{$messages[$lang]}</p>
                        <a href='$confirmUrl' class='button'>{$buttonTexts[$lang]}</a>
                    </div>
                    <div class='footer'>
                        <p>{$footerTexts[$lang]}</p>
                        <p>&copy; " . date('Y') . " Sinceva. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        ";
        
        $mail->AltBody = "{$greetings[$lang]}\n\n{$messages[$lang]}\n\n{$buttonTexts[$lang]}: $confirmUrl\n\n{$footerTexts[$lang]}";
        
        $mail->send();
        return true;
        
    } catch (Exception $e) {
        logRequest('PHPMAILER_ERROR', ['error' => $mail->ErrorInfo]);
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
