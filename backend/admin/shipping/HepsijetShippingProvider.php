<?php

require_once __DIR__ . '/ShippingProviderInterface.php';

class HepsijetShippingProvider implements ShippingProviderInterface
{
    public function getCode(): string
    {
        return 'hepsijet';
    }

    public function createShipment(array $order, array $providerConfig): array
    {
        try {
            $settings = $providerConfig['settings'] ?? [];
            
            // Validate required settings
            $required = ['api_url', 'api_key', 'api_secret', 'merchant_id'];
            foreach ($required as $field) {
                if (empty($settings[$field])) {
                    return [
                        'success' => false,
                        'error' => "Eksik ayar: $field"
                    ];
                }
            }

            // Generate auth token
            $authToken = base64_encode($settings['api_key'] . ':' . $settings['api_secret']);

            // Prepare shipment data for HepsiJet
            $shipmentData = [
                'merchantId' => $settings['merchant_id'],
                'orderNumber' => $order['order_number'],
                'receiver' => [
                    'name' => $order['customer_name'],
                    'phone' => $order['customer_phone'],
                    'email' => $order['customer_email'] ?? '',
                    'address' => [
                        'addressLine' => $order['shipping_address'],
                        'city' => $order['shipping_city'],
                        'district' => $order['shipping_district'],
                        'postalCode' => $order['shipping_postal_code'] ?? ''
                    ]
                ],
                'sender' => [
                    'name' => $settings['sender_name'] ?? 'SincEva',
                    'phone' => $settings['sender_phone'] ?? '',
                    'address' => [
                        'addressLine' => $settings['sender_address'] ?? '',
                        'city' => $settings['sender_city'] ?? '',
                        'district' => $settings['sender_district'] ?? ''
                    ]
                ],
                'packages' => [
                    [
                        'deci' => $order['deci'] ?? 1,
                        'weight' => $order['weight'] ?? 1,
                        'width' => $order['width'] ?? 10,
                        'height' => $order['height'] ?? 10,
                        'length' => $order['length'] ?? 10
                    ]
                ],
                'paymentType' => $order['payment_method'] === 'cod' ? 'COD' : 'PREPAID',
                'codAmount' => $order['payment_method'] === 'cod' ? $order['total_amount'] : 0,
                'description' => 'SincEva Sipariş #' . $order['order_number']
            ];

            // Make API request
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, rtrim($settings['api_url'], '/') . '/deliveries');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($shipmentData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Authorization: Bearer ' . $authToken
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
                    'error' => 'API bağlantı hatası: ' . $error,
                    'payload_request' => $shipmentData,
                    'payload_response' => null
                ];
            }

            $responseData = json_decode($response, true);

            if ($httpCode >= 200 && $httpCode < 300 && !empty($responseData['data']['trackingNumber'])) {
                return [
                    'success' => true,
                    'tracking_number' => $responseData['data']['trackingNumber'],
                    'label_url' => $responseData['data']['labelUrl'] ?? '',
                    'payload_request' => $shipmentData,
                    'payload_response' => $responseData
                ];
            }

            return [
                'success' => false,
                'error' => 'API hatası: ' . ($responseData['message'] ?? $responseData['error'] ?? 'Bilinmeyen hata'),
                'payload_request' => $shipmentData,
                'payload_response' => $responseData
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

            if (empty($settings['api_url']) || empty($settings['api_key']) || empty($settings['api_secret'])) {
                return [
                    'success' => false,
                    'error' => 'API ayarları eksik'
                ];
            }

            $authToken = base64_encode($settings['api_key'] . ':' . $settings['api_secret']);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, rtrim($settings['api_url'], '/') . '/deliveries/' . $trackingNumber . '/status');
            curl_setopt($ch, CURLOPT_HTTPGET, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Authorization: Bearer ' . $authToken
            ]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            
            $response = curl_exec($ch);
            curl_close($ch);

            $responseData = json_decode($response, true);

            // Map HepsiJet status codes
            $statusMap = [
                'CREATED' => 'pending',
                'PICKED_UP' => 'picked_up',
                'IN_TRANSIT' => 'in_transit',
                'OUT_FOR_DELIVERY' => 'out_for_delivery',
                'DELIVERED' => 'delivered',
                'RETURNED' => 'returned',
                'CANCELLED' => 'cancelled'
            ];

            $hepsijetStatus = $responseData['data']['status'] ?? 'CREATED';
            $status = $statusMap[$hepsijetStatus] ?? 'unknown';

            return [
                'success' => true,
                'status' => $status,
                'status_description' => $responseData['data']['statusDescription'] ?? $hepsijetStatus
            ];

        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => 'Durum sorgulama hatası: ' . $e->getMessage()
            ];
        }
    }
}
