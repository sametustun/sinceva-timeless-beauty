import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  category: 'product' | 'blog' | 'general';
  onUpload: (url: string) => void;
  currentImage?: string;
  label?: string;
  className?: string;
}

const API_BASE = 'https://sinceva.com/api/admin';

export default function ImageUpload({ 
  category, 
  onUpload, 
  currentImage, 
  label = 'Görsel Yükle',
  className = ''
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: 'Geçersiz dosya türü',
        description: 'Sadece JPEG, PNG, GIF ve WebP dosyaları yüklenebilir.',
        variant: 'destructive',
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Dosya çok büyük',
        description: 'Maksimum dosya boyutu 5MB olmalıdır.',
        variant: 'destructive',
      });
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('category', category);

      const response = await fetch(`${API_BASE}/upload.php`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        onUpload(data.url);
        toast({
          title: 'Başarılı',
          description: 'Görsel başarıyla yüklendi.',
        });
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setPreview(currentImage || null);
      toast({
        title: 'Yükleme hatası',
        description: 'Görsel yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onUpload('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      
      <div className="flex items-start gap-4">
        {/* Preview */}
        {preview && (
          <div className="relative group">
            <div className="w-24 h-24 rounded-lg overflow-hidden border bg-muted">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleRemove}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Upload area */}
        <div className="flex-1">
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/gif,image/webp"
            onChange={handleFileSelect}
            className="hidden"
            id={`image-upload-${category}`}
          />
          
          <label
            htmlFor={`image-upload-${category}`}
            className={`
              flex items-center justify-center gap-2 px-4 py-8
              border-2 border-dashed rounded-lg cursor-pointer
              transition-colors hover:border-primary hover:bg-primary/5
              ${isUploading ? 'pointer-events-none opacity-50' : ''}
            `}
          >
            {isUploading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Yükleniyor...</span>
              </>
            ) : (
              <>
                <Upload className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {preview ? 'Değiştirmek için tıklayın' : 'Görsel seçin veya sürükleyin'}
                </span>
              </>
            )}
          </label>
          
          <p className="text-xs text-muted-foreground mt-2">
            JPEG, PNG, GIF veya WebP. Maksimum 5MB.
          </p>
        </div>
      </div>
    </div>
  );
}
