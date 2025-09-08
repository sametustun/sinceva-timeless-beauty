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
                    <Card className="h-[380px] hover:shadow-luxury transition-all duration-300 bg-white/5 border-white/20 overflow-hidden">
                      <CardContent className="p-0 relative">
                        <div className={`h-48 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                          <img 
                            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                            alt={category.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Glassmorphism overlay from middle to bottom */}
                        <div className="absolute inset-x-0 bottom-0 top-24 glass-effect rounded-b-lg">
                          <div className="p-4 h-full flex flex-col justify-between">
                            <div>
                              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2">
                                {category.title}
                              </h3>
                              <p className="text-black/70 text-sm line-clamp-1">
                                {category.description}
                              </p>
                            </div>
                            
                            <div className="mt-auto">
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
              <Card className="h-[380px] hover:shadow-luxury transition-all duration-300 bg-white/5 border-white/20 overflow-hidden">
                <CardContent className="p-0 relative">
                  <div className={`h-48 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Glassmorphism overlay from middle to bottom */}
                  <div className="absolute inset-x-0 bottom-0 top-[190px] glass-effect rounded-b-lg">
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-black mb-2">
                          {category.title}
                        </h3>
                        <p className="text-black/70">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
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