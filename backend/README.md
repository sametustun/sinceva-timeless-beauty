# SincEva Contact Form API

Production-ready contact form backend with Cloudflare Turnstile verification, SMTP email, rate limiting, and comprehensive logging.

## 🚀 Features

- ✅ Cloudflare Turnstile verification
- ✅ CORS protection (sinceva.com only)
- ✅ Rate limiting (10/min per IP, 5/min per email)
- ✅ SMTP email with PHPMailer
- ✅ Comprehensive logging
- ✅ Input validation & sanitization
- ✅ Honey-pot protection
- ✅ Fallback to PHP mail()

## 📋 Requirements

- PHP 8.0 or higher
- Composer
- Apache with mod_rewrite and mod_headers
- SMTP server access
- Cloudflare account (for Turnstile)

## 🛠️ Installation

### 1. Upload Files to Server

Upload all files from `backend/` directory to `api.sinceva.com/contact/`:

```
api.sinceva.com/
└── contact/
    ├── contact.php
    ├── .env
    ├── .htaccess
    ├── composer.json
    ├── logs/         (will be created automatically)
    └── rate-limit/   (will be created automatically)
```

### 2. Install Dependencies

SSH into your server and run:

```bash
cd /path/to/api.sinceva.com/contact
composer install --no-dev --optimize-autoloader
```

### 3. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
TURNSTILE_SECRET=your_turnstile_secret_key
ALLOWED_ORIGIN=https://sinceva.com
MAIL_TO=destek@sinceva.com
MAIL_TO_NAME=SincEva Destek
SMTP_HOST=smtp.yourhost.com
SMTP_PORT=587
SMTP_USER=no-reply@sinceva.com
SMTP_PASS=your_smtp_password
SMTP_SECURE=tls
```

### 4. Set Permissions

```bash
chmod 755 contact.php
chmod 600 .env
chmod 755 logs
chmod 755 rate-limit
```

### 5. Configure Cloudflare

#### DNS Settings:
- Add A or CNAME record for `api.sinceva.com`
- Enable proxy (orange cloud) for SSL/TLS protection
- Set SSL/TLS mode to "Full (strict)"

#### Turnstile Setup:
1. Go to [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)
2. Create new site
3. Add domains: `sinceva.com`, `www.sinceva.com`
4. Copy **Site Key** (for frontend) and **Secret Key** (for `.env`)
5. Mode: Managed (recommended) or Invisible

### 6. Update Frontend

Frontend already configured in `src/pages/Contact.tsx`:

```typescript
const SITE_KEY = '0x4AAAAAAB_0P6uOpt4ockt7'; // Your Turnstile Site Key
```

API endpoint:
```typescript
fetch('https://api.sinceva.com/contact/contact.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});
```

## 🧪 Testing

### Test Contact Form:
1. Visit https://sinceva.com/contact
2. Fill out the form
3. Submit and verify email delivery

### Test Rate Limiting:
```bash
# Send 11 requests in quick succession
for i in {1..11}; do
  curl -X POST https://api.sinceva.com/contact/contact.php \
    -H "Content-Type: application/json" \
    -H "Origin: https://sinceva.com" \
    -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message","cf_turnstile_token":"test"}'
  echo "\nRequest $i"
done
```

Expected: First 10 succeed, 11th returns 429 (Rate Limited)

### Check Logs:
```bash
tail -f logs/contact.log
```

## 🔧 Troubleshooting

### Email Not Sending:
- Verify SMTP credentials in `.env`
- Check SMTP port (587 for TLS, 465 for SSL)
- Ensure SMTP server allows connections from your server IP
- Check logs: `tail -100 logs/contact.log`

### CORS Errors:
- Verify `ALLOWED_ORIGIN` in `.env` matches exactly
- Check browser console for specific error
- Ensure Cloudflare proxy is enabled (orange cloud)

### Turnstile Fails:
- Verify secret key in `.env` is correct
- Check domain configuration in Cloudflare Turnstile dashboard
- Test with visible mode first, then invisible

### Rate Limit Issues:
- Clear rate limit files: `rm -rf rate-limit/*`
- Adjust limits in `contact.php` (lines 191-216)

### Permission Denied:
```bash
chmod 755 logs rate-limit
chown www-data:www-data logs rate-limit  # or apache:apache
```

## 📊 Monitoring

### View Recent Logs:
```bash
tail -50 logs/contact.log | jq
```

### Count Requests by Status:
```bash
cat logs/contact.log | jq -r '.status' | sort | uniq -c
```

### Find Failed Attempts:
```bash
grep -E "FAILED|ERROR" logs/contact.log | jq
```

### Rate Limit Stats:
```bash
ls -lh rate-limit/ | wc -l  # Number of unique users/IPs tracked
```

## 🔒 Security Best Practices

1. **Never commit `.env`** - Add to `.gitignore`
2. **Use strong SMTP password** - Rotate regularly
3. **Monitor logs** - Check for suspicious patterns
4. **Limit log file size** - Rotate logs weekly
5. **Update dependencies** - Run `composer update` monthly
6. **Restrict API access** - Only allow sinceva.com origin

## 📁 File Structure

```
contact/
├── contact.php          # Main API handler
├── .env                 # Configuration (DO NOT COMMIT)
├── .env.example         # Configuration template
├── .htaccess           # Security headers & protection
├── composer.json       # Dependencies
├── composer.lock       # Locked dependency versions
├── vendor/             # Composer dependencies
├── logs/
│   └── contact.log     # Request logs (JSON format)
└── rate-limit/         # Rate limit tracking files
    ├── [md5_hash].txt  # IP-based rate limits
    └── [md5_hash].txt  # Email-based rate limits
```

## 🆘 Support

For issues or questions:
- Email: destek@sinceva.com
- Check logs: `tail -100 logs/contact.log`
- Test endpoint: `curl -X OPTIONS https://api.sinceva.com/contact/contact.php -H "Origin: https://sinceva.com" -v`

## 📝 Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Missing or invalid required fields |
| `INVALID_EMAIL` | Email format is invalid |
| `TURNSTILE_FAILED` | Cloudflare verification failed |
| `TURNSTILE_UNAVAILABLE` | Could not reach Cloudflare API |
| `RATE_LIMITED` | Too many requests (429) |
| `SERVER_MISCONFIGURED` | Missing env variables |
| `MAIL_SEND_FAILED` | Email delivery failed |
| `METHOD_NOT_ALLOWED` | Only POST allowed (405) |
| `FORBIDDEN` | Invalid origin (403) |

## 🔄 Maintenance

### Weekly:
- Check log file size: `ls -lh logs/contact.log`
- Review failed requests: `grep "FAILED" logs/contact.log`

### Monthly:
- Update dependencies: `composer update`
- Clear old rate-limit files: `find rate-limit -type f -mtime +7 -delete`
- Rotate logs: `mv logs/contact.log logs/contact-$(date +%Y%m).log`

### As Needed:
- Update Turnstile keys if rotated
- Update SMTP credentials if changed
- Adjust rate limits based on traffic

---

**Last Updated:** 2025-01-08  
**Version:** 1.0.0  
**License:** Proprietary - SincEva
