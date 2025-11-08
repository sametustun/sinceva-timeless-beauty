import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import contactBanner from '@/assets/contact_banner.jpg';
import contactBannerMobile from '@/assets/contact_banner_mobile.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

// turnstile tipi (TS)
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: any) => string;
      execute: (id: string) => void;
      reset: (id: string) => void;
      getResponse?: (id?: string) => string;
    };
  }
}

const SITE_KEY = '0x4AAAAAAB_0P6uOpt4ockt7'; // ← SENİN SITE KEY

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const mountRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  // --- Turnstile script + render ---
  useEffect(() => {
    const scriptId = 'cf-turnstile';
    const init = () => {
      if (!window.turnstile || !mountRef.current) return;
      // mount'ı temizle ve yeniden render et
      mountRef.current.innerHTML = '';
      widgetIdRef.current = window.turnstile.render(mountRef.current, {
        sitekey: SITE_KEY,
        theme: 'light',
        size: 'normal',
        callback: (token: string) => {
          console.log('turnstile callback token:', token);
          setTurnstileToken(token);
        },
        'error-callback': () => {
          console.error('turnstile error');
          toast({ 
            title: 'Doğrulama Hatası', 
            description: 'Güvenlik doğrulaması başarısız. Lütfen sayfayı yenileyin.', 
            variant: 'destructive' 
          });
        },
      });
      console.log('turnstile rendered, widget ID:', widgetIdRef.current);
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      console.log('turnstile script already loaded');
      init();
    } else {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      s.async = true;
      s.defer = true;
      s.onload = () => { console.log('turnstile script loaded'); init(); };
      s.onerror = () => {
        console.error('turnstile script failed to load');
        toast({ 
          title: 'Yükleme Hatası', 
          description: 'Güvenlik bileşeni yüklenemedi. Lütfen sayfayı yenileyin.', 
          variant: 'destructive' 
        });
      };
      document.body.appendChild(s);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- Submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Turnstile token varsa gönder, yoksa boş string gönder (backend'de opsiyonel)
    await submitWithToken(turnstileToken || '');
  };

  // --- Token geldikten sonra API'ye gönder ---
  const submitWithToken = async (token: string) => {
    try {
      const { website, ...cleanData } = formData;
      const payload = { ...cleanData, cf_turnstile_token: token };
      
      const res = await fetch('https://api.sinceva.com/contact/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();

      if (data.ok) {
        toast({ title: t.messageSentSuccess, description: t.messageSentDesc });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
        setTurnstileToken('');
      } else {
        const errorMessages: Record<string, string> = {
          'VALIDATION_ERROR': 'Lütfen tüm zorunlu alanları doldurun.',
          'INVALID_EMAIL': 'Geçersiz e-posta adresi.',
          'TURNSTILE_FAILED': 'Güvenlik doğrulaması başarısız.',
          'RATE_LIMITED': 'Çok fazla deneme. Lütfen daha sonra tekrar deneyin.',
          'MAIL_SEND_FAILED': 'E-posta gönderilemedi. Lütfen tekrar deneyin.',
        };
        const errorMsg = errorMessages[data.error] || data.error || 'Bir hata oluştu.';
        toast({ title: 'Hata', description: errorMsg, variant: 'destructive' });
      }
    } catch (err) {
      console.error('Submit error:', err);
      toast({ title: 'Hata', description: 'Bağlantı hatası. Lütfen tekrar deneyin.', variant: 'destructive' });
    } finally {
      setLoading(false);
      setTurnstileToken('');
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }
    }
  };

  const contactInfo = [
    { icon: MapPin, title: t.address,       content: t.addressContent },
    { icon: Phone,  title: t.phone,         content: t.phoneContent },
    { icon: Mail,   title: t.email,         content: t.emailContent },
    { icon: Clock,  title: t.businessHours, content: t.hoursContent },
  ];

  return (
    <Layout>
      <PageHero
        title={t.contactUs}
        subtitle={t.contactSubtitle}
        backgroundImage={contactBanner}
        backgroundImageMobile={contactBannerMobile}
      />

      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">{t.sendMessage}</h2>

            <form onSubmit={handleSubmit} className="space-y-6" id="sincevaContactForm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t.fullName} *</label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required placeholder={t.enterFullName} maxLength={100} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.emailAddress} *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder={t.enterEmailPlaceholder} maxLength={255} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">{t.phone}</label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+90 5XX XXX XX XX" maxLength={20} />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">{t.subject} *</label>
                  <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} required placeholder={t.subjectPlaceholder} maxLength={200} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.message} *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder={t.messagePlaceholder} className="min-h-[120px]" maxLength={2000} />
              </div>

              {/* Turnstile mount */}
              <div className="flex justify-center py-4">
                <div ref={mountRef} />
              </div>

              {/* Honeypot */}
              <input type="text" name="website" value={formData.website} onChange={handleInputChange} className="absolute opacity-0 pointer-events-none" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Gönderiliyor…' : t.sendMessageBtn}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">{t.getInTouch}</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Map */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{t.interactiveMap}</h3>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Çiftlik+Mah.+Karayolu+Cad.+No:124/B+6+Çiftlikköy/Yalova&hl=tr&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sinceva Ofis Konumu - Çiftlik Mah. Karayolu Cad. No:124/B 6 Çiftlikköy/Yalova"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
