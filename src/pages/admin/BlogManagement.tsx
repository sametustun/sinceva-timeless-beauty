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
import { FileText, Search, Trash2, Loader2, Plus, Edit, Eye, EyeOff, Upload } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';

interface BlogPost {
  id: string;
  title: { tr: string; en: string; ar: string };
  slug: string;
  excerpt: { tr: string; en: string; ar: string };
  content: { tr: string; en: string; ar: string };
  image: string;
  category: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const API_BASE = 'https://sinceva.com/api/admin';

const emptyPost: Partial<BlogPost> = {
  title: { tr: '', en: '', ar: '' },
  slug: '',
  excerpt: { tr: '', en: '', ar: '' },
  content: { tr: '', en: '', ar: '' },
  image: '',
  category: '',
  published: false,
};

export default function AdminBlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();

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
    const filtered = posts.filter((post) =>
      post.title.tr.toLowerCase().includes(search.toLowerCase()) ||
      post.title.en.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [search, posts]);

  const handleCreate = () => {
    setEditingPost({ ...emptyPost });
    setIsDialogOpen(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost({ ...post });
    setIsDialogOpen(true);
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
            Blog yazılarını oluşturun ve düzenleyin
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

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Başlık ara..."
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
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {search ? 'Arama sonucu bulunamadı.' : 'Henüz yazı yok.'}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Başlık</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>Tarih</TableHead>
                    <TableHead className="text-right">İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium max-w-[200px] truncate">
                        {post.title.tr || post.title.en}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{post.category || '-'}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleTogglePublish(post)}
                          className={post.published ? 'text-green-600' : 'text-muted-foreground'}
                        >
                          {post.published ? (
                            <>
                              <Eye className="h-4 w-4 mr-1" />
                              Yayında
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-4 w-4 mr-1" />
                              Taslak
                            </>
                          )}
                        </Button>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(post.created_at).toLocaleDateString('tr-TR')}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(post)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive hover:text-destructive"
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
                                  Bu yazıyı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>İptal</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(post.id)}
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
