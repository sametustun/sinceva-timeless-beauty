import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Send, Users, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
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

interface Subscriber {
  id: string;
  email: string;
  confirmed: boolean;
  created_at: string;
}

const API_BASE = 'https://sinceva.com/api/admin';

export default function AdminCampaign() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [sendToAll, setSendToAll] = useState(true);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
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
          emails: selectedEmails,
          send_to_all: sendToAll,
        }),
      });

      const data = await response.json();

      if (data.success) {
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
              Kampanya e-postasını oluşturun
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
            <div className="space-y-2">
              <Label htmlFor="message">Mesaj</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="E-posta içeriğini yazın..."
                rows={10}
              />
            </div>

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
              disabled={isSending || !subject.trim() || !message.trim() || recipientCount === 0}
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
