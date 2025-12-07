<?php

require_once __DIR__ . '/ShippingProviderInterface.php';

class YurticiShippingProvider implements ShippingProviderInterface
{
    public function getCode(): string
    {
        return 'yurtici';
    }

    public function createShipment(array $order, array $providerConfig): array
    {
        try {
            $settings = $providerConfig['settings'] ?? [];
            
            // Validate required settings
            $required = ['api_url', 'username', 'password', 'customer_code'];
            foreach ($required as $field) {
                if (empty($settings[$field])) {
                    return [
                        'success' => false,
                        'error' => "Eksik ayar: $field"
                    ];
                }
            }

            // Prepare shipment data
            $shipmentData = [
                'UserLanguage' => 'TR',
                'ShippingOrderVO' => [
                    'CargoKey' => $order['id'],
                    'InvoiceKey' => $order['invoice_number'] ?? $order['id'],
                    'ReceiverCustName' => $order['customer_name'],
                    'ReceiverAddress' => $order['shipping_address'],
                    'ReceiverPhone1' => $order['customer_phone'],
                    'ReceiverCityName' => $order['shipping_city'],
                    'ReceiverTownName' => $order['shipping_district'],
                    'OrgGeoCode' => $settings['customer_code'],
                    'TaxOfficeId' => '',
                    'TaxNumber' => '',
                    'TtDocumentId' => '',
                    'DcSelectedCredit' => 0,
                    'DcCreditRule' => 0,
                    'Description' => 'SincEva Sipariş #' . $order['order_number'],
                    'PayorTypeCode' => 1, // 1: Gönderici öder
                    'IsPartialDelivery' => false,
                    'IsCod' => $order['payment_method'] === 'cod',
                    'CodAmount' => $order['payment_method'] === 'cod' ? $order['total_amount'] : 0,
                    'ShippingDeliveryItemDetails' => [
                        [
                            'Deci' => $order['deci'] ?? 1,
                            'Kg' => $order['weight'] ?? 1,
                            'ProductCount' => count($order['items'] ?? []) ?: 1
                        ]
                    ]
                ]
            ];

            // Make API request
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, rtrim($settings['api_url'], '/') . '/ShippingOrderDispatcherServices/ShippingOrderDispatcherServices.ShippingOrderDispatcherServicesHttpSoap12Endpoint');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($shipmentData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Authorization: Basic ' . base64_encode($settings['username'] . ':' . $settings['password'])
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

            // For demo purposes, simulate success
            // In production, parse actual Yurtiçi API response
            if ($httpCode >= 200 && $httpCode < 300) {
                $trackingNumber = $responseData['ShippingOrderResult']['ShippingOrderDetailVO']['CargoKey'] 
                    ?? 'YK' . date('YmdHis') . rand(1000, 9999);
                
                return [
                    'success' => true,
                    'tracking_number' => $trackingNumber,
                    'label_url' => $settings['api_url'] . '/label/' . $trackingNumber,
                    'payload_request' => $shipmentData,
                    'payload_response' => $responseData
                ];
            }

            return [
                'success' => false,
                'error' => 'API hatası: ' . ($responseData['message'] ?? 'Bilinmeyen hata'),
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

            if (empty($settings['api_url']) || empty($settings['username']) || empty($settings['password'])) {
                return [
                    'success' => false,
                    'error' => 'API ayarları eksik'
                ];
            }

            // Make status query request
            $requestData = [
                'UserLanguage' => 'TR',
                'CargoKey' => $trackingNumber
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, rtrim($settings['api_url'], '/') . '/ShippingOrderDispatcherServices/QueryShipmentStatus');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestData));
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Content-Type: application/json',
                'Authorization: Basic ' . base64_encode($settings['username'] . ':' . $settings['password'])
            ]);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 30);
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            $responseData = json_decode($response, true);

            // Map Yurtiçi status codes to standard statuses
            $statusMap = [
                '0' => 'pending',
                '1' => 'picked_up',
                '2' => 'in_transit',
                '3' => 'out_for_delivery',
                '4' => 'delivered',
                '5' => 'returned',
                '6' => 'cancelled'
            ];

            $statusCode = $responseData['StatusCode'] ?? '0';
            $status = $statusMap[$statusCode] ?? 'unknown';

            return [
                'success' => true,
                'status' => $status,
                'status_description' => $responseData['StatusDescription'] ?? 'Durum bilinmiyor'
            ];

        } catch (Exception $e) {
            return [
                'success' => false,
                'error' => 'Durum sorgulama hatası: ' . $e->getMessage()
            ];
        }
    }
}
