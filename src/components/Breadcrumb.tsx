import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { categoryStructure } from '@/data/content';

interface BreadcrumbProps {
  productId: number;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ productId }) => {
  // Find product and its category/subcategory
  let categoryKey = '';
  let subcategoryKey = '';
  let categoryTitle = '';
  let subcategoryTitle = '';

  for (const [catKey, category] of Object.entries(categoryStructure)) {
    for (const [subKey, subcategory] of Object.entries(category.subcategories)) {
      if (subcategory.products.some(p => p.id === productId)) {
        categoryKey = catKey;
        subcategoryKey = subKey;
        categoryTitle = category.title;
        subcategoryTitle = subcategory.title;
        break;
      }
    }
    if (categoryKey) break;
  }

  if (!categoryKey) return null;

  return (
    <div style={{ backgroundColor: '#191919' }} className="py-4 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4">
        <nav className="flex items-center space-x-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <Link 
            to={`/category/${categoryKey}`}
            className="text-white/70 hover:text-white transition-colors"
          >
            {categoryTitle}
          </Link>
          <ChevronRight className="w-4 h-4 text-white/40" />
          <Link 
            to={`/category/${categoryKey}/${subcategoryKey}`}
            className="text-white/70 hover:text-white transition-colors"
          >
            {subcategoryTitle}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;