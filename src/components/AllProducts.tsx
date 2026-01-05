import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from './ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const AllProducts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleProducts, setVisibleProducts] = useState(6);
  
  // Fetch products from backend API (with fallback to static)
  const { products } = useProducts();
  
  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 6);
  };

  const displayedProducts = products.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < products.length;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#191919]">{t.homepage.allProductsTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.homepage.allProductsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button - Only show if there are more products */}
        {hasMoreProducts && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreProducts}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              {t.homepage.loadMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;