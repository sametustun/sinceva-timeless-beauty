<?php
/**
 * User Cart Sync Endpoint
 * GET /auth/cart.php - Get user cart
 * POST /auth/cart.php - Save user cart
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if (!isUserAuthenticated()) {
    respondError('UNAUTHORIZED', 401);
}

$userId = getCurrentUserId();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cart = getUserCart($userId);
    respondSuccess(['cart' => $cart]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['cart']) || !is_array($input['cart'])) {
        respondError('INVALID_CART_DATA');
    }
    
    saveUserCart($userId, $input['cart']);
    respondSuccess(['message' => 'Cart saved successfully']);
}

respondError('METHOD_NOT_ALLOWED', 405);
