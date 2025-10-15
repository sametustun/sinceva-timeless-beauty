import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import tipsBanner from '@/assets/tips_banner.jpg';
import tipsBannerMobile from '@/assets/tips_banner_mobile.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { blogPosts } from '@/data/blogPosts';
import { getBlogContent } from '@/data/blogContent';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t.blog.categories.all },
    { id: 'daily-care', name: t.blog.categories.trends || 'Daily Care' },
    { id: 'ingredients', name: t.blog.categories.skincare || 'Ingredients' },
    { id: 'sun-care', name: 'Sun Care' },
    { id: 'anti-aging', name: 'Anti-Aging' },
    { id: 'treatments', name: t.blog.categories.routine || 'Treatments' },
  ];

  // Get blog content for current language
  const postsWithContent = blogPosts.map(post => {
    const content = getBlogContent(language, post.id);
    return {
      ...post,
      title: content?.title || post.id,
      excerpt: content?.excerpt || '',
    };
  });

  const filteredPosts = postsWithContent.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
        <PageHero
          title={t.blog.title}
          subtitle={t.blog.searchPlaceholder}
        backgroundImage={tipsBanner}
        backgroundImageMobile={tipsBannerMobile}
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder={t.blog.searchPlaceholder}
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
                          {new Date(post.date).toLocaleDateString(
                            language === 'tr' ? 'tr-TR' : language === 'ar' ? 'ar-SA' : 'en-US'
                          )}
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
                      <span className="text-sm text-black/60">
                        {post.readTime} {language === 'tr' ? 'dk' : language === 'ar' ? 'دقيقة' : 'min'}
                      </span>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        {t.blog.readMore}
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
              No articles found
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;