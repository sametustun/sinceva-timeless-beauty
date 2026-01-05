<?php
/**
 * Google Analytics 4 Data API Integration
 * Fetches real-time and reporting data from GA4
 */

require_once 'config.php';

setCorsHeaders();
handlePreflight();

// Settings file
define('SETTINGS_FILE', DATA_DIR . '/settings.json');
define('GA_CREDENTIALS_FILE', DATA_DIR . '/ga-credentials.json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET') {
    respondError('Method not allowed', 405);
}

requireAuth();

$type = $_GET['type'] ?? 'realtime';

// Load settings
$settings = file_exists(SETTINGS_FILE) ? json_decode(file_get_contents(SETTINGS_FILE), true) : [];
$ga4Id = $settings['integrations']['googleAnalyticsId'] ?? '';

// Check if GA4 is configured
if (empty($ga4Id) || strpos($ga4Id, 'YOUR_') !== false || strpos($ga4Id, 'XXXXX') !== false) {
    respondSuccess([
        'configured' => false,
        'message' => 'Google Analytics 4 ID yapılandırılmamış',
        'data' => null
    ]);
}

// Check if credentials file exists
if (!file_exists(GA_CREDENTIALS_FILE)) {
    respondSuccess([
        'configured' => false,
        'message' => 'Google Service Account credentials dosyası bulunamadı. Lütfen ga-credentials.json dosyasını data klasörüne yükleyin.',
        'data' => null
    ]);
}

// Load credentials
$credentials = json_decode(file_get_contents(GA_CREDENTIALS_FILE), true);
if (!$credentials || !isset($credentials['client_email']) || !isset($credentials['private_key'])) {
    respondSuccess([
        'configured' => false,
        'message' => 'Google Service Account credentials dosyası geçersiz',
        'data' => null
    ]);
}

// Extract property ID from GA4 measurement ID (G-XXXXXXXX -> property ID needed)
// Note: GA4 Measurement ID is NOT the same as Property ID
// User needs to provide the numeric Property ID
$propertyId = $settings['integrations']['ga4PropertyId'] ?? '';

if (empty($propertyId)) {
    respondSuccess([
        'configured' => false,
        'message' => 'GA4 Property ID gerekli. Ayarlardan ekleyin (sayısal ID, örn: 123456789)',
        'data' => null
    ]);
}

try {
    // Generate JWT token for Google API authentication
    $accessToken = getGoogleAccessToken($credentials);
    
    if (!$accessToken) {
        throw new Exception('Access token alınamadı');
    }
    
    switch ($type) {
        case 'realtime':
            $data = fetchRealtimeData($propertyId, $accessToken);
            break;
        case 'report':
            $days = intval($_GET['days'] ?? 7);
            $data = fetchReportData($propertyId, $accessToken, $days);
            break;
        default:
            $data = fetchRealtimeData($propertyId, $accessToken);
    }
    
    respondSuccess([
        'configured' => true,
        'data' => $data
    ]);
    
} catch (Exception $e) {
    logRequest('ga4_error', ['error' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
    // Return as success with configured=false so frontend can show proper message
    respondSuccess([
        'configured' => false,
        'message' => 'GA4 API hatası: ' . $e->getMessage(),
        'data' => null
    ]);
}

/**
 * Generate Google OAuth2 access token using service account
 */
function getGoogleAccessToken($credentials) {
    $now = time();
    $exp = $now + 3600; // 1 hour
    
    $header = base64url_encode(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));
    
    $payload = base64url_encode(json_encode([
        'iss' => $credentials['client_email'],
        'scope' => 'https://www.googleapis.com/auth/analytics.readonly',
        'aud' => 'https://oauth2.googleapis.com/token',
        'iat' => $now,
        'exp' => $exp
    ]));
    
    $signatureInput = "$header.$payload";
    
    // Sign with private key
    $privateKey = openssl_pkey_get_private($credentials['private_key']);
    if (!$privateKey) {
        throw new Exception('Private key okunamadı');
    }
    
    $signature = '';
    if (!openssl_sign($signatureInput, $signature, $privateKey, OPENSSL_ALGO_SHA256)) {
        throw new Exception('JWT imzalanamadı');
    }
    
    $jwt = "$signatureInput." . base64url_encode($signature);
    
    // Exchange JWT for access token
    $ch = curl_init('https://oauth2.googleapis.com/token');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => http_build_query([
            'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            'assertion' => $jwt
        ]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded']
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200) {
        logRequest('ga4_token_error', ['response' => $response]);
        throw new Exception('Token alınamadı: ' . $response);
    }
    
    $tokenData = json_decode($response, true);
    return $tokenData['access_token'] ?? null;
}

/**
 * Fetch real-time data from GA4
 */
function fetchRealtimeData($propertyId, $accessToken) {
    $url = "https://analyticsdata.googleapis.com/v1beta/properties/{$propertyId}:runRealtimeReport";
    
    $requestBody = [
        'dimensions' => [
            ['name' => 'unifiedScreenName'],
            ['name' => 'deviceCategory']
        ],
        'metrics' => [
            ['name' => 'activeUsers'],
            ['name' => 'screenPageViews']
        ]
    ];
    
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($requestBody),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $accessToken,
            'Content-Type: application/json'
        ]
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200) {
        logRequest('ga4_realtime_error', ['response' => $response, 'httpCode' => $httpCode]);
        throw new Exception('Realtime API hatası: ' . $response);
    }
    
    $data = json_decode($response, true);
    
    // Parse response into usable format
    $activeUsers = 0;
    $pageViews = 0;
    $topPages = [];
    $devices = ['desktop' => 0, 'mobile' => 0, 'tablet' => 0];
    
    if (isset($data['rows'])) {
        foreach ($data['rows'] as $row) {
            $page = $row['dimensionValues'][0]['value'] ?? 'Unknown';
            $device = strtolower($row['dimensionValues'][1]['value'] ?? 'desktop');
            $users = intval($row['metricValues'][0]['value'] ?? 0);
            $views = intval($row['metricValues'][1]['value'] ?? 0);
            
            $activeUsers += $users;
            $pageViews += $views;
            
            // Count devices
            if (isset($devices[$device])) {
                $devices[$device] += $users;
            } else {
                $devices['desktop'] += $users;
            }
            
            // Top pages
            $topPages[] = [
                'page' => $page,
                'views' => $views,
                'users' => $users
            ];
        }
    }
    
    // Sort top pages by views
    usort($topPages, fn($a, $b) => $b['views'] - $a['views']);
    $topPages = array_slice($topPages, 0, 5);
    
    // Calculate percentages for top pages
    $totalViews = $pageViews ?: 1;
    foreach ($topPages as &$page) {
        $page['percentage'] = round(($page['views'] / $totalViews) * 100);
    }
    
    return [
        'activeUsers' => $activeUsers,
        'pageViews' => $pageViews,
        'topPages' => $topPages,
        'devices' => $devices,
        'avgSessionDuration' => '0:00', // Not available in realtime
        'bounceRate' => 0, // Not available in realtime
        'trafficSources' => [] // Would need separate query
    ];
}

