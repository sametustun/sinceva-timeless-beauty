import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import {
  Loader2,
  Plus,
  Search,
  Eye,
  Trash2,
  Package,
  Download,
  Truck,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://sinceva.com/api';

interface OrderItem {
  product_id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  order_number: string;
  marketplace_order_number?: string;
  source: 'manual' | 'trendyol';
  status: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  shipping_address: string;
  shipping_city: string;
  shipping_district: string;
  shipping_postal_code?: string;
  items: OrderItem[];
  total_amount: number;
  payment_method: string;
  notes?: string;
  tracking_number?: string;
  shipment_id?: string;
  created_at: string;
  updated_at: string;
}

interface ShippingProvider {
  id: string;
  name: string;
  code: string;
  is_active: boolean;
}

interface Shipment {
  id: string;
  order_id: string;
  provider_name: string;
  tracking_number: string;
  label_url: string;
  status: string;
  created_at: string;
}

const statusLabels: Record<string, string> = {
  pending: 'Bekliyor',
  processing: 'Hazırlanıyor',
  shipped: 'Kargoya Verildi',
  delivered: 'Teslim Edildi',
  cancelled: 'İptal',
  returned: 'İade',
};

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  shipped: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  returned: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [providers, setProviders] = useState<ShippingProvider[]>([]);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sourceFilter, setSourceFilter] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [showNewOrderDialog, setShowNewOrderDialog] = useState(false);
  const [creatingShipment, setCreatingShipment] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [orderShipments, setOrderShipments] = useState<Shipment[]>([]);
  const { toast } = useToast();

  // New order form state
  const [newOrder, setNewOrder] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    shipping_address: '',
    shipping_city: '',
    shipping_district: '',
    shipping_postal_code: '',
    total_amount: '',
    payment_method: 'prepaid',
    notes: '',
  });

  useEffect(() => {
    fetchOrders();
    fetchProviders();
  }, []);

  const fetchOrders = async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.set('status', statusFilter);
      if (sourceFilter) params.set('source', sourceFilter);
      if (search) params.set('search', search);

      const response = await fetch(`${API_BASE}/admin/orders.php?${params}`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Siparişler yüklenemedi',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchProviders = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/shipping-providers.php`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setProviders(data.providers.filter((p: ShippingProvider) => p.is_active));
      }
    } catch (error) {
      console.error('Failed to fetch providers:', error);
    }
  };

  const fetchOrderShipments = async (orderId: string) => {
    try {
      const response = await fetch(`${API_BASE}/admin/shipments.php?order_id=${orderId}`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setOrderShipments(data.shipments);
      }
    } catch (error) {
      console.error('Failed to fetch shipments:', error);
    }
  };

  const handleImportTrendyol = async () => {
    setImporting(true);
    try {
      const response = await fetch(`${API_BASE}/admin/orders.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ action: 'import_trendyol' }),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: 'Başarılı',
          description: data.message,
        });
        fetchOrders();
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: 'Hata',
        description: error.message || 'Import başarısız',
        variant: 'destructive',
      });
    } finally {
      setImporting(false);
    }
  };

  const handleCreateOrder = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/orders.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(newOrder),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: 'Başarılı',
          description: 'Sipariş oluşturuldu',
        });
        setShowNewOrderDialog(false);
        setNewOrder({
          customer_name: '',
          customer_email: '',
          customer_phone: '',
          shipping_address: '',
          shipping_city: '',
          shipping_district: '',
          shipping_postal_code: '',
          total_amount: '',
          payment_method: 'prepaid',
          notes: '',
        });
        fetchOrders();
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: 'Hata',
        description: error.message || 'Sipariş oluşturulamadı',
        variant: 'destructive',
      });
    }
  };

  const handleViewOrder = async (order: Order) => {
    setSelectedOrder(order);
    setShowOrderDialog(true);
    fetchOrderShipments(order.id);
  };

  const handleCreateShipment = async () => {
    if (!selectedOrder || !selectedProvider) return;

    setCreatingShipment(true);
    try {
      const response = await fetch(`${API_BASE}/admin/orders/${selectedOrder.id}/shipments.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ provider_code: selectedProvider }),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: 'Kargo Oluşturuldu',
          description: `Takip No: ${data.tracking_number}`,
        });
        fetchOrders();
        fetchOrderShipments(selectedOrder.id);
        setSelectedOrder(prev => prev ? { ...prev, status: 'shipped', tracking_number: data.tracking_number } : null);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: 'Hata',
        description: error.message || 'Kargo oluşturulamadı',
        variant: 'destructive',
      });
    } finally {
      setCreatingShipment(false);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!confirm('Bu siparişi silmek istediğinizden emin misiniz?')) return;

    try {
      const response = await fetch(`${API_BASE}/admin/orders.php?id=${orderId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        toast({ title: 'Başarılı', description: 'Sipariş silindi' });
        fetchOrders();
        setShowOrderDialog(false);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: 'Hata',
        description: error.message || 'Sipariş silinemedi',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchOrders();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, statusFilter, sourceFilter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Siparişler</h1>
            <p className="text-muted-foreground">
              Manuel ve Trendyol siparişlerini yönetin
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleImportTrendyol} disabled={importing}>
              {importing ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Download className="h-4 w-4 mr-2" />
              )}
              Trendyol'dan Al
            </Button>
            <Button onClick={() => setShowNewOrderDialog(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Yeni Sipariş
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Sipariş no, müşteri adı veya e-posta..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Tüm Durumlar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Tüm Durumlar</SelectItem>
                  <SelectItem value="pending">Bekliyor</SelectItem>
                  <SelectItem value="processing">Hazırlanıyor</SelectItem>
                  <SelectItem value="shipped">Kargoda</SelectItem>
                  <SelectItem value="delivered">Teslim Edildi</SelectItem>
                  <SelectItem value="cancelled">İptal</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Tüm Kaynaklar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Tüm Kaynaklar</SelectItem>
                  <SelectItem value="manual">Manuel</SelectItem>
                  <SelectItem value="trendyol">Trendyol</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sipariş No</TableHead>
                  <TableHead>Müşteri</TableHead>
                  <TableHead>Kaynak</TableHead>
                  <TableHead>Tutar</TableHead>
                  <TableHead>Durum</TableHead>
                  <TableHead>Tarih</TableHead>
                  <TableHead className="text-right">İşlemler</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      Henüz sipariş bulunmuyor
                    </TableCell>
                  </TableRow>
                ) : (
                  orders.map(order => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.order_number}</TableCell>
                      <TableCell>
                        <div>
                          <div>{order.customer_name}</div>
                          <div className="text-sm text-muted-foreground">{order.customer_phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={order.source === 'trendyol' ? 'default' : 'secondary'}>
                          {order.source === 'trendyol' ? 'Trendyol' : 'Manuel'}
                        </Badge>
                      </TableCell>
                      <TableCell>₺{order.total_amount.toLocaleString('tr-TR')}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[order.status] || ''}>
                          {statusLabels[order.status] || order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString('tr-TR')}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Order Detail Dialog */}
      <Dialog open={showOrderDialog} onOpenChange={setShowOrderDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Sipariş: {selectedOrder?.order_number}
            </DialogTitle>
            <DialogDescription>
              {selectedOrder?.source === 'trendyol' && selectedOrder?.marketplace_order_number && (
                <span>Trendyol Sipariş No: {selectedOrder.marketplace_order_number}</span>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              {/* Status */}
              <div className="flex items-center gap-4">
                <Badge className={statusColors[selectedOrder.status] || ''}>
                  {statusLabels[selectedOrder.status] || selectedOrder.status}
                </Badge>
                {selectedOrder.tracking_number && (
                  <span className="text-sm text-muted-foreground">
                    Takip No: <strong>{selectedOrder.tracking_number}</strong>
                  </span>
                )}
              </div>

              {/* Customer Info */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Müşteri Bilgileri</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-1">
                      <div><strong>Ad:</strong> {selectedOrder.customer_name}</div>
                      <div><strong>Telefon:</strong> {selectedOrder.customer_phone}</div>
                      {selectedOrder.customer_email && (
                        <div><strong>E-posta:</strong> {selectedOrder.customer_email}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Teslimat Adresi</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div>{selectedOrder.shipping_address}</div>
                    <div>{selectedOrder.shipping_district}, {selectedOrder.shipping_city}</div>
                    {selectedOrder.shipping_postal_code && (
                      <div>{selectedOrder.shipping_postal_code}</div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Items */}
              {selectedOrder.items && selectedOrder.items.length > 0 && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Ürünler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ürün</TableHead>
                          <TableHead className="text-right">Adet</TableHead>
                          <TableHead className="text-right">Fiyat</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedOrder.items.map((item, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{item.quantity}</TableCell>
                            <TableCell className="text-right">₺{item.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="text-right mt-4 font-semibold">
                      Toplam: ₺{selectedOrder.total_amount.toLocaleString('tr-TR')}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Shipment Section */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Kargo Bilgileri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {orderShipments.length > 0 ? (
                    <div className="space-y-3">
                      {orderShipments.map(shipment => (
                        <div key={shipment.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <div className="font-medium">{shipment.provider_name}</div>
                            <div className="text-sm text-muted-foreground">
                              Takip No: {shipment.tracking_number}
                            </div>
                            <Badge variant="outline" className="mt-1">
                              {statusLabels[shipment.status] || shipment.status}
                            </Badge>
                          </div>
                          {shipment.label_url && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={shipment.label_url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Takip
                              </a>
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : selectedOrder.status !== 'shipped' && selectedOrder.status !== 'delivered' ? (
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                          <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Kargo Firması Seçin" />
                          </SelectTrigger>
                          <SelectContent>
                            {providers.length === 0 ? (
                              <SelectItem value="" disabled>
                                Aktif kargo sağlayıcısı yok
                              </SelectItem>
                            ) : (
                              providers.map(p => (
                                <SelectItem key={p.code} value={p.code}>
                                  {p.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                        <Button
                          onClick={handleCreateShipment}
                          disabled={!selectedProvider || creatingShipment}
                        >
                          {creatingShipment ? (
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          ) : (
                            <Truck className="h-4 w-4 mr-2" />
                          )}
                          Kargo Oluştur
                        </Button>
                      </div>
                      {providers.length === 0 && (
                        <p className="text-sm text-muted-foreground">
                          Kargo oluşturmak için önce{' '}
                          <a href="/admin/shipping" className="text-primary underline">
                            kargo entegrasyonlarını
                          </a>{' '}
                          yapılandırın.
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Kargo bilgisi bulunamadı</p>
                  )}
                </CardContent>
              </Card>

              {/* Notes */}
              {selectedOrder.notes && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Notlar</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">{selectedOrder.notes}</CardContent>
                </Card>
              )}
            </div>
          )}

          <DialogFooter className="flex justify-between">
            <Button
              variant="destructive"
              onClick={() => selectedOrder && handleDeleteOrder(selectedOrder.id)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Sil
            </Button>
            <Button variant="outline" onClick={() => setShowOrderDialog(false)}>
              Kapat
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New Order Dialog */}
      <Dialog open={showNewOrderDialog} onOpenChange={setShowNewOrderDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Yeni Sipariş Oluştur</DialogTitle>
            <DialogDescription>Manuel sipariş bilgilerini girin</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="customer_name">Müşteri Adı *</Label>
              <Input
                id="customer_name"
                value={newOrder.customer_name}
                onChange={e => setNewOrder(prev => ({ ...prev, customer_name: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="customer_phone">Telefon *</Label>
                <Input
                  id="customer_phone"
                  value={newOrder.customer_phone}
                  onChange={e => setNewOrder(prev => ({ ...prev, customer_phone: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="customer_email">E-posta</Label>
                <Input
                  id="customer_email"
                  type="email"
                  value={newOrder.customer_email}
                  onChange={e => setNewOrder(prev => ({ ...prev, customer_email: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="shipping_address">Teslimat Adresi *</Label>
              <Textarea
                id="shipping_address"
                value={newOrder.shipping_address}
                onChange={e => setNewOrder(prev => ({ ...prev, shipping_address: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="shipping_city">İl *</Label>
                <Input
                  id="shipping_city"
                  value={newOrder.shipping_city}
                  onChange={e => setNewOrder(prev => ({ ...prev, shipping_city: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="shipping_district">İlçe</Label>
                <Input
                  id="shipping_district"
                  value={newOrder.shipping_district}
                  onChange={e => setNewOrder(prev => ({ ...prev, shipping_district: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="total_amount">Tutar (₺)</Label>
                <Input
                  id="total_amount"
                  type="number"
                  value={newOrder.total_amount}
                  onChange={e => setNewOrder(prev => ({ ...prev, total_amount: e.target.value }))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="payment_method">Ödeme</Label>
                <Select
                  value={newOrder.payment_method}
                  onValueChange={v => setNewOrder(prev => ({ ...prev, payment_method: v }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prepaid">Ön Ödemeli</SelectItem>
                    <SelectItem value="cod">Kapıda Ödeme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes">Notlar</Label>
              <Textarea
                id="notes"
                value={newOrder.notes}
                onChange={e => setNewOrder(prev => ({ ...prev, notes: e.target.value }))}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewOrderDialog(false)}>
              İptal
            </Button>
            <Button onClick={handleCreateOrder}>Sipariş Oluştur</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
