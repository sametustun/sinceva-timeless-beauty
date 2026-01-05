<?php
/**
 * Email Campaign Handler
 * POST /admin/campaign.php - Send campaign email to subscribers
 * Supports HTML content with images
 */

require_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once dirname(__DIR__) . '/vendor/autoload.php';

// ============ IMPROVED .ENV PARSING ============
// Load .env with proper quote handling (same as subscribe.php)
$envPath = dirname(__DIR__) . '/.env';
if (file_exists($envPath)) {
    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        // Skip comments
        if (empty($line) || $line[0] === '#') {
            continue;
        }
        // Parse key=value
        $eqPos = strpos($line, '=');
        if ($eqPos === false) {
            continue;
        }
        $key = trim(substr($line, 0, $eqPos));
        $value = trim(substr($line, $eqPos + 1));
        
        // Remove surrounding quotes if present
        $len = strlen($value);
        if ($len >= 2) {
            $first = $value[0];
            $last = $value[$len - 1];
            if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                $value = substr($value, 1, $len - 2);
            }
        }
        
        $_ENV[$key] = $value;
        putenv("$key=$value");
    }
}

// Ensure logs directory exists
$logsDir = dirname(__DIR__) . '/logs';
if (!is_dir($logsDir)) {
    mkdir($logsDir, 0755, true);
}

// Log function for debugging
function logCampaign($type, $data) {
    global $logsDir;
    $logFile = $logsDir . '/campaign.log';
    $entry = date('Y-m-d H:i:s') . " [$type] " . json_encode($data, JSON_UNESCAPED_UNICODE) . "\n";
    file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX);
}

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

$input = json_decode(file_get_contents('php://input'), true);

$subject = sanitizeInput($input['subject'] ?? '');
$htmlContent = $input['html_content'] ?? ''; // Rich HTML content with images
$message = $input['message'] ?? ''; // Plain text fallback
$selectedEmails = $input['emails'] ?? [];
$sendToAll = $input['send_to_all'] ?? false;

// Validation
if (empty($subject) || (empty($htmlContent) && empty($message))) {
    respondError('MISSING_FIELDS');
}

// Get subscribers
$subscribers = readJsonFile(SUBSCRIBERS_FILE);
$confirmedSubscribers = array_filter($subscribers, fn($s) => $s['confirmed'] ?? false);

// Determine recipients
$recipients = [];
if ($sendToAll) {
    $recipients = array_map(fn($s) => $s['email'], $confirmedSubscribers);
} else {
    if (empty($selectedEmails)) {
        respondError('NO_RECIPIENTS');
    }
    $confirmedEmails = array_map(fn($s) => $s['email'], $confirmedSubscribers);
    $recipients = array_intersect($selectedEmails, $confirmedEmails);
}

if (empty($recipients)) {
    respondError('NO_VALID_RECIPIENTS');
}

// ============ SMTP CONFIGURATION ============
// Try mail.sinceva.com first (cPanel default), fallback to turkticaret
$smtpHost = $_ENV['SMTP_HOST'] ?? 'mail.sinceva.com';
$smtpPort = intval($_ENV['SMTP_PORT'] ?? 587);
$smtpSecure = $_ENV['SMTP_SECURE'] ?? 'tls';
$smtpUser = $_ENV['SMTP_USER'] ?? 'info@sinceva.com';
$smtpPass = $_ENV['SMTP_PASS'] ?? '';
$fromEmail = $smtpUser;
$fromName = 'SincEva';

// Log SMTP config (password masked)
logCampaign('SMTP_CONFIG', [
    'host' => $smtpHost,
    'port' => $smtpPort,
    'secure' => $smtpSecure,
    'user' => $smtpUser,
    'pass_length' => strlen($smtpPass),
    'recipients_count' => count($recipients)
]);

$successCount = 0;
$failedEmails = [];

// Build HTML email from content or use template
if (!empty($htmlContent)) {
    // User provided rich HTML - wrap it in email template
    $emailHtml = '<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        img { max-width: 100%; height: auto; display: block; }
    </style>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f4;">
        <tr>
            <td align="center" style="padding:40px 20px;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background:linear-gradient(135deg,#E53935,#FF6B6B);padding:24px;text-align:center;">
                            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;">SincEva</h1>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding:32px;">
                            ' . $htmlContent . '
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="background-color:#f8f9fa;padding:24px 32px;text-align:center;border-top:1px solid #e9ecef;">
                            <p style="margin:0 0 8px;color:#6c757d;font-size:14px;">SincEva Kozmetik</p>
                            <p style="margin:0 0 16px;color:#adb5bd;font-size:12px;">www.sinceva.com</p>
                            <p style="margin:0;color:#adb5bd;font-size:11px;">
                                <a href="https://sinceva.com/unsubscribe" style="color:#adb5bd;">Abonelikten çık</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>';
} else {
    // Plain text message - convert to HTML
    $emailHtml = '<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen,Ubuntu,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f4;">
        <tr>
            <td align="center" style="padding:40px 20px;">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background:linear-gradient(135deg,#E53935,#FF6B6B);padding:32px;text-align:center;">
                            <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">SincEva</h1>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding:40px 32px;">
                            <div style="color:#333333;font-size:16px;line-height:1.6;">
                                ' . nl2br(htmlspecialchars($message)) . '
                            </div>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="background-color:#f8f9fa;padding:24px 32px;text-align:center;border-top:1px solid #e9ecef;">
                            <p style="margin:0 0 8px;color:#6c757d;font-size:14px;">SincEva Kozmetik</p>
                            <p style="margin:0 0 16px;color:#adb5bd;font-size:12px;">www.sinceva.com</p>
                            <p style="margin:0;color:#adb5bd;font-size:11px;">
                                <a href="https://sinceva.com/unsubscribe" style="color:#adb5bd;">Abonelikten çık</a>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>';
}

// Plain text version
$plainText = !empty($message) ? $message : strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $htmlContent));

foreach ($recipients as $email) {
    try {
        $mail = new PHPMailer(true);
        
        // SMTP Debug logging (temporary)
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {
            logCampaign('SMTP_DEBUG', ['level' => $level, 'msg' => trim($str)]);
        };
        
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->CharSet = 'UTF-8';
        
        // Set encryption based on port/config
        if ($smtpSecure === 'ssl' || $smtpPort == 465) {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;
        } else {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $smtpPort ?: 587;
        }
        
        // Timeout settings
        $mail->Timeout = 30;
        $mail->SMTPKeepAlive = true;
        
        // Recipients
        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($email);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $emailHtml;
        $mail->AltBody = $plainText;
        
        $mail->send();
        $successCount++;
        
        logCampaign('EMAIL_SENT', ['to' => $email, 'subject' => $subject]);
        
        // Small delay to avoid overwhelming the SMTP server
        usleep(200000); // 0.2 second
        
    } catch (Exception $e) {
        $failedEmails[] = $email;
        logCampaign('EMAIL_FAILED', [
            'to' => $email,
            'error' => $e->getMessage()
        ]);
    }
}

// Log campaign summary
logAdminAction('SEND_CAMPAIGN', [
    'subject' => $subject,
    'total_recipients' => count($recipients),
    'success_count' => $successCount,
    'failed_count' => count($failedEmails)
]);

respondSuccess([
    'message' => 'Campaign sent',
    'total' => count($recipients),
    'success' => $successCount,
    'failed' => count($failedEmails),
    'failed_emails' => $failedEmails
]);
