import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { logoContent, footerContent } from '@/data/content';

const Footer: React.FC = () => {
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
              The Origin of Beauty - Premium skincare for timeless elegance.
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
            <h4 className="font-semibold text-background">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-background/80 hover:text-primary transition-colors text-sm">
                The Origin Of Beauty
              </Link>
              <Link to="/blog" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Trends & Tips
              </Link>
              <Link to="/contact" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Contact
              </Link>
              <Link to="/shop" className="block text-background/80 hover:text-primary transition-colors text-sm">
                Shop
              </Link>
            </nav>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Policies</h4>
            <nav className="space-y-2">
              {footerContent.policies.map((policy) => (
                <Link 
                  key={policy.href}
                  to={policy.href} 
                  className="block text-background/80 hover:text-primary transition-colors text-sm"
                >
                  {policy.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Stay Connected</h4>
            <p className="text-background/80 text-sm">
              Subscribe to get beauty tips and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
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
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} SAFI COSMETIC LIMITED COMPANY. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Crafted for timeless beauty and elegance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;