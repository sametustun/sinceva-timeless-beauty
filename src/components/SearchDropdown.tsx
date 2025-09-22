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
    <div className="absolute top-full right-0 w-80 md:w-96 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-[100] overflow-hidden">
      {isLoading && (
        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
          Searching...
        </div>
      )}
      
      {error && (
        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
          {error}
        </div>
      )}
      
      {!isLoading && !error && results.length === 0 && (
        <div className="p-4 text-center text-gray-600 dark:text-gray-400">
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
              className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-600 last:border-b-0"
            >
              <div className="w-12 h-12 flex-shrink-0 mr-3 bg-gray-100 dark:bg-gray-600 rounded overflow-hidden">
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
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs font-medium">
                    {result.type === 'product' ? 'P' : 'B'}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 dark:text-white truncate">
                  {result.title}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-1">
                  {result.description}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    result.type === 'product' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
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