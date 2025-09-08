import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import StorePopup from '@/components/StorePopup';
import { allProductsContent } from '@/data/content';
import { useIsMobile } from '@/hooks/use-mobile';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isStorePopupOpen, setIsStorePopupOpen] = useState(false);
  const isMobile = useIsMobile();

  // Find product by id
  const product = allProductsContent.products.find(p => p.id.toString() === id);

  // Mock stores data - in real app, this would come from API
  const stores = [
    {
      id: 'trendyol',
      name: 'Trendyol',
      logo: 'https://cdn.trendyol.com/media/images/trendyol-logo.svg',
      url: 'https://www.trendyol.com'
    },
    {
      id: 'hepsiburada',
      name: 'Hepsiburada',
      logo: 'https://dummyimage.com/32x32/ff6900/white.png&text=HB',
      url: 'https://www.hepsiburada.com'
    }
  ];

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The requested product could not be found.</p>
        </div>
      </Layout>
    );
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {product.badge && (
              <Badge className="bg-primary text-white">
                {product.badge}
              </Badge>
            )}
            
            <h1 className="text-3xl font-bold text-[#191919]">{product.name}</h1>
            
            <p className="text-lg text-gray-600">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Features or additional info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Product Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Premium quality ingredients</li>
                <li>• Suitable for all skin types</li>
                <li>• Dermatologically tested</li>
                <li>• Cruelty-free formula</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Buy Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-40">
        <div className="container mx-auto max-w-7xl">
          <button
            onClick={() => setIsStorePopupOpen(true)}
            className="mx-auto block px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-[#191919] font-semibold transition-all hover:bg-white/30"
          >
            Buy
          </button>
        </div>
      </div>

      {/* Store Popup */}
      <StorePopup
        isOpen={isStorePopupOpen}
        onClose={() => setIsStorePopupOpen(false)}
        productName={product.name}
        stores={stores}
        isMobile={isMobile}
      />
    </Layout>
  );
};

export default Product;