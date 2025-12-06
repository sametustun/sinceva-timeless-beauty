<?php
/**
 * Blog Management Endpoint
 * GET /admin/blog.php - List all posts
 * POST /admin/blog.php - Create post
 * PUT /admin/blog.php - Update post
 * DELETE /admin/blog.php?id=xxx - Delete post
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // List all blog posts
        $posts = readJsonFile(BLOG_FILE);
        
        // Sort by created_at descending
        usort($posts, function($a, $b) {
            return strtotime($b['created_at'] ?? '0') - strtotime($a['created_at'] ?? '0');
        });
        
        respondSuccess([
            'posts' => $posts,
            'stats' => [
                'total' => count($posts),
                'published' => count(array_filter($posts, fn($p) => $p['published'] ?? false)),
                'draft' => count(array_filter($posts, fn($p) => !($p['published'] ?? false)))
            ]
        ]);
        break;
        
    case 'POST':
        // Create new post
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            respondError('INVALID_INPUT');
        }
        
        // Validate required fields
        $requiredFields = ['title', 'content'];
        foreach ($requiredFields as $field) {
            if (empty($input[$field])) {
                respondError("MISSING_$field");
            }
        }
        
        $post = [
            'id' => generateId(),
            'title' => [
                'tr' => sanitizeInput($input['title']['tr'] ?? $input['title'] ?? ''),
                'en' => sanitizeInput($input['title']['en'] ?? ''),
                'ar' => sanitizeInput($input['title']['ar'] ?? '')
            ],
            'slug' => $input['slug'] ?? createSlug($input['title']['tr'] ?? $input['title'] ?? ''),
            'excerpt' => [
                'tr' => sanitizeInput($input['excerpt']['tr'] ?? ''),
                'en' => sanitizeInput($input['excerpt']['en'] ?? ''),
                'ar' => sanitizeInput($input['excerpt']['ar'] ?? '')
            ],
            'content' => [
                'tr' => $input['content']['tr'] ?? $input['content'] ?? '',
                'en' => $input['content']['en'] ?? '',
                'ar' => $input['content']['ar'] ?? ''
            ],
            'image' => $input['image'] ?? '',
            'category' => $input['category'] ?? '',
            'tags' => $input['tags'] ?? [],
            'published' => $input['published'] ?? false,
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ];
        
        $posts = readJsonFile(BLOG_FILE);
        $posts[] = $post;
        
        if (writeJsonFile(BLOG_FILE, $posts)) {
            logAdminAction('CREATE_BLOG_POST', ['id' => $post['id'], 'title' => $post['title']]);
            respondSuccess(['message' => 'Post created', 'post' => $post]);
        } else {
            respondError('CREATE_FAILED', 500);
        }
        break;
        
    case 'PUT':
        // Update post
        $input = json_decode(file_get_contents('php://input'), true);
        $id = $input['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $posts = readJsonFile(BLOG_FILE);
        $found = false;
        
        foreach ($posts as &$post) {
            if ($post['id'] === $id) {
                // Update fields
                if (isset($input['title'])) {
                    $post['title'] = is_array($input['title']) ? [
                        'tr' => sanitizeInput($input['title']['tr'] ?? ''),
                        'en' => sanitizeInput($input['title']['en'] ?? ''),
                        'ar' => sanitizeInput($input['title']['ar'] ?? '')
                    ] : ['tr' => sanitizeInput($input['title']), 'en' => '', 'ar' => ''];
                }
                if (isset($input['slug'])) $post['slug'] = $input['slug'];
                if (isset($input['excerpt'])) {
                    $post['excerpt'] = is_array($input['excerpt']) ? [
                        'tr' => sanitizeInput($input['excerpt']['tr'] ?? ''),
                        'en' => sanitizeInput($input['excerpt']['en'] ?? ''),
                        'ar' => sanitizeInput($input['excerpt']['ar'] ?? '')
                    ] : ['tr' => sanitizeInput($input['excerpt']), 'en' => '', 'ar' => ''];
                }
                if (isset($input['content'])) {
                    $post['content'] = is_array($input['content']) ? $input['content'] : ['tr' => $input['content'], 'en' => '', 'ar' => ''];
                }
                if (isset($input['image'])) $post['image'] = $input['image'];
                if (isset($input['category'])) $post['category'] = $input['category'];
                if (isset($input['tags'])) $post['tags'] = $input['tags'];
                if (isset($input['published'])) $post['published'] = $input['published'];
                $post['updated_at'] = date('Y-m-d H:i:s');
                $found = true;
                break;
            }
        }
        
        if (!$found) {
            respondError('POST_NOT_FOUND', 404);
        }
        
        if (writeJsonFile(BLOG_FILE, $posts)) {
            logAdminAction('UPDATE_BLOG_POST', ['id' => $id]);
            respondSuccess(['message' => 'Post updated']);
        } else {
            respondError('UPDATE_FAILED', 500);
        }
        break;
        
    case 'DELETE':
        // Delete post
        $id = $_GET['id'] ?? '';
        
        if (empty($id)) {
            respondError('MISSING_ID');
        }
        
        $posts = readJsonFile(BLOG_FILE);
        $initialCount = count($posts);
        
        $posts = array_filter($posts, fn($p) => $p['id'] !== $id);
        
        if (count($posts) === $initialCount) {
            respondError('POST_NOT_FOUND', 404);
        }
        
        $posts = array_values($posts);
        
        if (writeJsonFile(BLOG_FILE, $posts)) {
            logAdminAction('DELETE_BLOG_POST', ['id' => $id]);
            respondSuccess(['message' => 'Post deleted']);
        } else {
            respondError('DELETE_FAILED', 500);
        }
        break;
        
    default:
        respondError('METHOD_NOT_ALLOWED', 405);
}

// Helper function to create slug
function createSlug(string $text): string {
    $text = mb_strtolower($text, 'UTF-8');
    $text = preg_replace('/[^a-z0-9\s-]/', '', $text);
    $text = preg_replace('/[\s-]+/', '-', $text);
    return trim($text, '-');
}
