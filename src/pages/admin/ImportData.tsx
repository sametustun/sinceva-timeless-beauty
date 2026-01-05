import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Download, Package, FileText, Loader2, CheckCircle, AlertCircle, FolderTree, Image } from 'lucide-react';
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
import { Checkbox } from '@/components/ui/checkbox';

// Import static data
import { categoryStructure } from '@/data/content';
import { blogPosts } from '@/data/blogPosts';
import { trBlogContent } from '@/data/blogContent/tr';
import { enBlogContent } from '@/data/blogContent/en';
import { arBlogContent } from '@/data/blogContent/ar';
import { productDetailsTR } from '@/data/productDetails/tr';
import { productDetailsEN } from '@/data/productDetails/en';
import { productDetailsAR } from '@/data/productDetails/ar';

// Import all media assets - Product Images
import arbutin01 from '@/assets/arbutin-01.png';
import arbutinDiv from '@/assets/arbutin_div.png';
import cvit01 from '@/assets/cvit-01.png';
import cvitDiv from '@/assets/cvit_div.png';
import goz01 from '@/assets/göz-01.png';
import gozDiv from '@/assets/göz_div.png';
import gunes01 from '@/assets/güneş-01.png';
import gunesDiv from '@/assets/güneş_div.png';
import nemlendirici01 from '@/assets/nemlendirici-01.png';
import nemlendiriciDiv from '@/assets/nemlendirici_div.png';
import nightCream01 from '@/assets/night_cream-01.png';
import geceDiv from '@/assets/gece_div.png';
import peeling01 from '@/assets/peeling-01.png';
import peelingDiv from '@/assets/peeling_div.png';
import tonik01 from '@/assets/tonik-01.png';
import tonikDiv from '@/assets/tonik_div.png';
import yuz01 from '@/assets/yüz-01.png';
import yuzDiv from '@/assets/yüz_div.png';

// Banner Images
import heroSkincare from '@/assets/hero-skincare.jpg';
import contactBanner from '@/assets/contact_banner.jpg';
import contactBannerMobile from '@/assets/contact_banner_mobile.jpg';
import searchBanner from '@/assets/search_banner.jpg';
import searchBannerMobile from '@/assets/search_banner_mobile.jpg';
import searchHero from '@/assets/search-hero.jpg';
import shopBanner from '@/assets/shop_banner.jpg';
import shopBannerMobile from '@/assets/shop_banner_mobile.jpg';
import tipsBanner from '@/assets/tips_banner.jpg';
import tipsBannerMobile from '@/assets/tips_banner_mobile.jpg';
import gozKremiBanner from '@/assets/göz_kremi_banner.jpg';
import gozKremiBannerMobile from '@/assets/göz_kremi_banner_mobile.jpg';
import toobBanner from '@/assets/toob_banner.jpg';
import toobBannerMobile from '@/assets/toob_banner_mobile.jpg';

// Category Images
import antiagingKategori from '@/assets/anti aging kategori.jpg';
import antiagingCart from '@/assets/antiagingcart.png';
import cleansingKategori from '@/assets/cleansing kategori.jpg';
import cleansingCart from '@/assets/cleansingcart.png';
import dailyKategori from '@/assets/daily kategori.jpg';
import dailycareCart from '@/assets/dailycarecart.png';

// Logo Files
import logoBlackMobile from '@/assets/sinceva_black_logo_for_mobile.png';
import logoBlackWeb from '@/assets/sinceva_black_logo_for_web.png';
import logoWhiteMobile from '@/assets/sinceva_white_logo_for_mobile.png';
import logoWhiteWeb from '@/assets/sinceva_white_logo_for_web.png';

// Additional Product Gallery Images - Arbutin
import arbutinUrun2 from '@/assets/ARBUTİNÜRÜN2.png';
import arbutinUrun3 from '@/assets/ARBUTİNÜRÜN3.png';
import arbutinUrun5 from '@/assets/ARBUTİNÜRÜN5.png';
import arbutinUrun6 from '@/assets/ARBUTİNÜRÜN6.png';

// Additional Product Gallery Images - Gece (Night)
import geceUrun2 from '@/assets/GECEÜRÜN2.png';
import geceUrun3 from '@/assets/GECEÜRÜN3.png';
import geceUrun5 from '@/assets/GECEÜRÜN5.png';
import geceUrun6 from '@/assets/GECEÜRÜN6.png';

// Additional Product Gallery Images - Göz (Eye)
import gozUrun2 from '@/assets/GÖZÜRÜN2.png';
import gozUrun3 from '@/assets/GÖZÜRÜN3.png';
import gozUrun5 from '@/assets/GÖZÜRÜN5.png';
import gozUrun6 from '@/assets/GÖZÜRÜN6.png';

// Additional Product Gallery Images - Güneş (Sun)
import gunesUrun2 from '@/assets/GÜNEŞÜRÜN2.png';
import gunesUrun3 from '@/assets/GÜNEŞÜRÜN3.png';
import gunesUrun5 from '@/assets/GÜNEŞÜRÜN5.png';
import gunesUrun6 from '@/assets/GÜNEŞÜRÜN6.png';

// Additional Product Gallery Images - Nemlendirici (Moisturizer)
import nemlendiriciUrun2 from '@/assets/NEMLENDİRİCİÜRÜN2.png';
import nemlendiriciUrun3 from '@/assets/NEMLENDİRİCİÜRÜN3.png';
import nemlendiriciUrun5 from '@/assets/NEMLENDİRİCİÜRÜN5.png';
import nemlendiriciUrun6 from '@/assets/NEMLENDİRİCİÜRÜN6.png';

// Additional Product Gallery Images - Peeling
import peelingUrun2 from '@/assets/PEELINGÜRÜN2.png';
import peelingUrun3 from '@/assets/PEELINGÜRÜN3.png';
import peelingUrun5 from '@/assets/PEELINGÜRÜN5.png';
import peelingUrun6 from '@/assets/PEELINGÜRÜN6.png';

// Additional Product Gallery Images - Tonik
import tonikUrun2 from '@/assets/TONİKÜRÜN2.png';
import tonikUrun3 from '@/assets/TONİKÜRÜN3.png';
import tonikUrun5 from '@/assets/TONİKÜRÜN5.png';
import tonikUrun6 from '@/assets/TONİKÜRÜN6.png';

// Additional Product Gallery Images - Vitamin C
import vitcUrun2 from '@/assets/VİTCÜRÜN2.png';
import vitcUrun3 from '@/assets/VİTCÜRÜN3.png';
import vitcUrun5 from '@/assets/VİTCÜRÜN5.png';
import vitcUrun6 from '@/assets/VİTCÜRÜN6.png';

// Additional Product Gallery Images - Yüz (Face)
import yuzUrun2 from '@/assets/YÜZÜRÜN2.png';
import yuzUrun3 from '@/assets/YÜZÜRÜN3.png';
import yuzUrun5 from '@/assets/YÜZÜRÜN5.png';
import yuzUrun6 from '@/assets/YÜZÜRÜN6.png';

// Additional Product Image
import zherUrun4 from '@/assets/ZHERÜRÜN4.png';

const API_BASE = 'https://sinceva.com/backend/admin';

