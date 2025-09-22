import React from 'react';
import HeroSlider from '@/components/HeroSlider';

interface HeroSectionProps {
  // Props are now optional since we're using a slider without text
  title?: {
    main: string;
    accent: string;
  };
  subtitle?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  ctaButtons?: Array<{
    text: string;
    link: string;
    variant: 'primary' | 'outline';
  }>;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative w-full">
      <HeroSlider />
    </section>
  );
};

export default HeroSection;