/**
 * Fetch report data from GA4
 */
function fetchReportData($propertyId, $accessToken, $days = 7) {
    $url = "https://analyticsdata.googleapis.com/v1beta/properties/{$propertyId}:runReport";
    
    $startDate = date('Y-m-d', strtotime("-{$days} days"));
    $endDate = date('Y-m-d');
    
    $requestBody = [
        'dateRanges' => [
            ['startDate' => $startDate, 'endDate' => $endDate]
        ],
        'dimensions' => [
            ['name' => 'date'],
            ['name' => 'sessionDefaultChannelGroup']
        ],
        'metrics' => [
            ['name' => 'activeUsers'],
            ['name' => 'sessions'],
            ['name' => 'bounceRate'],
            ['name' => 'averageSessionDuration']
        ]
    ];
    
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($requestBody),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $accessToken,
            'Content-Type: application/json'
        ]
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200) {
        logRequest('ga4_report_error', ['response' => $response, 'httpCode' => $httpCode]);
        throw new Exception('Report API hatası: ' . $response);
    }
    
    $data = json_decode($response, true);
    
    // Parse response
    $dailyData = [];
    $trafficSources = [];
    
    if (isset($data['rows'])) {
        foreach ($data['rows'] as $row) {
            $date = $row['dimensionValues'][0]['value'] ?? '';
            $source = $row['dimensionValues'][1]['value'] ?? 'Direct';
            $users = intval($row['metricValues'][0]['value'] ?? 0);
            $sessions = intval($row['metricValues'][1]['value'] ?? 0);
            $bounceRate = floatval($row['metricValues'][2]['value'] ?? 0);
            $avgDuration = floatval($row['metricValues'][3]['value'] ?? 0);
            
            // Aggregate by date
            if (!isset($dailyData[$date])) {
                $dailyData[$date] = ['users' => 0, 'sessions' => 0];
            }
            $dailyData[$date]['users'] += $users;
            $dailyData[$date]['sessions'] += $sessions;
            
            // Aggregate traffic sources
            if (!isset($trafficSources[$source])) {
                $trafficSources[$source] = 0;
            }
            $trafficSources[$source] += $users;
        }
    }
    
    // Format for chart
    $timeline = [];
    foreach ($dailyData as $date => $stats) {
        $timeline[] = [
            'date' => date('d M', strtotime($date)),
            'users' => $stats['users'],
            'sessions' => $stats['sessions']
        ];
    }
    
    // Format traffic sources
    $colors = ['#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'];
    $sourcesFormatted = [];
    $i = 0;
    arsort($trafficSources);
    foreach ($trafficSources as $source => $users) {
        $sourcesFormatted[] = [
            'source' => $source,
            'users' => $users,
            'color' => $colors[$i % count($colors)]
        ];
        $i++;
        if ($i >= 6) break;
    }
    
    return [
        'timeline' => $timeline,
        'trafficSources' => $sourcesFormatted
    ];
}

/**
 * Base64 URL encode
 */
function base64url_encode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

/**
 * Log helper
 */
function logRequest($type, $data) {
    $logFile = LOG_DIR . '/analytics.log';
    $entry = date('c') . " [$type] " . json_encode($data) . "\n";
    file_put_contents($logFile, $entry, FILE_APPEND);
}
