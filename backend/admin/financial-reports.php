<?php
/**
 * Financial Reports API
 * Provides payment history and sales analytics
 */

require_once __DIR__ . '/config.php';

setCorsHeaders();
handlePreflight();
requireAuth();

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET') {
    respondError('Method not allowed', 405);
}

$action = $_GET['action'] ?? 'summary';

switch ($action) {
    case 'summary':
        handleSummary();
        break;
    case 'daily':
        handleDailyReport();
        break;
    case 'weekly':
        handleWeeklyReport();
        break;
    case 'monthly':
        handleMonthlyReport();
        break;
    case 'by-source':
        handleBySourceReport();
        break;
    case 'payment-methods':
        handlePaymentMethodsReport();
        break;
    default:
        respondError('Geçersiz action');
}

function handleSummary()
{
    $orders = readJsonFile(DATA_DIR . '/orders.json');
    
    // Calculate totals
    $totalRevenue = 0;
    $totalOrders = count($orders);
    $completedOrders = 0;
    $pendingOrders = 0;
    $cancelledOrders = 0;
    
    $todayRevenue = 0;
    $weekRevenue = 0;
    $monthRevenue = 0;
    
    $today = strtotime('today');
    $weekStart = strtotime('-7 days');
    $monthStart = strtotime('-30 days');
    
    $revenueBySource = [
        'trendyol' => 0,
        'website_paytr' => 0,
        'website_iyzico' => 0,
        'manual' => 0
    ];
    
    $ordersBySource = [
        'trendyol' => 0,
        'website_paytr' => 0,
        'website_iyzico' => 0,
        'manual' => 0
    ];
    
    foreach ($orders as $order) {
        $amount = (float)($order['total_amount'] ?? 0);
        $status = $order['status'] ?? '';
        $source = $order['source'] ?? 'manual';
        $createdAt = strtotime($order['created_at'] ?? '0');
        
        // Count by status
        if (in_array($status, ['completed', 'shipped', 'delivered'])) {
            $totalRevenue += $amount;
            $completedOrders++;
            
            // Revenue by source
            if (isset($revenueBySource[$source])) {
                $revenueBySource[$source] += $amount;
            }
            
            // Time-based revenue
            if ($createdAt >= $today) {
                $todayRevenue += $amount;
            }
            if ($createdAt >= $weekStart) {
                $weekRevenue += $amount;
            }
            if ($createdAt >= $monthStart) {
                $monthRevenue += $amount;
            }
        } elseif ($status === 'cancelled') {
            $cancelledOrders++;
        } else {
            $pendingOrders++;
        }
        
        // Orders by source
        if (isset($ordersBySource[$source])) {
            $ordersBySource[$source]++;
        }
    }
    
    // Average order value
    $avgOrderValue = $completedOrders > 0 ? $totalRevenue / $completedOrders : 0;
    
    respondSuccess([
        'summary' => [
            'total_revenue' => round($totalRevenue, 2),
            'total_orders' => $totalOrders,
            'completed_orders' => $completedOrders,
            'pending_orders' => $pendingOrders,
            'cancelled_orders' => $cancelledOrders,
            'avg_order_value' => round($avgOrderValue, 2),
            'today_revenue' => round($todayRevenue, 2),
            'week_revenue' => round($weekRevenue, 2),
            'month_revenue' => round($monthRevenue, 2)
        ],
        'revenue_by_source' => $revenueBySource,
        'orders_by_source' => $ordersBySource
    ]);
}

function handleDailyReport()
{
    $days = (int)($_GET['days'] ?? 30);
    $days = min(max($days, 7), 90); // Limit 7-90 days
    
    $orders = readJsonFile(DATA_DIR . '/orders.json');
    
    // Initialize daily data
    $dailyData = [];
    for ($i = $days - 1; $i >= 0; $i--) {
        $date = date('Y-m-d', strtotime("-$i days"));
        $dailyData[$date] = [
            'date' => $date,
            'label' => date('d M', strtotime($date)),
            'revenue' => 0,
            'orders' => 0,
            'trendyol' => 0,
            'website' => 0
        ];
    }
    
    // Aggregate order data
    foreach ($orders as $order) {
        $createdAt = $order['created_at'] ?? '';
        if (!$createdAt) continue;
        
        $date = date('Y-m-d', strtotime($createdAt));
        if (!isset($dailyData[$date])) continue;
        
        $status = $order['status'] ?? '';
        if (!in_array($status, ['completed', 'shipped', 'delivered', 'pending', 'processing'])) continue;
        
        $amount = (float)($order['total_amount'] ?? 0);
        $source = $order['source'] ?? 'manual';
        
        $dailyData[$date]['orders']++;
        
        // Only count revenue for completed orders
        if (in_array($status, ['completed', 'shipped', 'delivered'])) {
            $dailyData[$date]['revenue'] += $amount;
            
            if ($source === 'trendyol') {
                $dailyData[$date]['trendyol'] += $amount;
            } else {
                $dailyData[$date]['website'] += $amount;
            }
        }
    }
    
    // Calculate totals and trends
    $totalRevenue = array_sum(array_column($dailyData, 'revenue'));
    $totalOrders = array_sum(array_column($dailyData, 'orders'));
    $avgDailyRevenue = $days > 0 ? $totalRevenue / $days : 0;
    
    // Calculate trend (compare last 7 days to previous 7 days)
    $last7Days = array_slice($dailyData, -7, 7, true);
    $prev7Days = array_slice($dailyData, -14, 7, true);
    
    $last7Revenue = array_sum(array_column($last7Days, 'revenue'));
    $prev7Revenue = array_sum(array_column($prev7Days, 'revenue'));
    
    $revenueTrend = $prev7Revenue > 0 ? (($last7Revenue - $prev7Revenue) / $prev7Revenue) * 100 : 0;
    
    respondSuccess([
        'period' => 'daily',
        'days' => $days,
        'data' => array_values($dailyData),
        'totals' => [
            'revenue' => round($totalRevenue, 2),
            'orders' => $totalOrders,
            'avg_daily_revenue' => round($avgDailyRevenue, 2)
        ],
        'trend' => [
            'last_7_days' => round($last7Revenue, 2),
            'prev_7_days' => round($prev7Revenue, 2),
            'change_percent' => round($revenueTrend, 1)
        ]
    ]);
}

