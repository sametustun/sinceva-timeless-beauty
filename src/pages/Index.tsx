import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryShowcase from '@/components/CategoryShowcase';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
    </Layout>
  );
};

export default Index;
