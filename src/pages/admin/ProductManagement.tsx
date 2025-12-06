import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Package, Search, Trash2, Loader2, Plus, Edit, Star, StarOff, Upload, X } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';
import SeoFields from '@/components/admin/SeoFields';
interface Product {
  id: string;
  name: { tr: string; en: string; ar: string };
  slug: string;
  description: { tr: string; en: string; ar: string };
  short_description: { tr: string; en: string; ar: string };
  category: string;
  images: string[];
  volume: string;
  active: boolean;
  featured: boolean;
  seo?: {
    title: { tr: string; en: string; ar: string };
    description: { tr: string; en: string; ar: string };
    keywords: { tr: string; en: string; ar: string };
  };
  created_at: string;
  updated_at: string;
}

const API_BASE = 'https://sinceva.com/api/admin';

const emptyProduct: Partial<Product> = {
  name: { tr: '', en: '', ar: '' },
  slug: '',
  description: { tr: '', en: '', ar: '' },
  short_description: { tr: '', en: '', ar: '' },
  category: '',
  images: [],
  volume: '',
  active: true,
  featured: false,
  seo: {
    title: { tr: '', en: '', ar: '' },
    description: { tr: '', en: '', ar: '' },
    keywords: { tr: '', en: '', ar: '' },
  },
};

