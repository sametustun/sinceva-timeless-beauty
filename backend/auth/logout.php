<?php
/**
 * User Logout Endpoint
 * POST /auth/logout.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

clearUserSession();

respondSuccess(['message' => 'Logged out successfully']);
