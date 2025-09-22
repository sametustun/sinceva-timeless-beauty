import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResult } from '../hooks/useSearch';

interface SearchDropdownProps {
  results: SearchResult[];
  isVisible: boolean;
  isLoading: boolean;
  error: string | null;
  onResultClick: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  results,
  isVisible,
  isLoading,
  error,
  onResultClick
}) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden">
      {isLoading && (
        <div className="p-4 text-center text-muted-foreground">
          Searching...
        </div>
      )}
      
      {error && (
        <div className="p-4 text-center text-muted-foreground">
          {error}
        </div>
      )}
      
      {!isLoading && !error && results.length === 0 && (
        <div className="p-4 text-center text-muted-foreground">
          No products or blog posts found.
        </div>
      )}
      
      {!isLoading && !error && results.length > 0 && (
        <div className="max-h-80 overflow-y-auto">
          {results.map((result) => (
            <Link
              key={result.id}
              to={result.url}
              onClick={onResultClick}
              className="flex items-center p-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0"
            >
              <div className="w-12 h-12 flex-shrink-0 mr-3 bg-muted rounded overflow-hidden">
                {result.image ? (
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs">
                    {result.type === 'product' ? 'P' : 'B'}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground truncate">
                  {result.title}
                </div>
                <div className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {result.description}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs ${
                    result.type === 'product' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary-foreground'
                  }`}>
                    {result.type === 'product' ? 'Product' : 'Blog'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;