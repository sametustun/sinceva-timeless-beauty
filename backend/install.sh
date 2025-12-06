#!/bin/bash
# SincEva Backend Install Script
# Bu script cPanel'de çalıştırılmalıdır

echo "=== SincEva Backend Kurulumu ==="

# Dizine geç
cd /home/sin66vacom/public_html/api || exit 1

# Composer'ı indir (yoksa)
if [ ! -f "composer.phar" ]; then
    echo "Composer indiriliyor..."
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php composer-setup.php --quiet
    rm composer-setup.php
fi

# Bağımlılıkları yükle
echo "Bağımlılıklar yükleniyor..."
php composer.phar install --no-dev --optimize-autoloader

# .env dosyasını oluştur (yoksa)
if [ ! -f ".env" ]; then
    echo ".env dosyası oluşturuluyor..."
    cp .env.example .env
    echo ""
    echo "ÖNEMLİ: .env dosyasını düzenleyip TURNSTILE_SECRET değerini ekleyin!"
    echo "Dosya yolu: /home/sin66vacom/public_html/api/.env"
fi

# Dizinleri oluştur
mkdir -p logs rate-limit
chmod 755 logs rate-limit

echo ""
echo "=== Kurulum Tamamlandı ==="
echo "Test için: https://api.sinceva.com/test.php"
