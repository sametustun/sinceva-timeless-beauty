import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { allProductsContent } from '@/data/content';

const Shop: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'anti-aging', name: 'Anti-Aging' },
    { id: 'cleansing', name: 'Cleansing' },
    { id: 'daily-care', name: 'Daily Care' },
    { id: 'serums', name: 'Serums' },
  ];

  // Map content data to shop format with categories
  const products = allProductsContent.products.map(product => ({
    ...product,
    rating: 4.7 + Math.random() * 0.3, // Generate ratings between 4.7-5.0
    reviews: Math.floor(50 + Math.random() * 150), // Generate review counts 50-200
    category: getCategoryFromId(product.id),
    originalPrice: product.id === 1 ? 109.99 : undefined // Only first product has original price
  }));

  function getCategoryFromId(id: number) {
    if ([1, 2].includes(id)) return 'serums';
    if ([3, 4, 5].includes(id)) return 'anti-aging';
    if ([6, 7].includes(id)) return 'cleansing';
    if ([8, 9].includes(id)) return 'daily-care';
    return 'all';
  }

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Layout>
      <PageHero 
        title="Shop Sinceva"
        subtitle="Discover our premium skincare collection crafted for timeless beauty."
        backgroundImage="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-md bg-background"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="flex border border-border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            viewMode === 'grid' ? (
              <ProductCard key={product.id} product={product} />
            ) : (
              <Card key={product.id} className="group hover:shadow-luxury transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4">
                    <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                      <img 
                        src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-foreground">{product.name}</h3>
                        {product.badge && (
                          <Badge variant={product.badge === 'Bestseller' ? 'default' : 'secondary'}>
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                        <span className="text-sm text-muted-foreground ml-2">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-lg font-semibold text-primary">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        
                        <Button size="sm" className="gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;