import React from 'react';
import CategoriesSection from '@/components/sections/CategoriesSection';
import { categoryShowcaseContent } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const CategoryShowcase: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <CategoriesSection 
      title={t.homepage.categoriesTitle}
      subtitle={t.homepage.categoriesSubtitle}
      categories={categoryShowcaseContent.categories}
    />
  );
};

export default CategoryShowcase;