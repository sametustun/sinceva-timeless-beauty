<?php
/**
 * User Authentication Configuration
 */

require_once dirname(__DIR__) . '/admin/config.php';

// User data files
define('USERS_FILE', DATA_DIR . '/users.json');
define('USER_CARTS_FILE', DATA_DIR . '/user_carts.json');
define('USER_PREFERENCES_FILE', DATA_DIR . '/user_preferences.json');

// Session settings for users (separate from admin)
define('USER_SESSION_LIFETIME', 60 * 60 * 24 * 30); // 30 days

// Google OAuth settings (loaded from .env)
define('GOOGLE_CLIENT_ID', $_ENV['GOOGLE_CLIENT_ID'] ?? getenv('GOOGLE_CLIENT_ID') ?? '');
define('GOOGLE_CLIENT_SECRET', $_ENV['GOOGLE_CLIENT_SECRET'] ?? getenv('GOOGLE_CLIENT_SECRET') ?? '');

// Initialize user data files
foreach ([USERS_FILE, USER_CARTS_FILE, USER_PREFERENCES_FILE] as $file) {
    if (!file_exists($file)) {
        $defaultContent = ($file === USERS_FILE) ? '[]' : '{}';
        file_put_contents($file, $defaultContent);
    }
}

/**
 * Check if user is logged in
 */
function isUserAuthenticated(): bool {
    return isset($_SESSION['user_id']) && !empty($_SESSION['user_id']);
}

/**
 * Require user authentication
 */
function requireUserAuth(): void {
    if (!isUserAuthenticated()) {
        respondError('UNAUTHORIZED', 401);
    }
}

/**
 * Get current user ID
 */
function getCurrentUserId(): ?string {
    return $_SESSION['user_id'] ?? null;
}

/**
 * Get current user data
 */
function getCurrentUser(): ?array {
    $userId = getCurrentUserId();
    if (!$userId) return null;
    
    $users = readJsonFile(USERS_FILE);
    foreach ($users as $user) {
        if ($user['id'] === $userId) {
            unset($user['password']); // Don't expose password
            return $user;
        }
    }
    return null;
}

/**
 * Find user by email
 */
function findUserByEmail(string $email): ?array {
    $users = readJsonFile(USERS_FILE);
    foreach ($users as $user) {
        if (strtolower($user['email']) === strtolower($email)) {
            return $user;
        }
    }
    return null;
}

/**
 * Find user by ID
 */
function findUserById(string $id): ?array {
    $users = readJsonFile(USERS_FILE);
    foreach ($users as $user) {
        if ($user['id'] === $id) {
            return $user;
        }
    }
    return null;
}

/**
 * Create new user
 */
function createUser(string $email, string $password = null, string $provider = 'email', array $metadata = []): array {
    $users = readJsonFile(USERS_FILE);
    
    $user = [
        'id' => generateId(),
        'email' => strtolower($email),
        'password' => $password ? password_hash($password, PASSWORD_DEFAULT) : null,
        'provider' => $provider,
        'metadata' => $metadata,
        'created_at' => date('c'),
        'updated_at' => date('c'),
    ];
    
    $users[] = $user;
    writeJsonFile(USERS_FILE, $users);
    
    // Return user without password
    unset($user['password']);
    return $user;
}

/**
 * Update user
 */
function updateUser(string $id, array $data): ?array {
    $users = readJsonFile(USERS_FILE);
    
    foreach ($users as &$user) {
        if ($user['id'] === $id) {
            foreach ($data as $key => $value) {
                if ($key !== 'id' && $key !== 'created_at') {
                    $user[$key] = $value;
                }
            }
            $user['updated_at'] = date('c');
            writeJsonFile(USERS_FILE, $users);
            
            unset($user['password']);
            return $user;
        }
    }
    
    return null;
}

/**
 * Set user session
 */
function setUserSession(array $user): void {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['user_email'] = $user['email'];
    $_SESSION['user_login_time'] = time();
}

/**
 * Clear user session
 */
function clearUserSession(): void {
    unset($_SESSION['user_id']);
    unset($_SESSION['user_email']);
    unset($_SESSION['user_login_time']);
}

/**
 * Get user cart
 */
function getUserCart(string $userId): array {
    $carts = readJsonFile(USER_CARTS_FILE);
    return $carts[$userId] ?? [];
}

/**
 * Save user cart
 */
function saveUserCart(string $userId, array $cart): void {
    $carts = readJsonFile(USER_CARTS_FILE);
    $carts[$userId] = $cart;
    writeJsonFile(USER_CARTS_FILE, $carts);
}

/**
 * Get user preferences
 */
function getUserPreferences(string $userId): array {
    $prefs = readJsonFile(USER_PREFERENCES_FILE);
    return $prefs[$userId] ?? [];
}

/**
 * Save user preferences
 */
function saveUserPreferences(string $userId, array $preferences): void {
    $prefs = readJsonFile(USER_PREFERENCES_FILE);
    $prefs[$userId] = $preferences;
    writeJsonFile(USER_PREFERENCES_FILE, $prefs);
}
