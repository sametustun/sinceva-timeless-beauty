<?php
/**
 * Image Upload Handler
 * POST /admin/upload.php - Upload image
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

// Define upload directory
define('UPLOAD_DIR', dirname(__DIR__) . '/uploads/');
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_TYPES', ['image/jpeg', 'image/png', 'image/gif', 'image/webp']);

// Ensure upload directory exists
if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

// Check if file was uploaded
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    $errorCode = $_FILES['image']['error'] ?? 'NO_FILE';
    respondError('UPLOAD_ERROR_' . $errorCode);
}

$file = $_FILES['image'];

// Validate file size
if ($file['size'] > MAX_FILE_SIZE) {
    respondError('FILE_TOO_LARGE');
}

// Validate MIME type
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mimeType, ALLOWED_TYPES)) {
    respondError('INVALID_FILE_TYPE');
}

// Validate image
$imageInfo = getimagesize($file['tmp_name']);
if ($imageInfo === false) {
    respondError('INVALID_IMAGE');
}

// Get category from request (product, blog, general)
$category = sanitizeInput($_POST['category'] ?? 'general');
$allowedCategories = ['product', 'blog', 'general'];
if (!in_array($category, $allowedCategories)) {
    $category = 'general';
}

// Create category subfolder
$categoryDir = UPLOAD_DIR . $category . '/';
if (!is_dir($categoryDir)) {
    mkdir($categoryDir, 0755, true);
}

// Generate unique filename
$extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
if (!in_array($extension, $allowedExtensions)) {
    $extension = 'jpg';
}

$filename = generateId() . '.' . $extension;
$filepath = $categoryDir . $filename;

// Move uploaded file
if (!move_uploaded_file($file['tmp_name'], $filepath)) {
    respondError('MOVE_FAILED', 500);
}

// Set proper permissions
chmod($filepath, 0644);

// Generate URL
$baseUrl = rtrim($_ENV['UPLOAD_URL'] ?? 'https://sinceva.com/api/uploads', '/');
$imageUrl = $baseUrl . '/' . $category . '/' . $filename;

logAdminAction('UPLOAD_IMAGE', [
    'category' => $category,
    'filename' => $filename,
    'size' => $file['size'],
    'type' => $mimeType
]);

respondSuccess([
    'url' => $imageUrl,
    'filename' => $filename,
    'category' => $category,
    'size' => $file['size']
]);
