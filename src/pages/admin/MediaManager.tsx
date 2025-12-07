import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import {
  Folder,
  FolderPlus,
  Upload,
  Image as ImageIcon,
  Trash2,
  Download,
  Grid,
  List,
  Search,
  Copy,
  Check,
  Loader2,
  ChevronRight,
  Home,
  MoreVertical,
  Eye,
  X,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

const API_BASE = 'https://sinceva.com/api/admin';
const UPLOAD_BASE = 'https://sinceva.com/api/uploads';

interface MediaFile {
  name: string;
  url: string;
  size: number;
  type: string;
  created_at: string;
}

interface Folder {
  name: string;
  path: string;
  count: number;
}

export default function MediaManager() {
  const { toast } = useToast();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentFolder, setCurrentFolder] = useState('');
  const [folders, setFolders] = useState<Folder[]>([]);
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);
  const [previewFile, setPreviewFile] = useState<MediaFile | null>(null);
  const [newFolderName, setNewFolderName] = useState('');
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<MediaFile | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchMedia();
  }, [currentFolder]);

  const fetchMedia = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/media.php?folder=${encodeURIComponent(currentFolder)}`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.success) {
        setFolders(data.folders || []);
        setFiles(data.files || []);
      }
    } catch (error) {
      console.error('Failed to fetch media:', error);
      // Demo data for UI development
      setFolders([
        { name: 'product', path: 'product', count: 24 },
        { name: 'blog', path: 'blog', count: 12 },
        { name: 'general', path: 'general', count: 8 },
      ]);
      setFiles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    setIsUploading(true);
    const uploadedCount = { success: 0, failed: 0 };

    for (const file of Array.from(selectedFiles)) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('category', currentFolder || 'general');

      try {
        const response = await fetch(`${API_BASE}/upload.php`, {
          method: 'POST',
          credentials: 'include',
          body: formData,
        });
        const data = await response.json();
        
        if (data.success) {
          uploadedCount.success++;
        } else {
          uploadedCount.failed++;
        }
      } catch (error) {
        uploadedCount.failed++;
      }
    }

    setIsUploading(false);
    
    toast({
      title: 'Yükleme Tamamlandı',
      description: `${uploadedCount.success} dosya yüklendi${uploadedCount.failed > 0 ? `, ${uploadedCount.failed} başarısız` : ''}`,
    });

    fetchMedia();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) return;

    try {
      const response = await fetch(`${API_BASE}/media.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ action: 'create_folder', name: newFolderName, parent: currentFolder }),
      });
      const data = await response.json();
      
      if (data.success) {
        toast({ title: 'Başarılı', description: 'Klasör oluşturuldu' });
        fetchMedia();
      }
    } catch (error) {
      toast({ title: 'Hata', description: 'Klasör oluşturulamadı', variant: 'destructive' });
    }

    setNewFolderName('');
    setShowNewFolderDialog(false);
  };

  const handleDeleteFile = async () => {
    if (!fileToDelete) return;

    try {
      const response = await fetch(`${API_BASE}/media.php`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ file: fileToDelete.name, folder: currentFolder }),
      });
      const data = await response.json();
      
      if (data.success) {
        toast({ title: 'Başarılı', description: 'Dosya silindi' });
        fetchMedia();
      }
    } catch (error) {
      toast({ title: 'Hata', description: 'Dosya silinemedi', variant: 'destructive' });
    }

    setFileToDelete(null);
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
      toast({ title: 'Kopyalandı', description: 'URL panoya kopyalandı' });
    } catch (error) {
      toast({ title: 'Hata', description: 'URL kopyalanamadı', variant: 'destructive' });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const breadcrumbs = currentFolder ? currentFolder.split('/').filter(Boolean) : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Medya Yöneticisi</h1>
          <p className="text-muted-foreground">Görsel ve dosyalarınızı yönetin</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={showNewFolderDialog} onOpenChange={setShowNewFolderDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <FolderPlus className="h-4 w-4 mr-2" />
                Yeni Klasör
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Yeni Klasör Oluştur</DialogTitle>
                <DialogDescription>Klasör adını girin</DialogDescription>
              </DialogHeader>
              <Input
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Klasör adı"
              />
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewFolderDialog(false)}>
                  İptal
                </Button>
                <Button onClick={handleCreateFolder}>Oluştur</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button size="sm" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
            {isUploading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Upload className="h-4 w-4 mr-2" />
            )}
            Yükle
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Toolbar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-sm overflow-x-auto">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2"
                onClick={() => setCurrentFolder('')}
              >
                <Home className="h-4 w-4" />
              </Button>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2"
                    onClick={() => setCurrentFolder(breadcrumbs.slice(0, index + 1).join('/'))}
                  >
                    {crumb}
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Dosya ara..."
                  className="pl-9"
                />
              </div>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="icon"
                  className="h-9 w-9 rounded-r-none"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="icon"
                  className="h-9 w-9 rounded-l-none"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Folders */}
          {folders.length > 0 && !currentFolder && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Klasörler</h3>
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {folders.map((folder) => (
                  <Card
                    key={folder.path}
                    className="cursor-pointer hover:border-primary transition-colors"
                    onClick={() => setCurrentFolder(folder.path)}
                  >
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Folder className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium text-sm truncate w-full">{folder.name}</p>
                      <p className="text-xs text-muted-foreground">{folder.count} dosya</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Files */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Dosyalar {filteredFiles.length > 0 && `(${filteredFiles.length})`}
            </h3>
            
            {filteredFiles.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Bu klasörde dosya yok</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Dosya Yükle
                  </Button>
                </CardContent>
              </Card>
            ) : viewMode === 'grid' ? (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredFiles.map((file) => (
                  <Card
                    key={file.name}
                    className={`group cursor-pointer transition-all hover:shadow-md ${
                      selectedFile?.name === file.name ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedFile(file)}
                  >
                    <CardContent className="p-2">
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-2">
                        <img
                          src={file.url}
                          alt={file.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPreviewFile(file);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(file.url);
                            }}
                          >
                            {copiedUrl === file.url ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            className="h-8 w-8"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFileToDelete(file);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs font-medium truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <ScrollArea className="h-[500px]">
                  <div className="divide-y">
                    {filteredFiles.map((file) => (
                      <div
                        key={file.name}
                        className={`flex items-center gap-4 p-4 hover:bg-muted/50 cursor-pointer ${
                          selectedFile?.name === file.name ? 'bg-muted' : ''
                        }`}
                        onClick={() => setSelectedFile(file)}
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{file.name}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{formatFileSize(file.size)}</span>
                            <span>•</span>
                            <span>{new Date(file.created_at).toLocaleDateString('tr-TR')}</span>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setPreviewFile(file)}>
                              <Eye className="h-4 w-4 mr-2" />
                              Önizle
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => copyToClipboard(file.url)}>
                              <Copy className="h-4 w-4 mr-2" />
                              URL Kopyala
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-destructive"
                              onClick={() => setFileToDelete(file)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Sil
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            )}
          </div>
        </div>
      )}

      {/* Preview Dialog */}
      <Dialog open={!!previewFile} onOpenChange={() => setPreviewFile(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="truncate">{previewFile?.name}</DialogTitle>
          </DialogHeader>
          {previewFile && (
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <img
                  src={previewFile.url}
                  alt={previewFile.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  <span>{formatFileSize(previewFile.size)}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(previewFile.created_at).toLocaleDateString('tr-TR')}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(previewFile.url)}>
                    <Copy className="h-4 w-4 mr-2" />
                    URL Kopyala
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => {
                    setFileToDelete(previewFile);
                    setPreviewFile(null);
                  }}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Sil
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!fileToDelete} onOpenChange={() => setFileToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Dosyayı Sil</AlertDialogTitle>
            <AlertDialogDescription>
              "{fileToDelete?.name}" dosyasını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteFile} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
