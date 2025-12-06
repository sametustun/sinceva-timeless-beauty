import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
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
import { useToast } from '@/hooks/use-toast';
import { Mail, Search, Trash2, Loader2, Eye, MailOpen, Send, CheckCircle } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  read: boolean;
  replied?: boolean;
  replied_at?: string;
  reply_subject?: string;
  created_at: string;
  read_at?: string;
}

const API_BASE = 'https://sinceva.com/api/admin';

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false);
  const [replySubject, setReplySubject] = useState('');
  const [replyMessage, setReplyMessage] = useState('');
  const [isSendingReply, setIsSendingReply] = useState(false);
  const { toast } = useToast();

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${API_BASE}/contacts.php`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.success) {
        setContacts(data.contacts || []);
        setFilteredContacts(data.contacts || []);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      toast({
        title: 'Hata',
        description: 'Mesajlar yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.message.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [search, contacts]);

  const handleMarkAsRead = async (contact: Contact) => {
    try {
      const response = await fetch(`${API_BASE}/contacts.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id: contact.id, read: !contact.read }),
      });
      const data = await response.json();

      if (data.success) {
        fetchContacts();
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'İşlem sırasında bir hata oluştu.',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);

    try {
      const response = await fetch(`${API_BASE}/contacts.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: 'Mesaj silindi.',
        });
        fetchContacts();
        setSelectedContact(null);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Mesaj silinirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewContact = (contact: Contact) => {
    setSelectedContact(contact);
    if (!contact.read) {
      handleMarkAsRead(contact);
    }
  };

  const handleOpenReply = (contact: Contact) => {
    setSelectedContact(contact);
    setReplySubject(`Re: SincEva İletişim Formu - ${contact.name}`);
    setReplyMessage(`Merhaba ${contact.name},\n\n\n\nSaygılarımızla,\nSincEva Ekibi`);
    setIsReplyDialogOpen(true);
  };

  const handleSendReply = async () => {
    if (!selectedContact || !replySubject.trim() || !replyMessage.trim()) {
      toast({
        title: 'Hata',
        description: 'Lütfen tüm alanları doldurun.',
        variant: 'destructive',
      });
      return;
    }

    setIsSendingReply(true);

    try {
      const response = await fetch(`${API_BASE}/reply.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          contact_id: selectedContact.id,
          to: selectedContact.email,
          subject: replySubject,
          message: replyMessage,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: 'E-posta başarıyla gönderildi.',
        });
        setIsReplyDialogOpen(false);
        setSelectedContact(null);
        setReplySubject('');
        setReplyMessage('');
        fetchContacts();
      } else {
        throw new Error(data.error || 'Send failed');
      }
    } catch (error) {
      console.error('Reply error:', error);
      toast({
        title: 'Hata',
        description: 'E-posta gönderilirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsSendingReply(false);
    }
  };

  const unreadCount = contacts.filter((c) => !c.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Mail className="h-8 w-8 text-primary" />
            İletişim Mesajları
          </h1>
          <p className="text-muted-foreground mt-1">
            İletişim formu mesajlarını görüntüleyin ve yanıtlayın
          </p>
        </div>
        <Badge variant={unreadCount > 0 ? 'destructive' : 'secondary'} className="py-1.5">
          {unreadCount} Okunmamış
        </Badge>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="İsim, e-posta veya mesaj ara..."
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
          ) : filteredContacts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {search ? 'Arama sonucu bulunamadı.' : 'Henüz mesaj yok.'}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Durum</TableHead>
                    <TableHead>İsim</TableHead>
                    <TableHead>E-posta</TableHead>
                    <TableHead className="hidden md:table-cell">Mesaj</TableHead>
                    <TableHead>Yanıt</TableHead>
                    <TableHead>Tarih</TableHead>
                    <TableHead className="text-right">İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow 
                      key={contact.id}
                      className={!contact.read ? 'bg-primary/5' : ''}
                    >
                      <TableCell>
                        {contact.read ? (
                          <MailOpen className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Mail className="h-4 w-4 text-primary" />
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {contact.name}
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell className="hidden md:table-cell max-w-[200px] truncate text-muted-foreground">
                        {contact.message}
                      </TableCell>
                      <TableCell>
                        {contact.replied ? (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Yanıtlandı
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-muted-foreground">
                            Bekliyor
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(contact.created_at).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleViewContact(contact)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleOpenReply(contact)}
                            className="text-primary"
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-destructive hover:text-destructive"
                                disabled={deletingId === contact.id}
                              >
                                {deletingId === contact.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Mesajı Sil</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Bu mesajı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>İptal</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(contact.id)}
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

      {/* Message Detail Dialog */}
      <Dialog open={!!selectedContact && !isReplyDialogOpen} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Mesaj Detayı</DialogTitle>
            <DialogDescription>
              {selectedContact?.created_at && new Date(selectedContact.created_at).toLocaleString('tr-TR')}
            </DialogDescription>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">İsim</label>
                <p className="mt-1">{selectedContact.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">E-posta</label>
                <p className="mt-1">
                  <a href={`mailto:${selectedContact.email}`} className="text-primary hover:underline">
                    {selectedContact.email}
                  </a>
                </p>
              </div>
              {selectedContact.phone && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Telefon</label>
                  <p className="mt-1">
                    <a href={`tel:${selectedContact.phone}`} className="text-primary hover:underline">
                      {selectedContact.phone}
                    </a>
                  </p>
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-muted-foreground">Mesaj</label>
                <p className="mt-1 whitespace-pre-wrap bg-muted/50 p-4 rounded-lg">
                  {selectedContact.message}
                </p>
              </div>
              {selectedContact.replied && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-sm text-green-700 dark:text-green-400 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    {selectedContact.replied_at && new Date(selectedContact.replied_at).toLocaleString('tr-TR')} tarihinde yanıtlandı
                  </p>
                </div>
              )}
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleMarkAsRead(selectedContact)}
                >
                  {selectedContact.read ? 'Okunmadı Olarak İşaretle' : 'Okundu Olarak İşaretle'}
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-[#FF6B6B]"
                  onClick={() => {
                    setSelectedContact(null);
                    handleOpenReply(selectedContact);
                  }}
                >
                  <Send className="h-4 w-4 mr-2" />
                  E-posta Gönder
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Reply Dialog */}
      <Dialog open={isReplyDialogOpen} onOpenChange={setIsReplyDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              E-posta Yanıtla
            </DialogTitle>
            <DialogDescription>
              {selectedContact?.name} ({selectedContact?.email}) adresine e-posta gönder
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Konu</Label>
              <Input
                value={replySubject}
                onChange={(e) => setReplySubject(e.target.value)}
                placeholder="E-posta konusu"
              />
            </div>
            <div className="space-y-2">
              <Label>Mesaj</Label>
              <Textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="E-posta içeriği..."
                rows={10}
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setIsReplyDialogOpen(false)}
              >
                İptal
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-primary to-[#FF6B6B]"
                onClick={handleSendReply}
                disabled={isSendingReply}
              >
                {isSendingReply ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Gönder
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
