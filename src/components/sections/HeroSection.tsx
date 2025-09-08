import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: {
    main: string;
    accent: string;
  };
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
  ctaButtons: Array<{
    text: string;
    link: string;
    variant: 'primary' | 'outline';
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  ctaButtons
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={backgroundAlt} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 pt-48 pb-32">
        <div className="max-w-2xl">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                {title.main}
                <br />
                <span className="text-primary">{title.accent}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;