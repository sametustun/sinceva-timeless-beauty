import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
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
    <Card className={`group hover:shadow-luxury transition-all duration-300 cursor-pointer h-[480px] overflow-hidden rounded-lg ${className}`}>
      <CardContent className="p-0 relative h-full">
        {/* Full height product image */}
        <div className="absolute inset-0">
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
        </div>

        {/* Glassmorphism overlay covering bottom third */}
        <div className="absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30">
          <div className="p-4 h-full flex flex-col">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2">
                {product.name}
              </h3>
              
              {product.description && (
                <p className="text-black/70 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
              )}

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-500 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-xs text-black/60">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mt-auto">
              <span className="text-xl font-semibold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-black/50 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;