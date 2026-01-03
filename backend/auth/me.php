<?php
/**
 * Get Current User Endpoint
 * GET /auth/me.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

if (!isUserAuthenticated()) {
    respondSuccess([
        'authenticated' => false,
        'user' => null
    ]);
    exit;
}

$user = getCurrentUser();

if (!$user) {
    clearUserSession();
    respondSuccess([
        'authenticated' => false,
        'user' => null
    ]);
    exit;
}

// Get cart and preferences
$cart = getUserCart($user['id']);
$preferences = getUserPreferences($user['id']);

respondSuccess([
    'authenticated' => true,
    'user' => $user,
    'cart' => $cart,
    'preferences' => $preferences
]);
