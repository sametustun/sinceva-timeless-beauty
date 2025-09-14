import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Minus, Plus, X } from 'lucide-react';

interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description?: string;
  image?: string;
}

interface PurchasePopupProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const PurchasePopup: React.FC<PurchasePopupProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return null;

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Adding to cart:', { product, quantity });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Purchase Product</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="space-y-4">
            <AspectRatio ratio={2/3}>
              <div className="relative w-full h-full">
                <img 
                  src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </AspectRatio>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              {product.description && (
                <p className="text-muted-foreground mb-4">{product.description}</p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="space-y-3">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-[#ef2b2d] hover:bg-[#d12529] text-white font-semibold py-3"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Button 
                variant="outline" 
                onClick={onClose}
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchasePopup;