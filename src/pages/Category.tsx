import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const categoryData: Record<string, any> = {
    'anti-aging-care': {
      title: 'Anti-Aging Care',
      description: 'Advanced skincare solutions to target signs of aging and maintain youthful skin.',
      products: [
        {
          id: 1,
          name: 'Retinol Anti-Aging Night Cream',
          price: 129.99,
          rating: 4.7,
          reviews: 156,
          badge: 'Premium',
          image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Advanced retinol formula to reduce signs of aging overnight.'
        },
        {
          id: 2,
          name: 'Collagen Boost Serum',
          price: 94.99,
          rating: 4.8,
          reviews: 89,
          badge: 'Bestseller',
          image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Intensive collagen-boosting serum for firmer, more elastic skin.'
        },
        {
          id: 3,
          name: 'Peptide Eye Renewal Cream',
          price: 79.99,
          rating: 4.6,
          reviews: 124,
          image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Target fine lines and dark circles around the delicate eye area.'
        }
      ]
    },
    'face-and-skin-cleansing': {
      title: 'Face & Skin Cleansing',
      description: 'Gentle yet effective cleansing products for healthy, refreshed skin.',
      products: [
        {
          id: 4,
          name: 'Gentle Foaming Cleanser',
          price: 39.99,
          rating: 4.6,
          reviews: 203,
          image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Mild yet effective cleanser for all skin types.'
        },
        {
          id: 5,
          name: 'Purifying Clay Mask',
          price: 54.99,
          rating: 4.5,
          reviews: 97,
          badge: 'New',
          image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Deep cleansing clay mask that draws out impurities and excess oil.'
        },
        {
          id: 6,
          name: 'Balancing Toner',
          price: 44.99,
          rating: 4.7,
          reviews: 156,
          image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'pH-balancing toner that prepares skin for optimal product absorption.'
        }
      ]
    },
    'daily-care': {
      title: 'Daily Care',
      description: 'Essential products for your everyday skincare routine.',
      products: [
        {
          id: 7,
          name: 'Hyaluronic Acid Moisturizer',
          price: 64.99,
          rating: 4.9,
          reviews: 289,
          badge: 'Bestseller',
          image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Deep hydration with hyaluronic acid for plump, smooth skin.'
        },
        {
          id: 8,
          name: 'Daily SPF 50 Sunscreen',
          price: 49.99,
          rating: 4.5,
          reviews: 112,
          image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Broad spectrum protection with lightweight, non-greasy formula.'
        },
        {
          id: 9,
          name: 'Nourishing Night Oil',
          price: 74.99,
          rating: 4.8,
          reviews: 67,
          badge: 'Premium',
          image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          description: 'Luxurious night oil blend for deep nourishment and repair.'
        }
      ]
    }
  };

  const currentCategory = categoryData[category || ''] || {
    title: 'Category Not Found',
    description: 'The requested category could not be found.',
    products: []
  };

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
        title={currentCategory.title}
        subtitle={currentCategory.description}
        backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* Products Grid */}
        {currentCategory.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
            <Link to="/shop" className="inline-block mt-4">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Category;