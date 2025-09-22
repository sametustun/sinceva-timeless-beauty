import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import Layout from '../components/Layout';
import useSearch, { SearchResult } from '../hooks/useSearch';
import { Input } from '../components/ui/input';
import PageHero from '../components/sections/PageHero';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchTerm, setSearchTerm] = useState(query);
  const { searchResults, isLoading, error } = useSearch();
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      const searchResultData = searchResults(query, 50);
      setResults(searchResultData);
    }
  }, [query, searchResults]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ query: searchTerm.trim() });
    }
  };

  return (
    <Layout>
      <PageHero
        title="Search Results"
        subtitle={query ? `Results for "${query}"` : 'Search our products and blog posts'}
      />
      
      <div className="container mx-auto px-4 py-4">
        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-6">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search products and blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-12 h-12"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto">
          {query && (
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                {isLoading ? 'Searching...' : `${results.length} results found for "${query}"`}
              </h2>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">{error}</p>
            </div>
          )}

          {!isLoading && !error && query && results.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No products or blog posts found for "{query}".</p>
            </div>
          )}

          {!isLoading && !error && results.length > 0 && (
            <div className="space-y-4">
              {results.map((result) => (
                <Link
                  key={result.id}
                  to={result.url}
                  className="block bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
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
                        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                          {result.type === 'product' ? 'P' : 'B'}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                          {result.title}
                        </h3>
                        <span className={`inline-block px-2 py-1 rounded text-xs ${
                          result.type === 'product' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-secondary/10 text-secondary-foreground'
                        }`}>
                          {result.type === 'product' ? 'Product' : 'Blog'}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {result.description}
                      </p>
                      <p className="text-sm text-primary">
                        {result.url}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;