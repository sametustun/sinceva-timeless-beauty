<?php

interface ShippingProviderInterface
{
    /**
     * Create a shipment for an order
     * 
     * @param array $order Order data
     * @param array $providerConfig Provider configuration
     * @return array ['success' => bool, 'tracking_number' => string, 'label_url' => string, 'error' => string]
     */
    public function createShipment(array $order, array $providerConfig): array;

    /**
     * Get shipment status
     * 
     * @param string $trackingNumber Tracking number
     * @param array $providerConfig Provider configuration
     * @return array ['success' => bool, 'status' => string, 'status_description' => string, 'error' => string]
     */
    public function getShipmentStatus(string $trackingNumber, array $providerConfig): array;

    /**
     * Get provider code
     * 
     * @return string
     */
    public function getCode(): string;
}
