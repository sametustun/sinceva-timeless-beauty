<?php
/**
 * SincEva Newsletter Subscription Confirmation Handler
 * API: sinceva.com/api/confirm.php
 * 
 * Confirms newsletter subscription via token
 */

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// Load environment variables
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
define('SUBSCRIBERS_FILE', __DIR__ . '/data/subscribers.json');
define('LOG_FILE', __DIR__ . '/logs/subscribe.log');

// Get token from query string
$token = trim($_GET['token'] ?? '');

// Validate token
if (empty($token) || strlen($token) !== 64) {
    showPage('error', 'tr');
    exit;
}

// Check if subscribers file exists
if (!file_exists(SUBSCRIBERS_FILE)) {
    showPage('error', 'tr');
    exit;
}

// Find subscriber by token
$subscribers = json_decode(file_get_contents(SUBSCRIBERS_FILE), true) ?: [];
$found = false;
$language = 'tr';

foreach ($subscribers as &$sub) {
    if ($sub['token'] === $token) {
        $found = true;
        $language = $sub['language'] ?? 'tr';
        
        if ($sub['confirmed']) {
            showPage('already_confirmed', $language);
            exit;
        }
        
        // Confirm subscription
        $sub['confirmed'] = true;
        $sub['confirmed_at'] = date('c');
        $sub['token'] = null; // Clear token after confirmation
        
        // Save subscribers
        file_put_contents(SUBSCRIBERS_FILE, json_encode($subscribers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        
        // Log confirmation
        logRequest('CONFIRMED', ['email' => $sub['email']]);
        
        showPage('success', $language);
        exit;
    }
}

// Token not found
showPage('error', $language);

/**
 * Show confirmation page
 */
function showPage($status, $language) {
    $lang = in_array($language, ['tr', 'en', 'ar']) ? $language : 'tr';
    $dir = $lang === 'ar' ? 'rtl' : 'ltr';
    
    $titles = [
        'success' => [
            'tr' => 'Abonelik Onaylandı!',
            'en' => 'Subscription Confirmed!',
            'ar' => 'تم تأكيد الاشتراك!'
        ],
        'already_confirmed' => [
            'tr' => 'Zaten Onaylı',
            'en' => 'Already Confirmed',
            'ar' => 'تم التأكيد مسبقاً'
        ],
        'error' => [
            'tr' => 'Hata',
            'en' => 'Error',
            'ar' => 'خطأ'
        ]
    ];
    
    $messages = [
        'success' => [
            'tr' => 'Sinceva bültenine başarıyla abone oldunuz! Güzellik ipuçları ve özel teklifler için takipte kalın.',
            'en' => 'You have successfully subscribed to the Sinceva newsletter! Stay tuned for beauty tips and exclusive offers.',
            'ar' => 'لقد اشتركت بنجاح في نشرة Sinceva الإخبارية! ترقبوا نصائح الجمال والعروض الحصرية.'
        ],
        'already_confirmed' => [
            'tr' => 'E-posta adresiniz zaten onaylanmış. Bültene abone olduğunuz için teşekkür ederiz!',
            'en' => 'Your email address is already confirmed. Thank you for subscribing to our newsletter!',
            'ar' => 'عنوان بريدك الإلكتروني مؤكد بالفعل. شكراً لاشتراكك في نشرتنا الإخبارية!'
        ],
        'error' => [
            'tr' => 'Geçersiz veya süresi dolmuş onay bağlantısı. Lütfen tekrar abone olmayı deneyin.',
            'en' => 'Invalid or expired confirmation link. Please try subscribing again.',
            'ar' => 'رابط التأكيد غير صالح أو منتهي الصلاحية. يرجى محاولة الاشتراك مرة أخرى.'
        ]
    ];
    
    $buttonTexts = [
        'tr' => 'Ana Sayfaya Dön',
        'en' => 'Return to Homepage',
        'ar' => 'العودة إلى الصفحة الرئيسية'
    ];
    
    $title = $titles[$status][$lang];
    $message = $messages[$status][$lang];
    $buttonText = $buttonTexts[$lang];
    $icon = $status === 'success' ? '✓' : ($status === 'already_confirmed' ? 'ℹ' : '✕');
    $iconColor = $status === 'success' ? '#27ae60' : ($status === 'already_confirmed' ? '#3498db' : '#e74c3c');
    
    echo "<!DOCTYPE html>
<html lang='$lang' dir='$dir'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>$title - Sinceva</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 16px;
            padding: 50px 40px;
            text-align: center;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }
        .icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: $iconColor;
            color: white;
            font-size: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
        }
        h1 {
            color: #2c3e50;
            font-size: 28px;
            margin-bottom: 15px;
        }
        p {
            color: #666;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 30px;
        }
        .button {
            display: inline-block;
            background: #D4AF37;
            color: white;
            padding: 15px 35px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
            transition: background 0.3s;
        }
        .button:hover {
            background: #b8962e;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #D4AF37;
            margin-bottom: 30px;
            letter-spacing: 3px;
        }
    </style>
</head>
<body>
    <div class='container'>
        <div class='logo'>SINCEVA</div>
        <div class='icon'>$icon</div>
        <h1>$title</h1>
        <p>$message</p>
        <a href='" . ALLOWED_ORIGIN . "' class='button'>$buttonText</a>
    </div>
</body>
</html>";
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
