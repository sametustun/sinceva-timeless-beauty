<?php
/**
 * Public Products Endpoint (No Auth Required)
 * GET /products-public.php - List all active products with prices
 */

// Load config for CORS and file helpers
require_once __DIR__ . '/admin/config.php';

setCorsHeaders();
handlePreflight();

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Read products file
$productsFile = __DIR__ . '/data/products.json';

if (!file_exists($productsFile)) {
    // Return empty array if file doesn't exist
    echo json_encode(['success' => true, 'products' => []]);
    exit;
}

$products = json_decode(file_get_contents($productsFile), true);

if (!is_array($products)) {
    $products = [];
}

// Filter only active products and return only necessary public fields
$publicProducts = array_filter($products, function($product) {
    return $product['active'] ?? true;
});

// Map to public fields only
$publicProducts = array_map(function($product) {
    return [
        'id' => $product['id'] ?? '',
        'name' => $product['name'] ?? '',
        'slug' => $product['slug'] ?? '',
        'short_description' => $product['short_description'] ?? '',
        'category' => $product['category'] ?? '',
        'images' => $product['images'] ?? [],
        'price' => isset($product['price']) ? floatval($product['price']) : null,
        'sale_price' => isset($product['sale_price']) ? floatval($product['sale_price']) : null,
    ];
}, array_values($publicProducts));

echo json_encode([
    'success' => true,
    'products' => $publicProducts
]);
