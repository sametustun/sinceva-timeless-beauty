import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import MegaMenu from './MegaMenu';
import { useLogos } from '../hooks/useLogo';
import { logoContent } from '../data/content';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const logos = useLogos();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top
      const isAtTop = currentScrollY < 10;
      
      // Determine scroll direction
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      
      // Don't hide navbar if mega menu is open on mobile
      const isMobile = window.innerWidth < 768;
      const preventHide = isMobile && showMegaMenu;
      
      // Show/hide navbar based on scroll direction
      if (isAtTop) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (scrollingDown && currentScrollY > 50 && !preventHide) {
        setIsVisible(false);
        // Don't change isScrolled when hiding
      } else if (scrollingUp && currentScrollY > 50) {
        setIsVisible(true);
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Close search if clicking outside
      if (searchInputRef.current && !searchInputRef.current.contains(target)) {
        setShowSearch(false);
        setSearchQuery('');
      }
      
      // Close mega menu if clicking outside of navbar or mega menu
      const navbarElement = document.querySelector('header');
      const megaMenuElement = document.querySelector('[data-mega-menu]');
      
      if (showMegaMenu && navbarElement && !navbarElement.contains(target) && 
          (!megaMenuElement || !megaMenuElement.contains(target))) {
        setShowMegaMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lastScrollY, showMegaMenu]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const navigation = [
    { name: 'THE ORIGIN OF BEAUTY', href: '/' },
    { name: 'SKINCARE', href: '#', hasMegaMenu: true },
    { name: 'TRENDS & TIPS', href: '/blog' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out transform rounded-b-lg ${
      !isVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    } ${
      !isScrolled 
        ? 'bg-black/20 backdrop-blur-md' 
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        {/* Desktop and Mobile Layout Restructure */}
        {/* Desktop Logo Section */}
        <div className="hidden md:flex justify-center py-3 md:py-6">
          <Link to="/" className="transition-all duration-500 hover:opacity-80">
            {(() => {
              const desktopLogo = !isScrolled ? logos.desktop.white : logos.desktop.black;
              
              if (desktopLogo.currentLogo) {
                return (
                  <img 
                    src={desktopLogo.currentLogo}
                    alt="SINCEVA Logo" 
                    className="h-20 md:h-24 w-auto"
                  />
                );
              }
              
              // Fallback to text when logo is not available
              return (
                <div className={`text-xl md:text-2xl font-bold transition-all duration-500 ${
                  !isScrolled ? 'text-white' : 'text-[#191919]'
                }`}>
                  {logoContent.fallback.text}
                </div>
              );
            })()}
          </Link>
        </div>

        {/* Mobile Logo Section - Centered vertically between top and hamburger */}
        <div className="md:hidden flex justify-center pt-4 pb-1">
          <Link to="/" className="transition-all duration-500 hover:opacity-80">
            {(() => {
              const mobileLogo = !isScrolled ? logos.mobile.white : logos.mobile.black;
              
              if (mobileLogo.currentLogo) {
                return (
                  <img 
                    src={mobileLogo.currentLogo}
                    alt="SINCEVA Logo" 
                    className="h-9 w-auto"
                  />
                );
              }
              
              // Fallback to text when logo is not available
              return (
                <div className={`text-lg font-bold transition-all duration-500 ${
                  !isScrolled ? 'text-white' : 'text-[#191919]'
                }`}>
                  {logoContent.fallback.text}
                </div>
              );
            })()}
          </Link>
        </div>

        {/* Navigation Section */}
        <nav 
          onClick={(e) => {
            // Eğer tıklama navbar'ın kendisine yapıldıysa (boş alan) mega menüyü kapat
            if (e.target === e.currentTarget) {
              setShowMegaMenu(false);
            }
          }}
          className={`hidden md:flex justify-center items-center py-2 md:py-4 h-12 transition-all duration-300 ${
          showSearch ? 'space-x-2 md:space-x-4 lg:space-x-6' : 'space-x-4 md:space-x-8 lg:space-x-12'
        }`}>
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasMegaMenu ? (
                <button
                  onClick={() => setShowMegaMenu(!showMegaMenu)}
                  className={`text-xs md:text-sm font-medium tracking-wide transition-all duration-500 uppercase whitespace-nowrap inline-block ${
                    !isScrolled 
                      ? 'text-white hover:text-[hsl(var(--hover))]' 
                      : 'text-[#191919] hover:text-[hsl(var(--hover))]'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-xs md:text-sm font-medium tracking-wide transition-all duration-500 uppercase whitespace-nowrap inline-block ${
                    !isScrolled 
                      ? 'text-white hover:text-[hsl(var(--hover))]' 
                      : 'text-[#191919] hover:text-[hsl(var(--hover))]'
                  } ${
                    location.pathname === item.href ? 'opacity-100' : 'opacity-90'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          {/* Search Section */}
          <div className={`flex items-center transition-all duration-300 ${showSearch ? 'ml-2 md:ml-4' : 'ml-4 md:ml-8'}`}>
            <div className="relative flex items-center">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 transition-all duration-500 ${
                  showSearch ? 'text-[hsl(var(--hover))]' : !isScrolled 
                    ? 'text-white hover:text-[hsl(var(--hover))]' 
                    : 'text-[#191919] hover:text-[hsl(var(--hover))]'
                } ${showSearch ? 'absolute left-1 top-1/2 transform -translate-y-1/2 z-10' : ''}`}
              >
                <Search className="w-4 md:w-5 h-4 md:h-5" />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                showSearch ? 'w-32 md:w-48 ml-0' : 'w-0 ml-0'
              }`}>
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${
                      !isScrolled 
                        ? 'bg-black/20 backdrop-blur-md text-white placeholder:text-white/70' 
                        : 'bg-gray-100 text-gray-900 placeholder:text-gray-500'
                    }`}
                    autoFocus={showSearch}
                  />
                </form>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-between items-center py-2 md:py-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-all duration-500 ${
              !isScrolled 
                ? 'text-white hover:text-[hsl(var(--hover))]' 
                : 'text-[#191919] hover:text-[hsl(var(--hover))]'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Mobile Search */}
          <div className="flex items-center">
            <div className="relative flex items-center">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 transition-all duration-500 ${
                  showSearch ? 'text-[hsl(var(--hover))]' : !isScrolled 
                    ? 'text-white hover:text-[hsl(var(--hover))]' 
                    : 'text-[#191919] hover:text-[hsl(var(--hover))]'
                } ${showSearch ? 'absolute left-1 top-1/2 transform -translate-y-1/2 z-10' : ''}`}
              >
                <Search className="w-5 h-5" />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                showSearch ? 'w-40 ml-0' : 'w-0 ml-0'
              }`}>
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${
                      !isScrolled 
                        ? 'bg-black/20 backdrop-blur-md text-white placeholder:text-white/70' 
                        : 'bg-gray-100 text-gray-900 placeholder:text-gray-500'
                    }`}
                    autoFocus={showSearch}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-2 md:py-4 ${!isScrolled ? 'border-t border-border/20' : 'border-t border-gray-100'}`}>
            {navigation.map((item) => (
              item.hasMegaMenu ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setShowMegaMenu(!showMegaMenu);
                    setIsMobileMenuOpen(false); // Mobil menüyü kapat
                  }}
                  className={`block py-2 text-sm font-medium transition-all duration-500 uppercase text-left w-full ${
                    !isScrolled 
                      ? 'text-white hover:text-[hsl(var(--hover))]' 
                      : 'text-[#191919] hover:text-[hsl(var(--hover))]'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-all duration-500 uppercase ${
                    !isScrolled 
                      ? 'text-white hover:text-[hsl(var(--hover))]' 
                      : 'text-[#191919] hover:text-[hsl(var(--hover))]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        )}
      </div>

      {/* Mega Menu */}
      <div data-mega-menu>
        <MegaMenu isVisible={showMegaMenu} />
      </div>

    </header>
  );
};

export default Header;