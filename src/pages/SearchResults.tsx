import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSearch, SearchItem } from '@/hooks/useSearch';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const { searchItems, isIndexAvailable } = useSearch();

  // Get all results (not limited to 6 like suggestions)
  const getAllResults = (searchQuery: string, items: SearchItem[]): SearchItem[] => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      return [];
    }

    const normalizedQuery = searchQuery.toLowerCase().trim();
    
    const results = items.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = item.description.toLowerCase().includes(normalizedQuery);
      
      // Prefix matching
      const titleWords = item.title.toLowerCase().split(' ');
      const descriptionWords = item.description.toLowerCase().split(' ');
      const prefixMatch = [...titleWords, ...descriptionWords].some(word => 
        word.startsWith(normalizedQuery)
      );

      return titleMatch || descriptionMatch || prefixMatch;
    });

    // Sort by relevance
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      if (aTitle.includes(normalizedQuery) && !bTitle.includes(normalizedQuery)) return -1;
      if (!aTitle.includes(normalizedQuery) && bTitle.includes(normalizedQuery)) return 1;
      
      const aPrefix = aTitle.startsWith(normalizedQuery);
      const bPrefix = bTitle.startsWith(normalizedQuery);
      if (aPrefix && !bPrefix) return -1;
      if (!aPrefix && bPrefix) return 1;
      
      return a.title.length - b.title.length;
    });
  };

  const results = getAllResults(query, searchItems);

  if (!isIndexAvailable) {
    return (
      <Layout>
        <PageHero 
          title="Search"
          subtitle="Search temporarily unavailable"
        />
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <p className="text-muted-foreground">
              Search functionality is temporarily unavailable. Please try again later.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero 
        title="Search Results"
        subtitle={query ? `Showing results for "${query}"` : "Enter a search term to find products and blog posts"}
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {query && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
              {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </h2>
            <p className="text-muted-foreground">
              Search results include products and blog posts
            </p>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-4">No results found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or browse our categories below.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/shop" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Browse Products
              </Link>
              <Link 
                to="/blog" 
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Read Blog Posts
              </Link>
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => (
              <Card key={`${item.type}-${item.id}`} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge 
                      variant={item.type === 'product' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {item.type === 'product' ? 'Product' : 'Blog Post'}
                    </Badge>
                  </div>
                  
                  <Link 
                    to={item.url}
                    className="block group-hover:text-primary transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <Link 
                    to={item.url}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {item.type === 'product' ? 'View Product' : 'Read Article'}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!query && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-4">Start Your Search</h3>
            <p className="text-muted-foreground mb-6">
              Use the search bar above to find products and blog posts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/shop" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Browse All Products
              </Link>
              <Link 
                to="/blog" 
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Browse Blog Posts
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;