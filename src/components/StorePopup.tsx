import React from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  stores, 
  isMobile = false 
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleStoreClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <Card className={`
        relative bg-[#191919] backdrop-blur-md border border-white/20 rounded-lg
        ${isMobile ? 'w-full max-w-sm' : 'w-full max-w-md ml-auto mr-8'}
        ${!isMobile && 'self-start mt-20'}
      `}>
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
          <p className="text-sm text-white/70 mb-6">available</p>

          {/* Stores list */}
          <div className="space-y-4">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => handleStoreClick(store.url)}
                className="w-full flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-lg"
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