import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  href: string;
  gradient: string;
  image?: string;
}

interface CategoriesSectionProps {
  title: string;
  subtitle: string;
  categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  title,
  subtitle,
  categories
}) => {
  return (
    <section className="py-20" style={{ backgroundColor: '#191919' }}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden px-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {categories.map((category) => (
                <CarouselItem key={category.id} className="pl-2 basis-[60%]">
                  <Link to={category.href} className="group block">
                    <Card className="h-[380px] hover:shadow-luxury transition-all duration-300 bg-transparent border-white/20 overflow-hidden">
                      <CardContent className="p-0 relative h-full">
                        {/* Full height background image */}
                        <div className="absolute inset-0">
                          <img 
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Glassmorphism overlay covering bottom half */}
                        <div className="absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30">
                          <div className="p-4 h-full flex flex-col">
                            <div className="h-16 mb-6">
                              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2 line-clamp-2">
                                {category.title}
                              </h3>
                              <p className="text-black/70 text-sm line-clamp-1">
                                {category.description}
                              </p>
                            </div>
                            
                            <div className="absolute bottom-4 left-4 right-4">
                              <span className="text-primary text-sm font-medium group-hover:gap-2 transition-all flex items-center">
                                Explore Collection
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </span>
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

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.href} className="group">
              <Card className="h-[380px] hover:shadow-luxury transition-all duration-300 bg-transparent border-white/20 overflow-hidden">
                <CardContent className="p-0 relative h-full">
                  {/* Full height background image */}
                  <div className="absolute inset-0">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Glassmorphism overlay covering bottom half */}
                  <div className="absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30">
                    <div className="p-6 h-full flex flex-col">
                      <div className="h-20 mb-6">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-black mb-3 line-clamp-2">
                          {category.title}
                        </h3>
                        <p className="text-black/70 text-sm line-clamp-1">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-primary text-sm font-medium group-hover:gap-2 transition-all flex items-center">
                          Explore Collection
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;