export default function AdminProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [imageInput, setImageInput] = useState('');
  const { toast } = useToast();

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_BASE}/products.php`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
      toast({
        title: 'Hata',
        description: 'Ürünler yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.tr.toLowerCase().includes(search.toLowerCase()) ||
      product.name.en.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  const handleCreate = () => {
    setEditingProduct({ ...emptyProduct });
    setImageInput('');
    setIsDialogOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setImageInput('');
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    if (!editingProduct) return;

    if (!editingProduct.name?.tr) {
      toast({
        title: 'Hata',
        description: 'Türkçe ürün adı zorunludur.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);

    try {
      const method = editingProduct.id ? 'PUT' : 'POST';
      const response = await fetch(`${API_BASE}/products.php`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(editingProduct),
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: editingProduct.id ? 'Ürün güncellendi.' : 'Ürün oluşturuldu.',
        });
        setIsDialogOpen(false);
        setEditingProduct(null);
        fetchProducts();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Kayıt sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);

    try {
      const response = await fetch(`${API_BASE}/products.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: 'Ürün silindi.',
        });
        fetchProducts();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Ürün silinirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleFeatured = async (product: Product) => {
    try {
      const response = await fetch(`${API_BASE}/products.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id: product.id, featured: !product.featured }),
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: product.featured ? 'Ürün öne çıkarılmadan kaldırıldı.' : 'Ürün öne çıkarıldı.',
        });
        fetchProducts();
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'İşlem sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    }
  };

  const handleAddImage = () => {
    if (imageInput && editingProduct) {
      setEditingProduct({
        ...editingProduct,
        images: [...(editingProduct.images || []), imageInput],
      });
      setImageInput('');
    }
  };

  const handleRemoveImage = (index: number) => {
    if (editingProduct) {
      const newImages = [...(editingProduct.images || [])];
      newImages.splice(index, 1);
      setEditingProduct({ ...editingProduct, images: newImages });
    }
  };

  const activeCount = products.filter((p) => p.active).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            Ürün Yönetimi
          </h1>
          <p className="text-muted-foreground mt-1">
            Ürünleri oluşturun ve düzenleyin
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="py-1.5">
            {activeCount} Aktif / {products.length} Toplam
          </Badge>
          <Button onClick={handleCreate} className="bg-gradient-to-r from-primary to-[#FF6B6B]">
            <Plus className="h-4 w-4 mr-2" />
            Yeni Ürün
          </Button>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ürün adı ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {search ? 'Arama sonucu bulunamadı.' : 'Henüz ürün yok.'}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ürün Adı</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Hacim</TableHead>
                    <TableHead>Öne Çıkan</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium max-w-[200px] truncate">
                        {product.name.tr || product.name.en}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.category || '-'}</Badge>
                      </TableCell>
                      <TableCell>{product.volume || '-'}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleToggleFeatured(product)}
                          className={product.featured ? 'text-yellow-500' : 'text-muted-foreground'}
                        >
                          {product.featured ? (
                            <Star className="h-4 w-4 fill-current" />
                          ) : (
                            <StarOff className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Badge variant={product.active ? 'default' : 'secondary'}>
                          {product.active ? 'Aktif' : 'Pasif'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(product)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive hover:text-destructive"
                                disabled={deletingId === product.id}
                              >
                                {deletingId === product.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Ürünü Sil</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Bu ürünü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>İptal</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(product.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Sil
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProduct?.id ? 'Ürünü Düzenle' : 'Yeni Ürün Oluştur'}
            </DialogTitle>
            <DialogDescription>
              Çok dilli içerik eklemek için sekmeleri kullanın
            </DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <div className="space-y-6">
              <Tabs defaultValue="tr">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tr">Türkçe</TabsTrigger>
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="ar">العربية</TabsTrigger>
                </TabsList>
                {['tr', 'en', 'ar'].map((lang) => (
                  <TabsContent key={lang} value={lang} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Ürün Adı ({lang.toUpperCase()})</Label>
                      <Input
                        value={editingProduct.name?.[lang as keyof typeof editingProduct.name] || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            name: { ...editingProduct.name!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Ürün adı (${lang.toUpperCase()})`}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Kısa Açıklama ({lang.toUpperCase()})</Label>
                      <Textarea
                        value={editingProduct.short_description?.[lang as keyof typeof editingProduct.short_description] || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            short_description: { ...editingProduct.short_description!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Kısa açıklama (${lang.toUpperCase()})`}
                        rows={2}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Detaylı Açıklama ({lang.toUpperCase()})</Label>
                      <Textarea
                        value={editingProduct.description?.[lang as keyof typeof editingProduct.description] || ''}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            description: { ...editingProduct.description!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Detaylı açıklama (${lang.toUpperCase()})`}
                        rows={6}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input
                    value={editingProduct.slug || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                    placeholder="urun-adi"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Kategori</Label>
                  <Input
                    value={editingProduct.category || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    placeholder="Cilt Bakımı"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Hacim</Label>
                <Input
                  value={editingProduct.volume || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, volume: e.target.value })}
                  placeholder="50ml"
                />
              </div>

              <div className="space-y-4">
                <Label>Ürün Görselleri</Label>
                
                {/* Image Upload Component */}
                <ImageUpload
                  category="product"
                  label="Görsel Yükle"
                  onUpload={(url) => {
                    if (url && editingProduct) {
                      setEditingProduct({
                        ...editingProduct,
                        images: [...(editingProduct.images || []), url],
                      });
                    }
                  }}
                />
                
                {/* Manual URL Input */}
                <div className="flex gap-2">
                  <Input
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    placeholder="veya URL ile ekle"
                  />
                  <Button type="button" variant="outline" onClick={handleAddImage}>
                    Ekle
                  </Button>
                </div>
                
                {/* Image Grid */}
                {editingProduct.images && editingProduct.images.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {editingProduct.images.map((img, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={img}
                          alt={`Görsel ${index + 1}`}
                          className="w-20 h-20 object-cover rounded-lg border"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <SeoFields
                seo={editingProduct.seo || {
                  title: { tr: '', en: '', ar: '' },
                  description: { tr: '', en: '', ar: '' },
                  keywords: { tr: '', en: '', ar: '' },
                }}
                onChange={(seo) => setEditingProduct({ ...editingProduct, seo })}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={editingProduct.active ?? true}
                      onCheckedChange={(checked) =>
                        setEditingProduct({ ...editingProduct, active: checked })
                      }
                    />
                    <Label>Aktif</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={editingProduct.featured || false}
                      onCheckedChange={(checked) =>
                        setEditingProduct({ ...editingProduct, featured: checked })
                      }
                    />
                    <Label>Öne Çıkar</Label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    İptal
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-gradient-to-r from-primary to-[#FF6B6B]"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Kaydediliyor...
                      </>
                    ) : (
                      'Kaydet'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