function handleWeeklyReport()
{
    $weeks = (int)($_GET['weeks'] ?? 12);
    $weeks = min(max($weeks, 4), 52); // Limit 4-52 weeks
    
    $orders = readJsonFile(DATA_DIR . '/orders.json');
    
    // Initialize weekly data
    $weeklyData = [];
    for ($i = $weeks - 1; $i >= 0; $i--) {
        $weekStart = date('Y-m-d', strtotime("monday -$i weeks"));
        $weekEnd = date('Y-m-d', strtotime("sunday -$i weeks"));
        $weekNum = date('W', strtotime($weekStart));
        
        $weeklyData[$weekStart] = [
            'week_start' => $weekStart,
            'week_end' => $weekEnd,
            'label' => 'Hafta ' . $weekNum,
            'revenue' => 0,
            'orders' => 0,
            'trendyol' => 0,
            'website' => 0
        ];
    }
    
    // Aggregate order data
    foreach ($orders as $order) {
        $createdAt = $order['created_at'] ?? '';
        if (!$createdAt) continue;
        
        $orderDate = strtotime($createdAt);
        $weekStart = date('Y-m-d', strtotime('monday this week', $orderDate));
        
        if (!isset($weeklyData[$weekStart])) continue;
        
        $status = $order['status'] ?? '';
        if (!in_array($status, ['completed', 'shipped', 'delivered', 'pending', 'processing'])) continue;
        
        $amount = (float)($order['total_amount'] ?? 0);
        $source = $order['source'] ?? 'manual';
        
        $weeklyData[$weekStart]['orders']++;
        
        if (in_array($status, ['completed', 'shipped', 'delivered'])) {
            $weeklyData[$weekStart]['revenue'] += $amount;
            
            if ($source === 'trendyol') {
                $weeklyData[$weekStart]['trendyol'] += $amount;
            } else {
                $weeklyData[$weekStart]['website'] += $amount;
            }
        }
    }
    
    $totalRevenue = array_sum(array_column($weeklyData, 'revenue'));
    $totalOrders = array_sum(array_column($weeklyData, 'orders'));
    $avgWeeklyRevenue = $weeks > 0 ? $totalRevenue / $weeks : 0;
    
    respondSuccess([
        'period' => 'weekly',
        'weeks' => $weeks,
        'data' => array_values($weeklyData),
        'totals' => [
            'revenue' => round($totalRevenue, 2),
            'orders' => $totalOrders,
            'avg_weekly_revenue' => round($avgWeeklyRevenue, 2)
        ]
    ]);
}

