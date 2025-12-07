<?php
/**
 * iyzico Configuration and Utilities
 */

require_once __DIR__ . '/../admin/config.php';

define('IYZICO_SETTINGS_FILE', DATA_DIR . '/settings.json');

class IyzicoConfig
{
    private array $settings = [];
    
    public function __construct()
    {
        $this->loadSettings();
    }
    
    private function loadSettings(): void
    {
        if (file_exists(IYZICO_SETTINGS_FILE)) {
            $allSettings = json_decode(file_get_contents(IYZICO_SETTINGS_FILE), true) ?: [];
            $this->settings = $allSettings['iyzico'] ?? [];
        }
    }
    
    public function getApiKey(): string
    {
        return $this->settings['api_key'] ?? '';
    }
    
    public function getSecretKey(): string
    {
        return $this->settings['secret_key'] ?? '';
    }
    
    public function isConfigured(): bool
    {
        return !empty($this->getApiKey()) && !empty($this->getSecretKey());
    }
    
    public function getTestMode(): bool
    {
        return (bool)($this->settings['test_mode'] ?? true);
    }
    
    public function getBaseUrl(): string
    {
        return $this->getTestMode() 
            ? 'https://sandbox-api.iyzipay.com'
            : 'https://api.iyzipay.com';
    }
    
    /**
     * Generate iyzico authorization header
     */
    private function generateAuthorizationHeader(string $requestString): string
    {
        $apiKey = $this->getApiKey();
        $secretKey = $this->getSecretKey();
        $randomString = $this->generateRandomString();
        
        $hashString = $apiKey . $randomString . $secretKey . $requestString;
        $hash = base64_encode(sha1($hashString, true));
        
        return 'IYZWS ' . $apiKey . ':' . $hash;
    }
    
    private function generateRandomString(int $length = 8): string
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $result = '';
        for ($i = 0; $i < $length; $i++) {
            $result .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $result;
    }
    
    /**
     * Initialize checkout form (3D Secure)
     */
    public function initializeCheckoutForm(array $orderData): array
    {
        if (!$this->isConfigured()) {
            return ['success' => false, 'error' => 'iyzico ayarları yapılandırılmamış'];
        }
        
        $conversationId = $orderData['order_id'];
        $price = number_format($orderData['amount'], 2, '.', '');
        $paidPrice = $price;
        $currency = 'TRY';
        
        // Buyer info
        $buyer = [
            'id' => 'BY' . substr(md5($orderData['email']), 0, 10),
            'name' => $this->getFirstName($orderData['user_name']),
            'surname' => $this->getLastName($orderData['user_name']),
            'gsmNumber' => $this->formatPhone($orderData['user_phone']),
            'email' => $orderData['email'],
            'identityNumber' => '11111111111', // TC kimlik - test için sabit
            'registrationAddress' => $orderData['user_address'],
            'ip' => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1',
            'city' => $orderData['user_city'] ?? 'Istanbul',
            'country' => 'Turkey',
        ];
        
        // Shipping address
        $shippingAddress = [
            'contactName' => $orderData['user_name'],
            'city' => $orderData['user_city'] ?? 'Istanbul',
            'country' => 'Turkey',
            'address' => $orderData['user_address'],
        ];
        
        // Billing address
        $billingAddress = $shippingAddress;
        
        // Basket items
        $basketItems = [];
        foreach ($orderData['basket'] as $item) {
            $basketItems[] = [
                'id' => 'BI' . rand(1000, 9999),
                'name' => $item[0],
                'category1' => 'Kozmetik',
                'itemType' => 'PHYSICAL',
                'price' => number_format((float)$item[1] * (int)$item[2], 2, '.', ''),
            ];
        }
        
        $request = [
            'locale' => 'tr',
            'conversationId' => $conversationId,
            'price' => $price,
            'paidPrice' => $paidPrice,
            'currency' => $currency,
            'basketId' => 'B' . $conversationId,
            'paymentGroup' => 'PRODUCT',
            'callbackUrl' => $orderData['callback_url'],
            'enabledInstallments' => [1, 2, 3, 6, 9, 12],
            'buyer' => $buyer,
            'shippingAddress' => $shippingAddress,
            'billingAddress' => $billingAddress,
            'basketItems' => $basketItems,
        ];
        
        $jsonRequest = json_encode($request);
        $randomString = $this->generateRandomString();
        $hashString = $randomString . $jsonRequest;
        $signature = base64_encode(hash_hmac('sha256', $hashString, $this->getSecretKey(), true));
        
        $headers = [
            'Accept: application/json',
            'Content-Type: application/json',
            'Authorization: IYZWSv2 ' . $this->getApiKey() . ':' . $signature,
            'x-iyzi-rnd: ' . $randomString,
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->getBaseUrl() . '/payment/iyzipos/checkoutform/initialize/auth/ecom');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonRequest);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        
        $result = curl_exec($ch);
        $error = curl_error($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($error) {
            return ['success' => false, 'error' => 'iyzico bağlantı hatası: ' . $error];
        }
        
        $response = json_decode($result, true);
        
        // Log for debugging
        file_put_contents(LOG_DIR . '/iyzico_init.log', date('c') . " - Request: " . $jsonRequest . "\nResponse: " . $result . "\n\n", FILE_APPEND);
        
        if (isset($response['status']) && $response['status'] === 'success') {
            return [
                'success' => true,
                'token' => $response['token'],
                'checkoutFormContent' => $response['checkoutFormContent'],
                'paymentPageUrl' => $response['paymentPageUrl'] ?? null,
            ];
        }
        
        return [
            'success' => false, 
            'error' => $response['errorMessage'] ?? ($response['errorCode'] ?? 'Bilinmeyen hata')
        ];
    }
    
