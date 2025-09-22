import React, { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import heroSkincare from '@/assets/hero-skincare.jpg';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slides - you can replace these with actual slider images
  const slides = [
    {
      id: 1,
      image: heroSkincare,
      alt: "Premium Skincare Collection"
    },
    {
      id: 2,
      image: heroSkincare,
      alt: "Natural Beauty Solutions"
    },
    {
      id: 3,
      image: heroSkincare,
      alt: "Professional Skincare Range"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      {/* Mobile aspect ratio: 2/3, Desktop: 3/1 */}
      <AspectRatio ratio={3/1} className="hidden md:block">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </AspectRatio>

      {/* Mobile version */}
      <AspectRatio ratio={2/3} className="block md:hidden">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </AspectRatio>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;