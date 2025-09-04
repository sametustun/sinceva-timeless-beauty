import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { heroContent } from '@/data/content';
import heroImage from '@/assets/hero-skincare.jpg';

const Hero: React.FC = () => {
  return (
    <HeroSection 
      {...heroContent}
      backgroundImage={heroImage}
    />
  );
};

export default Hero;