// Media categories for import
const mediaCategories = {
  product: {
    name: 'Ürün Görselleri (Ana)',
    items: [
      { name: 'arbutin-01.png', url: arbutin01 },
      { name: 'arbutin_div.png', url: arbutinDiv },
      { name: 'cvit-01.png', url: cvit01 },
      { name: 'cvit_div.png', url: cvitDiv },
      { name: 'goz-01.png', url: goz01 },
      { name: 'goz_div.png', url: gozDiv },
      { name: 'gunes-01.png', url: gunes01 },
      { name: 'gunes_div.png', url: gunesDiv },
      { name: 'nemlendirici-01.png', url: nemlendirici01 },
      { name: 'nemlendirici_div.png', url: nemlendiriciDiv },
      { name: 'night_cream-01.png', url: nightCream01 },
      { name: 'gece_div.png', url: geceDiv },
      { name: 'peeling-01.png', url: peeling01 },
      { name: 'peeling_div.png', url: peelingDiv },
      { name: 'tonik-01.png', url: tonik01 },
      { name: 'tonik_div.png', url: tonikDiv },
      { name: 'yuz-01.png', url: yuz01 },
      { name: 'yuz_div.png', url: yuzDiv },
    ],
  },
  productGallery: {
    name: 'Ürün Galeri Görselleri',
    items: [
      // Arbutin
      { name: 'arbutin_urun2.png', url: arbutinUrun2 },
      { name: 'arbutin_urun3.png', url: arbutinUrun3 },
      { name: 'arbutin_urun5.png', url: arbutinUrun5 },
      { name: 'arbutin_urun6.png', url: arbutinUrun6 },
      // Gece
      { name: 'gece_urun2.png', url: geceUrun2 },
      { name: 'gece_urun3.png', url: geceUrun3 },
      { name: 'gece_urun5.png', url: geceUrun5 },
      { name: 'gece_urun6.png', url: geceUrun6 },
      // Göz
      { name: 'goz_urun2.png', url: gozUrun2 },
      { name: 'goz_urun3.png', url: gozUrun3 },
      { name: 'goz_urun5.png', url: gozUrun5 },
      { name: 'goz_urun6.png', url: gozUrun6 },
      // Güneş
      { name: 'gunes_urun2.png', url: gunesUrun2 },
      { name: 'gunes_urun3.png', url: gunesUrun3 },
      { name: 'gunes_urun5.png', url: gunesUrun5 },
      { name: 'gunes_urun6.png', url: gunesUrun6 },
      // Nemlendirici
      { name: 'nemlendirici_urun2.png', url: nemlendiriciUrun2 },
      { name: 'nemlendirici_urun3.png', url: nemlendiriciUrun3 },
      { name: 'nemlendirici_urun5.png', url: nemlendiriciUrun5 },
      { name: 'nemlendirici_urun6.png', url: nemlendiriciUrun6 },
      // Peeling
      { name: 'peeling_urun2.png', url: peelingUrun2 },
      { name: 'peeling_urun3.png', url: peelingUrun3 },
      { name: 'peeling_urun5.png', url: peelingUrun5 },
      { name: 'peeling_urun6.png', url: peelingUrun6 },
      // Tonik
      { name: 'tonik_urun2.png', url: tonikUrun2 },
      { name: 'tonik_urun3.png', url: tonikUrun3 },
      { name: 'tonik_urun5.png', url: tonikUrun5 },
      { name: 'tonik_urun6.png', url: tonikUrun6 },
      // Vitamin C
      { name: 'vitc_urun2.png', url: vitcUrun2 },
      { name: 'vitc_urun3.png', url: vitcUrun3 },
      { name: 'vitc_urun5.png', url: vitcUrun5 },
      { name: 'vitc_urun6.png', url: vitcUrun6 },
      // Yüz
      { name: 'yuz_urun2.png', url: yuzUrun2 },
      { name: 'yuz_urun3.png', url: yuzUrun3 },
      { name: 'yuz_urun5.png', url: yuzUrun5 },
      { name: 'yuz_urun6.png', url: yuzUrun6 },
      // Zher
      { name: 'zher_urun4.png', url: zherUrun4 },
    ],
  },
  banner: {
    name: 'Banner Görselleri',
    items: [
      { name: 'hero-skincare.jpg', url: heroSkincare },
      { name: 'search-hero.jpg', url: searchHero },
      { name: 'contact_banner.jpg', url: contactBanner },
      { name: 'contact_banner_mobile.jpg', url: contactBannerMobile },
      { name: 'search_banner.jpg', url: searchBanner },
      { name: 'search_banner_mobile.jpg', url: searchBannerMobile },
      { name: 'shop_banner.jpg', url: shopBanner },
      { name: 'shop_banner_mobile.jpg', url: shopBannerMobile },
      { name: 'tips_banner.jpg', url: tipsBanner },
      { name: 'tips_banner_mobile.jpg', url: tipsBannerMobile },
      { name: 'goz_kremi_banner.jpg', url: gozKremiBanner },
      { name: 'goz_kremi_banner_mobile.jpg', url: gozKremiBannerMobile },
      { name: 'toob_banner.jpg', url: toobBanner },
      { name: 'toob_banner_mobile.jpg', url: toobBannerMobile },
    ],
  },
  category: {
    name: 'Kategori Görselleri',
    items: [
      { name: 'anti_aging_kategori.jpg', url: antiagingKategori },
      { name: 'antiagingcart.png', url: antiagingCart },
      { name: 'cleansing_kategori.jpg', url: cleansingKategori },
      { name: 'cleansingcart.png', url: cleansingCart },
      { name: 'daily_kategori.jpg', url: dailyKategori },
      { name: 'dailycarecart.png', url: dailycareCart },
    ],
  },
  logo: {
    name: 'Logo Dosyaları',
    items: [
      { name: 'sinceva_black_logo_mobile.png', url: logoBlackMobile },
      { name: 'sinceva_black_logo_web.png', url: logoBlackWeb },
      { name: 'sinceva_white_logo_mobile.png', url: logoWhiteMobile },
      { name: 'sinceva_white_logo_web.png', url: logoWhiteWeb },
    ],
  },
};

