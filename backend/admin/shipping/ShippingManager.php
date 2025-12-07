<?php

require_once __DIR__ . '/ShippingProviderInterface.php';
require_once __DIR__ . '/YurticiShippingProvider.php';
require_once __DIR__ . '/HepsijetShippingProvider.php';
require_once __DIR__ . '/TrendyolExpressShippingProvider.php';

class ShippingManager
{
    private array $providers = [];

    public function __construct()
    {
        $this->registerProvider(new YurticiShippingProvider());
        $this->registerProvider(new HepsijetShippingProvider());
        $this->registerProvider(new TrendyolExpressShippingProvider());
    }

    public function registerProvider(ShippingProviderInterface $provider): void
    {
        $this->providers[$provider->getCode()] = $provider;
    }

    public function getProvider(string $code): ?ShippingProviderInterface
    {
        return $this->providers[$code] ?? null;
    }

    public function getAllProviders(): array
    {
        return $this->providers;
    }

    public function getProviderCodes(): array
    {
        return array_keys($this->providers);
    }
}
