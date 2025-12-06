<?php
/**
 * Real-time Notifications Endpoint
 * GET /admin/notifications.php - Get recent notifications
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

// Get last check timestamp from query
$lastCheck = $_GET['since'] ?? null;
$lastCheckTime = $lastCheck ? strtotime($lastCheck) : strtotime('-1 hour');

$notifications = [];

// Check for new subscribers
$subscribers = readJsonFile(SUBSCRIBERS_FILE);
foreach ($subscribers as $subscriber) {
    $createdAt = strtotime($subscriber['created_at'] ?? '0');
    if ($createdAt > $lastCheckTime) {
        $notifications[] = [
            'id' => 'sub_' . ($subscriber['id'] ?? uniqid()),
            'type' => 'subscriber',
            'title' => 'Yeni Abone',
            'message' => ($subscriber['email'] ?? 'Bilinmeyen') . ' abone oldu',
            'created_at' => $subscriber['created_at'] ?? date('Y-m-d H:i:s'),
            'read' => false,
            'icon' => 'user-plus'
        ];
    }
}

// Check for new contacts
$contacts = readJsonFile(CONTACTS_FILE);
foreach ($contacts as $contact) {
    $createdAt = strtotime($contact['created_at'] ?? '0');
    if ($createdAt > $lastCheckTime) {
        $notifications[] = [
            'id' => 'contact_' . ($contact['id'] ?? uniqid()),
            'type' => 'contact',
            'title' => 'Yeni Mesaj',
            'message' => ($contact['name'] ?? 'Bilinmeyen') . ' mesaj gönderdi',
            'created_at' => $contact['created_at'] ?? date('Y-m-d H:i:s'),
            'read' => $contact['read'] ?? false,
            'icon' => 'mail'
        ];
    }
}

// Sort by created_at descending
usort($notifications, function($a, $b) {
    return strtotime($b['created_at']) - strtotime($a['created_at']);
});

// Limit to 20 most recent
$notifications = array_slice($notifications, 0, 20);

// Count unread
$unreadCount = count(array_filter($notifications, fn($n) => !$n['read']));

respondSuccess([
    'notifications' => $notifications,
    'unread_count' => $unreadCount,
    'server_time' => date('Y-m-d H:i:s')
]);
