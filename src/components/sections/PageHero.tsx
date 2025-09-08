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

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className={`text-4xl md:text-6xl font-bold leading-tight tracking-tight ${
            backgroundImage ? 'text-white' : 'text-foreground'
          }`}>
            {title}
          </h1>
          
          {subtitle && (
            <p className={`text-xl md:text-2xl leading-relaxed font-light ${
              backgroundImage ? 'text-white/90' : 'text-muted-foreground'
            } max-w-3xl mx-auto`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;