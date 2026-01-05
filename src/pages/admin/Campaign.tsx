import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Send, Users, Mail, Loader2, CheckCircle, AlertCircle, Image, Bold, Italic, Link, Eye } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Subscriber {
  id: string;
  email: string;
  confirmed: boolean;
  created_at: string;
}

const API_BASE = 'https://sinceva.com/backend/admin';

export default function AdminCampaign() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [sendToAll, setSendToAll] = useState(true);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<{
    success: number;
    failed: number;
    total: number;
  } | null>(null);
  const { toast } = useToast();

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(`${API_BASE}/subscribers.php`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.success) {
        const confirmed = (data.subscribers || []).filter((s: Subscriber) => s.confirmed);
        setSubscribers(confirmed);
      }
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleSelectAll = () => {
    if (selectedEmails.length === subscribers.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(subscribers.map(s => s.email));
    }
  };

  const handleToggleEmail = (email: string) => {
    if (selectedEmails.includes(email)) {
      setSelectedEmails(selectedEmails.filter(e => e !== email));
    } else {
      setSelectedEmails([...selectedEmails, email]);
    }
  };

  // Image upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Hata',
        description: 'Sadece görsel dosyaları yükleyebilirsiniz.',
        variant: 'destructive',
      });
      return;
    }

    // Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Hata',
        description: 'Görsel boyutu maksimum 5MB olabilir.',
        variant: 'destructive',
      });
      return;
    }

    setUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'campaigns');

      const response = await fetch(`${API_BASE}/upload.php`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await response.json();

      if (data.success && data.url) {
        // Insert image HTML at cursor or end
        const imageHtml = `<img src="${data.url}" alt="${file.name}" style="max-width:100%;height:auto;margin:16px 0;border-radius:8px;" />`;
        setHtmlContent(prev => prev + '\n' + imageHtml);
        toast({
          title: 'Görsel Yüklendi',
          description: 'Görsel e-postaya eklendi.',
        });
      } else {
        throw new Error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Image upload error:', error);
      toast({
        title: 'Hata',
        description: 'Görsel yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Insert formatting
  const insertFormatting = (tag: 'b' | 'i' | 'a') => {
    const selection = window.getSelection()?.toString() || 'metin';
    let html = '';
    
    if (tag === 'a') {
      const url = prompt('Link URL:', 'https://sinceva.com');
      if (url) {
        html = `<a href="${url}" style="color:#E53935;text-decoration:underline;">${selection}</a>`;
      }
    } else if (tag === 'b') {
      html = `<strong>${selection}</strong>`;
    } else if (tag === 'i') {
      html = `<em>${selection}</em>`;
    }
    
    if (html) {
      setHtmlContent(prev => prev + html);
    }
  };

  const handleSendCampaign = async () => {
    setShowConfirmDialog(false);
    setIsSending(true);
    setResult(null);

    try {
      const response = await fetch(`${API_BASE}/campaign.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          subject,
          message,
          html_content: htmlContent,
          emails: selectedEmails,
          send_to_all: sendToAll,
        }),
      });

      const data = await response.json();

      if (data.success !== undefined) {
        setResult({
          success: data.success,
          failed: data.failed,
          total: data.total,
        });
        toast({
          title: 'Kampanya Gönderildi',
          description: `${data.success}/${data.total} e-posta başarıyla gönderildi.`,
        });
        // Reset form
        setSubject('');
        setMessage('');
        setHtmlContent('');
      } else {
        throw new Error(data.error || 'Campaign failed');
      }
    } catch (error) {
      console.error('Campaign error:', error);
      toast({
        title: 'Hata',
        description: 'Kampanya gönderilirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  const recipientCount = sendToAll ? subscribers.length : selectedEmails.length;

  // Generate preview HTML
  const previewHtml = htmlContent || `<p style="color:#333333;font-size:16px;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</p>`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Send className="h-8 w-8 text-primary" />
            E-posta Kampanyası
          </h1>
          <p className="text-muted-foreground mt-1">
            Abonelere toplu e-posta gönderin
          </p>
        </div>
        <Badge variant="secondary" className="py-1.5">
          <Users className="h-4 w-4 mr-1" />
          {subscribers.length} Onaylı Abone
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recipients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Alıcılar
            </CardTitle>
            <CardDescription>
              E-postayı göndereceğiniz aboneleri seçin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sendToAll"
                checked={sendToAll}
                onCheckedChange={(checked) => setSendToAll(!!checked)}
              />
              <Label htmlFor="sendToAll" className="font-medium">
                Tüm onaylı abonelere gönder ({subscribers.length} kişi)
              </Label>
            </div>

            {!sendToAll && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {selectedEmails.length} seçili
                  </span>
                  <Button variant="outline" size="sm" onClick={handleSelectAll}>
                    {selectedEmails.length === subscribers.length ? 'Tümünü Kaldır' : 'Tümünü Seç'}
                  </Button>
                </div>
                <ScrollArea className="h-[300px] border rounded-lg p-2">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : subscribers.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      Onaylı abone bulunamadı
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {subscribers.map((subscriber) => (
                        <div 
                          key={subscriber.id}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-muted/50"
                        >
                          <Checkbox
                            id={subscriber.id}
                            checked={selectedEmails.includes(subscriber.email)}
                            onCheckedChange={() => handleToggleEmail(subscriber.email)}
                          />
                          <Label htmlFor={subscriber.id} className="flex-1 cursor-pointer">
                            {subscriber.email}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </>
            )}
          </CardContent>
        </Card>

        {/* Email Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              E-posta İçeriği
            </CardTitle>
            <CardDescription>
              Kampanya e-postasını oluşturun - görsel ekleyebilirsiniz
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Konu</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="E-posta konusu..."
              />
            </div>

            <Tabs defaultValue="html" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="html">HTML İçerik</TabsTrigger>
                <TabsTrigger value="plain">Düz Metin</TabsTrigger>
                <TabsTrigger value="preview">
                  <Eye className="h-4 w-4 mr-1" />
                  Önizleme
                </TabsTrigger>
              </TabsList>

              <TabsContent value="html" className="space-y-3">
                {/* Toolbar */}
                <div className="flex items-center gap-2 p-2 border rounded-lg bg-muted/50">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertFormatting('b')}
                    title="Kalın"
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertFormatting('i')}
                    title="İtalik"
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => insertFormatting('a')}
                    title="Link Ekle"
                  >
                    <Link className="h-4 w-4" />
                  </Button>
                  <div className="h-4 w-px bg-border mx-1" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingImage}
                    title="Görsel Ekle"
                  >
                    {uploadingImage ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Image className="h-4 w-4" />
                    )}
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                <Textarea
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                  placeholder="HTML içeriği yazın veya görsel ekleyin...

Örnek:
<h2 style='color:#E53935;'>Yeni Ürünler</h2>
<p>Merhaba,</p>
<p>Yeni ürünlerimizi keşfedin!</p>"
                  rows={12}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  HTML etiketleri kullanabilirsiniz. Görseller otomatik olarak URL'ye dönüştürülür.
                </p>
              </TabsContent>

              <TabsContent value="plain" className="space-y-2">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Düz metin içeriği (HTML desteklemeyen e-posta istemcileri için)..."
                  rows={10}
                />
                <p className="text-xs text-muted-foreground">
                  Bu metin, HTML görüntüleyemeyen e-posta istemcilerinde gösterilir.
                </p>
              </TabsContent>

              <TabsContent value="preview">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-[#FF6B6B] p-4 text-center">
                    <h1 className="text-white text-xl font-bold">SincEva</h1>
                  </div>
                  <div className="p-6 bg-white">
                    <div
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: previewHtml }}
                    />
                  </div>
                  <div className="bg-gray-50 p-4 text-center text-xs text-gray-500 border-t">
                    <p>SincEva Kozmetik</p>
                    <p>www.sinceva.com</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {result && (
              <div className={`p-4 rounded-lg ${result.failed > 0 ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-green-50 dark:bg-green-900/20'}`}>
                <div className="flex items-center gap-2">
                  {result.failed > 0 ? (
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  <span className={result.failed > 0 ? 'text-yellow-700 dark:text-yellow-400' : 'text-green-700 dark:text-green-400'}>
                    {result.success}/{result.total} e-posta gönderildi
                    {result.failed > 0 && `, ${result.failed} başarısız`}
                  </span>
                </div>
              </div>
            )}

            <Button
              className="w-full bg-gradient-to-r from-primary to-[#FF6B6B]"
              onClick={() => setShowConfirmDialog(true)}
              disabled={isSending || !subject.trim() || (!message.trim() && !htmlContent.trim()) || recipientCount === 0}
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  {recipientCount} Kişiye Gönder
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Confirm Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Kampanyayı Gönder</AlertDialogTitle>
            <AlertDialogDescription>
              Bu e-posta <strong>{recipientCount}</strong> kişiye gönderilecek. Devam etmek istiyor musunuz?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSendCampaign}
              className="bg-gradient-to-r from-primary to-[#FF6B6B]"
            >
              Gönder
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
