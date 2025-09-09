import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  image?: string;
}

interface ProductRecommendationsProps {
  currentProductId: string | number;
  products: Product[];
  title?: string;
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({
  currentProductId,
  products,
  title = "Discover Sinceva Products"
}) => {
  const isMobile = useIsMobile();
  
  // Filter out current product and limit to 4 recommendations
  const recommendedProducts = products
    .filter(product => product.id.toString() !== currentProductId.toString())
    .slice(0, 4);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`w-3 h-3 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  if (recommendedProducts.length === 0) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:items-start md:gap-8">
          {/* Left Title */}
          <div className="md:w-1/4 flex-shrink-0">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          </div>
          
          {/* Right Slider */}
          <div className="md:w-3/4">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {recommendedProducts.map((product) => (
                  <CarouselItem key={product.id} className="pl-4 basis-1/3">
                    <Link to={`/product/${product.id}`}>
                      <div className="group cursor-pointer">
                        <div className="aspect-[3/2] overflow-hidden rounded-lg mb-4 relative">
                          <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.badge && (
                            <Badge className="absolute top-2 left-2 bg-primary text-white text-xs">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1">
                            {renderStars(product.rating)}
                            <span className="text-xs text-muted-foreground ml-1">
                              ({product.reviews})
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Centered Title */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-foreground">{title}</h2>
          </div>
          
          {/* Mobile Slider */}
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {recommendedProducts.map((product) => (
                <CarouselItem key={product.id} className="pl-2 basis-4/5">
                  <Link to={`/product/${product.id}`}>
                    <div className="group cursor-pointer">
                      <div className="aspect-[3/2] overflow-hidden rounded-lg mb-3 relative">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.badge && (
                          <Badge className="absolute top-2 left-2 bg-primary text-white text-xs">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          {renderStars(product.rating)}
                          <span className="text-xs text-muted-foreground ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendations;