<?php
/**
 * User Registration Endpoint
 * POST /auth/register.php
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

// Validate email
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respondError('INVALID_EMAIL');
}

// Validate password
if (empty($password) || strlen($password) < 6) {
    respondError('PASSWORD_TOO_SHORT');
}

// Check if user already exists
if (findUserByEmail($email)) {
    respondError('EMAIL_ALREADY_EXISTS');
}

// Create user
$user = createUser($email, $password, 'email');

// Set session
setUserSession($user);

respondSuccess([
    'message' => 'Registration successful',
    'user' => $user
]);
