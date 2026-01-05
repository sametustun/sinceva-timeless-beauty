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
import { FileText, Search, Trash2, Loader2, Plus, Edit, Eye, EyeOff, GripVertical, Grid3X3, List, Image as ImageIcon, Calendar } from 'lucide-react';
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

interface BlogPost {
  id: string;
  title: { tr: string; en: string; ar: string };
  slug: string;
  excerpt: { tr: string; en: string; ar: string };
  content: { tr: string; en: string; ar: string };
  image: string;
  category: string;
  published: boolean;
  seo?: {
    title: { tr: string; en: string; ar: string };
    description: { tr: string; en: string; ar: string };
    keywords: { tr: string; en: string; ar: string };
  };
  created_at: string;
  updated_at: string;
}

const API_BASE = 'https://sinceva.com/backend/admin';

const emptyPost: Partial<BlogPost> = {
  title: { tr: '', en: '', ar: '' },
  slug: '',
  excerpt: { tr: '', en: '', ar: '' },
  content: { tr: '', en: '', ar: '' },
  image: '',
  category: '',
  published: false,
  seo: {
    title: { tr: '', en: '', ar: '' },
    description: { tr: '', en: '', ar: '' },
    keywords: { tr: '', en: '', ar: '' },
  },
};

// Sortable Blog Card Component
function SortableBlogCard({
  post,
  onEdit,
  onDelete,
  onTogglePublish,
  deletingId,
  onPreview,
}: {
  post: BlogPost;
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
  onTogglePublish: (post: BlogPost) => void;
  deletingId: string | null;
  onPreview: (post: BlogPost) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: post.id });

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

      {/* Status Badge */}
      <div className="absolute top-2 right-2 z-10">
        <Badge className={post.published ? 'bg-green-500' : 'bg-gray-500'}>
          {post.published ? 'Yayında' : 'Taslak'}
        </Badge>
      </div>

      {/* Blog Image */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title.tr || post.title.en}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <ImageIcon className="h-12 w-12" />
          </div>
        )}
      </div>

      {/* Blog Info */}
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold line-clamp-2">{post.title.tr || post.title.en}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {post.excerpt?.tr || post.excerpt?.en || '-'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {post.category && (
            <Badge variant="outline" className="text-xs">{post.category}</Badge>
          )}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {new Date(post.created_at).toLocaleDateString('tr-TR')}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onPreview(post)}
              className="h-8 w-8 p-0"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(post)}
              className="h-8 w-8 p-0"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onTogglePublish(post)}
              className={`h-8 w-8 p-0 ${post.published ? 'text-green-600' : 'text-muted-foreground'}`}
            >
              {post.published ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
            </Button>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                disabled={deletingId === post.id}
              >
                {deletingId === post.id ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Yazıyı Sil</AlertDialogTitle>
                <AlertDialogDescription>
                  "{post.title.tr || post.title.en}" yazısını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>İptal</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => onDelete(post.id)}
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
function BlogPreviewDialog({
  post,
  open,
  onOpenChange,
}: {
  post: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!post) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Blog Yazısı Önizleme</DialogTitle>
          <DialogDescription>
            Yazının sitede nasıl görüneceğini inceleyin
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          {post.image && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title.tr}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Meta */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={post.published ? 'bg-green-500' : 'bg-gray-500'}>
              {post.published ? 'Yayında' : 'Taslak'}
            </Badge>
            {post.category && (
              <Badge variant="outline">{post.category}</Badge>
            )}
            <span className="text-sm text-muted-foreground">
              {new Date(post.created_at).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold">{post.title.tr || post.title.en}</h1>

          {/* Excerpt */}
          {post.excerpt?.tr && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt.tr}
            </p>
          )}

          {/* Content */}
          {post.content?.tr && (
            <div className="pt-4 border-t prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap">{post.content.tr}</div>
            </div>
          )}

          {/* SEO Info */}
          {post.seo && (
            <div className="pt-4 border-t space-y-2">
              <h4 className="font-semibold">SEO Bilgileri</h4>
              <div className="text-sm space-y-1">
                <p><span className="text-muted-foreground">Title:</span> {post.seo.title?.tr || '-'}</p>
                <p><span className="text-muted-foreground">Description:</span> {post.seo.description?.tr || '-'}</p>
                <p><span className="text-muted-foreground">Keywords:</span> {post.seo.keywords?.tr || '-'}</p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t text-xs text-muted-foreground">
            <p>Slug: {post.slug || '-'}</p>
            <p>Güncellenme: {post.updated_at ? new Date(post.updated_at).toLocaleDateString('tr') : '-'}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function AdminBlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);
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

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_BASE}/blog.php`, {
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        setPosts(data.posts || []);
        setFilteredPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      toast({
        title: 'Hata',
        description: 'Blog yazıları yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.tr.toLowerCase().includes(search.toLowerCase()) ||
        post.title.en.toLowerCase().includes(search.toLowerCase()) ||
        (post.category || '').toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [search, posts]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setFilteredPosts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });

      setPosts((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });

      toast({
        title: 'Sıralama güncellendi',
        description: 'Blog yazısı sıralaması değiştirildi.',
      });
    }
  };

  const handleCreate = () => {
    setEditingPost({ ...emptyPost });
    setIsDialogOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost({ ...post });
    setIsDialogOpen(true);
  };

  const handlePreview = (post: BlogPost) => {
    setPreviewPost(post);
    setIsPreviewOpen(true);
  };

  const handleSave = async () => {
    if (!editingPost) return;

    if (!editingPost.title?.tr) {
      toast({
        title: 'Hata',
        description: 'Türkçe başlık zorunludur.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);

    try {
      const method = editingPost.id ? 'PUT' : 'POST';
      const response = await fetch(`${API_BASE}/blog.php`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(editingPost),
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: editingPost.id ? 'Yazı güncellendi.' : 'Yazı oluşturuldu.',
        });
        setIsDialogOpen(false);
        setEditingPost(null);
        fetchPosts();
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
      const response = await fetch(`${API_BASE}/blog.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: 'Yazı silindi.',
        });
        fetchPosts();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Yazı silinirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const response = await fetch(`${API_BASE}/blog.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id: post.id, published: !post.published }),
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: post.published ? 'Yazı yayından kaldırıldı.' : 'Yazı yayınlandı.',
        });
        fetchPosts();
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'İşlem sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    }
  };

  const publishedCount = posts.filter((p) => p.published).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            Blog Yönetimi
          </h1>
          <p className="text-muted-foreground mt-1">
            Blog yazılarını oluşturun, düzenleyin ve sıralayın
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="py-1.5">
            {publishedCount} Yayında / {posts.length} Toplam
          </Badge>
          <Button onClick={handleCreate} className="bg-gradient-to-r from-primary to-[#FF6B6B]">
            <Plus className="h-4 w-4 mr-2" />
            Yeni Yazı
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
                placeholder="Başlık veya kategori ara..."
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
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {search ? 'Arama sonucu bulunamadı.' : 'Henüz yazı yok. Veri Import sayfasından mevcut yazıları aktarabilirsiniz.'}
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={filteredPosts.map((p) => p.id)}
                strategy={viewMode === 'grid' ? rectSortingStrategy : verticalListSortingStrategy}
              >
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                      : 'space-y-4'
                  }
                >
                  {filteredPosts.map((post) => (
                    <SortableBlogCard
                      key={post.id}
                      post={post}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onTogglePublish={handleTogglePublish}
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
      <BlogPreviewDialog
        post={previewPost}
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
      />

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPost?.id ? 'Yazıyı Düzenle' : 'Yeni Yazı Oluştur'}
            </DialogTitle>
            <DialogDescription>
              Çok dilli içerik eklemek için sekmeleri kullanın
            </DialogDescription>
          </DialogHeader>
          {editingPost && (
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
                      <Label>Başlık ({lang.toUpperCase()})</Label>
                      <Input
                        value={editingPost.title?.[lang as keyof typeof editingPost.title] || ''}
                        onChange={(e) =>
                          setEditingPost({
                            ...editingPost,
                            title: { ...editingPost.title!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Başlık (${lang.toUpperCase()})`}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Özet ({lang.toUpperCase()})</Label>
                      <Textarea
                        value={editingPost.excerpt?.[lang as keyof typeof editingPost.excerpt] || ''}
                        onChange={(e) =>
                          setEditingPost({
                            ...editingPost,
                            excerpt: { ...editingPost.excerpt!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`Kısa açıklama (${lang.toUpperCase()})`}
                        rows={2}
                        dir={lang === 'ar' ? 'rtl' : 'ltr'}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>İçerik ({lang.toUpperCase()})</Label>
                      <Textarea
                        value={editingPost.content?.[lang as keyof typeof editingPost.content] || ''}
                        onChange={(e) =>
                          setEditingPost({
                            ...editingPost,
                            content: { ...editingPost.content!, [lang]: e.target.value },
                          })
                        }
                        placeholder={`İçerik (${lang.toUpperCase()})`}
                        rows={8}
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
                    value={editingPost.slug || ''}
                    onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                    placeholder="yazi-basligi"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Kategori</Label>
                  <Input
                    value={editingPost.category || ''}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    placeholder="Cilt Bakımı"
                  />
                </div>
              </div>

              <ImageUpload
                category="blog"
                label="Blog Görseli"
                currentImage={editingPost.image}
                onUpload={(url) => setEditingPost({ ...editingPost, image: url })}
              />

              <div className="space-y-2">
                <Label>veya Görsel URL</Label>
                <Input
                  value={editingPost.image || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <SeoFields
                seo={
                  editingPost.seo || {
                    title: { tr: '', en: '', ar: '' },
                    description: { tr: '', en: '', ar: '' },
                    keywords: { tr: '', en: '', ar: '' },
                  }
                }
                onChange={(seo) => setEditingPost({ ...editingPost, seo })}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={editingPost.published || false}
                    onCheckedChange={(checked) =>
                      setEditingPost({ ...editingPost, published: checked })
                    }
                  />
                  <Label>Yayınla</Label>
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
