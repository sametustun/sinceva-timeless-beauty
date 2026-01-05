import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import ImageOptimizer from '@/components/admin/ImageOptimizer';
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
  CheckSquare,
  Square,
  XCircle,
  Settings2,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
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

const API_BASE = 'https://sinceva.com/backend/admin';
const UPLOAD_BASE = 'https://sinceva.com/backend/uploads';

interface MediaFile {
  name: string;
  url: string;
  size: number;
  type: string;
  created_at: string;
}

interface FolderType {
  name: string;
  path: string;
  count: number;
}

export default function MediaManager() {
  const { toast } = useToast();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentFolder, setCurrentFolder] = useState('');
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const [previewFile, setPreviewFile] = useState<MediaFile | null>(null);
  const [newFolderName, setNewFolderName] = useState('');
  const [showNewFolderDialog, setShowNewFolderDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [filesToDelete, setFilesToDelete] = useState<string[]>([]);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [optimizeFile, setOptimizeFile] = useState<MediaFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMedia();
  }, [currentFolder]);

  // Reset selection when folder changes
  useEffect(() => {
    setSelectedFiles(new Set());
    setIsSelectionMode(false);
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

  const uploadFiles = async (fileList: FileList | File[]) => {
    const filesToUpload = Array.from(fileList).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (filesToUpload.length === 0) {
      toast({
        title: 'Hata',
        description: 'Yalnızca görsel dosyaları yüklenebilir.',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress({ current: 0, total: filesToUpload.length });
    const uploadedCount = { success: 0, failed: 0 };

    for (let i = 0; i < filesToUpload.length; i++) {
      const file = filesToUpload[i];
      setUploadProgress({ current: i + 1, total: filesToUpload.length });
      
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
    setUploadProgress({ current: 0, total: 0 });
    
    toast({
      title: 'Yükleme Tamamlandı',
      description: `${uploadedCount.success} dosya yüklendi${uploadedCount.failed > 0 ? `, ${uploadedCount.failed} başarısız` : ''}`,
    });

    fetchMedia();
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilesList = e.target.files;
    if (!selectedFilesList || selectedFilesList.length === 0) return;
    await uploadFiles(selectedFilesList);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Drag and Drop handlers
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only set to false if we're leaving the drop zone entirely
    if (e.currentTarget === dropZoneRef.current && !dropZoneRef.current?.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      await uploadFiles(droppedFiles);
    }
  }, [currentFolder]);

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

  const handleDeleteFiles = async () => {
    if (filesToDelete.length === 0) return;

    let successCount = 0;
    let failCount = 0;

    for (const fileName of filesToDelete) {
      try {
        const response = await fetch(`${API_BASE}/media.php`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ file: fileName, folder: currentFolder }),
        });
        const data = await response.json();
        
        if (data.success) {
          successCount++;
        } else {
          failCount++;
        }
      } catch (error) {
        failCount++;
      }
    }

    toast({ 
      title: 'Silme Tamamlandı', 
      description: `${successCount} dosya silindi${failCount > 0 ? `, ${failCount} başarısız` : ''}` 
    });
    
    setFilesToDelete([]);
    setShowDeleteDialog(false);
    setSelectedFiles(new Set());
    setIsSelectionMode(false);
    fetchMedia();
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

  const copySelectedUrls = async () => {
    const urls = files
      .filter(f => selectedFiles.has(f.name))
      .map(f => f.url)
      .join('\n');
    
    try {
      await navigator.clipboard.writeText(urls);
      toast({ title: 'Kopyalandı', description: `${selectedFiles.size} URL panoya kopyalandı` });
    } catch (error) {
      toast({ title: 'Hata', description: 'URL\'ler kopyalanamadı', variant: 'destructive' });
    }
  };

  const handleOptimizedSave = async (blob: Blob, filename: string) => {
    const formData = new FormData();
    formData.append('image', blob, filename);
    formData.append('category', currentFolder || 'general');

    const response = await fetch(`${API_BASE}/upload.php`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Upload failed');
    }
    
    fetchMedia();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const toggleFileSelection = (fileName: string) => {
    const newSelection = new Set(selectedFiles);
    if (newSelection.has(fileName)) {
      newSelection.delete(fileName);
    } else {
      newSelection.add(fileName);
    }
    setSelectedFiles(newSelection);
    
    // Auto-enable selection mode when selecting files
    if (newSelection.size > 0 && !isSelectionMode) {
      setIsSelectionMode(true);
    }
  };

  const selectAllFiles = () => {
    if (selectedFiles.size === filteredFiles.length) {
      setSelectedFiles(new Set());
    } else {
      setSelectedFiles(new Set(filteredFiles.map(f => f.name)));
    }
  };

  const clearSelection = () => {
    setSelectedFiles(new Set());
    setIsSelectionMode(false);
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const breadcrumbs = currentFolder ? currentFolder.split('/').filter(Boolean) : [];

  return (
    <div 
      ref={dropZoneRef}
      className="space-y-6 relative"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Drag Overlay */}
      {isDragOver && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <div className="border-4 border-dashed border-primary rounded-2xl p-12 bg-primary/5 animate-pulse">
            <div className="text-center">
              <Upload className="h-16 w-16 mx-auto text-primary mb-4" />
              <p className="text-xl font-semibold text-primary">Dosyaları buraya bırakın</p>
              <p className="text-muted-foreground mt-2">Görsel dosyalarını yüklemek için bırakın</p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Progress Overlay */}
      {isUploading && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <Card className="w-80">
            <CardContent className="pt-6">
              <div className="text-center">
                <Loader2 className="h-12 w-12 mx-auto text-primary animate-spin mb-4" />
                <p className="font-semibold">Yükleniyor...</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {uploadProgress.current} / {uploadProgress.total} dosya
                </p>
                <div className="w-full bg-muted rounded-full h-2 mt-4">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

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
            <Upload className="h-4 w-4 mr-2" />
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

      {/* Selection Toolbar */}
      {isSelectionMode && (
        <Card className="border-primary bg-primary/5 animate-fade-in">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={clearSelection}>
                  <XCircle className="h-4 w-4 mr-2" />
                  Seçimi Temizle
                </Button>
                <span className="text-sm font-medium">
                  {selectedFiles.size} dosya seçildi
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={selectAllFiles}
                >
                  {selectedFiles.size === filteredFiles.length ? (
                    <>
                      <Square className="h-4 w-4 mr-2" />
                      Seçimi Kaldır
                    </>
                  ) : (
                    <>
                      <CheckSquare className="h-4 w-4 mr-2" />
                      Tümünü Seç
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={copySelectedUrls}
                  disabled={selectedFiles.size === 0}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  URL Kopyala
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => {
                    setFilesToDelete(Array.from(selectedFiles));
                    setShowDeleteDialog(true);
                  }}
                  disabled={selectedFiles.size === 0}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Sil ({selectedFiles.size})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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
              <Button
                variant={isSelectionMode ? 'secondary' : 'ghost'}
                size="icon"
                className="h-9 w-9"
                onClick={() => {
                  setIsSelectionMode(!isSelectionMode);
                  if (isSelectionMode) {
                    setSelectedFiles(new Set());
                  }
                }}
              >
                <CheckSquare className="h-4 w-4" />
              </Button>
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

          {/* Empty state with drag & drop */}
          {filteredFiles.length === 0 ? (
            <Card 
              className={`border-2 border-dashed transition-colors ${
                isDragOver ? 'border-primary bg-primary/5' : 'border-muted'
              }`}
            >
              <CardContent className="py-12 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-lg font-medium mb-2">Dosya yükleyin</p>
                <p className="text-muted-foreground mb-4">
                  Dosyaları sürükleyip bırakın veya seçmek için tıklayın
                </p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Dosya Seç
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Dosyalar ({filteredFiles.length})
              </h3>
              
              {viewMode === 'grid' ? (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {filteredFiles.map((file) => (
                    <Card
                      key={file.name}
                      className={`group cursor-pointer transition-all hover:shadow-md ${
                        selectedFiles.has(file.name) ? 'ring-2 ring-primary bg-primary/5' : ''
                      }`}
                      onClick={() => isSelectionMode ? toggleFileSelection(file.name) : setPreviewFile(file)}
                    >
                      <CardContent className="p-2">
                        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-2">
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          
                          {/* Selection checkbox */}
                          {isSelectionMode && (
                            <div className="absolute top-2 left-2">
                              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                                selectedFiles.has(file.name) 
                                  ? 'bg-primary border-primary text-primary-foreground' 
                                  : 'bg-background/80 border-muted-foreground/50'
                              }`}>
                                {selectedFiles.has(file.name) && <Check className="h-4 w-4" />}
                              </div>
                            </div>
                          )}
                          
                          {/* Hover actions */}
                          {!isSelectionMode && (
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
                                  setFilesToDelete([file.name]);
                                  setShowDeleteDialog(true);
                                }}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="secondary"
                                className="h-8 w-8"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setOptimizeFile(file);
                                }}
                              >
                                <Settings2 className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
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
                            selectedFiles.has(file.name) ? 'bg-primary/5' : ''
                          }`}
                          onClick={() => isSelectionMode ? toggleFileSelection(file.name) : setPreviewFile(file)}
                        >
                          {isSelectionMode && (
                            <Checkbox
                              checked={selectedFiles.has(file.name)}
                              onCheckedChange={() => toggleFileSelection(file.name)}
                              onClick={(e) => e.stopPropagation()}
                            />
                          )}
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
                          {!isSelectionMode && (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => setPreviewFile(file)}>
                                  <Eye className="h-4 w-4 mr-2" />
                                  Önizle
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setOptimizeFile(file)}>
                                  <Settings2 className="h-4 w-4 mr-2" />
                                  Boyutlandır / Optimize
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => copyToClipboard(file.url)}>
                                  <Copy className="h-4 w-4 mr-2" />
                                  URL Kopyala
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => {
                                    setFilesToDelete([file.name]);
                                    setShowDeleteDialog(true);
                                  }}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Sil
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              )}
            </div>
          )}
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
                  <Button variant="outline" size="sm" onClick={() => {
                    setOptimizeFile(previewFile);
                    setPreviewFile(null);
                  }}>
                    <Settings2 className="h-4 w-4 mr-2" />
                    Boyutlandır
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(previewFile.url)}>
                    <Copy className="h-4 w-4 mr-2" />
                    URL Kopyala
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => {
                    setFilesToDelete([previewFile.name]);
                    setShowDeleteDialog(true);
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
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {filesToDelete.length > 1 ? `${filesToDelete.length} Dosyayı Sil` : 'Dosyayı Sil'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {filesToDelete.length > 1 
                ? `${filesToDelete.length} dosyayı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`
                : `"${filesToDelete[0]}" dosyasını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setFilesToDelete([])}>İptal</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteFiles} 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Image Optimizer */}
      {optimizeFile && (
        <ImageOptimizer
          open={!!optimizeFile}
          onOpenChange={(open) => !open && setOptimizeFile(null)}
          imageUrl={optimizeFile.url}
          imageName={optimizeFile.name}
          onSave={handleOptimizedSave}
        />
      )}
    </div>
  );
}