function handleMonthlyReport()
{
    $months = (int)($_GET['months'] ?? 12);
    $months = min(max($months, 3), 24); // Limit 3-24 months
    
    $orders = readJsonFile(DATA_DIR . '/orders.json');
    
    // Initialize monthly data
    $monthlyData = [];
    for ($i = $months - 1; $i >= 0; $i--) {
        $monthStart = date('Y-m-01', strtotime("-$i months"));
        $monthName = date('M Y', strtotime($monthStart));
        
        $monthlyData[$monthStart] = [
            'month' => $monthStart,
            'label' => $monthName,
            'revenue' => 0,
            'orders' => 0,
            'trendyol' => 0,
            'website' => 0
        ];
    }
    
    // Aggregate order data
    foreach ($orders as $order) {
        $createdAt = $order['created_at'] ?? '';
        if (!$createdAt) continue;
        
        $monthStart = date('Y-m-01', strtotime($createdAt));
        
        if (!isset($monthlyData[$monthStart])) continue;
        
        $status = $order['status'] ?? '';
        if (!in_array($status, ['completed', 'shipped', 'delivered', 'pending', 'processing'])) continue;
        
        $amount = (float)($order['total_amount'] ?? 0);
        $source = $order['source'] ?? 'manual';
        
        $monthlyData[$monthStart]['orders']++;
        
        if (in_array($status, ['completed', 'shipped', 'delivered'])) {
            $monthlyData[$monthStart]['revenue'] += $amount;
            
            if ($source === 'trendyol') {
                $monthlyData[$monthStart]['trendyol'] += $amount;
            } else {
                $monthlyData[$monthStart]['website'] += $amount;
            }
        }
    }
    
    $totalRevenue = array_sum(array_column($monthlyData, 'revenue'));
    $totalOrders = array_sum(array_column($monthlyData, 'orders'));
    $avgMonthlyRevenue = $months > 0 ? $totalRevenue / $months : 0;
    
    // Year over year comparison
    $thisYear = array_filter($monthlyData, fn($m) => strpos($m['month'], date('Y')) === 0);
    $lastYear = array_filter($monthlyData, fn($m) => strpos($m['month'], date('Y', strtotime('-1 year'))) === 0);
    
    $thisYearRevenue = array_sum(array_column($thisYear, 'revenue'));
    $lastYearRevenue = array_sum(array_column($lastYear, 'revenue'));
    
    $yoyChange = $lastYearRevenue > 0 ? (($thisYearRevenue - $lastYearRevenue) / $lastYearRevenue) * 100 : 0;
    
    respondSuccess([
        'period' => 'monthly',
        'months' => $months,
        'data' => array_values($monthlyData),
        'totals' => [
            'revenue' => round($totalRevenue, 2),
            'orders' => $totalOrders,
            'avg_monthly_revenue' => round($avgMonthlyRevenue, 2)
        ],
        'yoy' => [
            'this_year' => round($thisYearRevenue, 2),
            'last_year' => round($lastYearRevenue, 2),
            'change_percent' => round($yoyChange, 1)
        ]
    ]);
}

function handleBySourceReport()
{
    $orders = readJsonFile(DATA_DIR . '/orders.json');
    
    $sources = [
        'trendyol' => ['name' => 'Trendyol', 'revenue' => 0, 'orders' => 0, 'avg' => 0],
        'website_paytr' => ['name' => 'Website (PayTR)', 'revenue' => 0, 'orders' => 0, 'avg' => 0],
        'website_iyzico' => ['name' => 'Website (iyzico)', 'revenue' => 0, 'orders' => 0, 'avg' => 0],
        'manual' => ['name' => 'Manuel', 'revenue' => 0, 'orders' => 0, 'avg' => 0]
    ];
    
    foreach ($orders as $order) {
        $status = $order['status'] ?? '';
        if (!in_array($status, ['completed', 'shipped', 'delivered'])) continue;
        
        $source = $order['source'] ?? 'manual';
        $amount = (float)($order['total_amount'] ?? 0);
        
        if (isset($sources[$source])) {
            $sources[$source]['revenue'] += $amount;
            $sources[$source]['orders']++;
        }
    }
    
    // Calculate averages
    foreach ($sources as &$source) {
        $source['avg'] = $source['orders'] > 0 ? round($source['revenue'] / $source['orders'], 2) : 0;
        $source['revenue'] = round($source['revenue'], 2);
    }
    
    respondSuccess([
        'sources' => array_values($sources)
    ]);
}

function handlePaymentMethodsReport()
{
    $orders = readJsonFile(DATA_DIR . '/orders.json');
    
    $methods = [
        'paytr' => ['name' => 'PayTR', 'count' => 0, 'revenue' => 0],
        'iyzico' => ['name' => 'iyzico', 'count' => 0, 'revenue' => 0],
        'prepaid' => ['name' => 'Ön Ödemeli', 'count' => 0, 'revenue' => 0],
        'cod' => ['name' => 'Kapıda Ödeme', 'count' => 0, 'revenue' => 0],
        'bank_transfer' => ['name' => 'Banka Transferi', 'count' => 0, 'revenue' => 0]
    ];
    
    foreach ($orders as $order) {
        $status = $order['status'] ?? '';
        if (!in_array($status, ['completed', 'shipped', 'delivered'])) continue;
        
        $source = $order['source'] ?? 'manual';
        $amount = (float)($order['total_amount'] ?? 0);
        
        // Determine payment method from source
        if ($source === 'website_paytr') {
            $methods['paytr']['count']++;
            $methods['paytr']['revenue'] += $amount;
        } elseif ($source === 'website_iyzico') {
            $methods['iyzico']['count']++;
            $methods['iyzico']['revenue'] += $amount;
        } elseif ($source === 'trendyol') {
            $methods['prepaid']['count']++;
            $methods['prepaid']['revenue'] += $amount;
        } else {
            $paymentMethod = $order['payment_method'] ?? 'prepaid';
            if (isset($methods[$paymentMethod])) {
                $methods[$paymentMethod]['count']++;
                $methods[$paymentMethod]['revenue'] += $amount;
            }
        }
    }
    
    // Round revenues
    foreach ($methods as &$method) {
        $method['revenue'] = round($method['revenue'], 2);
    }
    
    respondSuccess([
        'payment_methods' => array_values(array_filter($methods, fn($m) => $m['count'] > 0))
    ]);
}
