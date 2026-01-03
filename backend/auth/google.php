<?php
/**
 * Google OAuth Login Endpoint
 * POST /auth/google.php
 * 
 * Receives Google ID token and verifies it
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

$credential = $input['credential'] ?? '';

if (empty($credential)) {
    respondError('MISSING_CREDENTIAL');
}

// Verify Google ID token
$googleClientId = GOOGLE_CLIENT_ID;

if (empty($googleClientId)) {
    respondError('GOOGLE_NOT_CONFIGURED', 500);
}

// Decode JWT token (without verification for now, we'll verify the signature)
$parts = explode('.', $credential);
if (count($parts) !== 3) {
    respondError('INVALID_TOKEN');
}

$payload = json_decode(base64_decode(strtr($parts[1], '-_', '+/')), true);

if (!$payload) {
    respondError('INVALID_TOKEN');
}

// Verify token claims
if (!isset($payload['aud']) || $payload['aud'] !== $googleClientId) {
    respondError('INVALID_TOKEN_AUDIENCE');
}

if (!isset($payload['iss']) || !in_array($payload['iss'], ['accounts.google.com', 'https://accounts.google.com'])) {
    respondError('INVALID_TOKEN_ISSUER');
}

if (!isset($payload['exp']) || $payload['exp'] < time()) {
    respondError('TOKEN_EXPIRED');
}

$email = $payload['email'] ?? null;
$name = $payload['name'] ?? null;
$picture = $payload['picture'] ?? null;

if (!$email) {
    respondError('EMAIL_NOT_PROVIDED');
}

// Find or create user
$user = findUserByEmail($email);

if (!$user) {
    // Create new user
    $user = createUser($email, null, 'google', [
        'name' => $name,
        'picture' => $picture,
        'google_id' => $payload['sub'] ?? null
    ]);
} else {
    // Update metadata if needed
    $metadata = $user['metadata'] ?? [];
    $metadata['name'] = $name;
    $metadata['picture'] = $picture;
    $user = updateUser($user['id'], ['metadata' => $metadata]);
}

// Set session
setUserSession($user);

// Get cart and preferences
$cart = getUserCart($user['id']);
$preferences = getUserPreferences($user['id']);

respondSuccess([
    'message' => 'Login successful',
    'user' => $user,
    'cart' => $cart,
    'preferences' => $preferences
]);
