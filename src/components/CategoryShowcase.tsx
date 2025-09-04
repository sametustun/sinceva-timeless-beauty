import React from 'react';
import CategoriesSection from '@/components/sections/CategoriesSection';
import { categoryShowcaseContent } from '@/data/content';

const CategoryShowcase: React.FC = () => {
  return (
    <CategoriesSection 
      title={categoryShowcaseContent.title}
      subtitle={categoryShowcaseContent.subtitle}
      categories={categoryShowcaseContent.categories}
    />
  );
};

export default CategoryShowcase;