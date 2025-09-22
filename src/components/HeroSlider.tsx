import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    
    // Resume auto-advance after 10 seconds of user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  }, []);

  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  }, [slides.length]);

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const diff = e.touches[0].clientX - startX;
    setSlideOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleSwipe('right');
      } else {
        handleSwipe('left');
      }
    }
    
    setIsDragging(false);
    setSlideOffset(0);
  };

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const diff = e.clientX - startX;
    setSlideOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleSwipe('right');
      } else {
        handleSwipe('left');
      }
    }
    
    setIsDragging(false);
    setSlideOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setSlideOffset(0);
    }
  };

  return (
    <section className={`sinceva-hero relative overflow-hidden ${className}`}>
      {/* Mobile Hero */}
      <div className="md:hidden">
        <AspectRatio ratio={2/3}>
          <div 
            ref={sliderRef}
            className="sinceva-hero__container relative w-full h-full cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`sinceva-hero__slide absolute inset-0 transition-all duration-300 ease-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: index === currentSlide && isDragging 
                    ? `translateX(${slideOffset}px)` 
                    : 'translateX(0)',
                }}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
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
          <div 
            ref={sliderRef}
            className="sinceva-hero__container relative w-full h-full cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`sinceva-hero__slide absolute inset-0 transition-all duration-300 ease-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: index === currentSlide && isDragging 
                    ? `translateX(${slideOffset}px)` 
                    : 'translateX(0)',
                }}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
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