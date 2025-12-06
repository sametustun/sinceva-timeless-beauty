import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Download, Package, FileText, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// Import static data
import { categoryStructure } from '@/data/content';
import { blogPosts } from '@/data/blogPosts';
import { trBlogContent } from '@/data/blogContent/tr';
import { enBlogContent } from '@/data/blogContent/en';
import { arBlogContent } from '@/data/blogContent/ar';
import { productDetailsTR } from '@/data/productDetails/tr';
import { productDetailsEN } from '@/data/productDetails/en';
import { productDetailsAR } from '@/data/productDetails/ar';

const API_BASE = 'https://sinceva.com/api/admin';

export default function AdminImportData() {
  const [isImportingProducts, setIsImportingProducts] = useState(false);
  const [isImportingBlog, setIsImportingBlog] = useState(false);
  const [showProductDialog, setShowProductDialog] = useState(false);
  const [showBlogDialog, setShowBlogDialog] = useState(false);
  const [result, setResult] = useState<{ type: string; message: string; success: boolean } | null>(null);
  const { toast } = useToast();

  // Prepare products data from static content
  const prepareProductsData = () => {
    const products: any[] = [];
    
    Object.entries(categoryStructure).forEach(([categoryKey, category]) => {
      Object.entries(category.subcategories).forEach(([subKey, subcategory]) => {
        subcategory.products.forEach((product) => {
          const detailsTR = productDetailsTR[product.id];
          const detailsEN = productDetailsEN[product.id];
          const detailsAR = productDetailsAR[product.id];
          
          products.push({
            id: `product_${product.id}`,
            name: {
              tr: product.name,
              en: product.name,
              ar: product.name,
            },
            slug: product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
            description: {
              tr: detailsTR?.details || product.description,
              en: detailsEN?.details || product.description,
              ar: detailsAR?.details || product.description,
            },
            short_description: {
              tr: product.description,
              en: product.description,
              ar: product.description,
            },
            category: category.title,
            subcategory: subcategory.title,
            images: [typeof product.image === 'string' ? product.image : ''],
            volume: product.name.match(/\d+\s*ml/i)?.[0] || '',
            price: product.price,
            featured: false,
            seo: {
              title: {
                tr: product.name + ' | SincEva',
                en: product.name + ' | SincEva',
                ar: product.name + ' | SincEva',
              },
              description: {
                tr: product.description.substring(0, 160),
                en: product.description.substring(0, 160),
                ar: product.description.substring(0, 160),
              },
              keywords: {
                tr: 'sinceva, cilt bakımı, ' + product.name.toLowerCase(),
                en: 'sinceva, skincare, ' + product.name.toLowerCase(),
                ar: 'sinceva, العناية بالبشرة, ' + product.name.toLowerCase(),
              },
            },
          });
        });
      });
    });
    
    return products;
  };

  // Prepare blog data from static content
  const prepareBlogData = () => {
    return blogPosts.map((post) => {
      const contentTR = trBlogContent[post.id as keyof typeof trBlogContent];
      const contentEN = enBlogContent[post.id as keyof typeof enBlogContent];
      const contentAR = arBlogContent[post.id as keyof typeof arBlogContent];
      
      return {
        id: post.id,
        title: {
          tr: contentTR?.title || post.id,
          en: contentEN?.title || post.id,
          ar: contentAR?.title || post.id,
        },
        slug: post.id,
        excerpt: {
          tr: contentTR?.excerpt || '',
          en: contentEN?.excerpt || '',
          ar: contentAR?.excerpt || '',
        },
        content: {
          tr: contentTR?.content || '',
          en: contentEN?.content || '',
          ar: contentAR?.content || '',
        },
        image: post.image,
        category: post.category,
        published: true,
        date: post.date,
        seo: {
          title: {
            tr: (contentTR?.title || post.id) + ' | SincEva Blog',
            en: (contentEN?.title || post.id) + ' | SincEva Blog',
            ar: (contentAR?.title || post.id) + ' | SincEva Blog',
          },
          description: {
            tr: (contentTR?.excerpt || '').substring(0, 160),
            en: (contentEN?.excerpt || '').substring(0, 160),
            ar: (contentAR?.excerpt || '').substring(0, 160),
          },
          keywords: {
            tr: 'sinceva, blog, cilt bakımı, ' + post.category,
            en: 'sinceva, blog, skincare, ' + post.category,
            ar: 'sinceva, مدونة, العناية بالبشرة, ' + post.category,
          },
        },
      };
    });
  };

  const handleImportProducts = async () => {
    setShowProductDialog(false);
    setIsImportingProducts(true);
    setResult(null);

    try {
      const products = prepareProductsData();
      
      const response = await fetch(`${API_BASE}/import.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          type: 'products',
          data: products,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          type: 'products',
          message: data.message,
          success: true,
        });
        toast({
          title: 'Başarılı',
          description: data.message,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Import error:', error);
      setResult({
        type: 'products',
        message: 'Import sırasında bir hata oluştu',
        success: false,
      });
      toast({
        title: 'Hata',
        description: 'Import sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsImportingProducts(false);
    }
  };

  const handleImportBlog = async () => {
    setShowBlogDialog(false);
    setIsImportingBlog(true);
    setResult(null);

    try {
      const posts = prepareBlogData();
      
      const response = await fetch(`${API_BASE}/import.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          type: 'blog',
          data: posts,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          type: 'blog',
          message: data.message,
          success: true,
        });
        toast({
          title: 'Başarılı',
          description: data.message,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Import error:', error);
      setResult({
        type: 'blog',
        message: 'Import sırasında bir hata oluştu',
        success: false,
      });
      toast({
        title: 'Hata',
        description: 'Import sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsImportingBlog(false);
    }
  };

  const productCount = Object.values(categoryStructure).reduce((acc, cat) => 
    acc + Object.values(cat.subcategories).reduce((subAcc, sub) => subAcc + sub.products.length, 0), 0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Download className="h-8 w-8 text-primary" />
          Veri Import
        </h1>
        <p className="text-muted-foreground mt-1">
          Mevcut statik verileri admin paneline aktarın
        </p>
      </div>

      {result && (
        <Card className={result.success ? 'border-green-500' : 'border-red-500'}>
          <CardContent className="py-4">
            <div className="flex items-center gap-3">
              {result.success ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              <span className={result.success ? 'text-green-700' : 'text-red-700'}>
                {result.message}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Products Import */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-orange-500" />
              Ürünleri Import Et
            </CardTitle>
            <CardDescription>
              Mevcut {productCount} ürünü admin paneline aktarın
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">9 Ürün</Badge>
              <Badge variant="outline">3 Kategori</Badge>
              <Badge variant="outline">Çok dilli içerik</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Bu işlem, content.ts ve productDetails dosyalarındaki tüm ürün verilerini admin panelinin veritabanına aktaracaktır. Mevcut ürünler üzerine yazılmaz, yalnızca yeni ürünler eklenir.
            </p>
            <Button
              onClick={() => setShowProductDialog(true)}
              disabled={isImportingProducts}
              className="w-full"
            >
              {isImportingProducts ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Import Ediliyor...
                </>
              ) : (
                <>
                  <Package className="h-4 w-4 mr-2" />
                  Ürünleri Import Et
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Blog Import */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-500" />
              Blog Yazılarını Import Et
            </CardTitle>
            <CardDescription>
              Mevcut {blogPosts.length} blog yazısını admin paneline aktarın
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{blogPosts.length} Yazı</Badge>
              <Badge variant="outline">TR/EN/AR</Badge>
              <Badge variant="outline">Çok dilli içerik</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Bu işlem, blogPosts.ts ve blogContent dosyalarındaki tüm blog yazılarını admin panelinin veritabanına aktaracaktır. Mevcut yazılar üzerine yazılmaz, yalnızca yeni yazılar eklenir.
            </p>
            <Button
              onClick={() => setShowBlogDialog(true)}
              disabled={isImportingBlog}
              className="w-full"
            >
              {isImportingBlog ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Import Ediliyor...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Blog Yazılarını Import Et
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Product Import Dialog */}
      <AlertDialog open={showProductDialog} onOpenChange={setShowProductDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ürünleri Import Et</AlertDialogTitle>
            <AlertDialogDescription>
              {productCount} ürün admin paneline aktarılacak. Bu işlem mevcut ürünleri silmez, yalnızca yeni ürünler ekler. Devam etmek istiyor musunuz?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handleImportProducts}>
              Import Et
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Blog Import Dialog */}
      <AlertDialog open={showBlogDialog} onOpenChange={setShowBlogDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Blog Yazılarını Import Et</AlertDialogTitle>
            <AlertDialogDescription>
              {blogPosts.length} blog yazısı admin paneline aktarılacak. Bu işlem mevcut yazıları silmez, yalnızca yeni yazılar ekler. Devam etmek istiyor musunuz?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handleImportBlog}>
              Import Et
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
