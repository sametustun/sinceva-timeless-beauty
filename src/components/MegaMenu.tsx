import React from 'react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  isVisible: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isVisible }) => {
  const categories = [
    {
      title: 'Anti-Aging Care',
      href: '/category/anti-aging-care',
      children: [
        { name: 'Face Serum', href: '/category/face-serum' },
        { name: 'Eye Care', href: '/category/eye-care' },
        { name: 'Anti-Wrinkle Care', href: '/category/anti-wrinkle-care' },
      ]
    },
    {
      title: 'Face & Skin Cleansing',
      href: '/category/face-and-skin-cleansing',
      children: [
        { name: 'Foaming Cleanser', href: '/category/foaming-cleanser' },
        { name: 'Toner', href: '/category/toner' },
        { name: 'Anti-Wrinkle Care', href: '/category/anti-wrinkle-care' },
      ]
    },
    {
      title: 'Daily Care',
      href: '/category/daily-care',
      children: [
        { name: 'Sunscreen', href: '/category/sunscreen' },
        { name: 'Moisturizer', href: '/category/moisturizer' },
      ]
    },
  ];

  if (!isVisible) return null;

  return (
    <div className={`absolute top-full left-0 right-0 bg-white border-b border-border shadow-elegant z-40 md:block ${
      isVisible ? 'fixed md:absolute inset-x-0 top-0 md:top-full max-h-screen md:h-auto overflow-y-auto md:overflow-visible' : ''
    }`}>
      <div className="container mx-auto max-w-7xl px-4 py-8 pt-12 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              <Link
                to={category.href}
                className="text-lg font-semibold text-primary hover:text-primary-dark transition-colors inline-block"
              >
                {category.title}
              </Link>
              <ul className="space-y-2">
                {category.children.map((child) => (
                  <li key={child.name}>
                    <Link
                      to={child.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block"
                    >
                      {child.name}
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