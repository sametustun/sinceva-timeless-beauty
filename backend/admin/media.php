<?php
/**
 * Media Management API
 * GET /admin/media.php - List files and folders
 * POST /admin/media.php - Create folder
 * DELETE /admin/media.php - Delete file
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

define('UPLOAD_DIR', dirname(__DIR__) . '/uploads/');

// Ensure upload directory exists
if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $folder = sanitizeInput($_GET['folder'] ?? '');
        
        // Prevent directory traversal
        $folder = str_replace(['..', '\\'], '', $folder);
        $targetDir = UPLOAD_DIR . $folder;
        
        if (!is_dir($targetDir)) {
            $targetDir = UPLOAD_DIR;
            $folder = '';
        }
        
        $folders = [];
        $files = [];
        
        $items = scandir($targetDir);
        foreach ($items as $item) {
            if ($item === '.' || $item === '..' || $item === '.htaccess') continue;
            
            $path = $targetDir . '/' . $item;
            
            if (is_dir($path)) {
                // Count files in folder
                $fileCount = 0;
                $folderItems = scandir($path);
                foreach ($folderItems as $fi) {
                    if ($fi !== '.' && $fi !== '..' && !is_dir($path . '/' . $fi)) {
                        $fileCount++;
                    }
                }
                
                $folders[] = [
                    'name' => $item,
                    'path' => $folder ? $folder . '/' . $item : $item,
                    'count' => $fileCount,
                ];
            } else {
                // Check if it's an image
                $ext = strtolower(pathinfo($item, PATHINFO_EXTENSION));
                $allowedExts = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                
                if (in_array($ext, $allowedExts)) {
                    $baseUrl = rtrim($_ENV['UPLOAD_URL'] ?? 'https://sinceva.com/api/uploads', '/');
                    $fileUrl = $baseUrl . ($folder ? '/' . $folder : '') . '/' . $item;
                    
                    $files[] = [
                        'name' => $item,
                        'url' => $fileUrl,
                        'size' => filesize($path),
                        'type' => mime_content_type($path),
                        'created_at' => date('c', filemtime($path)),
                    ];
                }
            }
        }
        
        // Sort folders alphabetically
        usort($folders, fn($a, $b) => strcasecmp($a['name'], $b['name']));
        
        // Sort files by date (newest first)
        usort($files, fn($a, $b) => strtotime($b['created_at']) - strtotime($a['created_at']));
        
        respondSuccess([
            'folder' => $folder,
            'folders' => $folders,
            'files' => $files,
        ]);
        break;
        
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($input['action'])) {
            respondError('MISSING_ACTION');
        }
        
        if ($input['action'] === 'create_folder') {
            $name = sanitizeInput($input['name'] ?? '');
            $parent = sanitizeInput($input['parent'] ?? '');
            
            if (empty($name)) {
                respondError('MISSING_FOLDER_NAME');
            }
            
            // Sanitize folder name
            $name = preg_replace('/[^a-zA-Z0-9_-]/', '', $name);
            if (empty($name)) {
                respondError('INVALID_FOLDER_NAME');
            }
            
            // Prevent directory traversal
            $parent = str_replace(['..', '\\'], '', $parent);
            
            $targetDir = UPLOAD_DIR . ($parent ? $parent . '/' : '') . $name;
            
            if (is_dir($targetDir)) {
                respondError('FOLDER_EXISTS');
            }
            
            if (mkdir($targetDir, 0755, true)) {
                logAdminAction('CREATE_FOLDER', ['folder' => $name, 'parent' => $parent]);
                respondSuccess(['folder' => $name]);
            } else {
                respondError('CREATE_FAILED', 500);
            }
        }
        
        respondError('INVALID_ACTION');
        break;
        
    case 'DELETE':
        $input = json_decode(file_get_contents('php://input'), true);
        
        $file = sanitizeInput($input['file'] ?? '');
        $folder = sanitizeInput($input['folder'] ?? '');
        
        if (empty($file)) {
            respondError('MISSING_FILE');
        }
        
        // Prevent directory traversal
        $file = str_replace(['..', '\\', '/'], '', $file);
        $folder = str_replace(['..', '\\'], '', $folder);
        
        $filePath = UPLOAD_DIR . ($folder ? $folder . '/' : '') . $file;
        
        if (!file_exists($filePath)) {
            respondError('FILE_NOT_FOUND', 404);
        }
        
        if (is_dir($filePath)) {
            respondError('CANNOT_DELETE_FOLDER');
        }
        
        if (unlink($filePath)) {
            logAdminAction('DELETE_FILE', ['file' => $file, 'folder' => $folder]);
            respondSuccess(['deleted' => $file]);
        } else {
            respondError('DELETE_FAILED', 500);
        }
        break;
        
    default:
        respondError('METHOD_NOT_ALLOWED', 405);
}
