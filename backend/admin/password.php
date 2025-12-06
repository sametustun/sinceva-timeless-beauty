<?php
/**
 * Password Management Endpoint
 * PUT /admin/password.php - Change admin password
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    respondError('INVALID_JSON');
}

$currentPassword = $input['currentPassword'] ?? '';
$newPassword = $input['newPassword'] ?? '';
$confirmPassword = $input['confirmPassword'] ?? '';

// Validate inputs
if (empty($currentPassword) || empty($newPassword) || empty($confirmPassword)) {
    respondError('MISSING_FIELDS');
}

// Validate new password length
if (strlen($newPassword) < 8) {
    respondError('PASSWORD_TOO_SHORT');
}

// Check if passwords match
if ($newPassword !== $confirmPassword) {
    respondError('PASSWORDS_NOT_MATCH');
}

// Verify current password
if (!password_verify($currentPassword, ADMIN_PASSWORD_HASH)) {
    respondError('INVALID_CURRENT_PASSWORD', 401);
}

// Generate new password hash
$newHash = password_hash($newPassword, PASSWORD_DEFAULT);

// Update .env file
$envFile = dirname(__DIR__) . '/.env';

if (file_exists($envFile)) {
    $envContent = file_get_contents($envFile);
    
    // Check if ADMIN_PASSWORD_HASH exists
    if (preg_match('/^ADMIN_PASSWORD_HASH=.*/m', $envContent)) {
        $envContent = preg_replace(
            '/^ADMIN_PASSWORD_HASH=.*/m',
            'ADMIN_PASSWORD_HASH=' . $newHash,
            $envContent
        );
    } else {
        $envContent .= "\nADMIN_PASSWORD_HASH=" . $newHash;
    }
    
    if (file_put_contents($envFile, $envContent) === false) {
        respondError('UPDATE_FAILED', 500);
    }
} else {
    // Create new .env file with password
    $envContent = "ADMIN_PASSWORD_HASH=" . $newHash . "\n";
    if (file_put_contents($envFile, $envContent) === false) {
        respondError('UPDATE_FAILED', 500);
    }
}

logAdminAction('PASSWORD_CHANGED', [
    'admin' => $_SESSION['admin_email'] ?? ADMIN_EMAIL
]);

respondSuccess(['message' => 'Password updated successfully']);
