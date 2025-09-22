import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useSearch, SearchItem } from '@/hooks/useSearch';

interface SearchAutocompleteProps {
  isScrolled: boolean;
  showSearch: boolean;
  onClose: () => void;
  className?: string;
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  isScrolled,
  showSearch,
  onClose,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const { searchSuggestions, isIndexAvailable } = useSearch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    setSelectedIndex(-1);
    setShowSuggestions(suggestions.length > 0 && query.length >= 2);
  }, [suggestions.length, query.length]);

  // Debounced search with 200ms delay
  const debouncedSearch = useCallback((searchQuery: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      const results = searchSuggestions(searchQuery);
      setSuggestions(results);
      setShowSuggestions(results.length > 0 && searchQuery.length >= 2);
    }, 200);
  }, [searchSuggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length >= 2) {
      debouncedSearch(value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else if (suggestions.length > 0) {
          handleSuggestionClick(suggestions[0]);
        } else if (query.trim()) {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setQuery('');
        onClose();
        break;
    }
  };

  const handleSuggestionClick = (item: SearchItem) => {
    navigate(item.url);
    setQuery('');
    setShowSuggestions(false);
    onClose();
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setShowSuggestions(false);
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  if (!isIndexAvailable) {
    return (
      <div className={className}>
        <div className="text-center py-2 text-sm text-muted-foreground">
          Search temporarily unavailable.
        </div>
      </div>
    );
  }

  return (
    <div className={`sinceva-search relative ${className}`}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search products & blog posts..."
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={`sinceva-search__input w-full h-8 pl-10 pr-4 text-xs !border-none !outline-none !ring-0 !ring-offset-0 !shadow-none transition-all duration-300 rounded-full focus:!outline-none focus:!ring-0 focus:!border-none focus:!shadow-none focus-visible:!outline-none focus-visible:!ring-0 focus-visible:!ring-offset-0 ${
              !isScrolled 
                ? 'bg-black/20 backdrop-blur-md text-white placeholder:text-white/70' 
                : 'bg-gray-100 text-gray-900 placeholder:text-gray-500'
            }`}
          />
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div className={`sinceva-search__dropdown absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg border z-50 max-h-80 overflow-y-auto ${
          !isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-white/20' 
            : 'bg-white border-gray-200'
        }`}>
          {suggestions.map((item, index) => (
            <div
              key={`${item.type}-${item.id}`}
              onClick={() => handleSuggestionClick(item)}
              className={`sinceva-search__item px-4 py-3 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                index === selectedIndex 
                  ? 'bg-primary/10' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="sinceva-search__title font-medium text-sm text-gray-900 truncate">
                    {item.title}
                  </div>
                  <div className="sinceva-search__description text-xs text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </div>
                </div>
                <div className="ml-2 flex-shrink-0">
                  <span className={`sinceva-search__badge inline-block px-2 py-1 text-xs rounded-full ${
                    item.type === 'product' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {item.type === 'product' ? 'Product' : 'Blog'}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {suggestions.length === 0 && query.length >= 2 && (
            <div className="sinceva-search__no-results px-4 py-3 text-sm text-gray-500 text-center">
              No products or blog posts found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete;