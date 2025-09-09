import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
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
                       <Card className="group hover:shadow-luxury transition-all duration-300 cursor-pointer aspect-[2/3] overflow-hidden rounded-xl">
                         <CardContent className="p-0 relative h-full">
                           {/* Full height product image */}
                           <div className="absolute inset-0">
                             <img 
                               src={product.image}
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
                             <div className="p-3 h-full flex flex-col">
                               <div className="flex-1">
                                 <h3 className="text-sm font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2">
                                   {product.name}
                                 </h3>
                                 
                               </div>
                             </div>
                           </div>
                         </CardContent>
                       </Card>
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
                   <Card className="group hover:shadow-luxury transition-all duration-300 cursor-pointer aspect-[2/3] overflow-hidden rounded-xl">
                     <CardContent className="p-0 relative h-full">
                       {/* Full height product image */}
                       <div className="absolute inset-0">
                         <img 
                           src={product.image}
                           alt={product.name}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         />
                         {product.badge && (
                           <Badge className="absolute top-2 left-2 bg-primary text-white text-xs z-10">
                             {product.badge}
                           </Badge>
                         )}
                       </div>

                       {/* Glassmorphism overlay covering bottom third */}
                       <div className="absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30">
                         <div className="p-3 h-full flex flex-col">
                           <div className="flex-1">
                             <h3 className="text-sm font-semibold mb-1 text-black group-hover:text-primary transition-colors line-clamp-2">
                               {product.name}
                             </h3>
                             
                           </div>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
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