    /**
     * Retrieve checkout form result
     */
    public function retrieveCheckoutForm(string $token): array
    {
        if (!$this->isConfigured()) {
            return ['success' => false, 'error' => 'iyzico ayarları yapılandırılmamış'];
        }
        
        $request = [
            'locale' => 'tr',
            'token' => $token,
        ];
        
        $jsonRequest = json_encode($request);
        $randomString = $this->generateRandomString();
        $hashString = $randomString . $jsonRequest;
        $signature = base64_encode(hash_hmac('sha256', $hashString, $this->getSecretKey(), true));
        
        $headers = [
            'Accept: application/json',
            'Content-Type: application/json',
            'Authorization: IYZWSv2 ' . $this->getApiKey() . ':' . $signature,
            'x-iyzi-rnd: ' . $randomString,
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->getBaseUrl() . '/payment/iyzipos/checkoutform/auth/ecom/detail');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonRequest);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        
        $result = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);
        
        if ($error) {
            return ['success' => false, 'error' => 'iyzico bağlantı hatası: ' . $error];
        }
        
        $response = json_decode($result, true);
        
        // Log for debugging
        file_put_contents(LOG_DIR . '/iyzico_retrieve.log', date('c') . " - Token: $token\nResponse: " . $result . "\n\n", FILE_APPEND);
        
        if (isset($response['status']) && $response['status'] === 'success' && $response['paymentStatus'] === 'SUCCESS') {
            return [
                'success' => true,
                'paymentId' => $response['paymentId'],
                'paymentStatus' => $response['paymentStatus'],
                'paidPrice' => $response['paidPrice'],
                'conversationId' => $response['conversationId'],
                'installment' => $response['installment'] ?? 1,
            ];
        }
        
        return [
            'success' => false,
            'error' => $response['errorMessage'] ?? ($response['paymentStatus'] ?? 'Ödeme başarısız')
        ];
    }
    
    private function getFirstName(string $fullName): string
    {
        $parts = explode(' ', trim($fullName));
        return $parts[0] ?? 'Müşteri';
    }
    
    private function getLastName(string $fullName): string
    {
        $parts = explode(' ', trim($fullName));
        return count($parts) > 1 ? implode(' ', array_slice($parts, 1)) : 'Müşteri';
    }
    
    private function formatPhone(string $phone): string
    {
        $phone = preg_replace('/[^0-9]/', '', $phone);
        if (strlen($phone) === 10) {
            return '+90' . $phone;
        }
        if (strlen($phone) === 11 && $phone[0] === '0') {
            return '+9' . $phone;
        }
        return '+90' . $phone;
    }
}
