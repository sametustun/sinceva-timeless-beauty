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
            <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 cursor-pointer">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square mb-4 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image || "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-white">
                      {product.badge}
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-[#191919] group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold text-primary">
                      ${product.price}
                    </span>
                    {(product as any).originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${(product as any).originalPrice}
                      </span>
                    )}
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