import { useState, useEffect } from 'react';
import { allProductsContent } from '@/data/content';

export interface BackendProduct {
  id: string;
  name: {
    tr: string;
    en: string;
    ar: string;
  };
  slug: string;
  description: {
    tr: string;
    en: string;
    ar: string;
  };
  short_description: {
    tr: string;
    en: string;
    ar: string;
  };
  category: string;
  images: string[];
  price: number | null;
  sale_price: number | null;
  active: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface MergedProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number | null;
  sale_price?: number | null;
}

// Backend API URL - production domain
const API_BASE_URL = 'https://sinceva.com/backend';

export function useProducts() {
  const [products, setProducts] = useState<MergedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Try to fetch from backend API (public endpoint)
        const response = await fetch(`${API_BASE_URL}/products-public.php`);
        
        if (response.ok) {
          const data = await response.json();
          
          if (data.success && data.products) {
            // Create a mapping from backend products by order/ID
            const backendPriceMap: { [key: number]: { price: number | null; sale_price: number | null } } = {};
            
            data.products.forEach((bp: BackendProduct, index: number) => {
              // Map by index+1 since static products use 1-9 IDs
              const productId = index + 1;
              backendPriceMap[productId] = {
                price: bp.price,
                sale_price: bp.sale_price
              };
            });
            
            // Merge backend prices with static content
            const mergedProducts = allProductsContent.products.map(staticProduct => {
              const backendPrices = backendPriceMap[staticProduct.id];
              
              if (backendPrices) {
                return {
                  ...staticProduct,
                  price: backendPrices.price,
                  sale_price: backendPrices.sale_price
                };
              }
              
              return staticProduct;
            });
            
            setProducts(mergedProducts);
          } else {
            // Fallback to static content
            setProducts(allProductsContent.products);
          }
        } else {
          // Fallback to static content if API fails
          setProducts(allProductsContent.products);
        }
      } catch (err) {
        console.warn('Could not fetch from backend, using static content:', err);
        // Fallback to static content
        setProducts(allProductsContent.products);
        setError(null); // Don't show error, just use fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}

// Hook to get a single product by ID
export function useProduct(id: string | undefined) {
  const { products, loading, error } = useProducts();
  
  const product = products.find(p => p.id.toString() === id);
  
  return { product, loading, error };
}
