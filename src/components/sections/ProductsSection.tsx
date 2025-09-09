import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '../ProductCard';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  image?: string;
}

interface ProductsSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  ctaButton?: {
    text: string;
    link: string;
  };
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  title,
  subtitle,
  products,
  ctaButton
}) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {ctaButton && (
          <div className="text-center">
            <Button size="lg" className="group px-8 py-6 text-lg font-semibold">
              {ctaButton.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;