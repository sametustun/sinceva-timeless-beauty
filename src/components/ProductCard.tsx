import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className={`group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-lg ${className}`}>
        <CardContent className="p-0">
          <AspectRatio ratio={2/3}>
            <div className="relative w-full h-full">
              <img 
                src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <Badge className="absolute top-3 left-3 bg-primary text-white z-10">
                  {product.badge}
                </Badge>
              )}

              {/* Glassmorphism overlay covering bottom third */}
              <div className="absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30">
                <div className="p-4 h-full flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Buy Button */}
                  <div className="mt-auto flex items-center justify-center">
                    <Button 
                      variant="default"
                      size="sm"
                      className="w-full bg-primary hover:bg-primary-foreground hover:text-primary border hover:border-primary transition-all duration-200 hover:scale-105"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add to cart logic here
                      }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;