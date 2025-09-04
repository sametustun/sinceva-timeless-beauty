import React from 'react';
import ProductsSection from '@/components/sections/ProductsSection';
import { featuredProductsContent } from '@/data/content';

const FeaturedProducts: React.FC = () => {
  return (
    <ProductsSection 
      title={featuredProductsContent.title}
      subtitle={featuredProductsContent.subtitle}
      products={featuredProductsContent.products}
      ctaButton={featuredProductsContent.ctaButton}
    />
  );
};

export default FeaturedProducts;