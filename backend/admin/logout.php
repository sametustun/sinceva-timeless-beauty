<?php
/**
 * Admin Logout Endpoint
 * POST /admin/logout.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

logAdminAction('LOGOUT');

// Destroy session
session_unset();
session_destroy();

respondSuccess(['message' => 'Logged out successfully']);
