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

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [visibleMode, setVisibleMode] = useState(false); // fallback için

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
        // invisible; fallback'ta visible'a geçiyoruz
        ...(visibleMode ? {} : { size: 'invisible' }),
        callback: (token: string) => {
          console.log('turnstile callback token:', token);
          submitWithToken(token);
        },
      });
      console.log('turnstile rendered, mode =', visibleMode ? 'visible' : 'invisible');
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
      document.body.appendChild(s);
    }
  }, [visibleMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- Submit ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!window.turnstile || !widgetIdRef.current) {
      toast({ title: 'Hata', description: 'Güvenlik doğrulaması yüklenemedi.', variant: 'destructive' });
      return;
    }
    setLoading(true);
    console.log('turnstile execute');
    window.turnstile.execute(widgetIdRef.current);

    // Fallback: 1.5sn sonra token gelmediyse getResponse dene,
    // yine yoksa görünür moda geçip kullanıcıdan onay iste.
    setTimeout(() => {
      const token = window.turnstile?.getResponse?.(widgetIdRef.current!);
      console.log('turnstile getResponse token:', token);
      if (token) submitWithToken(token);
      else {
        setVisibleMode(true); // visible'a geç
        setLoading(false);
        toast({
          title: 'Doğrulama gerekli',
          description: 'Lütfen aşağıdaki doğrulamayı tamamlayıp yeniden gönderin.',
        });
      }
    }, 1500);
  };

  // --- Token geldikten sonra API'ye gönder ---
  const submitWithToken = async (token: string) => {
    try {
      const payload = { ...formData, website: '', cf_token: token };
      const res = await fetch('https://api.sinceva.com/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.ok) {
        toast({ title: t.messageSentSuccess, description: t.messageSentDesc });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // invisible moda geri dön (bir sonraki gönderim UX'i için)
        setVisibleMode(false);
      } else {
        toast({ title: 'Hata', description: data.error || 'Gönderilemedi.', variant: 'destructive' });
      }
    } catch (err) {
      toast({ title: 'Hata', description: 'Bağlantı hatası. Lütfen tekrar deneyin.', variant: 'destructive' });
    } finally {
      setLoading(false);
      if (window.turnstile && widgetIdRef.current) window.turnstile.reset(widgetIdRef.current);
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
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required placeholder={t.enterFullName} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.emailAddress} *</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder={t.enterEmailPlaceholder} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">{t.subject} *</label>
                <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} required placeholder={t.subjectPlaceholder} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.message} *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required placeholder={t.messagePlaceholder} className="min-h-[120px]" />
              </div>

              {/* Turnstile mount */}
              <div ref={mountRef} />

              {/* Honeypot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

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
                  src="https://maps.google.com/maps?q=40.6529,29.3201&hl=tr&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sinceva Ofis Konumu"
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
