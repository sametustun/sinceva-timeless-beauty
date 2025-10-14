import React from 'react';
import { Link } from 'react-router-dom';
import { navigationContent } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

interface MegaMenuProps {
  isVisible: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isVisible }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  if (!isVisible) return null;

  return (
    <div className={`absolute top-full left-0 right-0 bg-white border-b border-border shadow-elegant z-40 md:block ${
      isVisible ? 'fixed md:absolute inset-x-0 top-0 md:top-full max-h-screen md:h-auto overflow-y-auto md:overflow-visible' : ''
    }`}>
      <div className="container mx-auto max-w-7xl px-4 py-8 pt-6 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {navigationContent.megaMenuCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <Link
                to={`/category/${category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors inline-block"
              >
                {category.category}
              </Link>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;