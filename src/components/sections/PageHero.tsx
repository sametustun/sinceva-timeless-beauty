import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundClass?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundClass = "bg-gradient-to-br from-primary/10 via-background to-secondary/20"
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Desktop: 3:1 ratio, Mobile: 2:3 ratio */}
      <div className="md:hidden">
        <AspectRatio ratio={2/3}>
          <div className={`relative w-full h-full flex items-center justify-center ${backgroundClass}`}>
            {/* Background Image */}
            {backgroundImage && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={backgroundImage} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
              </div>
            )}
            {/* Empty content for banner only */}
            <div className="relative z-10"></div>
          </div>
        </AspectRatio>
      </div>

      <div className="hidden md:block">
        <AspectRatio ratio={3/1}>
          <div className={`relative w-full h-full flex items-center justify-center ${backgroundClass}`}>
            {/* Background Image */}
            {backgroundImage && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={backgroundImage} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
              </div>
            )}
            {/* Empty content for banner only */}
            <div className="relative z-10"></div>
          </div>
        </AspectRatio>
      </div>
    </section>
  );
};

export default PageHero;