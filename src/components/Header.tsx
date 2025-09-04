import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import MegaMenu from './MegaMenu';
import SearchPanel from './SearchPanel';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top
      const isAtTop = currentScrollY < 10;
      
      // Determine scroll direction
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      
      // Show/hide navbar based on scroll direction
      if (isAtTop) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (scrollingDown && currentScrollY > 50) {
        setIsVisible(false);
        // Don't change isScrolled when hiding
      } else if (scrollingUp && currentScrollY > 50) {
        setIsVisible(true);
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: 'THE ORIGIN OF BEAUTY', href: '/' },
    { name: 'SKINCARE', href: '#', hasMegaMenu: true },
    { name: 'TRENDS & TIPS', href: '/blog' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform rounded-b-lg ${
      !isVisible ? '-translate-y-full' : 'translate-y-0'
    } ${
      !isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Logo Section */}
        <div className={`flex justify-center py-6 ${!isScrolled ? 'border-b border-gray-100' : ''}`}>
          <Link to="/" className={`text-3xl font-bold tracking-wider transition-all duration-500 ${
            !isScrolled ? 'text-[#191919] hover:opacity-80' : 'text-white hover:opacity-80'
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
                  className={`text-sm font-medium tracking-wide transition-all duration-500 uppercase ${
                    !isScrolled 
                      ? 'text-[#191919] hover:text-[#191919]/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-500 uppercase ${
                    !isScrolled 
                      ? 'text-[#191919] hover:text-[#191919]/80' 
                      : 'text-white hover:text-white/80'
                  } ${
                    location.pathname === item.href ? 'opacity-100' : 'opacity-90'
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
            className={`ml-8 p-2 transition-all duration-500 ${
              !isScrolled 
                ? 'text-[#191919] hover:text-[#191919]/80' 
                : 'text-white hover:text-white/80'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-between items-center py-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-all duration-500 ${
              !isScrolled ? 'text-[#191919]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <button
            onClick={() => setShowSearch(true)}
            className={`p-2 transition-all duration-500 ${
              !isScrolled ? 'text-[#191919]' : 'text-white'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 ${!isScrolled ? 'border-t border-gray-100' : 'border-t border-border/20'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href === '#' ? '/shop' : item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-all duration-500 uppercase ${
                  !isScrolled 
                    ? 'text-[#191919] hover:text-[#191919]/80' 
                    : 'text-white hover:text-white/80'
                }`}
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