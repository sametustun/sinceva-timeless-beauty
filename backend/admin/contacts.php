<?php
/**
 * Contact Messages Management Endpoint
 * GET /admin/contacts.php - List all contact messages
 * PUT /admin/contacts.php - Mark message as read
 * DELETE /admin/contacts.php?id=xxx - Delete message
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // List all contacts
        $contacts = readJsonFile(CONTACTS_FILE);
        
        // Sort by created_at descending
        usort($contacts, function($a, $b) {
            return strtotime($b['created_at'] ?? '0') - strtotime($a['created_at'] ?? '0');
        });
        
        // Calculate stats
        $total = count($contacts);
        $unread = count(array_filter($contacts, fn($c) => !($c['read'] ?? false)));
        
        respondSuccess([
            'contacts' => $contacts,
            'stats' => [
                'total' => $total,
                'unread' => $unread
            ]
        ]);
        break;
        
    case 'PUT':
        // Mark as read/unread
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'] ?? '';
        $read = $input['read'] ?? true;
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $contacts = readJsonFile(CONTACTS_FILE);
        $found = false;
        
        foreach ($contacts as &$contact) {
            if (($contact['id'] ?? '') === $id) {
                $contact['read'] = $read;
                $contact['read_at'] = $read ? date('Y-m-d H:i:s') : null;
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            respondError('CONTACT_NOT_FOUND', 404);
        }
        
        if (writeJsonFile(CONTACTS_FILE, $contacts)) {
            logAdminAction('UPDATE_CONTACT', ['id' => $id, 'read' => $read]);
            respondSuccess(['message' => 'Contact updated']);
        } else {
            respondError('UPDATE_FAILED', 500);
        }
        break;
        
    case 'DELETE':
        // Delete contact
        $id = $_GET['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $contacts = readJsonFile(CONTACTS_FILE);
        $initialCount = count($contacts);
        
        $contacts = array_filter($contacts, fn($c) => ($c['id'] ?? '') !== $id);
        
        if (count($contacts) === $initialCount) {
            respondError('CONTACT_NOT_FOUND', 404);
        }
        
        $contacts = array_values($contacts);
        
        if (writeJsonFile(CONTACTS_FILE, $contacts)) {
            logAdminAction('DELETE_CONTACT', ['id' => $id]);
            respondSuccess(['message' => 'Contact deleted']);
        } else {
            respondError('DELETE_FAILED', 500);
        }
        break;
        
    default:
        respondError('METHOD_NOT_ALLOWED', 405);
}
