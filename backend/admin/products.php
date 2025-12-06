<?php
/**
 * Products Management Endpoint
 * GET /admin/products.php - List all products
 * POST /admin/products.php - Create product
 * PUT /admin/products.php - Update product
 * DELETE /admin/products.php?id=xxx - Delete product
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // List all products
        $products = readJsonFile(PRODUCTS_FILE);
        
        // Sort by created_at descending
        usort($products, function($a, $b) {
            return strtotime($b['created_at'] ?? '0') - strtotime($a['created_at'] ?? '0');
        });
        
        respondSuccess([
            'products' => $products,
            'stats' => [
                'total' => count($products),
                'active' => count(array_filter($products, fn($p) => $p['active'] ?? true)),
                'inactive' => count(array_filter($products, fn($p) => !($p['active'] ?? true)))
            ]
        ]);
        break;
        
    case 'POST':
        // Create new product
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            respondError('INVALID_INPUT');
        }
        
        // Validate required fields
        if (empty($input['name'])) {
            respondError('MISSING_NAME');
        }
        
        $product = [
            'id' => generateId(),
            'name' => [
                'tr' => sanitizeInput($input['name']['tr'] ?? $input['name'] ?? ''),
                'en' => sanitizeInput($input['name']['en'] ?? ''),
                'ar' => sanitizeInput($input['name']['ar'] ?? '')
            ],
            'slug' => $input['slug'] ?? createProductSlug($input['name']['tr'] ?? $input['name'] ?? ''),
            'description' => [
                'tr' => $input['description']['tr'] ?? '',
                'en' => $input['description']['en'] ?? '',
                'ar' => $input['description']['ar'] ?? ''
            ],
            'short_description' => [
                'tr' => sanitizeInput($input['short_description']['tr'] ?? ''),
                'en' => sanitizeInput($input['short_description']['en'] ?? ''),
                'ar' => sanitizeInput($input['short_description']['ar'] ?? '')
            ],
            'category' => $input['category'] ?? '',
            'images' => $input['images'] ?? [],
            'ingredients' => $input['ingredients'] ?? [],
            'usage' => [
                'tr' => $input['usage']['tr'] ?? '',
                'en' => $input['usage']['en'] ?? '',
                'ar' => $input['usage']['ar'] ?? ''
            ],
            'benefits' => $input['benefits'] ?? [],
            'volume' => $input['volume'] ?? '',
            'price' => $input['price'] ?? null,
            'active' => $input['active'] ?? true,
            'featured' => $input['featured'] ?? false,
            'order' => $input['order'] ?? 0,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ];
        
        $products = readJsonFile(PRODUCTS_FILE);
        $products[] = $product;
        
        if (writeJsonFile(PRODUCTS_FILE, $products)) {
            logAdminAction('CREATE_PRODUCT', ['id' => $product['id'], 'name' => $product['name']]);
            respondSuccess(['message' => 'Product created', 'product' => $product]);
        } else {
            respondError('CREATE_FAILED', 500);
        }
        break;
        
    case 'PUT':
        // Update product
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $products = readJsonFile(PRODUCTS_FILE);
        $found = false;
        
        foreach ($products as &$product) {
            if ($product['id'] === $id) {
                // Update fields
                $updateableFields = ['name', 'slug', 'description', 'short_description', 'category', 
                                     'images', 'ingredients', 'usage', 'benefits', 'volume', 
                                     'price', 'active', 'featured', 'order'];
                
                foreach ($updateableFields as $field) {
                    if (isset($input[$field])) {
                        if (in_array($field, ['name', 'description', 'short_description', 'usage']) && is_array($input[$field])) {
                            $product[$field] = [
                                'tr' => $field === 'description' || $field === 'usage' 
                                    ? ($input[$field]['tr'] ?? '') 
                                    : sanitizeInput($input[$field]['tr'] ?? ''),
                                'en' => $field === 'description' || $field === 'usage' 
                                    ? ($input[$field]['en'] ?? '') 
                                    : sanitizeInput($input[$field]['en'] ?? ''),
                                'ar' => $field === 'description' || $field === 'usage' 
                                    ? ($input[$field]['ar'] ?? '') 
                                    : sanitizeInput($input[$field]['ar'] ?? '')
                            ];
                        } else {
                            $product[$field] = $input[$field];
                        }
                    }
                }
                
                $product['updated_at'] = date('Y-m-d H:i:s');
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            respondError('PRODUCT_NOT_FOUND', 404);
        }
        
        if (writeJsonFile(PRODUCTS_FILE, $products)) {
            logAdminAction('UPDATE_PRODUCT', ['id' => $id]);
            respondSuccess(['message' => 'Product updated']);
        } else {
            respondError('UPDATE_FAILED', 500);
        }
        break;
        
    case 'DELETE':
        // Delete product
        $id = $_GET['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $products = readJsonFile(PRODUCTS_FILE);
        $initialCount = count($products);
        
        $products = array_filter($products, fn($p) => $p['id'] !== $id);
        
        if (count($products) === $initialCount) {
            respondError('PRODUCT_NOT_FOUND', 404);
        }
        
        $products = array_values($products);
        
        if (writeJsonFile(PRODUCTS_FILE, $products)) {
            logAdminAction('DELETE_PRODUCT', ['id' => $id]);
            respondSuccess(['message' => 'Product deleted']);
        } else {
            respondError('DELETE_FAILED', 500);
        }
        break;
        
    default:
        respondError('METHOD_NOT_ALLOWED', 405);
}

// Helper function to create slug
function createProductSlug(string $text): string {
    $text = mb_strtolower($text, 'UTF-8');
    $text = preg_replace('/[^a-z0-9\s-]/', '', $text);
    $text = preg_replace('/[\s-]+/', '-', $text);
    return trim($text, '-');
}
