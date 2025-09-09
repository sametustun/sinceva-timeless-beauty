import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { categoryStructure } from '@/data/content';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  image: string;
}

interface Subcategory {
  title: string;
  products: Product[];
}

interface CategoryData {
  title: string;
  description: string;
  subcategories: Record<string, Subcategory>;
}

const Category: React.FC = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();

  // Get current category data
  const currentCategoryData: CategoryData | undefined = category ? categoryStructure[category as keyof typeof categoryStructure] : undefined;
  
  if (!currentCategoryData) {
    return (
      <Layout>
        <PageHero 
          title="Category Not Found"
          subtitle="The requested category could not be found."
          backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        />
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              The requested category could not be found.
            </p>
            <Link to="/shop" className="inline-block mt-4">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // If subcategory is provided, show products from that subcategory
  if (subcategory) {
    const subcategoryData: Subcategory | undefined = currentCategoryData.subcategories[subcategory];
    
    if (!subcategoryData) {
      return (
        <Layout>
          <PageHero 
            title="Subcategory Not Found"
            subtitle="The requested subcategory could not be found."
            backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          />
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                The requested subcategory could not be found.
              </p>
              <Link to={`/category/${category}`} className="inline-block mt-4">
                <Button>Back to {currentCategoryData.title}</Button>
              </Link>
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <PageHero 
          title={subcategoryData.title}
          subtitle={`${currentCategoryData.title} - ${subcategoryData.title}`}
          backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        />
        
        <div className="container mx-auto max-w-7xl px-4 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to={`/category/${category}`} className="hover:text-primary">{currentCategoryData.title}</Link>
            <span>/</span>
            <span className="text-foreground">{subcategoryData.title}</span>
          </div>

          {/* Products Grid */}
          {subcategoryData.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subcategoryData.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products found in this subcategory.
              </p>
              <Link to={`/category/${category}`} className="inline-block mt-4">
                <Button>Back to {currentCategoryData.title}</Button>
              </Link>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  // If no subcategory is provided, show subcategories of the main category
  return (
    <Layout>
      <PageHero 
        title={currentCategoryData.title}
        subtitle={currentCategoryData.description}
        backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-foreground">{currentCategoryData.title}</span>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Object.entries(currentCategoryData.subcategories).map(([key, subcategoryData]) => (
            <Card key={key} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to={`/category/${category}/${key}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {subcategoryData.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {subcategoryData.products.length} product{subcategoryData.products.length !== 1 ? 's' : ''} available
                  </p>
                  {/* Show first product as preview */}
                  {subcategoryData.products[0] && (
                    <div className="flex items-center space-x-3">
                      <img 
                        src={subcategoryData.products[0].image} 
                        alt={subcategoryData.products[0].name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-1">{subcategoryData.products[0].name}</p>
                        <p className="text-sm text-muted-foreground">${subcategoryData.products[0].price}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;