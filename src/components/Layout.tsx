import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  console.log('Layout component loading...');
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;