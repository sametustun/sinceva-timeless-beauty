import React, { useState } from 'react';
import Layout from '@/components/Layout';
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
      image: '/placeholder-blog-1.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Winter Skincare: Protecting Your Skin in Cold Weather',
      excerpt: 'Learn how to adapt your skincare routine for winter months and protect your skin from harsh weather.',
      category: 'seasonal-care',
      date: '2024-01-10',
      author: 'Emma Wilson',
      image: '/placeholder-blog-2.jpg',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Vitamin C vs Retinol: Which is Right for Your Skin?',
      excerpt: 'Compare these powerful skincare ingredients and discover which one suits your skin type best.',
      category: 'ingredient-focus',
      date: '2024-01-05',
      author: 'Dr. Michael Chen',
      image: '/placeholder-blog-3.jpg',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: '5 Morning Skincare Habits for Glowing Skin',
      excerpt: 'Transform your morning routine with these simple yet effective skincare habits for radiant skin.',
      category: 'skincare-tips',
      date: '2023-12-28',
      author: 'Lisa Rodriguez',
      image: '/placeholder-blog-4.jpg',
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
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trends & Tips</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest in skincare trends, expert tips, and beauty insights to enhance your daily routine.
          </p>
        </div>

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
              <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-luxury transition-shadow duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
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