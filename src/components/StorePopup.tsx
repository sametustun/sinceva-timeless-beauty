import React from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

interface Store {
  id: string;
  name: string;
  logo: string;
  url: string;
}

interface StorePopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  stores: Store[];
  isMobile?: boolean;
}

const StorePopup: React.FC<StorePopupProps> = ({ 
  isOpen, 
  onClose, 
  productName, 
  stores
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  if (!isOpen) return null;

  const handleStoreClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={handleBackdropClick}
    >
      <Card className="relative bg-[#191919] backdrop-blur-md border-t border-white/20 rounded-t-lg w-full h-[33vh]">
        <CardContent className="p-6 text-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Product name */}
          <h3 className="font-semibold text-lg text-white mb-2 pr-8">
            {productName}
          </h3>
          
          {/* Available text */}
          <p className="text-sm text-white/70 mb-6">{t.productCard.available}</p>

          {/* Stores list */}
          <div className="space-y-4">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => handleStoreClick(store.url)}
                className="w-full flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-full"
              >
                <img 
                  src={store.logo} 
                  alt={store.name}
                  className="h-8 w-auto max-w-full object-contain"
                />
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StorePopup;