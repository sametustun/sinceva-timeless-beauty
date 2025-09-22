import React, { useState, useEffect, useCallback } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import hero images
import heroSkincare from '@/assets/hero-skincare.jpg';
import antiAgingBanner from '@/assets/anti aging kategori.jpg';
import cleansingBanner from '@/assets/cleansing kategori.jpg';

interface HeroSliderProps {
  className?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Hero slide images - using existing assets
  const slides = [
    {
      id: 1,
      image: heroSkincare,
      alt: "Sinceva Premium Skincare Collection"
    },
    {
      id: 2,
      image: antiAgingBanner,
      alt: "Anti-Aging Skincare Solutions"
    },
    {
      id: 3,
      image: cleansingBanner,
      alt: "Face & Skin Cleansing Products"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    
    // Resume auto-advance after 10 seconds of user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  }, []);

  return (
    <section className={`sinceva-hero relative overflow-hidden ${className}`}>
      {/* Mobile Hero */}
      <div className="md:hidden">
        <AspectRatio ratio={2/3}>
          <div className="sinceva-hero__container relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`sinceva-hero__slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </AspectRatio>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block">
        <AspectRatio ratio={3/1}>
          <div className="sinceva-hero__container relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`sinceva-hero__slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </AspectRatio>
      </div>

      {/* Navigation Dots */}
      <div className="sinceva-hero__nav absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`sinceva-hero__dot w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;