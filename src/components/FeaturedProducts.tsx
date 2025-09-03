import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Vitamin C Brightening Serum',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      description: 'Powerful vitamin C serum for radiant, even-toned skin with natural brightening properties.'
    },
    {
      id: 2,
      name: 'Hyaluronic Acid Moisturizer',
      price: 64.99,
      rating: 4.9,
      reviews: 89,
      badge: 'New',
      description: 'Deep hydration with hyaluronic acid for plump, smooth, and supple skin all day long.'
    },
    {
      id: 3,
      name: 'Retinol Anti-Aging Night Cream',
      price: 129.99,
      rating: 4.7,
      reviews: 156,
      badge: 'Premium',
      description: 'Advanced retinol formula to reduce signs of aging and promote skin renewal overnight.'
    },
    {
      id: 4,
      name: 'Daily SPF 50 Sunscreen',
      price: 49.99,
      rating: 4.5,
      reviews: 112,
      description: 'Broad spectrum protection with lightweight, non-greasy formula perfect for daily use.'
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most loved skincare essentials, carefully curated for exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
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

        <div className="text-center">
          <Link to="/shop">
            <Button size="lg" className="group px-8 py-6 text-lg font-semibold">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;