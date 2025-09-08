import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  image?: string;
}

interface ProductsSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  ctaButton: {
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
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-start justify-center">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-luxury transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  {product.badge && (
                    <Badge 
                      className="absolute top-3 left-3 z-10"
                      variant={product.badge === 'Bestseller' ? 'default' : 'secondary'}
                    >
                      {product.badge}
                    </Badge>
                  )}
                  {product.image && (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-x-2">
                      <span className="text-lg font-semibold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Button size="sm" className="gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {ctaButton && (
          <div className="text-center">
            <Link to={ctaButton.link}>
              <Button size="lg" className="group px-8 py-6 text-lg font-semibold">
                {ctaButton.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;