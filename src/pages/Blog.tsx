import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'skincare-tips', name: 'Skincare Tips' },
    { id: 'anti-aging', name: 'Anti-Aging' },
    { id: 'seasonal-care', name: 'Seasonal Care' },
    { id: 'ingredient-focus', name: 'Ingredient Focus' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Anti-Aging Skincare Routine',
      excerpt: 'Discover the secrets to maintaining youthful, radiant skin with our comprehensive anti-aging guide.',
      category: 'anti-aging',
      date: '2024-01-15',
      author: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Winter Skincare: Protecting Your Skin in Cold Weather',
      excerpt: 'Learn how to adapt your skincare routine for winter months and protect your skin from harsh weather.',
      category: 'seasonal-care',
      date: '2024-01-10',
      author: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Vitamin C vs Retinol: Which is Right for Your Skin?',
      excerpt: 'Compare these powerful skincare ingredients and discover which one suits your skin type best.',
      category: 'ingredient-focus',
      date: '2024-01-05',
      author: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: '5 Morning Skincare Habits for Glowing Skin',
      excerpt: 'Transform your morning routine with these simple yet effective skincare habits for radiant skin.',
      category: 'skincare-tips',
      date: '2023-12-28',
      author: 'Lisa Rodriguez',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read'
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <PageHero 
        title="Trends & Tips"
        subtitle="Discover the latest in skincare trends, expert tips, and beauty insights to enhance your daily routine."
        backgroundImage="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-luxury transition-shadow duration-300 h-[400px] relative">
                {/* Full height background image */}
                <div className="absolute inset-0">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Glassmorphism overlay covering bottom half */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 backdrop-blur-md bg-white/20 border-t border-white/30">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-black/70 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors text-black mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-black/70 text-sm line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-black/60">{post.readTime}</span>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No articles found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;