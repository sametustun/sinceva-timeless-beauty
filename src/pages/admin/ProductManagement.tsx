import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
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
import { Package, Search, Trash2, Loader2, Plus, Edit, Star, StarOff, X, GripVertical, Eye, Grid3X3, List, Image as ImageIcon } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';
import SeoFields from '@/components/admin/SeoFields';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Product {
  id: string;
  name: { tr: string; en: string; ar: string };
  slug: string;
  description: { tr: string; en: string; ar: string };
  short_description: { tr: string; en: string; ar: string };
  category: string;
  images: string[];
  volume: string;
  price?: number | null;
  sale_price?: number | null;
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
  price: null,
  sale_price: null,
  active: true,
  featured: false,
  seo: {
    title: { tr: '', en: '', ar: '' },
    description: { tr: '', en: '', ar: '' },
    keywords: { tr: '', en: '', ar: '' },
  },
};

// Sortable Product Card Component
function SortableProductCard({ 
  product, 
  onEdit, 
  onDelete, 
  onToggleFeatured, 
  deletingId,
  onPreview 
}: { 
  product: Product; 
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
  onToggleFeatured: (product: Product) => void;
  deletingId: string | null;
  onPreview: (product: Product) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: product.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card 
      ref={setNodeRef} 
      style={style}
      className={`group relative overflow-hidden transition-all hover:shadow-lg ${isDragging ? 'z-50 shadow-xl' : ''}`}
    >
      {/* Drag Handle */}
      <div 
        {...attributes} 
        {...listeners}
        className="absolute top-2 left-2 z-10 p-1.5 bg-background/80 backdrop-blur rounded cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-2 right-2 z-10">
          <Badge className="bg-yellow-500 text-black">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Öne Çıkan
          </Badge>
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name.tr || product.name.en}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <ImageIcon className="h-12 w-12" />
          </div>
        )}
        
        {/* Image Count Badge */}
        {product.images && product.images.length > 1 && (
          <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
            +{product.images.length - 1} görsel
          </Badge>
        )}
      </div>

      {/* Product Info */}
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold truncate">{product.name.tr || product.name.en}</h3>
          <p className="text-sm text-muted-foreground truncate">
            {product.short_description?.tr || product.category || '-'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {product.category && (
            <Badge variant="outline" className="text-xs">{product.category}</Badge>
          )}
          {product.volume && (
            <Badge variant="secondary" className="text-xs">{product.volume}</Badge>
          )}
          <Badge variant={product.active ? 'default' : 'secondary'} className="text-xs">
            {product.active ? 'Aktif' : 'Pasif'}
          </Badge>
        </div>

        {/* Price Display */}
        {(product.price || product.sale_price) && (
          <div className="flex items-center gap-2">
            {product.price && product.sale_price ? (
              <>
                <span className="text-sm text-muted-foreground line-through">₺{product.price.toFixed(2)}</span>
                <span className="text-sm font-semibold text-green-600">₺{product.sale_price.toFixed(2)}</span>
              </>
            ) : product.sale_price ? (
              <span className="text-sm font-semibold">₺{product.sale_price.toFixed(2)}</span>
            ) : product.price ? (
              <span className="text-sm font-semibold">₺{product.price.toFixed(2)}</span>
            ) : null}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPreview(product)}
              className="h-8 w-8 p-0"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(product)}
              className="h-8 w-8 p-0"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleFeatured(product)}
              className={`h-8 w-8 p-0 ${product.featured ? 'text-yellow-500' : 'text-muted-foreground'}`}
            >
              {product.featured ? (
                <Star className="h-4 w-4 fill-current" />
              ) : (
                <StarOff className="h-4 w-4" />
              )}
            </Button>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
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
                  "{product.name.tr || product.name.en}" ürününü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>İptal</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(product.id)}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Sil
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}

