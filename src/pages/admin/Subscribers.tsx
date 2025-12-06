import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { Users, Search, Trash2, Loader2, CheckCircle, Clock } from 'lucide-react';

interface Subscriber {
  id?: string;
  email: string;
  confirmed: boolean;
  language: string;
  created_at: string;
  confirmed_at?: string;
}

const API_BASE = 'https://sinceva.com/api/admin';

export default function AdminSubscribers() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(`${API_BASE}/subscribers.php`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (data.success) {
        setSubscribers(data.subscribers || []);
        setFilteredSubscribers(data.subscribers || []);
      }
    } catch (error) {
      console.error('Failed to fetch subscribers:', error);
      toast({
        title: 'Hata',
        description: 'Aboneler yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  useEffect(() => {
    const filtered = subscribers.filter((sub) =>
      sub.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSubscribers(filtered);
  }, [search, subscribers]);

  const handleDelete = async (subscriber: Subscriber) => {
    const id = subscriber.id || subscriber.email;
    setDeletingId(id);

    try {
      const response = await fetch(`${API_BASE}/subscribers.php?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Başarılı',
          description: 'Abone silindi.',
        });
        fetchSubscribers();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Abone silinirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const confirmedCount = subscribers.filter((s) => s.confirmed).length;
  const pendingCount = subscribers.length - confirmedCount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Aboneler
          </h1>
          <p className="text-muted-foreground mt-1">
            Bülten abonelerini yönetin
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="py-1.5">
            <CheckCircle className="h-3 w-3 mr-1" />
            {confirmedCount} Onaylı
          </Badge>
          <Badge variant="outline" className="py-1.5">
            <Clock className="h-3 w-3 mr-1" />
            {pendingCount} Bekleyen
          </Badge>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="E-posta ara..."
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
          ) : filteredSubscribers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {search ? 'Arama sonucu bulunamadı.' : 'Henüz abone yok.'}
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>E-posta</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead>Dil</TableHead>
                    <TableHead>Kayıt Tarihi</TableHead>
                    <TableHead className="text-right">İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscribers.map((subscriber) => (
                    <TableRow key={subscriber.id || subscriber.email}>
                      <TableCell className="font-medium">
                        {subscriber.email}
                      </TableCell>
                      <TableCell>
                        {subscriber.confirmed ? (
                          <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Onaylı
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-yellow-600">
                            <Clock className="h-3 w-3 mr-1" />
                            Bekliyor
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {subscriber.language?.toUpperCase() || 'TR'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(subscriber.created_at).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </TableCell>
                      <TableCell className="text-right">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              disabled={deletingId === (subscriber.id || subscriber.email)}
                            >
                              {deletingId === (subscriber.id || subscriber.email) ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4" />
                              )}
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Aboneyi Sil</AlertDialogTitle>
                              <AlertDialogDescription>
                                <strong>{subscriber.email}</strong> adresini silmek istediğinize emin misiniz?
                                Bu işlem geri alınamaz.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>İptal</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(subscriber)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Sil
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
