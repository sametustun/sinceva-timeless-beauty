import { useState, useRef, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Loader2, Download, RotateCcw, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageOptimizerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl: string;
  imageName: string;
  onSave: (blob: Blob, filename: string) => Promise<void>;
}

export default function ImageOptimizer({ open, onOpenChange, imageUrl, imageName, onSave }: ImageOptimizerProps) {
  const { toast } = useToast();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  
  // Image settings
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [quality, setQuality] = useState(85);
  const [format, setFormat] = useState<'jpeg' | 'png' | 'webp'>('jpeg');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  
  // Stats
  const [originalSize, setOriginalSize] = useState(0);
  const [newSize, setNewSize] = useState(0);

  const loadImage = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      setOriginalSize(blob.size);
      
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = imageUrl;
      });
      
      setOriginalImage(img);
      setOriginalWidth(img.naturalWidth);
      setOriginalHeight(img.naturalHeight);
      setWidth(img.naturalWidth);
      setHeight(img.naturalHeight);
      
      // Detect format from filename
      const ext = imageName.split('.').pop()?.toLowerCase();
      if (ext === 'png') setFormat('png');
      else if (ext === 'webp') setFormat('webp');
      else setFormat('jpeg');
      
    } catch (error) {
      console.error('Failed to load image:', error);
      toast({
        title: 'Hata',
        description: 'Görsel yüklenemedi',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [imageUrl, imageName, toast]);

  useEffect(() => {
    if (open && imageUrl) {
      loadImage();
    }
  }, [open, imageUrl, loadImage]);

  // Update canvas preview
  useEffect(() => {
    if (!originalImage || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = width;
    canvas.height = height;
    
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(originalImage, 0, 0, width, height);
    
    // Calculate new size
    canvas.toBlob(
      (blob) => {
        if (blob) {
          setNewSize(blob.size);
        }
      },
      `image/${format}`,
      quality / 100
    );
  }, [originalImage, width, height, quality, format]);

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);
    if (maintainAspectRatio && originalWidth > 0) {
      const ratio = originalHeight / originalWidth;
      setHeight(Math.round(newWidth * ratio));
    }
  };

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);
    if (maintainAspectRatio && originalHeight > 0) {
      const ratio = originalWidth / originalHeight;
      setWidth(Math.round(newHeight * ratio));
    }
  };

  const handlePresetSize = (preset: string) => {
    switch (preset) {
      case '50':
        handleWidthChange(Math.round(originalWidth * 0.5));
        break;
      case '75':
        handleWidthChange(Math.round(originalWidth * 0.75));
        break;
      case '100':
        handleWidthChange(originalWidth);
        break;
      case 'thumbnail':
        handleWidthChange(150);
        break;
      case 'medium':
        handleWidthChange(600);
        break;
      case 'large':
        handleWidthChange(1200);
        break;
    }
  };

  const handleReset = () => {
    setWidth(originalWidth);
    setHeight(originalHeight);
    setQuality(85);
    setMaintainAspectRatio(true);
  };

  const handleSave = async () => {
    if (!canvasRef.current) return;
    
    setIsSaving(true);
    try {
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvasRef.current?.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Failed to create blob'));
          },
          `image/${format}`,
          quality / 100
        );
      });
      
      // Generate new filename
      const baseName = imageName.replace(/\.[^.]+$/, '');
      const newFilename = `${baseName}_optimized.${format}`;
      
      await onSave(blob, newFilename);
      
      toast({
        title: 'Başarılı',
        description: 'Görsel kaydedildi',
      });
      
      onOpenChange(false);
    } catch (error) {
      console.error('Failed to save image:', error);
      toast({
        title: 'Hata',
        description: 'Görsel kaydedilemedi',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvasRef.current?.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to create blob'));
        },
        `image/${format}`,
        quality / 100
      );
    });
    
    const baseName = imageName.replace(/\.[^.]+$/, '');
    const newFilename = `${baseName}_optimized.${format}`;
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = newFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const savings = originalSize > 0 ? Math.round((1 - newSize / originalSize) * 100) : 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Görsel Boyutlandırma ve Optimizasyon
            <Badge variant="outline" className="font-normal">
              {imageName}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Preview */}
            <div className="lg:col-span-2 space-y-4">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                <canvas
                  ref={canvasRef}
                  className="max-w-full max-h-full object-contain"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Orijinal:</span>
                  <Badge variant="secondary">{originalWidth} × {originalHeight}</Badge>
                  <Badge variant="secondary">{formatBytes(originalSize)}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Yeni:</span>
                  <Badge variant="default">{width} × {height}</Badge>
                  <Badge variant="default">{formatBytes(newSize)}</Badge>
                </div>
                {savings > 0 && (
                  <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                    %{savings} tasarruf
                  </Badge>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              {/* Dimensions */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Boyutlar</Label>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Genişlik (px)</Label>
                    <Input
                      type="number"
                      value={width}
                      onChange={(e) => handleWidthChange(Number(e.target.value))}
                      min={1}
                      max={4096}
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Yükseklik (px)</Label>
                    <Input
                      type="number"
                      value={height}
                      onChange={(e) => handleHeightChange(Number(e.target.value))}
                      min={1}
                      max={4096}
                    />
                  </div>
                </div>
                
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={maintainAspectRatio}
                    onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                    className="rounded"
                  />
                  En-boy oranını koru
                </label>

                {/* Preset sizes */}
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => handlePresetSize('50')}>
                    <ZoomOut className="h-3 w-3 mr-1" />
                    50%
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePresetSize('75')}>
                    75%
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePresetSize('100')}>
                    <Maximize2 className="h-3 w-3 mr-1" />
                    100%
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => handlePresetSize('thumbnail')}>
                    Thumbnail
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePresetSize('medium')}>
                    Orta
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handlePresetSize('large')}>
                    Büyük
                  </Button>
                </div>
              </div>

              {/* Quality */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Kalite</Label>
                  <span className="text-sm text-muted-foreground">%{quality}</span>
                </div>
                <Slider
                  value={[quality]}
                  onValueChange={([value]) => setQuality(value)}
                  min={10}
                  max={100}
                  step={5}
                />
                <p className="text-xs text-muted-foreground">
                  Düşük kalite = küçük dosya boyutu
                </p>
              </div>

              {/* Format */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Format</Label>
                <Select value={format} onValueChange={(v) => setFormat(v as typeof format)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jpeg">JPEG (Fotoğraflar için)</SelectItem>
                    <SelectItem value="png">PNG (Şeffaflık için)</SelectItem>
                    <SelectItem value="webp">WebP (Modern, küçük)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reset */}
              <Button variant="outline" className="w-full" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Sıfırla
              </Button>
            </div>
          </div>
        )}

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={handleDownload} disabled={isLoading || isSaving}>
            <Download className="h-4 w-4 mr-2" />
            İndir
          </Button>
          <Button onClick={handleSave} disabled={isLoading || isSaving}>
            {isSaving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            Sunucuya Kaydet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
