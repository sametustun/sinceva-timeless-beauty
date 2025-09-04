import React from 'react';
import Layout from '@/components/Layout';

interface PageTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backgroundClass?: string;
}

/**
 * Page Template Component - Base template for all pages
 * This will map to WordPress page templates
 */
const PageTemplate: React.FC<PageTemplateProps> = ({ 
  children, 
  title, 
  subtitle, 
  backgroundClass = "bg-background" 
}) => {
  return (
    <Layout>
      {(title || subtitle) && (
        <section className={`py-20 ${backgroundClass}`}>
          <div className="container mx-auto max-w-7xl px-4 text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </section>
      )}
      {children}
    </Layout>
  );
};

export default PageTemplate;