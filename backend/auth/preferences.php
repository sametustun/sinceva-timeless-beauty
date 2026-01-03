<?php
/**
 * User Preferences Sync Endpoint
 * GET /auth/preferences.php - Get user preferences
 * POST /auth/preferences.php - Save user preferences
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();

if (!isUserAuthenticated()) {
    respondError('UNAUTHORIZED', 401);
}

$userId = getCurrentUserId();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $preferences = getUserPreferences($userId);
    respondSuccess(['preferences' => $preferences]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['preferences']) || !is_array($input['preferences'])) {
        respondError('INVALID_PREFERENCES_DATA');
    }
    
    saveUserPreferences($userId, $input['preferences']);
    respondSuccess(['message' => 'Preferences saved successfully']);
}

respondError('METHOD_NOT_ALLOWED', 405);
