import React, { useEffect, useCallback, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageZoomProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ images, currentIndex, onClose, onNavigate }) => {
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const handlePrevious = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex !== null && currentIndex < images.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex !== null && currentIndex > 0) {
      handlePrevious();
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  }, [onClose, handlePrevious, handleNext]);

  useEffect(() => {
    if (currentIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 1;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-white/70 transition-colors"
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      {canGoPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-white/70 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
      )}

      {/* Next Button */}
      {canGoNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-white/70 transition-colors"
        >
          <ChevronRight size={48} />
        </button>
      )}

      {/* Image */}
      <img
        src={currentImage}
        alt={`Product image ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />

      {/* Touch/Click Areas */}
      <div className="absolute inset-0 flex" style={{ pointerEvents: 'none' }}>
        {/* Left area */}
        <div
          className="w-1/3 h-full cursor-pointer"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => {
            e.stopPropagation();
            if (canGoPrevious) {
              handlePrevious();
            }
          }}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        />
        
        {/* Center area - close on click */}
        <div
          className="flex-1 h-full cursor-pointer"
          style={{ pointerEvents: 'auto' }}
          onClick={onClose}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        />
        
        {/* Right area */}
        <div
          className="w-1/3 h-full cursor-pointer"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => {
            e.stopPropagation();
            if (canGoNext) {
              handleNext();
            }
          }}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageZoom;