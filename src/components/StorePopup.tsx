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
        relative bg-white backdrop-blur-md border border-white/20 rounded-lg
        ${isMobile ? 'w-full max-w-sm' : 'w-full max-w-md ml-auto mr-8'}
        ${!isMobile && 'self-start mt-20'}
      `}>
        <CardContent className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product name */}
          <h3 className="font-semibold text-lg text-[#191919] mb-2 pr-8">
            {productName}
          </h3>
          
          {/* Available text */}
          <p className="text-sm text-gray-500 mb-4">available</p>

          {/* Stores list */}
          <div className="space-y-3">
            {stores.map((store) => (
              <button
                key={store.id}
                onClick={() => handleStoreClick(store.url)}
                className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img 
                  src={store.logo} 
                  alt={store.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="font-medium text-[#191919]">{store.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StorePopup;