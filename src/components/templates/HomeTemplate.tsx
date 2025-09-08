import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CategoryShowcase from '@/components/CategoryShowcase';
import AllProducts from '@/components/AllProducts';

/**
 * Home Template Component - Template for the homepage
 * This will map to WordPress front-page.php or index.php
 */
const HomeTemplate: React.FC = () => {
  console.log('HomeTemplate loading...');
  
  return (
    <Layout>
      <Hero />
      <CategoryShowcase />
      <AllProducts />
    </Layout>
  );
};

export default HomeTemplate;