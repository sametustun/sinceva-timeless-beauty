<?php

require_once __DIR__ . '/ShippingProviderInterface.php';

class TrendyolExpressShippingProvider implements ShippingProviderInterface
{
    public function getCode(): string
    {
        return 'trendyol_express';
    }

    /**
     * For Trendyol Express, we don't create new shipments.
     * Instead, we import existing shipment data from Trendyol Marketplace API
     * using the marketplace_order_number.
     */
    public function createShipment(array $order, array $providerConfig): array
    {
        try {
            $settings = $providerConfig['settings'] ?? [];
            
            // Validate required settings
            $required = ['api_url', 'api_key', 'api_secret', 'seller_id'];
            foreach ($required as $field) {
                if (empty($settings[$field])) {
                    return [
                        'success' => false,
                        'error' => "Eksik ayar: $field"
                    ];
                }
            }

            // Get marketplace order number
            $marketplaceOrderNumber = $order['marketplace_order_number'] ?? $order['trendyol_order_number'] ?? null;
            
            if (empty($marketplaceOrderNumber)) {
                return [
                    'success' => false,
                    'error' => 'Trendyol sipariş numarası (marketplace_order_number) bulunamadı'
                ];
            }

            // Generate auth header
            $authHeader = base64_encode($settings['api_key'] . ':' . $settings['api_secret']);
            $sellerId = $settings['seller_id'];
            $apiUrl = rtrim($settings['api_url'], '/');

            // Query Trendyol API for order/package details
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $apiUrl . '/sapigw/suppliers/' . $sellerId . '/orders?orderNumber=' . $marketplaceOrderNumber);
            curl_setopt($ch, CURLOPT_HTTPGET, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: Basic ' . $authHeader,
                'Content-Type: application/json',
                'User-Agent: SincEva-Integration'
            ]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            $error = curl_error($ch);
            curl_close($ch);

            if ($error) {
                return [
                    'success' => false,
                    'error' => 'Trendyol API bağlantı hatası: ' . $error,
                    'payload_request' => ['orderNumber' => $marketplaceOrderNumber],
                    'payload_response' => null
                ];
            }

            $responseData = json_decode($response, true);

            if ($httpCode < 200 || $httpCode >= 300) {
                return [
                    'success' => false,
                    'error' => 'Trendyol API hatası (HTTP ' . $httpCode . '): ' . ($responseData['errors'][0]['message'] ?? 'Bilinmeyen hata'),
                    'payload_request' => ['orderNumber' => $marketplaceOrderNumber],
                    'payload_response' => $responseData
                ];
            }

            // Find the order in response
            $orders = $responseData['content'] ?? [];
            $trendyolOrder = null;
            
            foreach ($orders as $o) {
                if ($o['orderNumber'] == $marketplaceOrderNumber) {
                    $trendyolOrder = $o;
                    break;
                }
            }

            if (!$trendyolOrder) {
                return [
                    'success' => false,
                    'error' => 'Trendyol siparişi bulunamadı: ' . $marketplaceOrderNumber,
                    'payload_request' => ['orderNumber' => $marketplaceOrderNumber],
                    'payload_response' => $responseData
                ];
            }

            // Extract shipment info from Trendyol order
            $lines = $trendyolOrder['lines'] ?? [];
            $trackingNumber = null;
            $cargoProviderName = null;
            
            foreach ($lines as $line) {
                if (!empty($line['cargoTrackingNumber'])) {
                    $trackingNumber = $line['cargoTrackingNumber'];
                    $cargoProviderName = $line['cargoProviderName'] ?? 'Trendyol Express';
                    break;
                }
            }

            if (!$trackingNumber) {
                // Check package level
                $packages = $trendyolOrder['packages'] ?? [];
                foreach ($packages as $package) {
                    if (!empty($package['trackingNumber'])) {
                        $trackingNumber = $package['trackingNumber'];
                        $cargoProviderName = $package['cargoProviderName'] ?? 'Trendyol Express';
                        break;
                    }
                }
            }

            if (!$trackingNumber) {
                return [
                    'success' => false,
                    'error' => 'Trendyol siparişinde kargo takip numarası henüz oluşturulmamış',
                    'payload_request' => ['orderNumber' => $marketplaceOrderNumber],
                    'payload_response' => $trendyolOrder
                ];
            }

            // Generate label URL (Trendyol provides labels through their seller panel)
            $labelUrl = 'https://partner.trendyol.com/orders/order-detail/' . $marketplaceOrderNumber;

            return [
                'success' => true,
                'tracking_number' => $trackingNumber,
                'label_url' => $labelUrl,
                'cargo_provider' => $cargoProviderName,
                'payload_request' => ['orderNumber' => $marketplaceOrderNumber],
                'payload_response' => $trendyolOrder
            ];

        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => 'Beklenmeyen hata: ' . $e->getMessage()
            ];
        }
    }

    public function getShipmentStatus(string $trackingNumber, array $providerConfig): array
    {
        try {
            $settings = $providerConfig['settings'] ?? [];

            if (empty($settings['api_url']) || empty($settings['api_key']) || empty($settings['api_secret']) || empty($settings['seller_id'])) {
                return [
                    'success' => false,
                    'error' => 'Trendyol API ayarları eksik'
                ];
            }

            $authHeader = base64_encode($settings['api_key'] . ':' . $settings['api_secret']);
            $sellerId = $settings['seller_id'];
            $apiUrl = rtrim($settings['api_url'], '/');

            // Query shipment packages by tracking number
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $apiUrl . '/sapigw/suppliers/' . $sellerId . '/orders?cargoTrackingNumber=' . $trackingNumber);
            curl_setopt($ch, CURLOPT_HTTPGET, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: Basic ' . $authHeader,
                'Content-Type: application/json',
                'User-Agent: SincEva-Integration'
            ]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            
            $response = curl_exec($ch);
            curl_close($ch);

            $responseData = json_decode($response, true);

            // Map Trendyol order status to standard shipment status
            $statusMap = [
                'Created' => 'pending',
                'Picking' => 'pending',
                'Invoiced' => 'pending',
                'Shipped' => 'in_transit',
                'Delivered' => 'delivered',
                'Cancelled' => 'cancelled',
                'UnDelivered' => 'returned',
                'Returned' => 'returned'
            ];

            $orders = $responseData['content'] ?? [];
            if (empty($orders)) {
                return [
                    'success' => false,
                    'error' => 'Kargo bulunamadı'
                ];
            }

            $order = $orders[0];
            $orderStatus = $order['status'] ?? 'Created';
            $status = $statusMap[$orderStatus] ?? 'unknown';

            return [
                'success' => true,
                'status' => $status,
                'status_description' => $orderStatus
            ];

        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => 'Durum sorgulama hatası: ' . $e->getMessage()
            ];
        }
    }
}
