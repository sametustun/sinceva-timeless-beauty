import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { logoContent, footerContent } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter signup
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  return (
    <footer className="text-background" style={{ backgroundColor: '#191919' }}>
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="hidden md:block">
              <img 
                src={logoContent.desktop.white}
                alt="SINCEVA Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h3 className="md:hidden text-2xl font-bold tracking-wider">SINCEVA</h3>
            <p className="text-background/80 text-sm">
              {t.theOriginOfBeauty} - Premium skincare for timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">{t.quickLinks}</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.theOriginOfBeauty}
              </Link>
              <Link to="/blog" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.trendsAndTips}
              </Link>
              <Link to="/contact" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.contact}
              </Link>
              <Link to="/shop" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.shop}
              </Link>
            </nav>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">{t.policies}</h4>
            <nav className="space-y-2">
              <Link to="/privacy" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.privacyPolicy}
              </Link>
              <Link to="/cookie-policy" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.cookiePolicy}
              </Link>
              <Link to="/terms" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.termsAndConditions}
              </Link>
              <Link to="/consumer-ratings" className="block text-background/80 hover:text-primary transition-colors text-sm">
                {t.consumerReviewRules}
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">{t.stayConnected}</h4>
            <p className="text-background/80 text-sm">
              {t.newsletterDesc}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder={t.enterEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                required
              />
              <Button 
                type="submit" 
                variant="default"
                className="w-full bg-primary hover:bg-primary-dark"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t.subscribe}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} SAFI COSMETIC LIMITED COMPANY. {t.allRightsReserved}
            </p>
            <p className="text-background/60 text-sm">
              {t.craftedFor}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;