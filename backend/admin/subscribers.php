<?php
/**
 * Subscribers Management Endpoint
 * GET /admin/subscribers.php - List all subscribers
 * DELETE /admin/subscribers.php?id=xxx - Delete subscriber
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // List all subscribers
        $subscribers = readJsonFile(SUBSCRIBERS_FILE);
        
        // Sort by created_at descending
        usort($subscribers, function($a, $b) {
            return strtotime($b['created_at'] ?? '0') - strtotime($a['created_at'] ?? '0');
        });
        
        // Calculate stats
        $total = count($subscribers);
        $confirmed = count(array_filter($subscribers, fn($s) => $s['confirmed'] ?? false));
        $pending = $total - $confirmed;
        
        respondSuccess([
            'subscribers' => $subscribers,
            'stats' => [
                'total' => $total,
                'confirmed' => $confirmed,
                'pending' => $pending
            ]
        ]);
        break;
        
    case 'DELETE':
        // Delete subscriber
        $id = $_GET['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $subscribers = readJsonFile(SUBSCRIBERS_FILE);
        $initialCount = count($subscribers);
        
        $subscribers = array_filter($subscribers, function($s) use ($id) {
            return ($s['id'] ?? $s['email']) !== $id;
        });
        
        if (count($subscribers) === $initialCount) {
            respondError('SUBSCRIBER_NOT_FOUND', 404);
        }
        
        // Re-index array
        $subscribers = array_values($subscribers);
        
        if (writeJsonFile(SUBSCRIBERS_FILE, $subscribers)) {
            logAdminAction('DELETE_SUBSCRIBER', ['id' => $id]);
            respondSuccess(['message' => 'Subscriber deleted']);
        } else {
            respondError('DELETE_FAILED', 500);
        }
        break;
        
    default:
        respondError('METHOD_NOT_ALLOWED', 405);
}
