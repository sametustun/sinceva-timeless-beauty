import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CategoryShowcase: React.FC = () => {
  const categories = [
    {
      id: 'anti-aging-care',
      title: 'Anti-Aging Care',
      description: 'Advanced solutions for youthful, radiant skin',
      href: '/category/anti-aging-care',
      gradient: 'from-primary/20 to-primary-light/10'
    },
    {
      id: 'face-and-skin-cleansing',
      title: 'Face & Skin Cleansing',
      description: 'Gentle cleansers for healthy, refreshed skin',
      href: '/category/face-and-skin-cleansing',
      gradient: 'from-secondary/30 to-accent/20'
    },
    {
      id: 'daily-care',
      title: 'Daily Care',
      description: 'Essential products for your everyday routine',
      href: '/category/daily-care',
      gradient: 'from-muted/50 to-background'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Collections</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover skincare solutions tailored to your unique needs and skin concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.href} className="group">
              <Card className="h-full hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${category.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute bottom-4 right-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Explore Collection
                      <ArrowRight className="w-4 h-4 ml-1" />
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

export default CategoryShowcase;