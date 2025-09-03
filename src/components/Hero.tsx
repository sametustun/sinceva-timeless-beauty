import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-skincare.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sinceva skincare products" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-32">
        <div className="max-w-2xl">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                The Origin
                <br />
                <span className="text-primary">of Beauty</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Since Eva, we've been dedicated to creating premium skincare solutions 
                that celebrate your natural radiance and timeless elegance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link to="/shop">
                <Button size="lg" className="group bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold">
                  Discover Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;