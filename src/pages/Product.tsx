import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import StorePopup from '@/components/StorePopup';
import ProductRecommendations from '@/components/ProductRecommendations';
import Breadcrumb from '@/components/Breadcrumb';
import { allProductsContent } from '@/data/content';
import { useIsMobile } from '@/hooks/use-mobile';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isStorePopupOpen, setIsStorePopupOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Find product by id
  const product = allProductsContent.products.find(p => p.id.toString() === id);

  // Mock gallery images
  const galleryImages = [
    product?.image || '',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  ].filter(Boolean);

  // Mock stores data
  const stores = [
    {
      id: 'trendyol',
      name: 'Trendyol',
      logo: '/lovable-uploads/081fc38c-4560-45a6-983f-80febd33d0e4.png',
      url: 'https://www.trendyol.com'
    },
    {
      id: 'hepsiburada',
      name: 'Hepsiburada',
      logo: 'https://dummyimage.com/32x32/ff6900/white.png&text=HB',
      url: 'https://www.hepsiburada.com'
    }
  ];

  // Mock FAQ questions
  const faqQuestions = [
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

  // Mock accordion content
  const accordionContent = [
    {
      value: 'details',
      title: 'Product Details',
      content: product?.description + ' This premium product is formulated with the finest ingredients to deliver exceptional results. Our advanced formula is designed to meet your specific skincare needs while being gentle on all skin types.'
    },
    {
      value: 'ingredients',
      title: 'Ingredients',
      content: 'Aqua, Glycerin, Sodium Hyaluronate, Vitamin C, Niacinamide, Ceramides, Peptides, Botanical Extracts. All ingredients are carefully selected and tested for purity and effectiveness.'
    },
    {
      value: 'howto',
      title: 'How To Use',
      content: 'Apply a small amount to clean, dry skin. Gently massage in circular motions until fully absorbed. Use twice daily for best results. Always apply sunscreen during the day when using this product.'
    },
    {
      value: 'faq',
      title: 'Sıkça Sorulan Sorular',
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
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The requested product could not be found.</p>
        </div>
      </Layout>
    );
  }


  return (
    <Layout>
      {/* Main Product Image - Banner Style */}
      <div className="w-full aspect-[2/3] md:aspect-auto md:h-[60vh] relative">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-primary text-white z-10">
            {product.badge}
          </Badge>
        )}
        
        {/* Static Buy Button - Overlaid on hero image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <Button 
            onClick={() => setIsStorePopupOpen(true)}
            className="py-2 text-lg font-semibold bg-[#ef2b2d] text-white hover:bg-[#ef2b2d]/90 rounded-full px-6"
            style={{ width: 'clamp(150px, 15vw, 200px)' }}
          >
            Buy
          </Button>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Product Header Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#191919] mb-4">{product.name}</h1>
          
        </div>

        {/* Photo Gallery */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/4 md:basis-1/3">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img 
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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
        title="Discover Sinceva Products"
      />

      {/* Floating Buy Button */}
      {showFloatingButton && (
        <div className="fixed bottom-4 left-4 right-4 z-40">
          <div className="container mx-auto max-w-7xl">
            <button
              onClick={() => setIsStorePopupOpen(true)}
              className="w-full py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[#191919] text-lg font-semibold transition-all hover:bg-white/30"
            >
              Buy
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
        isMobile={isMobile}
      />
    </Layout>
  );
};

export default Product;