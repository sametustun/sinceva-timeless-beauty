import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { blogPosts } from '@/data/blogPosts';
import { getBlogContent } from '@/data/blogContent';
import tipsBanner from '@/assets/tips_banner.jpg';
import tipsBannerMobile from '@/assets/tips_banner_mobile.jpg';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = translations[language];

  // Find the blog post
  const post = blogPosts.find(p => p.id === id);
  const content = id ? getBlogContent(language, id) : null;

  // If post not found, redirect to blog page
  if (!post || !content) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <PageHero
        title={content.title}
        subtitle={content.excerpt}
        backgroundImage={tipsBanner}
        backgroundImageMobile={tipsBannerMobile}
      />

      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'tr' ? 'Bloga Dön' : language === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
        </Link>

        {/* Post Meta */}
        <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>
              {new Date(post.date).toLocaleDateString(
                language === 'tr' ? 'tr-TR' : language === 'ar' ? 'ar-SA' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div>
            {post.readTime} {language === 'tr' ? 'dk okuma' : language === 'ar' ? 'دقيقة قراءة' : 'min read'}
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video mb-12 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={content.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Post Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: content.content.replace(/\n/g, '<br />') }}
            className="whitespace-pre-wrap"
          />
        </article>

        {/* Related Posts */}
        <div className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-8">
            {language === 'tr' ? 'İlgili Yazılar' : language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => {
                const relatedContent = getBlogContent(language, relatedPost.id);
                return (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedContent?.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                        {relatedContent?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedContent?.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
