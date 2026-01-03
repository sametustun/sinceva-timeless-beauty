<?php
/**
 * User Login Endpoint
 * POST /auth/login.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    respondError('INVALID_JSON');
}

$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

// Validate input
if (empty($email) || empty($password)) {
    respondError('MISSING_CREDENTIALS');
}

// Find user
$user = findUserByEmail($email);

if (!$user) {
    respondError('INVALID_CREDENTIALS', 401);
}

// Check if user registered with OAuth
if ($user['provider'] !== 'email') {
    respondError('USE_OAUTH_LOGIN');
}

// Verify password
if (!password_verify($password, $user['password'])) {
    respondError('INVALID_CREDENTIALS', 401);
}

// Set session
setUserSession($user);

// Get user cart and preferences
$cart = getUserCart($user['id']);
$preferences = getUserPreferences($user['id']);

// Return user without password
unset($user['password']);

respondSuccess([
    'message' => 'Login successful',
    'user' => $user,
    'cart' => $cart,
    'preferences' => $preferences
]);
