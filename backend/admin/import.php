<?php
/**
 * Data Import Handler
 * POST /admin/import.php - Import products and blog posts from static data
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

$input = json_decode(file_get_contents('php://input'), true);
$type = $input['type'] ?? '';
$data = $input['data'] ?? [];

if (empty($type) || empty($data)) {
    respondError('MISSING_DATA');
}

switch ($type) {
    case 'products':
        $products = readJsonFile(PRODUCTS_FILE);
        $imported = 0;
        
        foreach ($data as $productData) {
            // Check if product already exists by ID
            $exists = false;
            foreach ($products as $p) {
                if (($p['id'] ?? '') === ($productData['id'] ?? '')) {
                    $exists = true;
                    break;
                }
            }
            
            if (!$exists) {
                $products[] = [
                    'id' => $productData['id'] ?? generateId(),
                    'name' => $productData['name'] ?? ['tr' => '', 'en' => '', 'ar' => ''],
                    'slug' => $productData['slug'] ?? '',
                    'description' => $productData['description'] ?? ['tr' => '', 'en' => '', 'ar' => ''],
                    'short_description' => $productData['short_description'] ?? ['tr' => '', 'en' => '', 'ar' => ''],
                    'category' => $productData['category'] ?? '',
                    'images' => $productData['images'] ?? [],
                    'volume' => $productData['volume'] ?? '',
                    'price' => $productData['price'] ?? null,
                    'active' => true,
                    'featured' => $productData['featured'] ?? false,
                    'seo' => $productData['seo'] ?? [
                        'title' => ['tr' => '', 'en' => '', 'ar' => ''],
                        'description' => ['tr' => '', 'en' => '', 'ar' => ''],
                        'keywords' => ['tr' => '', 'en' => '', 'ar' => ''],
                    ],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ];
                $imported++;
            }
        }
        
        if (writeJsonFile(PRODUCTS_FILE, $products)) {
            logAdminAction('IMPORT_PRODUCTS', ['imported' => $imported]);
            respondSuccess([
                'message' => "$imported ürün import edildi",
                'imported' => $imported,
                'total' => count($products)
            ]);
        } else {
            respondError('WRITE_FAILED', 500);
        }
        break;
        
    case 'blog':
        $posts = readJsonFile(BLOG_FILE);
        $imported = 0;
        
        foreach ($data as $postData) {
            // Check if post already exists by ID
            $exists = false;
            foreach ($posts as $p) {
                if (($p['id'] ?? '') === ($postData['id'] ?? '')) {
                    $exists = true;
                    break;
                }
            }
            
            if (!$exists) {
                $posts[] = [
                    'id' => $postData['id'] ?? generateId(),
                    'title' => $postData['title'] ?? ['tr' => '', 'en' => '', 'ar' => ''],
                    'slug' => $postData['slug'] ?? '',
                    'excerpt' => $postData['excerpt'] ?? ['tr' => '', 'en' => '', 'ar' => ''],
                    'content' => $postData['content'] ?? ['tr' => '', 'en' => '', 'ar' => ''],
                    'image' => $postData['image'] ?? '',
                    'category' => $postData['category'] ?? '',
                    'published' => $postData['published'] ?? true,
                    'seo' => $postData['seo'] ?? [
                        'title' => ['tr' => '', 'en' => '', 'ar' => ''],
                        'description' => ['tr' => '', 'en' => '', 'ar' => ''],
                        'keywords' => ['tr' => '', 'en' => '', 'ar' => ''],
                    ],
                    'created_at' => $postData['date'] ?? date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ];
                $imported++;
            }
        }
        
        if (writeJsonFile(BLOG_FILE, $posts)) {
            logAdminAction('IMPORT_BLOG', ['imported' => $imported]);
            respondSuccess([
                'message' => "$imported blog yazısı import edildi",
                'imported' => $imported,
                'total' => count($posts)
            ]);
        } else {
            respondError('WRITE_FAILED', 500);
        }
        break;
        
    default:
        respondError('INVALID_TYPE');
}
