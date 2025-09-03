import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Filter, Grid, List } from 'lucide-react';

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

  const products = [
    {
      id: 1,
      name: 'Vitamin C Brightening Serum',
      category: 'serums',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 124,
      image: '/placeholder-product-1.jpg',
      badge: 'Bestseller',
      description: 'Powerful vitamin C serum for radiant, even-toned skin.'
    },
    {
      id: 2,
      name: 'Hyaluronic Acid Moisturizer',
      category: 'daily-care',
      price: 64.99,
      rating: 4.9,
      reviews: 89,
      image: '/placeholder-product-2.jpg',
      badge: 'New',
      description: 'Deep hydration with hyaluronic acid for plump, smooth skin.'
    },
    {
      id: 3,
      name: 'Retinol Anti-Aging Night Cream',
      category: 'anti-aging',
      price: 129.99,
      rating: 4.7,
      reviews: 156,
      image: '/placeholder-product-3.jpg',
      description: 'Advanced retinol formula to reduce signs of aging overnight.'
    },
    {
      id: 4,
      name: 'Gentle Foaming Cleanser',
      category: 'cleansing',
      price: 39.99,
      rating: 4.6,
      reviews: 203,
      image: '/placeholder-product-4.jpg',
      description: 'Mild yet effective cleanser for all skin types.'
    },
    {
      id: 5,
      name: 'Eye Contour Renewal Serum',
      category: 'anti-aging',
      price: 94.99,
      rating: 4.8,
      reviews: 67,
      image: '/placeholder-product-5.jpg',
      badge: 'Premium',
      description: 'Target fine lines and dark circles around the delicate eye area.'
    },
    {
      id: 6,
      name: 'Daily SPF 50 Sunscreen',
      category: 'daily-care',
      price: 49.99,
      rating: 4.5,
      reviews: 112,
      image: '/placeholder-product-6.jpg',
      description: 'Broad spectrum protection with lightweight, non-greasy formula.'
    },
  ];

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
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shop Sinceva</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium skincare collection crafted for timeless beauty.
          </p>
        </div>

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
            <Card key={product.id} className="group hover:shadow-luxury transition-shadow duration-300">
              <CardContent className="p-0">
                {viewMode === 'grid' ? (
                  <div>
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      {product.badge && (
                        <Badge 
                          className="absolute top-3 left-3 z-10"
                          variant={product.badge === 'Bestseller' ? 'default' : 'secondary'}
                        >
                          {product.badge}
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                        <span className="text-sm text-muted-foreground ml-2">
                          ({product.reviews})
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-lg font-semibold text-primary">
                            ${product.price}
                          </span>
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
                ) : (
                  <div className="flex gap-4 p-4">
                    <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;