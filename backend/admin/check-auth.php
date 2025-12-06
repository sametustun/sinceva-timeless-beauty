<?php
/**
 * Check Authentication Status
 * GET /admin/check-auth.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

if (isAuthenticated()) {
    respondSuccess([
        'authenticated' => true,
        'admin' => [
            'email' => $_SESSION['admin_email'] ?? ''
        ]
    ]);
} else {
    respondSuccess([
        'authenticated' => false
    ]);
}
