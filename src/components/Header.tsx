import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import SearchPanel from './SearchPanel';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'THE ORIGIN OF BEAUTY', href: '/' },
    { name: 'SKINCARE', href: '#', hasMegaMenu: true },
    { name: 'TRENDS & TIPS', href: '/blog' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-glass' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Logo Section */}
        <div className="flex justify-center py-6 border-b border-border/20">
          <Link to="/" className={`text-3xl font-bold tracking-wider hover:opacity-80 transition-all duration-300 ${
            isScrolled ? 'text-[#191919]' : 'text-primary'
          }`}>
            SINCEVA
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex justify-center items-center py-4 space-x-12">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasMegaMenu ? (
                <button
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                  className={`text-sm font-medium tracking-wide transition-colors uppercase ${
                    isScrolled 
                      ? 'text-[#191919] hover:text-[#191919]/80' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors uppercase ${
                    location.pathname === item.href
                      ? (isScrolled ? 'text-[#191919]' : 'text-primary')
                      : (isScrolled ? 'text-[#191919] hover:text-[#191919]/80' : 'text-foreground hover:text-primary')
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Search Icon */}
          <button
            onClick={() => setShowSearch(true)}
            className={`ml-8 p-2 transition-colors ${
              isScrolled 
                ? 'text-[#191919] hover:text-[#191919]/80' 
                : 'text-foreground hover:text-primary'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-between items-center py-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${isScrolled ? 'text-[#191919]' : 'text-foreground'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <button
            onClick={() => setShowSearch(true)}
            className={`p-2 ${isScrolled ? 'text-[#191919]' : 'text-foreground'}`}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href === '#' ? '/shop' : item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-sm font-medium text-foreground hover:text-primary uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mega Menu */}
      <div
        onMouseEnter={() => setShowMegaMenu(true)}
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <MegaMenu isVisible={showMegaMenu} />
      </div>

      {/* Search Panel */}
      <SearchPanel isVisible={showSearch} onClose={() => setShowSearch(false)} />
    </header>
  );
};

export default Header;