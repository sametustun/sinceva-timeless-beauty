import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, ShoppingCart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import StorePopup from '@/components/StorePopup';
import ProductRecommendations from '@/components/ProductRecommendations';
import Breadcrumb from '@/components/Breadcrumb';
import ImageZoom from '@/components/ImageZoom';
import { allProductsContent } from '@/data/content';
import { useIsMobile } from '@/hooks/use-mobile';
import { productDetails } from '@/data/productDetails';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

// Import hero images
import cvitHero from '@/assets/cvit-01.png';
import arbutinHero from '@/assets/arbutin-01.png';
import gozHero from '@/assets/göz-01.png';
import nightCreamHero from '@/assets/night_cream-01.png';
import tonikHero from '@/assets/tonik-01.png';
import peelingHero from '@/assets/peeling-01.png';
import yuzHero from '@/assets/yüz-01.png';
import gunesHero from '@/assets/güneş-01.png';
import nemlendiriciHero from '@/assets/nemlendirici-01.png';

// Import product gallery images
import vitcUrun2 from '@/assets/VİTCÜRÜN2.png';
import vitcUrun3 from '@/assets/VİTCÜRÜN3.png';
import vitcUrun5 from '@/assets/VİTCÜRÜN5.png';
import vitcUrun6 from '@/assets/VİTCÜRÜN6.png';
import arbutinUrun2 from '@/assets/ARBUTİNÜRÜN2.png';
import arbutinUrun3 from '@/assets/ARBUTİNÜRÜN3.png';
import arbutinUrun5 from '@/assets/ARBUTİNÜRÜN5.png';
import arbutinUrun6 from '@/assets/ARBUTİNÜRÜN6.png';
import gozUrun2 from '@/assets/GÖZÜRÜN2.png';
import gozUrun3 from '@/assets/GÖZÜRÜN3.png';
import gozUrun5 from '@/assets/GÖZÜRÜN5.png';
import gozUrun6 from '@/assets/GÖZÜRÜN6.png';
import geceUrun2 from '@/assets/GECEÜRÜN2.png';
import geceUrun3 from '@/assets/GECEÜRÜN3.png';
import geceUrun5 from '@/assets/GECEÜRÜN5.png';
import geceUrun6 from '@/assets/GECEÜRÜN6.png';
import tonikUrun2 from '@/assets/TONİKÜRÜN2.png';
import tonikUrun3 from '@/assets/TONİKÜRÜN3.png';
import tonikUrun5 from '@/assets/TONİKÜRÜN5.png';
import tonikUrun6 from '@/assets/TONİKÜRÜN6.png';
import peelingUrun2 from '@/assets/PEELINGÜRÜN2.png';
import peelingUrun3 from '@/assets/PEELINGÜRÜN3.png';
import peelingUrun5 from '@/assets/PEELINGÜRÜN5.png';
import peelingUrun6 from '@/assets/PEELINGÜRÜN6.png';
import yuzUrun2 from '@/assets/YÜZÜRÜN2.png';
import yuzUrun3 from '@/assets/YÜZÜRÜN3.png';
import yuzUrun5 from '@/assets/YÜZÜRÜN5.png';
import yuzUrun6 from '@/assets/YÜZÜRÜN6.png';
import gunesUrun2 from '@/assets/GÜNEŞÜRÜN2.png';
import gunesUrun3 from '@/assets/GÜNEŞÜRÜN3.png';
import gunesUrun5 from '@/assets/GÜNEŞÜRÜN5.png';
import gunesUrun6 from '@/assets/GÜNEŞÜRÜN6.png';
import nemlendiriciUrun2 from '@/assets/NEMLENDİRİCİÜRÜN2.png';
import nemlendiriciUrun3 from '@/assets/NEMLENDİRİCİÜRÜN3.png';
import nemlendiriciUrun5 from '@/assets/NEMLENDİRİCİÜRÜN5.png';
import nemlendiriciUrun6 from '@/assets/NEMLENDİRİCİÜRÜN6.png';
import zherUrun4 from '@/assets/ZHERÜRÜN4.png';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isStorePopupOpen, setIsStorePopupOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const [zoomImageIndex, setZoomImageIndex] = useState<number | null>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { addItem } = useCart();
  const { toast } = useToast();

  // Find product by id
  const product = allProductsContent.products.find(p => p.id.toString() === id);

  // Product-specific hero images
  const heroImages: { [key: string]: string } = {
    'Sinceva Brightening Vitamin C Serum 30 ml': cvitHero,
    'Sinceva Anti-Spot Arbutin Serum 30 ml': arbutinHero,
    'Sinceva Anti-Wrinkle Eye Cream 20 ml': gozHero,
    'Sinceva Anti-Aging Night Cream 50 ml': nightCreamHero,
    'Sinceva Skin Renewing Tonic 200 ml': tonikHero,
    'Sinceva Purifying Peeling Cream Scrub 200 ml': peelingHero,
    'Sinceva Purifying Face Cleansing Foam 200 ml': yuzHero,
    'Sinceva SPF 50+ Daily SunCare Cream 100 ml': gunesHero,
    'Sinceva Hyaluronic Acid Moisturizing Cream 50 ml': nemlendiriciHero
  };

  // Get product-specific hero image
  const heroImage = product ? (heroImages[product.name] || product.image) : '';

  // Get gallery images for current product
  const getProductGallery = (productName: string, heroImg: string): string[] => {
    switch (productName) {
      case 'Sinceva Brightening Vitamin C Serum 30 ml':
        return [vitcUrun2, vitcUrun3, zherUrun4, vitcUrun5, vitcUrun6];
      case 'Sinceva Anti-Spot Arbutin Serum 30 ml':
        return [arbutinUrun2, arbutinUrun3, zherUrun4, arbutinUrun5, arbutinUrun6];
      case 'Sinceva Anti-Wrinkle Eye Cream 20 ml':
        return [gozUrun2, gozUrun3, zherUrun4, gozUrun5, gozUrun6];
      case 'Sinceva Anti-Aging Night Cream 50 ml':
        return [geceUrun2, geceUrun3, zherUrun4, geceUrun5, geceUrun6];
      case 'Sinceva Skin Renewing Tonic 200 ml':
        return [tonikUrun2, tonikUrun3, zherUrun4, tonikUrun5, tonikUrun6];
      case 'Sinceva Purifying Peeling Cream Scrub 200 ml':
        return [peelingUrun2, peelingUrun3, zherUrun4, peelingUrun5, peelingUrun6];
      case 'Sinceva Purifying Face Cleansing Foam 200 ml':
        return [yuzUrun2, yuzUrun3, zherUrun4, yuzUrun5, yuzUrun6];
      case 'Sinceva SPF 50+ Daily SunCare Cream 100 ml':
        return [gunesUrun2, gunesUrun3, zherUrun4, gunesUrun5, gunesUrun6];
      case 'Sinceva Hyaluronic Acid Moisturizing Cream 50 ml':
        return [nemlendiriciUrun2, nemlendiriciUrun3, zherUrun4, nemlendiriciUrun5, nemlendiriciUrun6];
      default:
        return [heroImg];
    }
  };

  const galleryImages = product && heroImage ? getProductGallery(product.name, heroImage) : [];

  // Product-specific Trendyol URLs
  const productUrls: { [key: string]: string } = {
    'Sinceva Brightening Vitamin C Serum 30 ml': 'https://www.trendyol.com/pd/sinceva/vitamin-c-serum-5-c-vitamini-aloe-vera-elma-ozlu-ton-esitleyici-aydinlatici-30ml-p-985597681?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Anti-Spot Arbutin Serum 30 ml': 'https://www.trendyol.com/pd/sinceva/arbutin-serum-2-alfa-arbutin-niasinamid-elma-ozlu-leke-karsiti-ton-esitleyici-30ml-p-985597018?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Anti-Wrinkle Eye Cream 20 ml': 'https://www.trendyol.com/pd/sinceva/goz-cevresi-kremi-proxylane-kolajen-elma-ozlu-kirisiklik-ve-morluk-karsiti-20ml-p-985597222?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Anti-Aging Night Cream 50 ml': 'https://www.trendyol.com/pd/sinceva/gece-kremi-retinol-niasinamid-elma-ozlu-ince-cizgi-kirisiklik-karsiti-50ml-p-985597313?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Skin Renewing Tonic 200 ml': 'https://www.trendyol.com/pd/sinceva/cilt-yenileyici-tonik-5-glikolik-asit-elma-ozlu-gozenek-sikilastirici-sebum-dengesi-200ml-p-985596983?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Purifying Peeling Cream Scrub 200 ml': 'https://www.trendyol.com/pd/sinceva/peeling-scrub-krem-kayisi-cekirdegi-partikullu-elma-ozlu-olu-deri-gozenek-arindirici-200ml-p-985597046?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Purifying Face Cleansing Foam 200 ml': 'https://www.trendyol.com/pd/sinceva/yuz-temizleme-kopugu-aloe-vera-elma-ozlu-nazik-temizleyici-arindirici-200ml-p-985596926?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva SPF 50+ Daily SunCare Cream 100 ml': 'https://www.trendyol.com/pd/sinceva/gunes-kremi-spf-50-aloe-vera-panthenol-elma-ozlu-genis-spektrumlu-uva-uvb-koruma-100ml-p-985596960?merchantId=1083214&filterOverPriceListings=false',
    'Sinceva Hyaluronic Acid Moisturizing Cream 50 ml': 'https://www.trendyol.com/pd/sinceva/hyaluronik-asit-gunluk-nemlendirici-krem-panthenol-elma-ozlu-yogun-nem-bariyer-onarici-50ml-p-985596967?merchantId=1083214&filterOverPriceListings=false'
  };

  // Get product-specific Trendyol URL
  const trendyolUrl = productUrls[product?.name || ''] || 'https://www.trendyol.com';

  // Stores data (only Trendyol)
  const stores = [
    {
      id: 'trendyol',
      name: 'Trendyol',
      logo: '/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png',
      url: trendyolUrl
    }
  ];

  // Get product price (örnek fiyat - gerçek fiyat veritabanından gelmeli)
  const productPrices: { [key: number]: number } = {
    1: 299, // Vitamin C Serum
    2: 329, // Arbutin Serum
    3: 249, // Eye Cream
    4: 379, // Night Cream
    5: 199, // Tonic
    6: 179, // Peeling
    7: 159, // Face Cleansing Foam
    8: 229, // Suncare Cream
    9: 289, // Moisturizing Cream
  };

  const productPrice = productPrices[product?.id || 0] || 199;

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id.toString(),
        name: product.name,
        price: productPrice,
        image: heroImage,
      });
      toast({
        title: 'Sepete Eklendi',
        description: `${product.name} sepetinize eklendi.`,
      });
    }
  };
  // Get current language from context
  const { language } = useLanguage();
  const t = translations[language];
  
  // Get product-specific content
  const productContent = product ? productDetails[language][product.id] : null;
  
  // FAQ questions - use product-specific or fallback
  const faqQuestions = productContent?.faqs || [
    {
      question: 'Is this product suitable for sensitive skin?',
      answer: 'Yes, our products are dermatologically tested and suitable for all skin types including sensitive skin.'
    },
    {
      question: 'How long until I see results?',
      answer: 'Most customers notice improvements within 2-4 weeks of regular use. However, results may vary depending on your skin type and condition.'
    },
    {
      question: 'Can I use this product with other skincare products?',
      answer: 'Yes, this product is designed to work well with most skincare routines. However, we recommend patch testing when combining with new products.'
    },
    {
      question: 'What is the shelf life of this product?',
      answer: 'The product has a shelf life of 24 months when unopened, and 12 months after opening. Store in a cool, dry place away from direct sunlight.'
    }
  ];

  // Accordion content - use product-specific or fallback
  const accordionContent = [
    {
      value: 'details',
      title: t.productDetails,
      content: productContent?.details || (product?.description + ' This premium product is formulated with the finest ingredients to deliver exceptional results. Our advanced formula is designed to meet your specific skincare needs while being gentle on all skin types.')
    },
    {
      value: 'ingredients',
      title: t.ingredients,
      content: productContent?.ingredients || 'Aqua, Glycerin, Sodium Hyaluronate, Vitamin C, Niacinamide, Ceramides, Peptides, Botanical Extracts. All ingredients are carefully selected and tested for purity and effectiveness.'
    },
    {
      value: 'howto',
      title: t.howToUse,
      content: productContent?.howToUse || 'Apply a small amount to clean, dry skin. Gently massage in circular motions until fully absorbed. Use twice daily for best results. Always apply sunscreen during the day when using this product.'
    },
    {
      value: 'faq',
      title: t.faq,
      content: null // This will be handled specially with nested accordion
    }
  ];

  // Handle floating button visibility based on footer intersection
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const isFooterVisible = footerRect.top <= window.innerHeight;
        setShowFloatingButton(!isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">{t.productNotFound}</h1>
          <p className="text-muted-foreground">{t.productNotFoundDesc}</p>
        </div>
      </Layout>
    );
  }


  return (
    <Layout>
      {/* Main Product Image - Banner Style */}
      <div className="w-full">
        <AspectRatio ratio={2/3}>
          <div className="relative w-full h-full">
            <img 
              src={heroImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Static Buy Button - Overlaid on hero image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
              <Button 
                onClick={handleAddToCart}
                className="py-2 text-lg font-semibold bg-white text-[#191919] hover:bg-white/90 rounded-full px-6"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Sepete Ekle
              </Button>
              <Button 
                onClick={() => setIsStorePopupOpen(true)}
                className="py-2 text-lg font-semibold bg-[#ef2b2d] text-white hover:bg-[#ef2b2d]/90 rounded-full px-6"
              >
                {t.buy}
              </Button>
            </div>
          </div>
        </AspectRatio>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Product Header Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#191919] mb-2">
            {t.productNames?.[product.id as keyof typeof t.productNames] || product.name}
          </h1>
          <p className="text-2xl font-semibold text-[#ef2b2d] mb-4">₺{productPrice.toLocaleString('tr-TR')}</p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/4 md:basis-1/3">
                  <div 
                    className="overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setZoomImageIndex(index)}
                  >
                    <AspectRatio ratio={2/3}>
                      <img 
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>
        </div>

        {/* Accordion Menu */}
        <div className="mb-8">
          <Accordion type="single" defaultValue="details" collapsible className="w-full">
            {accordionContent.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.value === 'faq' ? (
                    <Accordion type="multiple" className="w-full">
                      {faqQuestions.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="text-left font-medium text-sm">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 text-sm">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    item.content
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Separator */}
        <Separator className="mb-8" />
      </div>

      {/* Recommendations Section */}
      <ProductRecommendations 
        currentProductId={product.id}
        products={allProductsContent.products}
        title={t.discoverProducts}
      />

      {/* Floating Buy Button */}
      {showFloatingButton && (
        <div className="fixed bottom-4 left-4 right-4 z-40">
          <div className="container mx-auto max-w-7xl flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-[#191919] text-lg font-semibold transition-all hover:bg-white flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Sepete Ekle
            </button>
            <button
              onClick={() => setIsStorePopupOpen(true)}
              className="py-2 px-6 bg-[#ef2b2d] rounded-full text-white text-lg font-semibold transition-all hover:bg-[#ef2b2d]/90"
            >
              {t.buy}
            </button>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <Breadcrumb productId={product.id} />

      {/* Footer Reference for Intersection Observer */}
      <div ref={footerRef} className="h-1" />

      {/* Store Popup */}
      <StorePopup
        isOpen={isStorePopupOpen}
        onClose={() => setIsStorePopupOpen(false)}
        productName={product.name}
        stores={stores}
      />

      {/* Image Zoom */}
      <ImageZoom
        images={galleryImages}
        currentIndex={zoomImageIndex}
        onClose={() => setZoomImageIndex(null)}
        onNavigate={setZoomImageIndex}
      />
    </Layout>
  );
};

export default Product;