export default function AdminImportData() {
  const [isImportingProducts, setIsImportingProducts] = useState(false);
  const [isImportingBlog, setIsImportingBlog] = useState(false);
  const [isImportingCategories, setIsImportingCategories] = useState(false);
  const [isImportingMedia, setIsImportingMedia] = useState(false);
  const [showProductDialog, setShowProductDialog] = useState(false);
  const [showBlogDialog, setShowBlogDialog] = useState(false);
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [showMediaDialog, setShowMediaDialog] = useState(false);
  const [selectedMediaCategories, setSelectedMediaCategories] = useState<string[]>(Object.keys(mediaCategories));
  const [results, setResults] = useState<Array<{ type: string; message: string; success: boolean }>>([]);
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

  // Prepare categories data from static content
  const prepareCategoriesData = () => {
    return Object.entries(categoryStructure).map(([key, category]) => ({
      id: `cat_${key}`,
      title: {
        tr: category.title,
        en: category.title,
        ar: category.title,
      },
      slug: key,
      description: {
        tr: category.description,
        en: category.description,
        ar: category.description,
      },
      bannerImage: typeof category.bannerImage === 'string' ? category.bannerImage : '',
      subcategories: Object.entries(category.subcategories).map(([subKey, sub]) => ({
        id: `sub_${subKey}`,
        title: {
          tr: sub.title,
          en: sub.title,
          ar: sub.title,
        },
        slug: subKey,
        description: {
          tr: '',
          en: '',
          ar: '',
        },
      })),
    }));
  };

  const addResult = (type: string, message: string, success: boolean) => {
    setResults(prev => [...prev, { type, message, success }]);
  };

  const handleImportProducts = async () => {
    setShowProductDialog(false);
    setIsImportingProducts(true);

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
        addResult('products', data.message, true);
        toast({
          title: 'Başarılı',
          description: data.message,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Import error:', error);
      addResult('products', 'Import sırasında bir hata oluştu', false);
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
        addResult('blog', data.message, true);
        toast({
          title: 'Başarılı',
          description: data.message,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Import error:', error);
      addResult('blog', 'Import sırasında bir hata oluştu', false);
      toast({
        title: 'Hata',
        description: 'Import sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsImportingBlog(false);
    }
  };

  const handleImportCategories = async () => {
    setShowCategoryDialog(false);
    setIsImportingCategories(true);

    try {
      const categories = prepareCategoriesData();
      
      const response = await fetch(`${API_BASE}/import.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          type: 'categories',
          data: categories,
        }),
      });

      const data = await response.json();

      if (data.success) {
        addResult('categories', data.message, true);
        toast({
          title: 'Başarılı',
          description: data.message,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Import error:', error);
      addResult('categories', 'Import sırasında bir hata oluştu', false);
      toast({
        title: 'Hata',
        description: 'Import sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsImportingCategories(false);
    }
  };

  const productCount = Object.values(categoryStructure).reduce((acc, cat) => 
    acc + Object.values(cat.subcategories).reduce((subAcc, sub) => subAcc + sub.products.length, 0), 0
  );

  const categoryCount = Object.keys(categoryStructure).length;
  const subcategoryCount = Object.values(categoryStructure).reduce(
    (acc, cat) => acc + Object.keys(cat.subcategories).length, 0
  );

  const handleImportMedia = async () => {
    setShowMediaDialog(false);
    setIsImportingMedia(true);

    let successCount = 0;
    let failCount = 0;

    for (const categoryKey of selectedMediaCategories) {
      const category = mediaCategories[categoryKey as keyof typeof mediaCategories];
      
      for (const item of category.items) {
        try {
          // Fetch the image as blob
          const response = await fetch(item.url);
          const blob = await response.blob();
          
          // Create form data
          const formData = new FormData();
          formData.append('image', blob, item.name);
          formData.append('category', categoryKey);
          
          // Upload to backend
          const uploadResponse = await fetch(`${API_BASE}/upload.php`, {
            method: 'POST',
            credentials: 'include',
            body: formData,
          });
          
          const uploadData = await uploadResponse.json();
          
          if (uploadData.success) {
            successCount++;
          } else {
            failCount++;
          }
        } catch (error) {
          console.error(`Failed to upload ${item.name}:`, error);
          failCount++;
        }
      }
    }

    const message = `${successCount} dosya yüklendi${failCount > 0 ? `, ${failCount} başarısız` : ''}`;
    addResult('media', message, failCount === 0);
    
    toast({
      title: failCount === 0 ? 'Başarılı' : 'Tamamlandı',
      description: message,
      variant: failCount > 0 ? 'destructive' : 'default',
    });

    setIsImportingMedia(false);
  };

  const toggleMediaCategory = (key: string) => {
    setSelectedMediaCategories(prev =>
      prev.includes(key)
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const totalMediaCount = Object.values(mediaCategories).reduce(
    (acc, cat) => acc + cat.items.length, 0
  );

  const selectedMediaCount = selectedMediaCategories.reduce(
    (acc, key) => acc + (mediaCategories[key as keyof typeof mediaCategories]?.items.length || 0), 0
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

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Import Sonuçları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                )}
                <span className={result.success ? 'text-green-700' : 'text-red-700'}>
                  {result.message}
                </span>
              </div>
            ))}
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
              <Badge variant="outline">{productCount} Ürün</Badge>
              <Badge variant="outline">{categoryCount} Kategori</Badge>
              <Badge variant="outline">Çok dilli</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              content.ts ve productDetails dosyalarındaki ürün verileri aktarılacak.
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
              <Badge variant="outline">Çok dilli</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              blogPosts.ts ve blogContent dosyalarındaki yazılar aktarılacak.
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

        {/* Categories Import */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderTree className="h-5 w-5 text-green-500" />
              Kategorileri Import Et
            </CardTitle>
            <CardDescription>
              Mevcut {categoryCount} kategori ve {subcategoryCount} alt kategoriyi aktarın
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{categoryCount} Kategori</Badge>
              <Badge variant="outline">{subcategoryCount} Alt Kategori</Badge>
              <Badge variant="outline">Çok dilli</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              categoryStructure dosyasındaki kategori yapısı aktarılacak.
            </p>
            <Button
              onClick={() => setShowCategoryDialog(true)}
              disabled={isImportingCategories}
              className="w-full"
            >
              {isImportingCategories ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Import Ediliyor...
                </>
              ) : (
                <>
                  <FolderTree className="h-4 w-4 mr-2" />
                  Kategorileri Import Et
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Media Import */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="h-5 w-5 text-blue-500" />
              Medya Dosyalarını Import Et
            </CardTitle>
            <CardDescription>
              Mevcut {totalMediaCount} görsel dosyasını backend'e aktarın
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{totalMediaCount} Dosya</Badge>
              <Badge variant="outline">{Object.keys(mediaCategories).length} Kategori</Badge>
              <Badge variant="outline">PNG/JPG</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              src/assets klasöründeki görseller backend uploads klasörüne aktarılacak.
            </p>
            <Button
              onClick={() => setShowMediaDialog(true)}
              disabled={isImportingMedia}
              className="w-full"
            >
              {isImportingMedia ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Import Ediliyor...
                </>
              ) : (
                <>
                  <Image className="h-4 w-4 mr-2" />
                  Medya Import Et
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

      {/* Category Import Dialog */}
      <AlertDialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Kategorileri Import Et</AlertDialogTitle>
            <AlertDialogDescription>
              {categoryCount} kategori ve {subcategoryCount} alt kategori admin paneline aktarılacak. Bu işlem mevcut kategorileri silmez, yalnızca yeni kategoriler ekler. Devam etmek istiyor musunuz?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handleImportCategories}>
              Import Et
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Media Import Dialog */}
      <AlertDialog open={showMediaDialog} onOpenChange={setShowMediaDialog}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Medya Dosyalarını Import Et</AlertDialogTitle>
            <AlertDialogDescription>
              Hangi kategorilerdeki dosyaları import etmek istiyorsunuz?
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="space-y-3 py-4">
            {Object.entries(mediaCategories).map(([key, category]) => (
              <div key={key} className="flex items-center space-x-3">
                <Checkbox
                  id={key}
                  checked={selectedMediaCategories.includes(key)}
                  onCheckedChange={() => toggleMediaCategory(key)}
                />
                <label
                  htmlFor={key}
                  className="flex-1 text-sm font-medium cursor-pointer"
                >
                  {category.name}
                  <span className="text-muted-foreground ml-2">
                    ({category.items.length} dosya)
                  </span>
                </label>
              </div>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            Toplam {selectedMediaCount} dosya yüklenecek.
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleImportMedia}
              disabled={selectedMediaCategories.length === 0}
            >
              Import Et
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
