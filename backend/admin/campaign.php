<?php
/**
 * Email Campaign Handler
 * POST /admin/campaign.php - Send campaign email to subscribers
 */

require_once __DIR__ . '/config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once dirname(__DIR__) . '/vendor/autoload.php';

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

$input = json_decode(file_get_contents('php://input'), true);

$subject = sanitizeInput($input['subject'] ?? '');
$message = $input['message'] ?? '';
$selectedEmails = $input['emails'] ?? []; // Array of emails or 'all'
$sendToAll = $input['send_to_all'] ?? false;

// Validation
if (empty($subject) || empty($message)) {
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
    // Validate that selected emails are confirmed subscribers
    $confirmedEmails = array_map(fn($s) => $s['email'], $confirmedSubscribers);
    $recipients = array_intersect($selectedEmails, $confirmedEmails);
}

if (empty($recipients)) {
    respondError('NO_VALID_RECIPIENTS');
}

// SMTP Configuration - Turkticaret SMTP (SSL/465)
$smtpHost = $_ENV['SMTP_HOST'] ?? 'smtp.turkticaret.net';
$smtpPort = intval($_ENV['SMTP_PORT'] ?? 465);
$smtpUser = $_ENV['SMTP_USER'] ?? 'info@sinceva.com';
$smtpPass = $_ENV['SMTP_PASS'] ?? '';
$fromEmail = $smtpUser; // From MUST match SMTP_USER
$fromName = 'SincEva';

$successCount = 0;
$failedEmails = [];

// HTML email template
$htmlTemplate = '
<!DOCTYPE html>
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
                                {{MESSAGE}}
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

$htmlContent = str_replace('{{MESSAGE}}', nl2br(htmlspecialchars($message)), $htmlTemplate);

foreach ($recipients as $email) {
    try {
        $mail = new PHPMailer(true);
        
        // SMTP settings - Turkticaret (SSL/465)
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL for port 465
        $mail->Port = $smtpPort;
        $mail->CharSet = 'UTF-8';
        
        // Recipients
        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($email);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $htmlContent;
        $mail->AltBody = strip_tags($message);
        
        $mail->send();
        $successCount++;
        
        // Small delay to avoid overwhelming the SMTP server
        usleep(100000); // 0.1 second
        
    } catch (Exception $e) {
        $failedEmails[] = $email;
        error_log('Campaign email failed for ' . $email . ': ' . $e->getMessage());
    }
}

// Log campaign
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
