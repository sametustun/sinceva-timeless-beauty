<?php
/**
 * Category Management API
 * GET/POST/PUT/DELETE /admin/categories.php
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

define('CATEGORIES_FILE', DATA_DIR . '/categories.json');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $categories = readJsonFile(CATEGORIES_FILE);
        respondSuccess([
            'categories' => $categories,
            'total' => count($categories),
        ]);
        break;

    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['title']['tr'])) {
            respondError('MISSING_TITLE');
        }
        
        $categories = readJsonFile(CATEGORIES_FILE);
        
        $newCategory = [
            'id' => $input['id'] ?? generateId('cat'),
            'title' => [
                'tr' => sanitizeInput($input['title']['tr'] ?? ''),
                'en' => sanitizeInput($input['title']['en'] ?? ''),
                'ar' => sanitizeInput($input['title']['ar'] ?? ''),
            ],
            'slug' => $input['slug'] ?? createSlug($input['title']['tr']),
            'description' => [
                'tr' => sanitizeInput($input['description']['tr'] ?? ''),
                'en' => sanitizeInput($input['description']['en'] ?? ''),
                'ar' => sanitizeInput($input['description']['ar'] ?? ''),
            ],
            'bannerImage' => $input['bannerImage'] ?? '',
            'subcategories' => $input['subcategories'] ?? [],
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ];
        
        $categories[] = $newCategory;
        
        if (writeJsonFile(CATEGORIES_FILE, $categories)) {
            logAdminAction('CREATE_CATEGORY', ['id' => $newCategory['id'], 'title' => $newCategory['title']['tr']]);
            respondSuccess([
                'message' => 'Kategori oluşturuldu',
                'category' => $newCategory,
            ]);
        } else {
            respondError('WRITE_FAILED', 500);
        }
        break;

    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['id'])) {
            respondError('MISSING_ID');
        }
        
        $categories = readJsonFile(CATEGORIES_FILE);
        $found = false;
        
        foreach ($categories as &$category) {
            if ($category['id'] === $input['id']) {
                if (isset($input['title'])) {
                    $category['title'] = [
                        'tr' => sanitizeInput($input['title']['tr'] ?? $category['title']['tr'] ?? ''),
                        'en' => sanitizeInput($input['title']['en'] ?? $category['title']['en'] ?? ''),
                        'ar' => sanitizeInput($input['title']['ar'] ?? $category['title']['ar'] ?? ''),
                    ];
                }
                if (isset($input['slug'])) {
                    $category['slug'] = $input['slug'];
                }
                if (isset($input['description'])) {
                    $category['description'] = [
                        'tr' => sanitizeInput($input['description']['tr'] ?? $category['description']['tr'] ?? ''),
                        'en' => sanitizeInput($input['description']['en'] ?? $category['description']['en'] ?? ''),
                        'ar' => sanitizeInput($input['description']['ar'] ?? $category['description']['ar'] ?? ''),
                    ];
                }
                if (isset($input['bannerImage'])) {
                    $category['bannerImage'] = $input['bannerImage'];
                }
                if (isset($input['subcategories'])) {
                    $category['subcategories'] = $input['subcategories'];
                }
                $category['updated_at'] = date('Y-m-d H:i:s');
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            respondError('CATEGORY_NOT_FOUND', 404);
        }
        
        if (writeJsonFile(CATEGORIES_FILE, $categories)) {
            logAdminAction('UPDATE_CATEGORY', ['id' => $input['id']]);
            respondSuccess([
                'message' => 'Kategori güncellendi',
            ]);
        } else {
            respondError('WRITE_FAILED', 500);
        }
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $categories = readJsonFile(CATEGORIES_FILE);
        $initialCount = count($categories);
        $categories = array_filter($categories, fn($c) => $c['id'] !== $id);
        
        if (count($categories) === $initialCount) {
            respondError('CATEGORY_NOT_FOUND', 404);
        }
        
        if (writeJsonFile(CATEGORIES_FILE, array_values($categories))) {
            logAdminAction('DELETE_CATEGORY', ['id' => $id]);
            respondSuccess([
                'message' => 'Kategori silindi',
            ]);
        } else {
            respondError('WRITE_FAILED', 500);
        }
        break;

    default:
        respondError('METHOD_NOT_ALLOWED', 405);
}

function createSlug(string $text): string {
    $text = mb_strtolower($text, 'UTF-8');
    $text = str_replace(['ı', 'ğ', 'ü', 'ş', 'ö', 'ç', 'İ', 'Ğ', 'Ü', 'Ş', 'Ö', 'Ç'], 
                       ['i', 'g', 'u', 's', 'o', 'c', 'i', 'g', 'u', 's', 'o', 'c'], $text);
    $text = preg_replace('/[^a-z0-9]+/', '-', $text);
    $text = trim($text, '-');
    return $text;
}
