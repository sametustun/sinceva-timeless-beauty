import React from 'react';

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
    <section className={`relative min-h-[60vh] flex items-center justify-center ${backgroundClass}`}>
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
    </section>
  );
};

export default PageHero;