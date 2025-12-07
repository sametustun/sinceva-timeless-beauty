import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { FolderTree, Plus, Edit, Trash2, Loader2, GripVertical, Image as ImageIcon } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';
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
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface MultiLangText {
  tr: string;
  en: string;
  ar: string;
}

interface Subcategory {
  id: string;
  title: MultiLangText;
  slug: string;
  description: MultiLangText;
}

interface Category {
  id: string;
  title: MultiLangText;
  slug: string;
  description: MultiLangText;
  bannerImage: string;
  subcategories: Subcategory[];
}

const API_BASE = 'https://sinceva.com/api/admin';

const emptyMultiLang: MultiLangText = { tr: '', en: '', ar: '' };

const emptyCategory: Partial<Category> = {
  title: { ...emptyMultiLang },
  slug: '',
  description: { ...emptyMultiLang },
  bannerImage: '',
  subcategories: [],
};

const emptySubcategory: Partial<Subcategory> = {
  title: { ...emptyMultiLang },
  slug: '',
  description: { ...emptyMultiLang },
};

// Sortable Category Item
function SortableCategoryItem({
  category,
  onEdit,
  onDelete,
  onAddSubcategory,
  onEditSubcategory,
  onDeleteSubcategory,
}: {
  category: Category;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
  onAddSubcategory: (categoryId: string) => void;
  onEditSubcategory: (categoryId: string, subcategory: Subcategory) => void;
  onDeleteSubcategory: (categoryId: string, subcategoryId: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <AccordionItem
      ref={setNodeRef}
      style={style}
      value={category.id}
      className={`border rounded-lg mb-2 overflow-hidden ${isDragging ? 'z-50 shadow-xl' : ''}`}
    >
      <div className="flex items-center">
        <div
          {...attributes}
          {...listeners}
          className="p-3 cursor-grab active:cursor-grabbing hover:bg-muted transition-colors"
        >
          <GripVertical className="h-5 w-5 text-muted-foreground" />
        </div>
        <AccordionTrigger className="flex-1 px-4 hover:no-underline">
          <div className="flex items-center gap-4">
            {category.bannerImage ? (
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={category.bannerImage}
                  alt={category.title.tr}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-muted-foreground" />
              </div>
            )}
            <div className="text-left">
              <h3 className="font-semibold">{category.title.tr || category.title.en}</h3>
              <p className="text-sm text-muted-foreground">
                {category.subcategories.length} alt kategori
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <div className="flex items-center gap-1 pr-4">
          <Button variant="ghost" size="sm" onClick={() => onEdit(category)}>
            <Edit className="h-4 w-4" />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Kategoriyi Sil</AlertDialogTitle>
                <AlertDialogDescription>
                  "{category.title.tr}" kategorisini ve tüm alt kategorilerini silmek istediğinize emin misiniz?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>İptal</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(category.id)}
                  className="bg-destructive text-destructive-foreground"
                >
                  Sil
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <AccordionContent className="px-4 pb-4">
        <div className="space-y-2 pl-12">
          {category.subcategories.map((sub) => (
            <div
              key={sub.id}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
            >
              <div>
                <p className="font-medium">{sub.title.tr || sub.title.en}</p>
                <p className="text-sm text-muted-foreground">{sub.slug}</p>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEditSubcategory(category.id, sub)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Alt Kategoriyi Sil</AlertDialogTitle>
                      <AlertDialogDescription>
                        "{sub.title.tr}" alt kategorisini silmek istediğinize emin misiniz?
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>İptal</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDeleteSubcategory(category.id, sub.id)}
                        className="bg-destructive text-destructive-foreground"
                      >
                        Sil
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAddSubcategory(category.id)}
            className="w-full mt-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Alt Kategori Ekle
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Category dialog
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Partial<Category> | null>(null);

  // Subcategory dialog
  const [isSubcategoryDialogOpen, setIsSubcategoryDialogOpen] = useState(false);
  const [editingSubcategory, setEditingSubcategory] = useState<Partial<Subcategory> | null>(null);
  const [parentCategoryId, setParentCategoryId] = useState<string | null>(null);

  const { toast } = useToast();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE}/categories.php`, {
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        setCategories(data.categories || []);
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      // Initialize with empty array if API not ready
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCategories((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });

      toast({
        title: 'Sıralama güncellendi',
        description: 'Kategori sıralaması değiştirildi.',
      });
    }
  };

  // Category handlers
  const handleCreateCategory = () => {
    setEditingCategory({ ...emptyCategory });
    setIsCategoryDialogOpen(true);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory({ ...category });
    setIsCategoryDialogOpen(true);
  };

  const handleSaveCategory = async () => {
    if (!editingCategory) return;

    if (!editingCategory.title?.tr) {
      toast({
        title: 'Hata',
        description: 'Türkçe kategori adı zorunludur.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);

    try {
      const isNew = !editingCategory.id;
      const newCategory: Category = {
        id: editingCategory.id || `cat_${Date.now()}`,
        title: editingCategory.title as MultiLangText,
        slug: editingCategory.slug || '',
        description: editingCategory.description as MultiLangText,
        bannerImage: editingCategory.bannerImage || '',
        subcategories: editingCategory.subcategories || [],
      };

      if (isNew) {
        setCategories([...categories, newCategory]);
      } else {
        setCategories(
          categories.map((c) => (c.id === newCategory.id ? newCategory : c))
        );
      }

      toast({
        title: 'Başarılı',
        description: isNew ? 'Kategori oluşturuldu.' : 'Kategori güncellendi.',
      });

      setIsCategoryDialogOpen(false);
      setEditingCategory(null);
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

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((c) => c.id !== id));
    toast({
      title: 'Başarılı',
      description: 'Kategori silindi.',
    });
  };

  // Subcategory handlers
  const handleAddSubcategory = (categoryId: string) => {
    setParentCategoryId(categoryId);
    setEditingSubcategory({ ...emptySubcategory });
    setIsSubcategoryDialogOpen(true);
  };

  const handleEditSubcategory = (categoryId: string, subcategory: Subcategory) => {
    setParentCategoryId(categoryId);
    setEditingSubcategory({ ...subcategory });
    setIsSubcategoryDialogOpen(true);
  };

  const handleSaveSubcategory = async () => {
    if (!editingSubcategory || !parentCategoryId) return;

    if (!editingSubcategory.title?.tr) {
      toast({
        title: 'Hata',
        description: 'Türkçe alt kategori adı zorunludur.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);

    try {
      const isNew = !editingSubcategory.id;
      const newSubcategory: Subcategory = {
        id: editingSubcategory.id || `sub_${Date.now()}`,
        title: editingSubcategory.title as MultiLangText,
        slug: editingSubcategory.slug || '',
        description: editingSubcategory.description as MultiLangText,
      };

      setCategories(
        categories.map((cat) => {
          if (cat.id !== parentCategoryId) return cat;

          if (isNew) {
            return {
              ...cat,
              subcategories: [...cat.subcategories, newSubcategory],
            };
          } else {
            return {
              ...cat,
              subcategories: cat.subcategories.map((s) =>
                s.id === newSubcategory.id ? newSubcategory : s
              ),
            };
          }
        })
      );

      toast({
        title: 'Başarılı',
        description: isNew ? 'Alt kategori oluşturuldu.' : 'Alt kategori güncellendi.',
      });

      setIsSubcategoryDialogOpen(false);
      setEditingSubcategory(null);
      setParentCategoryId(null);
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

  const handleDeleteSubcategory = (categoryId: string, subcategoryId: string) => {
    setCategories(
      categories.map((cat) => {
        if (cat.id !== categoryId) return cat;
        return {
          ...cat,
          subcategories: cat.subcategories.filter((s) => s.id !== subcategoryId),
        };
      })
    );
    toast({
      title: 'Başarılı',
      description: 'Alt kategori silindi.',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FolderTree className="h-8 w-8 text-primary" />
            Kategori Yönetimi
          </h1>
          <p className="text-muted-foreground mt-1">
            Ürün kategorilerini ve alt kategorileri yönetin
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="py-1.5">
            {categories.length} Kategori
          </Badge>
          <Button onClick={handleCreateCategory} className="bg-gradient-to-r from-primary to-[#FF6B6B]">
            <Plus className="h-4 w-4 mr-2" />
            Yeni Kategori
          </Button>
        </div>
      </div>

      {/* Categories List */}
      <Card>
        <CardHeader>
          <CardTitle>Kategoriler</CardTitle>
          <CardDescription>
            Kategorileri sürükleyerek sıralayabilirsiniz
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Henüz kategori yok. Yeni kategori ekleyerek başlayın.
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={categories.map((c) => c.id)}
                strategy={verticalListSortingStrategy}
              >
                <Accordion type="multiple" className="w-full">
                  {categories.map((category) => (
                    <SortableCategoryItem
                      key={category.id}
                      category={category}
                      onEdit={handleEditCategory}
                      onDelete={handleDeleteCategory}
                      onAddSubcategory={handleAddSubcategory}
                      onEditSubcategory={handleEditSubcategory}
                      onDeleteSubcategory={handleDeleteSubcategory}
                    />
                  ))}
                </Accordion>
              </SortableContext>
            </DndContext>
          )}
        </CardContent>
      </Card>

      {/* Category Dialog */}
      <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCategory?.id ? 'Kategoriyi Düzenle' : 'Yeni Kategori'}
            </DialogTitle>
            <DialogDescription>
              Çok dilli içerik eklemek için sekmeleri kullanın
            </DialogDescription>
          </DialogHeader>
          {editingCategory && (
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
                      <Label>Kategori Adı ({lang.toUpperCase()})</Label>
                      <Input
                        value={editingCategory.title?.[lang as keyof MultiLangText] || ''}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            title: { ...editingCategory.title!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Kategori adı (${lang.toUpperCase()})`}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Açıklama ({lang.toUpperCase()})</Label>
                      <Textarea
                        value={editingCategory.description?.[lang as keyof MultiLangText] || ''}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            description: { ...editingCategory.description!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Açıklama (${lang.toUpperCase()})`}
                        rows={3}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="space-y-2">
                <Label>Slug</Label>
                <Input
                  value={editingCategory.slug || ''}
                  onChange={(e) =>
                    setEditingCategory({ ...editingCategory, slug: e.target.value })
                  }
                  placeholder="kategori-adi"
                />
              </div>

              <ImageUpload
                category="category"
                label="Banner Görseli"
                currentImage={editingCategory.bannerImage}
                onUpload={(url) =>
                  setEditingCategory({ ...editingCategory, bannerImage: url })
                }
              />

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCategoryDialogOpen(false)}>
                  İptal
                </Button>
                <Button
                  onClick={handleSaveCategory}
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
          )}
        </DialogContent>
      </Dialog>

      {/* Subcategory Dialog */}
      <Dialog open={isSubcategoryDialogOpen} onOpenChange={setIsSubcategoryDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingSubcategory?.id ? 'Alt Kategoriyi Düzenle' : 'Yeni Alt Kategori'}
            </DialogTitle>
            <DialogDescription>
              Çok dilli içerik eklemek için sekmeleri kullanın
            </DialogDescription>
          </DialogHeader>
          {editingSubcategory && (
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
                      <Label>Alt Kategori Adı ({lang.toUpperCase()})</Label>
                      <Input
                        value={editingSubcategory.title?.[lang as keyof MultiLangText] || ''}
                        onChange={(e) =>
                          setEditingSubcategory({
                            ...editingSubcategory,
                            title: { ...editingSubcategory.title!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Alt kategori adı (${lang.toUpperCase()})`}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Açıklama ({lang.toUpperCase()})</Label>
                      <Textarea
                        value={editingSubcategory.description?.[lang as keyof MultiLangText] || ''}
                        onChange={(e) =>
                          setEditingSubcategory({
                            ...editingSubcategory,
                            description: { ...editingSubcategory.description!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Açıklama (${lang.toUpperCase()})`}
                        rows={3}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="space-y-2">
                <Label>Slug</Label>
                <Input
                  value={editingSubcategory.slug || ''}
                  onChange={(e) =>
                    setEditingSubcategory({ ...editingSubcategory, slug: e.target.value })
                  }
                  placeholder="alt-kategori-adi"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsSubcategoryDialogOpen(false)}>
                  İptal
                </Button>
                <Button
                  onClick={handleSaveSubcategory}
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
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
