<?php
/**
 * PayTR Configuration and Utilities
 */

require_once __DIR__ . '/../admin/config.php';

define('PAYTR_SETTINGS_FILE', DATA_DIR . '/settings.json');

class PayTRConfig
{
    private array $settings = [];
    
    public function __construct()
    {
        $this->loadSettings();
    }
    
    private function loadSettings(): void
    {
        if (file_exists(PAYTR_SETTINGS_FILE)) {
            $allSettings = json_decode(file_get_contents(PAYTR_SETTINGS_FILE), true) ?: [];
            $this->settings = $allSettings['paytr'] ?? [];
        }
    }
    
    public function getMerchantId(): string
    {
        return $this->settings['merchant_id'] ?? '';
    }
    
    public function getMerchantKey(): string
    {
        return $this->settings['merchant_key'] ?? '';
    }
    
    public function getMerchantSalt(): string
    {
        return $this->settings['merchant_salt'] ?? '';
    }
    
    public function isConfigured(): bool
    {
        return !empty($this->getMerchantId()) 
            && !empty($this->getMerchantKey()) 
            && !empty($this->getMerchantSalt());
    }
    
    public function getTestMode(): bool
    {
        return (bool)($this->settings['test_mode'] ?? true);
    }
    
    /**
     * Generate PayTR iframe token
     */
    public function generateToken(array $orderData): array
    {
        if (!$this->isConfigured()) {
            return ['success' => false, 'error' => 'PayTR ayarları yapılandırılmamış'];
        }
        
        $merchant_id = $this->getMerchantId();
        $merchant_key = $this->getMerchantKey();
        $merchant_salt = $this->getMerchantSalt();
        
        // Order info
        $merchant_oid = $orderData['order_id'];
        $email = $orderData['email'];
        $payment_amount = $orderData['amount'] * 100; // Kuruş cinsinden
        $user_basket = base64_encode(json_encode($orderData['basket']));
        $no_installment = $orderData['no_installment'] ?? 0;
        $max_installment = $orderData['max_installment'] ?? 0;
        $currency = $orderData['currency'] ?? 'TL';
        $test_mode = $this->getTestMode() ? '1' : '0';
        
        // User info
        $user_name = $orderData['user_name'];
        $user_address = $orderData['user_address'];
        $user_phone = $orderData['user_phone'];
        $user_ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
        
        // Callback URLs
        $merchant_ok_url = $orderData['success_url'];
        $merchant_fail_url = $orderData['fail_url'];
        
        // Timeout
        $timeout_limit = '30';
        $debug_on = $this->getTestMode() ? '1' : '0';
        $lang = 'tr';
        
        // Hash string
        $hash_str = $merchant_id . $user_ip . $merchant_oid . $email . $payment_amount . 
                    $user_basket . $no_installment . $max_installment . $currency . $test_mode;
        $paytr_token = base64_encode(hash_hmac('sha256', $hash_str . $merchant_salt, $merchant_key, true));
        
        // API request
        $post_vals = [
            'merchant_id' => $merchant_id,
            'user_ip' => $user_ip,
            'merchant_oid' => $merchant_oid,
            'email' => $email,
            'payment_amount' => $payment_amount,
            'paytr_token' => $paytr_token,
            'user_basket' => $user_basket,
            'debug_on' => $debug_on,
            'no_installment' => $no_installment,
            'max_installment' => $max_installment,
            'user_name' => $user_name,
            'user_address' => $user_address,
            'user_phone' => $user_phone,
            'merchant_ok_url' => $merchant_ok_url,
            'merchant_fail_url' => $merchant_fail_url,
            'timeout_limit' => $timeout_limit,
            'currency' => $currency,
            'test_mode' => $test_mode,
            'lang' => $lang,
        ];
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.paytr.com/odeme/api/get-token");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_vals);
        curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        
        $result = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);
        
        if ($error) {
            return ['success' => false, 'error' => 'PayTR bağlantı hatası: ' . $error];
        }
        
        $result = json_decode($result, true);
        
        if ($result['status'] === 'success') {
            return [
                'success' => true,
                'token' => $result['token'],
                'iframe_url' => 'https://www.paytr.com/odeme/guvenli/' . $result['token']
            ];
        }
        
        return ['success' => false, 'error' => $result['reason'] ?? 'Token alınamadı'];
    }
    
    /**
     * Verify callback hash
     */
    public function verifyCallback(array $postData): bool
    {
        $merchant_key = $this->getMerchantKey();
        $merchant_salt = $this->getMerchantSalt();
        
        $hash = base64_encode(hash_hmac('sha256', 
            $postData['merchant_oid'] . $merchant_salt . $postData['status'] . $postData['total_amount'], 
            $merchant_key, true));
        
        return $hash === $postData['hash'];
    }
}
