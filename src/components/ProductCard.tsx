import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import StorePopup from './StorePopup';

interface Product {
  id: string | number;
  name: string;
  badge?: string;
  description?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  const [isStorePopupOpen, setIsStorePopupOpen] = React.useState(false);

  // Product-specific Trendyol URLs
  const productUrls: { [key: string]: string } = {
    'Sinceva Brightening Vitamin C Serum 30 ml': 'https://www.trendyol.com/pd/sinceva/vitamin-c-serum-5-c-vitamini-aloe-vera-elma-ozlu-ton-esitleyici-aydinlatici-30ml-p-985597681?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Anti Spot Arbutin Serum 30 ml': 'https://www.trendyol.com/pd/sinceva/arbutin-serum-2-alfa-arbutin-niasinamid-elma-ozlu-leke-karsiti-ton-esitleyici-30ml-p-985597018?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Anti-Wrinkle Eye Cream 20 ml': 'https://www.trendyol.com/pd/sinceva/goz-cevresi-kremi-proxylane-kolajen-elma-ozlu-kirisiklik-ve-morluk-karsiti-20ml-p-985597222?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Anti-Aging Night Cream 50 ml': 'https://www.trendyol.com/pd/sinceva/gece-kremi-retinol-niasinamid-elma-ozlu-ince-cizgi-kirisiklik-karsiti-50ml-p-985597313?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Skin Renewing Tonic 200 ml': 'https://www.trendyol.com/pd/sinceva/cilt-yenileyici-tonik-5-glikolik-asit-elma-ozlu-gozenek-sikilastirici-sebum-dengesi-200ml-p-985596983?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Purifying Peeling Cream Scrub 200 ml': 'https://www.trendyol.com/pd/sinceva/peeling-scrub-krem-kayisi-cekirdegi-partikullu-elma-ozlu-olu-deri-gozenek-arindirici-200ml-p-985597046?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Purifying Face Cleansing Foam 200 ml': 'https://www.trendyol.com/pd/sinceva/yuz-temizleme-kopugu-aloe-vera-elma-ozlu-nazik-temizleyici-arindirici-200ml-p-985596926?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva SPF 50+ Daily SunCare Cream 100 ml': 'https://www.trendyol.com/pd/sinceva/gunes-kremi-spf-50-aloe-vera-panthenol-elma-ozlu-genis-spektrumlu-uva-uvb-koruma-100ml-p-985596960?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Hyaluronic Acid Moisturizing Cream 50 ml': 'https://www.trendyol.com/pd/sinceva/hyaluronik-asit-gunluk-nemlendirici-krem-panthenol-elma-ozlu-yogun-nem-bariyer-onarici-50ml-p-985596967?merchantId=1083214&filterOverPriceListings=false'
  };

  // Get product-specific Trendyol URL
  const trendyolUrl = productUrls[product.name] || 'https://www.trendyol.com';

  // Stores data (only Trendyol)
  const stores = [
    {
      id: 'trendyol',
      name: 'Trendyol',
      logo: '/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png',
      url: trendyolUrl
    }
  ];

  return (
    <>
      <Link to={`/product/${product.id}`}>
        <Card className={`group hover:shadow-luxury transition-all duration-300 cursor-pointer overflow-hidden rounded-lg ${className}`}>
          <CardContent className="p-0">
            <AspectRatio ratio={2/3}>
              <div className="relative w-full h-full">
                <img 
                  src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glassmorphism overlay covering bottom third */}
                <div className="absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    {/* Buy Button */}
                    <div className="mt-auto flex items-center justify-center">
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="w-full bg-transparent text-black hover:bg-transparent hover:text-[#ef2b2d] transition-all duration-200 hover:scale-105 font-semibold"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsStorePopupOpen(true);
                        }}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </Link>

      {/* Store Popup */}
      <StorePopup
        isOpen={isStorePopupOpen}
        onClose={() => setIsStorePopupOpen(false)}
        productName={product.name}
        stores={stores}
      />
    </>
  );
};

export default ProductCard;