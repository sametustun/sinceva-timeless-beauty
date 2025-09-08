import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { allProductsContent } from '@/data/content';

const AllProducts: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#191919]">{allProductsContent.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {allProductsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProductsContent.products.map((product) => (
            <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 cursor-pointer h-[480px] overflow-hidden">
              <CardContent className="p-0 relative h-full">
                {/* Full height product image */}
                <div className="absolute inset-0">
                  <img 
                    src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-white z-10">
                      {product.badge}
                    </Badge>
                  )}
                </div>

                {/* Glassmorphism overlay covering bottom third */}
                <div className="absolute inset-x-0 bottom-0 top-2/3 backdrop-blur-md bg-white/20 border-t border-white/30">
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-black/70 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-yellow-500 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-black/60">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-xl font-semibold text-primary">
                        ${product.price}
                      </span>
                      {(product as any).originalPrice && (
                        <span className="text-sm text-black/50 line-through">
                          ${(product as any).originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;