// Preview Dialog Component
function ProductPreviewDialog({ 
  product, 
  open, 
  onOpenChange 
}: { 
  product: Product | null; 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ürün Önizleme</DialogTitle>
          <DialogDescription>
            Ürünün sitede nasıl görüneceğini inceleyin
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[activeImage] || product.images[0]}
                  alt={product.name.tr}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-16 w-16" />
                </div>
              )}
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      activeImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Görsel ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              {product.featured && (
                <Badge className="bg-yellow-500 text-black">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Öne Çıkan
                </Badge>
              )}
              <Badge variant={product.active ? 'default' : 'secondary'}>
                {product.active ? 'Aktif' : 'Pasif'}
              </Badge>
              {product.category && (
                <Badge variant="outline">{product.category}</Badge>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold">{product.name.tr || product.name.en}</h2>
              {product.volume && (
                <p className="text-muted-foreground">{product.volume}</p>
              )}
              {/* Price Display in Preview */}
              {(product.price || product.sale_price) && (
                <div className="flex items-center gap-3 mt-2">
                  {product.price && product.sale_price ? (
                    <>
                      <span className="text-lg text-muted-foreground line-through">₺{product.price.toFixed(2)}</span>
                      <span className="text-xl font-bold text-green-600">₺{product.sale_price.toFixed(2)}</span>
                      <Badge variant="destructive" className="text-xs">
                        %{Math.round((1 - product.sale_price / product.price) * 100)} İndirim
                      </Badge>
                    </>
                  ) : product.sale_price ? (
                    <span className="text-xl font-bold">₺{product.sale_price.toFixed(2)}</span>
                  ) : product.price ? (
                    <span className="text-xl font-bold">₺{product.price.toFixed(2)}</span>
                  ) : null}
                </div>
              )}
            </div>

            {product.short_description?.tr && (
              <p className="text-muted-foreground">{product.short_description.tr}</p>
            )}

            {product.description?.tr && (
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Detaylı Açıklama</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {product.description.tr}
                </p>
              </div>
            )}

            {product.seo && (
              <div className="pt-4 border-t space-y-2">
                <h4 className="font-semibold">SEO Bilgileri</h4>
                <div className="text-sm space-y-1">
                  <p><span className="text-muted-foreground">Title:</span> {product.seo.title?.tr || '-'}</p>
                  <p><span className="text-muted-foreground">Description:</span> {product.seo.description?.tr || '-'}</p>
                  <p><span className="text-muted-foreground">Keywords:</span> {product.seo.keywords?.tr || '-'}</p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t text-xs text-muted-foreground">
              <p>Slug: {product.slug || '-'}</p>
              <p>Oluşturulma: {product.created_at ? new Date(product.created_at).toLocaleDateString('tr') : '-'}</p>
              <p>Güncellenme: {product.updated_at ? new Date(product.updated_at).toLocaleDateString('tr') : '-'}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
      product.name.en.toLowerCase().includes(search.toLowerCase()) ||
      (product.category || '').toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFilteredProducts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
      
      // Update the main products array as well
      setProducts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });

      toast({
        title: 'Sıralama güncellendi',
        description: 'Ürün sıralaması değiştirildi.',
      });
    }
  };

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

  const handlePreview = (product: Product) => {
    setPreviewProduct(product);
    setIsPreviewOpen(true);
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

  const handleReorderImages = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!editingProduct || !over || active.id === over.id) return;

    const images = editingProduct.images || [];
    const oldIndex = images.findIndex((_, i) => `image-${i}` === active.id);
    const newIndex = images.findIndex((_, i) => `image-${i}` === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      setEditingProduct({
        ...editingProduct,
        images: arrayMove(images, oldIndex, newIndex),
      });
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
            Ürünleri oluşturun, düzenleyin ve sıralayın
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

      {/* Filters & View Toggle */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ürün adı veya kategori ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-8 w-8 p-0"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
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
              {search ? 'Arama sonucu bulunamadı.' : 'Henüz ürün yok. Veri Import sayfasından mevcut ürünleri aktarabilirsiniz.'}
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={filteredProducts.map(p => p.id)}
                strategy={viewMode === 'grid' ? rectSortingStrategy : verticalListSortingStrategy}
              >
                <div className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'space-y-4'
                }>
                  {filteredProducts.map((product) => (
                    <SortableProductCard
                      key={product.id}
                      product={product}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onToggleFeatured={handleToggleFeatured}
                      deletingId={deletingId}
                      onPreview={handlePreview}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </CardContent>
      </Card>

      {/* Preview Dialog */}
      <ProductPreviewDialog
        product={previewProduct}
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
      />

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

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>Hacim</Label>
                  <Input
                    value={editingProduct.volume || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, volume: e.target.value })}
                    placeholder="50ml"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Normal Fiyat (₺)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={editingProduct.price || ''}
                    onChange={(e) => setEditingProduct({ 
                      ...editingProduct, 
                      price: e.target.value ? parseFloat(e.target.value) : null 
                    })}
                    placeholder="199.90"
                  />
                  <p className="text-xs text-muted-foreground">Üstü çizili görünür</p>
                </div>
                <div className="space-y-2">
                  <Label>İndirimli Fiyat (₺)</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={editingProduct.sale_price || ''}
                    onChange={(e) => setEditingProduct({ 
                      ...editingProduct, 
                      sale_price: e.target.value ? parseFloat(e.target.value) : null 
                    })}
                    placeholder="149.90"
                  />
                  <p className="text-xs text-muted-foreground">Aktif satış fiyatı</p>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Ürün Görselleri (sürükleyerek sıralayabilirsiniz)</Label>
                
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
                
                {/* Draggable Image Grid */}
                {editingProduct.images && editingProduct.images.length > 0 && (
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleReorderImages}
                  >
                    <SortableContext
                      items={editingProduct.images.map((_, i) => `image-${i}`)}
                      strategy={rectSortingStrategy}
                    >
                      <div className="flex flex-wrap gap-2">
                        {editingProduct.images.map((img, index) => (
                          <SortableImageItem
                            key={`image-${index}`}
                            id={`image-${index}`}
                            img={img}
                            index={index}
                            onRemove={() => handleRemoveImage(index)}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
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

// Sortable Image Item Component
function SortableImageItem({ 
  id, 
  img, 
  index, 
  onRemove 
}: { 
  id: string; 
  img: string; 
  index: number; 
  onRemove: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className={`relative group ${isDragging ? 'z-50' : ''}`}
    >
      <div
        {...attributes}
        {...listeners}
        className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
      >
        <GripVertical className="h-3 w-3 text-white" />
      </div>
      <img
        src={img}
        alt={`Görsel ${index + 1}`}
        className="w-20 h-20 object-cover rounded-lg border"
      />
      {index === 0 && (
        <Badge className="absolute bottom-1 left-1 text-[10px] px-1 py-0">Ana</Badge>
      )}
      <button
        type="button"
        onClick={onRemove}
        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
