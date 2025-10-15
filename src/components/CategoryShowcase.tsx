import React from 'react';
import CategoriesSection from '@/components/sections/CategoriesSection';
import { categoryShowcaseContent } from '@/data/content';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const CategoryShowcase: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Map categories with translated title and description
  const translatedCategories = categoryShowcaseContent.categories.map(category => {
    // Safely get nested translation values
    const getNestedTranslation = (obj: any, path: string): string => {
      return path.split('.').reduce((acc, key) => acc?.[key], obj) || '';
    };
    
    return {
      ...category,
      title: getNestedTranslation(t, category.titleKey),
      description: getNestedTranslation(t, category.descriptionKey)
    };
  });
  
  return (
    <CategoriesSection 
      title={t.homepage.categoriesTitle}
      subtitle={t.homepage.categoriesSubtitle}
      categories={translatedCategories}
    />
  );
};

export default CategoryShowcase;