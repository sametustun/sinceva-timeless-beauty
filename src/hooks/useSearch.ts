import { useState, useEffect, useCallback, useRef } from 'react';

// Levenshtein distance for fuzzy search (max distance = 1)
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];
  
  if (str1.length === 0) return str2.length;
  if (str2.length === 0) return str1.length;
  
  // Create matrix
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  // Fill matrix
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
};

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
  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);
  const [isIndexAvailable, setIsIndexAvailable] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Load search index from JSON file
  useEffect(() => {
    const loadSearchIndex = async () => {
      try {
        const response = await fetch('/search-index.json');
        if (!response.ok) {
          throw new Error('Failed to load search index');
        }
        
        const data = await response.json();
        const allItems: SearchItem[] = [
          ...data.products,
          ...data.blogs
        ];
        
        setSearchItems(allItems);
        setIsIndexAvailable(true);
      } catch (error) {
        console.error('Error loading search index:', error);
        setIsIndexAvailable(false);
      }
    };

    loadSearchIndex();
  }, []);

  // Search function with fuzzy matching and 200ms debounce
  const searchSuggestions = useCallback((query: string): SearchItem[] => {
    if (!query.trim() || query.length < 2) {
      return [];
    }

    const normalizedQuery = query.toLowerCase().trim();
    
    const results = searchItems.filter(item => {
      const titleLower = item.title.toLowerCase();
      const descriptionLower = item.description.toLowerCase();
      
      // Exact matches
      const titleMatch = titleLower.includes(normalizedQuery);
      const descriptionMatch = descriptionLower.includes(normalizedQuery);
      
      // Prefix matching (words that start with the query)
      const titleWords = titleLower.split(' ');
      const descriptionWords = descriptionLower.split(' ');
      const prefixMatch = [...titleWords, ...descriptionWords].some(word => 
        word.startsWith(normalizedQuery)
      );
      
      // Basic fuzzy search with Levenshtein distance = 1
      const fuzzyMatch = [...titleWords, ...descriptionWords].some(word => {
        if (word.length >= normalizedQuery.length - 1 && word.length <= normalizedQuery.length + 1) {
          return levenshteinDistance(word, normalizedQuery) <= 1;
        }
        return false;
      });

      return titleMatch || descriptionMatch || prefixMatch || fuzzyMatch;
    });

    // Sort by relevance (title matches first, then description matches, then fuzzy)
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