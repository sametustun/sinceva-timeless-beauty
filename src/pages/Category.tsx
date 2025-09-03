import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          badge: 'Premium'
        },
        {
          id: 2,
          name: 'Collagen Boost Serum',
          price: 94.99,
          rating: 4.8,
          reviews: 89,
          badge: 'Bestseller'
        },
        {
          id: 3,
          name: 'Peptide Eye Renewal Cream',
          price: 79.99,
          rating: 4.6,
          reviews: 124,
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
        },
        {
          id: 5,
          name: 'Purifying Clay Mask',
          price: 54.99,
          rating: 4.5,
          reviews: 97,
          badge: 'New'
        },
        {
          id: 6,
          name: 'Balancing Toner',
          price: 44.99,
          rating: 4.7,
          reviews: 156,
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
          badge: 'Bestseller'
        },
        {
          id: 8,
          name: 'Daily SPF 50 Sunscreen',
          price: 49.99,
          rating: 4.5,
          reviews: 112,
        },
        {
          id: 9,
          name: 'Nourishing Night Oil',
          price: 74.99,
          rating: 4.8,
          reviews: 67,
          badge: 'Premium'
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
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{currentCategory.title}</span>
        </div>

        {/* Back Button */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentCategory.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Products Grid */}
        {currentCategory.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.products.map((product: any) => (
              <Card key={product.id} className="group hover:shadow-luxury transition-shadow duration-300">
                <CardContent className="p-0">
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
                    
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        ${product.price}
                      </span>
                      
                      <Button size="sm" className="gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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