import { useState, useMemo, useCallback } from 'react';
import { allProductsContent } from '@/data/content';

// Blog posts data (sample - same as in Blog.tsx)
const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Anti-Aging Skincare Routine',
    description: 'Discover the secrets to maintaining youthful, radiant skin with our comprehensive anti-aging guide.',
    url: '/blog/anti-aging-skincare-routine',
    category: 'anti-aging',
    type: 'blog' as const
  },
  {
    id: 2,
    title: 'Winter Skincare: Protecting Your Skin in Cold Weather',
    description: 'Learn how to adapt your skincare routine for winter months and protect your skin from harsh weather.',
    url: '/blog/winter-skincare-guide',
    category: 'seasonal-care',
    type: 'blog' as const
  },
  {
    id: 3,
    title: 'Vitamin C vs Retinol: Which is Right for Your Skin?',
    description: 'Compare these powerful skincare ingredients and discover which one suits your skin type best.',
    url: '/blog/vitamin-c-vs-retinol',
    category: 'ingredient-focus',
    type: 'blog' as const
  },
  {
    id: 4,
    title: '5 Morning Skincare Habits for Glowing Skin',
    description: 'Transform your morning routine with these simple yet effective skincare habits for radiant skin.',
    url: '/blog/morning-skincare-habits',
    category: 'skincare-tips',
    type: 'blog' as const
  },
];

export interface SearchItem {
  id: string | number;
  title: string;
  description: string;
  url: string;
  type: 'product' | 'blog';
  category?: string;
}

export interface UseSearchReturn {
  searchItems: SearchItem[];
  searchSuggestions: (query: string) => SearchItem[];
  isIndexAvailable: boolean;
}

export const useSearch = (): UseSearchReturn => {
  const [isIndexAvailable] = useState(true); // For now always available

  // Create search index
  const searchItems = useMemo((): SearchItem[] => {
    try {
      // Products
      const products: SearchItem[] = allProductsContent.products.map(product => ({
        id: product.id,
        title: product.name,
        description: product.description,
        url: `/product/${product.id}`,
        type: 'product' as const,
        category: 'skincare'
      }));

      // Blog posts
      const blogs: SearchItem[] = blogPosts.map(post => ({
        id: `blog-${post.id}`,
        title: post.title,
        description: post.description,
        url: post.url,
        type: 'blog' as const,
        category: post.category
      }));

      return [...products, ...blogs];
    } catch (error) {
      console.error('Error creating search index:', error);
      return [];
    }
  }, []);

  // Search function with fuzzy matching
  const searchSuggestions = useCallback((query: string): SearchItem[] => {
    if (!query.trim() || query.length < 2) {
      return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    
    const results = searchItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = item.description.toLowerCase().includes(normalizedQuery);
      
      // Prefix matching (words that start with the query)
      const titleWords = item.title.toLowerCase().split(' ');
      const descriptionWords = item.description.toLowerCase().split(' ');
      const prefixMatch = [...titleWords, ...descriptionWords].some(word => 
        word.startsWith(normalizedQuery)
      );

      return titleMatch || descriptionMatch || prefixMatch;
    });

    // Sort by relevance (title matches first, then description matches)
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      // Exact title match first
      if (aTitle.includes(normalizedQuery) && !bTitle.includes(normalizedQuery)) return -1;
      if (!aTitle.includes(normalizedQuery) && bTitle.includes(normalizedQuery)) return 1;
      
      // Then prefix matches
      const aPrefix = aTitle.startsWith(normalizedQuery);
      const bPrefix = bTitle.startsWith(normalizedQuery);
      if (aPrefix && !bPrefix) return -1;
      if (!aPrefix && bPrefix) return 1;
      
      // Finally by length (shorter titles first)
      return a.title.length - b.title.length;
    }).slice(0, 6); // Max 6 suggestions
  }, [searchItems]);

  return {
    searchItems,
    searchSuggestions,
    isIndexAvailable
  };
};