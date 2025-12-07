<?php
/**
 * Trendyol API Client
 * Handles all Trendyol Marketplace API interactions
 */

class TrendyolAPI {
    private string $apiUrl = 'https://api.trendyol.com/sapigw';
    private string $apiKey;
    private string $apiSecret;
    private string $sellerId;
    private array $lastError = [];

    public function __construct(string $apiKey, string $apiSecret, string $sellerId) {
        $this->apiKey = $apiKey;
        $this->apiSecret = $apiSecret;
        $this->sellerId = $sellerId;
    }

    /**
     * Get authorization header
     */
    private function getAuthHeader(): string {
        return 'Basic ' . base64_encode($this->apiKey . ':' . $this->apiSecret);
    }

    /**
     * Make API request
     */
    private function request(string $method, string $endpoint, array $data = null): array {
        $url = $this->apiUrl . $endpoint;
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: ' . $this->getAuthHeader(),
            'Content-Type: application/json',
            'User-Agent: SincEva-Integration/1.0'
        ]);

        switch (strtoupper($method)) {
            case 'POST':
                curl_setopt($ch, CURLOPT_POST, true);
                if ($data) {
                    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
                }
                break;
            case 'PUT':
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                if ($data) {
                    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
                }
                break;
            case 'DELETE':
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                break;
        }

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        if ($error) {
            $this->lastError = ['type' => 'curl', 'message' => $error];
            return ['success' => false, 'error' => 'Bağlantı hatası: ' . $error];
        }

        $result = json_decode($response, true) ?? [];
        
        if ($httpCode < 200 || $httpCode >= 300) {
            $errorMessage = $result['errors'][0]['message'] ?? "HTTP $httpCode";
            $this->lastError = ['type' => 'api', 'code' => $httpCode, 'message' => $errorMessage, 'response' => $result];
            return ['success' => false, 'error' => $errorMessage, 'httpCode' => $httpCode];
        }

        return ['success' => true, 'data' => $result, 'httpCode' => $httpCode];
    }

    /**
     * Get last error
     */
    public function getLastError(): array {
        return $this->lastError;
    }

    // ========== PRODUCT METHODS ==========

    /**
     * Get products from Trendyol
     */
    public function getProducts(int $page = 0, int $size = 50, array $filters = []): array {
        $params = array_merge([
            'page' => $page,
            'size' => $size
        ], $filters);
        
        $query = http_build_query($params);
        return $this->request('GET', "/sapigw/suppliers/{$this->sellerId}/products?" . $query);
    }

    /**
     * Create products on Trendyol
     */
    public function createProducts(array $products): array {
        return $this->request('POST', "/sapigw/suppliers/{$this->sellerId}/v2/products", [
            'items' => $products
        ]);
    }

    /**
     * Update products on Trendyol
     */
    public function updateProducts(array $products): array {
        return $this->request('PUT', "/sapigw/suppliers/{$this->sellerId}/v2/products", [
            'items' => $products
        ]);
    }

    /**
     * Update price and inventory
     */
    public function updatePriceAndInventory(array $items): array {
        return $this->request('POST', "/sapigw/suppliers/{$this->sellerId}/products/price-and-inventory", [
            'items' => $items
        ]);
    }

    /**
     * Delete products
     */
    public function deleteProducts(array $barcodes): array {
        $items = array_map(fn($barcode) => ['barcode' => $barcode], $barcodes);
        return $this->request('DELETE', "/sapigw/suppliers/{$this->sellerId}/v2/products", [
            'items' => $items
        ]);
    }

    /**
     * Get batch request result
     */
    public function getBatchResult(string $batchId): array {
        return $this->request('GET', "/sapigw/suppliers/{$this->sellerId}/products/batch-requests/{$batchId}");
    }

    // ========== ORDER METHODS ==========

    /**
     * Get orders/shipment packages
     */
    public function getOrders(array $params = []): array {
        $defaultParams = [
            'page' => 0,
            'size' => 50,
            'orderByField' => 'PackageLastModifiedDate',
            'orderByDirection' => 'DESC'
        ];
        
        $params = array_merge($defaultParams, $params);
        $query = http_build_query($params);
        
        return $this->request('GET', "/sapigw/suppliers/{$this->sellerId}/orders?" . $query);
    }

    /**
     * Get shipment packages by status
     */
    public function getOrdersByStatus(string $status, int $days = 7): array {
        $startDate = (time() - ($days * 24 * 60 * 60)) * 1000;
        $endDate = time() * 1000;
        
        return $this->getOrders([
            'status' => $status,
            'startDate' => $startDate,
            'endDate' => $endDate
        ]);
    }

    /**
     * Update tracking number
     */
    public function updateTrackingNumber(int $shipmentPackageId, string $trackingNumber): array {
        return $this->request('PUT', "/sapigw/suppliers/{$this->sellerId}/shipment-packages/{$shipmentPackageId}", [
            'trackingNumber' => $trackingNumber
        ]);
    }

    /**
     * Send invoice link
     */
    public function sendInvoiceLink(int $shipmentPackageId, string $invoiceLink): array {
        return $this->request('POST', "/sapigw/suppliers/{$this->sellerId}/shipment-packages/{$shipmentPackageId}/invoice-link", [
            'invoiceLink' => $invoiceLink
        ]);
    }

    /**
     * Update package to picking status
     */
    public function updatePackageStatusPicking(array $lines): array {
        return $this->request('PUT', "/sapigw/suppliers/{$this->sellerId}/shipment-packages/update-status", [
            'lines' => $lines,
            'status' => 'Picking'
        ]);
    }

    /**
     * Update package to invoiced status
     */
    public function updatePackageStatusInvoiced(int $shipmentPackageId, string $invoiceNumber, string $invoiceDate): array {
        return $this->request('PUT', "/sapigw/suppliers/{$this->sellerId}/shipment-packages/{$shipmentPackageId}/invoice", [
            'invoiceNumber' => $invoiceNumber,
            'invoiceDate' => strtotime($invoiceDate) * 1000
        ]);
    }

    // ========== CUSTOMER QUESTIONS ==========

    /**
     * Get customer questions
     */
    public function getQuestions(array $params = []): array {
        $defaultParams = [
            'page' => 0,
            'size' => 50,
            'status' => 'WAITING_FOR_ANSWER'
        ];
        
        $params = array_merge($defaultParams, $params);
        $query = http_build_query($params);
        
        return $this->request('GET', "/sapigw/suppliers/{$this->sellerId}/questions/filter?" . $query);
    }

    /**
     * Answer a question
     */
    public function answerQuestion(int $questionId, string $answer): array {
        return $this->request('POST', "/sapigw/suppliers/{$this->sellerId}/questions/{$questionId}/answers", [
            'text' => $answer
        ]);
    }

    // ========== HELPER METHODS ==========

    /**
     * Get categories
     */
    public function getCategories(): array {
        return $this->request('GET', '/product-categories');
    }

    /**
     * Get category attributes
     */
    public function getCategoryAttributes(int $categoryId): array {
        return $this->request('GET', "/product-categories/{$categoryId}/attributes");
    }

    /**
     * Get brands
     */
    public function getBrands(int $page = 0, int $size = 1000): array {
        return $this->request('GET', "/brands?page={$page}&size={$size}");
    }

    /**
     * Search brands by name
     */
    public function searchBrands(string $name): array {
        $encodedName = urlencode($name);
        return $this->request('GET', "/brands/by-name?name={$encodedName}");
    }

    /**
     * Get shipment providers
     */
    public function getShipmentProviders(): array {
        return $this->request('GET', '/shipment-providers');
    }

    /**
     * Get supplier addresses
     */
    public function getSupplierAddresses(): array {
        return $this->request('GET', "/sapigw/suppliers/{$this->sellerId}/addresses");
    }

    /**
     * Test API connection
     */
    public function testConnection(): array {
        $result = $this->getSupplierAddresses();
        if ($result['success']) {
            return ['success' => true, 'message' => 'API bağlantısı başarılı'];
        }
        return ['success' => false, 'message' => $result['error'] ?? 'Bağlantı başarısız'];
    }
}
