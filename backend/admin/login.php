<?php
/**
 * Admin Login Endpoint
 * POST /admin/login.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

// Get input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    respondError('INVALID_INPUT');
}

$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

// Validate input
if (empty($email) || empty($password)) {
    respondError('MISSING_CREDENTIALS');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respondError('INVALID_EMAIL');
}

// Check credentials
// For production, use database and proper password hashing
$validEmail = ADMIN_EMAIL;
$validPasswordHash = ADMIN_PASSWORD_HASH;

// Simple credential check (in production, use database)
if ($email === $validEmail && password_verify($password, $validPasswordHash)) {
    // Set session
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['admin_email'] = $email;
    $_SESSION['admin_login_time'] = time();
    
    logAdminAction('LOGIN_SUCCESS', ['email' => $email]);
    
    respondSuccess([
        'message' => 'Login successful',
        'admin' => [
            'email' => $email
        ]
    ]);
} else {
    logAdminAction('LOGIN_FAILED', ['email' => $email]);
    respondError('INVALID_CREDENTIALS', 401);
}
