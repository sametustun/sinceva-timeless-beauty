#!/bin/bash

###############################################################################
# SincEva Backend Installation Script
# Usage: bash install.sh
###############################################################################

set -e

echo "=================================================="
echo "  SincEva Contact API - Installation Script"
echo "=================================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "contact.php" ]; then
    echo -e "${RED}Error: contact.php not found. Run this script from the backend directory.${NC}"
    exit 1
fi

# Check PHP version
echo "Checking PHP version..."
PHP_VERSION=$(php -r "echo PHP_VERSION;")
echo -e "${GREEN}✓${NC} PHP $PHP_VERSION"

if ! php -r "exit(version_compare(PHP_VERSION, '8.0.0', '>=') ? 0 : 1);"; then
    echo -e "${RED}✗ PHP 8.0+ required${NC}"
    exit 1
fi

# Check Composer
echo ""
echo "Checking Composer..."
if ! command -v composer &> /dev/null; then
    echo -e "${RED}✗ Composer not found${NC}"
    echo "Install from: https://getcomposer.org/download/"
    exit 1
fi
echo -e "${GREEN}✓${NC} Composer found"

# Install dependencies
echo ""
echo "Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader
echo -e "${GREEN}✓${NC} Dependencies installed"

# Setup .env
echo ""
if [ ! -f ".env" ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo -e "${YELLOW}⚠${NC} Please edit .env file with your configuration"
    echo "  - SMTP_HOST, SMTP_USER, SMTP_PASS"
    echo "  - TURNSTILE_SECRET (optional)"
    echo "  - MAIL_TO"
else
    echo -e "${GREEN}✓${NC} .env file exists"
fi

# Create directories
echo ""
echo "Creating required directories..."
mkdir -p logs rate-limit
chmod 755 logs rate-limit
echo -e "${GREEN}✓${NC} Directories created"

# Set permissions
echo ""
echo "Setting file permissions..."
chmod 644 .env 2>/dev/null || true
chmod 644 .htaccess
chmod 644 contact.php
chmod 644 test.php
echo -e "${GREEN}✓${NC} Permissions set"

# Final check
echo ""
echo "=================================================="
echo "  Installation Complete!"
echo "=================================================="
echo ""
echo "Next steps:"
echo "1. Edit .env with your SMTP credentials"
echo "2. Test the backend: php test.php"
echo "3. Or visit: https://api.sinceva.com/contact/test.php"
echo ""
echo "Documentation: See README.md"
echo ""
