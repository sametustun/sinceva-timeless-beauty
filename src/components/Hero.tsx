import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { heroContent } from '@/data/content';

const Hero: React.FC = () => {
  console.log('Hero component loading...');
  
  // Use a working image URL for now
  const heroImage = 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80';
  
  return (
    <HeroSection 
      {...heroContent}
      backgroundImage={heroImage}
    />
  );
};

export default Hero;