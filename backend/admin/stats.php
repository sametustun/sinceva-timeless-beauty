<?php
/**
 * Dashboard Statistics Endpoint
 * GET /admin/stats.php - Get detailed statistics with time series data
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    respondError('METHOD_NOT_ALLOWED', 405);
}

// Get date range (default last 7 days)
$days = intval($_GET['days'] ?? 7);
$days = min(max($days, 1), 30); // Limit between 1 and 30 days

$endDate = new DateTime();
$startDate = (new DateTime())->modify("-{$days} days");

// Read all data files
$subscribers = readJsonFile(SUBSCRIBERS_FILE);
$contacts = readJsonFile(CONTACTS_FILE);
$blogPosts = readJsonFile(BLOG_FILE);
$products = readJsonFile(PRODUCTS_FILE);

// Generate date labels for the chart
$dateLabels = [];
$subscribersByDay = [];
$contactsByDay = [];

for ($i = $days - 1; $i >= 0; $i--) {
    $date = (new DateTime())->modify("-{$i} days")->format('Y-m-d');
    $displayDate = (new DateTime())->modify("-{$i} days")->format('d M');
    $dateLabels[] = $displayDate;
    $subscribersByDay[$date] = 0;
    $contactsByDay[$date] = 0;
}

// Count subscribers by day
foreach ($subscribers as $subscriber) {
    $createdAt = $subscriber['created_at'] ?? '';
    if ($createdAt) {
        $date = substr($createdAt, 0, 10);
        if (isset($subscribersByDay[$date])) {
            $subscribersByDay[$date]++;
        }
    }
}

// Count contacts by day
foreach ($contacts as $contact) {
    $createdAt = $contact['created_at'] ?? '';
    if ($createdAt) {
        $date = substr($createdAt, 0, 10);
        if (isset($contactsByDay[$date])) {
            $contactsByDay[$date]++;
        }
    }
}

// Prepare chart data
$subscriberChartData = array_values($subscribersByDay);
$contactChartData = array_values($contactsByDay);

// Calculate cumulative subscribers for growth chart
$cumulativeSubscribers = [];
$confirmedBefore = count(array_filter($subscribers, function($s) use ($startDate) {
    $created = new DateTime($s['created_at'] ?? '2000-01-01');
    return $created < $startDate && ($s['confirmed'] ?? false);
}));

$runningTotal = $confirmedBefore;
foreach ($subscribersByDay as $date => $count) {
    $runningTotal += $count;
    $cumulativeSubscribers[] = $runningTotal;
}

// Featured/most active products (simulated view counts since we don't have real analytics)
$featuredProducts = array_filter($products, fn($p) => $p['featured'] ?? false);
$featuredProducts = array_slice(array_values($featuredProducts), 0, 5);

// Recent activity
$recentSubscribers = array_slice($subscribers, 0, 5);
$recentContacts = array_slice($contacts, 0, 5);

// Summary stats
$summary = [
    'subscribers' => [
        'total' => count($subscribers),
        'confirmed' => count(array_filter($subscribers, fn($s) => $s['confirmed'] ?? false)),
        'pending' => count(array_filter($subscribers, fn($s) => !($s['confirmed'] ?? false))),
        'new_this_week' => array_sum($subscriberChartData),
    ],
    'contacts' => [
        'total' => count($contacts),
        'unread' => count(array_filter($contacts, fn($c) => !($c['read'] ?? false))),
        'replied' => count(array_filter($contacts, fn($c) => $c['replied'] ?? false)),
        'new_this_week' => array_sum($contactChartData),
    ],
    'blog' => [
        'total' => count($blogPosts),
        'published' => count(array_filter($blogPosts, fn($p) => $p['published'] ?? false)),
        'draft' => count(array_filter($blogPosts, fn($p) => !($p['published'] ?? false))),
    ],
    'products' => [
        'total' => count($products),
        'active' => count(array_filter($products, fn($p) => $p['active'] ?? true)),
        'featured' => count(array_filter($products, fn($p) => $p['featured'] ?? false)),
    ],
];

respondSuccess([
    'summary' => $summary,
    'charts' => [
        'labels' => $dateLabels,
        'subscribers' => $subscriberChartData,
        'contacts' => $contactChartData,
        'cumulative_subscribers' => $cumulativeSubscribers,
    ],
    'featured_products' => array_map(function($p) {
        return [
            'id' => $p['id'] ?? '',
            'name' => $p['name']['tr'] ?? $p['name']['en'] ?? 'Unnamed',
            'category' => $p['category'] ?? '',
            'image' => $p['images'][0] ?? '',
        ];
    }, $featuredProducts),
    'recent_activity' => [
        'subscribers' => array_map(function($s) {
            return [
                'email' => $s['email'] ?? '',
                'confirmed' => $s['confirmed'] ?? false,
                'created_at' => $s['created_at'] ?? '',
            ];
        }, $recentSubscribers),
        'contacts' => array_map(function($c) {
            return [
                'name' => $c['name'] ?? '',
                'email' => $c['email'] ?? '',
                'read' => $c['read'] ?? false,
                'created_at' => $c['created_at'] ?? '',
            ];
        }, $recentContacts),
    ],
]);
