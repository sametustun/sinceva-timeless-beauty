import { useState, useEffect, useMemo } from 'react';

export interface SearchResult {
  id: string;
  url: string;
  title: string;
  description: string;
  type: 'product' | 'blog';
  image?: string;
}

export interface SearchIndex {
  products: SearchResult[];
  blogs: SearchResult[];
}

const useSearch = () => {
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSearchIndex = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/search-index.json');
        if (!response.ok) {
          throw new Error('Failed to load search index');
        }
        const data = await response.json();
        setSearchIndex(data);
        setError(null);
      } catch (err) {
        setError('Search temporarily unavailable');
        console.error('Failed to load search index:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadSearchIndex();
  }, []);

  const searchResults = useMemo(() => {
    return (query: string, maxResults: number = 6): SearchResult[] => {
      if (!searchIndex || !query || query.length < 2) {
        return [];
      }

      const normalizedQuery = query.toLowerCase().trim();
      const allItems = [...searchIndex.products, ...searchIndex.blogs];
      
      const results = allItems.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
        const descriptionMatch = item.description.toLowerCase().includes(normalizedQuery);
        return titleMatch || descriptionMatch;
      });

      // Sort by relevance (title matches first)
      results.sort((a, b) => {
        const aTitle = a.title.toLowerCase().includes(normalizedQuery);
        const bTitle = b.title.toLowerCase().includes(normalizedQuery);
        
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        return 0;
      });

      return results.slice(0, maxResults);
    };
  }, [searchIndex]);

  return {
    searchResults,
    isLoading,
    error,
    isReady: !!searchIndex
  };
};

export default useSearch;