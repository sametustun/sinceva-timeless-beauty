import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  RefreshCw, Package, ShoppingCart, MessageSquare, 
  CheckCircle, XCircle, Loader2, Download, Upload,
  Send, FileText, AlertCircle, Clock, Settings
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "https://sinceva.com/api";

interface SyncStatus {
  configured: boolean;
  lastProductSync: string | null;
  lastOrderSync: string | null;
  syncedProductCount: number;
  recentErrors: Array<{ time: string; type: string; error: string }>;
}

interface TrendyolProduct {
  barcode: string;
  title: string;
  productCode: string;
  stockCode: string;
  quantity: number;
  salePrice: number;
  listPrice: number;
  approved: boolean;
  onSale: boolean;
  images: Array<{ url: string }>;
}

interface TrendyolOrder {
  id: number;
  orderNumber: string;
  status: string;
  totalPrice: number;
  cargoProviderName: string;
  cargoTrackingNumber: string;
  shipmentAddress: {
    firstName: string;
    lastName: string;
    city: string;
  };
  lines: Array<{
    productName: string;
    quantity: number;
    price: number;
  }>;
}

interface TrendyolQuestion {
  id: number;
  productName: string;
  text: string;
  createdDate: number;
  status: string;
  customerId: number;
}

export default function Trendyol() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);
  const [products, setProducts] = useState<TrendyolProduct[]>([]);
  const [orders, setOrders] = useState<TrendyolOrder[]>([]);
  const [questions, setQuestions] = useState<TrendyolQuestion[]>([]);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  // Stock update dialog
  const [stockDialog, setStockDialog] = useState(false);
  const [stockItems, setStockItems] = useState<Array<{barcode: string; quantity: number; salePrice: number}>>([]);
  
  // Invoice dialog
  const [invoiceDialog, setInvoiceDialog] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);
  const [invoiceLink, setInvoiceLink] = useState("");
  
  // Question answer dialog
  const [answerDialog, setAnswerDialog] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<TrendyolQuestion | null>(null);
  const [answerText, setAnswerText] = useState("");
  
  // Filters
  const [orderStatus, setOrderStatus] = useState("");
  const [orderDays, setOrderDays] = useState("7");

  useEffect(() => {
    loadSyncStatus();
  }, []);

  const loadSyncStatus = async () => {
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=sync-status`, {
        credentials: 'include'
      });
      const data = await res.json();
      if (data.success) {
        setSyncStatus(data.data);
      }
    } catch (error) {
      console.error('Failed to load sync status:', error);
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async () => {
    setActionLoading('test');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=test-connection`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      toast({
        title: data.success ? "Bağlantı Başarılı" : "Bağlantı Hatası",
        description: data.message || data.error,
        variant: data.success ? "default" : "destructive"
      });
    } catch (error) {
      toast({
        title: "Hata",
        description: "Bağlantı test edilemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const loadProducts = async () => {
    setActionLoading('products');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=products&size=100`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setProducts(data.data.products || []);
        toast({
          title: "Ürünler Yüklendi",
          description: `${data.data.products?.length || 0} ürün listelendi`
        });
      } else {
        toast({
          title: "Hata",
          description: data.error || "Ürünler yüklenemedi",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Ürünler yüklenemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const loadOrders = async () => {
    setActionLoading('orders');
    try {
      const params = new URLSearchParams({
        action: 'orders',
        days: orderDays,
        size: '100'
      });
      if (orderStatus) {
        params.append('status', orderStatus);
      }
      
      const res = await fetch(`${API_URL}/admin/trendyol.php?${params}`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setOrders(data.data.orders || []);
        toast({
          title: "Siparişler Yüklendi",
          description: `${data.data.orders?.length || 0} sipariş listelendi`
        });
      } else {
        toast({
          title: "Hata",
          description: data.error || "Siparişler yüklenemedi",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Siparişler yüklenemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const importOrders = async () => {
    setActionLoading('import');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=import-orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ days: parseInt(orderDays) })
      });
      const data = await res.json();
      
      toast({
        title: data.success ? "Import Tamamlandı" : "Hata",
        description: data.message || data.error,
        variant: data.success ? "default" : "destructive"
      });
      
      if (data.success) {
        loadSyncStatus();
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Siparişler import edilemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const loadQuestions = async () => {
    setActionLoading('questions');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=questions`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setQuestions(data.data.questions || []);
        toast({
          title: "Sorular Yüklendi",
          description: `${data.data.questions?.length || 0} soru listelendi`
        });
      } else {
        toast({
          title: "Hata",
          description: data.error || "Sorular yüklenemedi",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Sorular yüklenemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleUpdateStock = async () => {
    if (stockItems.length === 0) return;
    
    setActionLoading('stock');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=update-stock`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ items: stockItems })
      });
      const data = await res.json();
      
      toast({
        title: data.success ? "Güncelleme Başarılı" : "Hata",
        description: data.message || data.error,
        variant: data.success ? "default" : "destructive"
      });
      
      if (data.success) {
        setStockDialog(false);
        setStockItems([]);
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Stok güncellenemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleSendInvoice = async () => {
    if (!selectedPackageId || !invoiceLink) return;
    
    setActionLoading('invoice');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=send-invoice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ packageId: selectedPackageId, invoiceLink })
      });
      const data = await res.json();
      
      toast({
        title: data.success ? "Fatura Gönderildi" : "Hata",
        description: data.message || data.error,
        variant: data.success ? "default" : "destructive"
      });
      
      if (data.success) {
        setInvoiceDialog(false);
        setInvoiceLink("");
        setSelectedPackageId(null);
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Fatura gönderilemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleAnswerQuestion = async () => {
    if (!selectedQuestion || !answerText) return;
    
    setActionLoading('answer');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=answer-question`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ questionId: selectedQuestion.id, answer: answerText })
      });
      const data = await res.json();
      
      toast({
        title: data.success ? "Cevap Gönderildi" : "Hata",
        description: data.message || data.error,
        variant: data.success ? "default" : "destructive"
      });
      
      if (data.success) {
        setAnswerDialog(false);
        setAnswerText("");
        setSelectedQuestion(null);
        loadQuestions();
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Cevap gönderilemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (timestamp: number | string) => {
    const date = typeof timestamp === 'number' ? new Date(timestamp) : new Date(timestamp);
    return date.toLocaleDateString('tr-TR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
      'Created': { label: 'Oluşturuldu', variant: 'secondary' },
      'Picking': { label: 'Hazırlanıyor', variant: 'default' },
      'Invoiced': { label: 'Faturalandı', variant: 'default' },
      'Shipped': { label: 'Kargoda', variant: 'default' },
      'Delivered': { label: 'Teslim Edildi', variant: 'default' },
      'Cancelled': { label: 'İptal', variant: 'destructive' },
      'UnDelivered': { label: 'Teslim Edilemedi', variant: 'destructive' },
    };
    
    const config = statusMap[status] || { label: status, variant: 'outline' as const };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!syncStatus?.configured) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Trendyol Entegrasyonu</h1>
          <p className="text-muted-foreground">Trendyol Marketplace API entegrasyonu</p>
        </div>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">API Yapılandırması Gerekli</h3>
            <p className="text-muted-foreground text-center mb-4">
              Trendyol entegrasyonunu kullanmak için önce API bilgilerinizi girmeniz gerekmektedir.
            </p>
            <Button asChild>
              <Link to="/admin/settings">
                <Settings className="h-4 w-4 mr-2" />
                Ayarlara Git
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Trendyol Entegrasyonu</h1>
          <p className="text-muted-foreground">Ürün, sipariş ve müşteri soru yönetimi</p>
        </div>
        <Button 
          variant="outline" 
          onClick={testConnection}
          disabled={actionLoading === 'test'}
        >
          {actionLoading === 'test' ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4 mr-2" />
          )}
          Bağlantıyı Test Et
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Son Ürün Senkronizasyonu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {syncStatus.lastProductSync 
                  ? formatDate(syncStatus.lastProductSync)
                  : 'Henüz yapılmadı'}
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Son Sipariş Senkronizasyonu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {syncStatus.lastOrderSync 
                  ? formatDate(syncStatus.lastOrderSync)
                  : 'Henüz yapılmadı'}
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Senkronize Ürün
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{syncStatus.syncedProductCount}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Son Hatalar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {syncStatus.recentErrors.length > 0 ? (
                <>
                  <XCircle className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-destructive">
                    {syncStatus.recentErrors.length} hata
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">Hata yok</span>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList>
          <TabsTrigger value="products" className="gap-2">
            <Package className="h-4 w-4" />
            Ürünler
          </TabsTrigger>
          <TabsTrigger value="orders" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Siparişler
          </TabsTrigger>
          <TabsTrigger value="questions" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Müşteri Soruları
          </TabsTrigger>
        </TabsList>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Trendyol Ürünleri</CardTitle>
                  <CardDescription>Trendyol'daki ürünlerinizi görüntüleyin ve yönetin</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => setStockDialog(true)}
                    disabled={products.length === 0}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Stok Güncelle
                  </Button>
                  <Button 
                    onClick={loadProducts}
                    disabled={actionLoading === 'products'}
                  >
                    {actionLoading === 'products' ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4 mr-2" />
                    )}
                    Ürünleri Getir
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {products.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Ürünleri görüntülemek için "Ürünleri Getir" butonuna tıklayın
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Görsel</TableHead>
                      <TableHead>Barkod</TableHead>
                      <TableHead>Ürün Adı</TableHead>
                      <TableHead>Stok</TableHead>
                      <TableHead>Fiyat</TableHead>
                      <TableHead>Durum</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.barcode}>
                        <TableCell>
                          {product.images?.[0]?.url ? (
                            <img 
                              src={product.images[0].url} 
                              alt={product.title}
                              className="h-12 w-12 object-cover rounded"
                            />
                          ) : (
                            <div className="h-12 w-12 bg-muted rounded flex items-center justify-center">
                              <Package className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{product.barcode}</TableCell>
                        <TableCell className="max-w-xs truncate">{product.title}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.salePrice?.toFixed(2)} ₺</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {product.approved && <Badge variant="default">Onaylı</Badge>}
                            {product.onSale && <Badge variant="secondary">Satışta</Badge>}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Trendyol Siparişleri</CardTitle>
                  <CardDescription>Trendyol siparişlerini görüntüleyin ve sisteme aktarın</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select value={orderDays} onValueChange={setOrderDays}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Son 1 gün</SelectItem>
                      <SelectItem value="3">Son 3 gün</SelectItem>
                      <SelectItem value="7">Son 7 gün</SelectItem>
                      <SelectItem value="14">Son 14 gün</SelectItem>
                      <SelectItem value="30">Son 30 gün</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={orderStatus} onValueChange={setOrderStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Tüm durumlar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm durumlar</SelectItem>
                      <SelectItem value="Created">Oluşturuldu</SelectItem>
                      <SelectItem value="Picking">Hazırlanıyor</SelectItem>
                      <SelectItem value="Invoiced">Faturalandı</SelectItem>
                      <SelectItem value="Shipped">Kargoda</SelectItem>
                      <SelectItem value="Delivered">Teslim Edildi</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="outline"
                    onClick={importOrders}
                    disabled={actionLoading === 'import'}
                  >
                    {actionLoading === 'import' ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4 mr-2" />
                    )}
                    Sisteme Aktar
                  </Button>
                  <Button 
                    onClick={loadOrders}
                    disabled={actionLoading === 'orders'}
                  >
                    {actionLoading === 'orders' ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4 mr-2" />
                    )}
                    Siparişleri Getir
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Siparişleri görüntülemek için "Siparişleri Getir" butonuna tıklayın
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Sipariş No</TableHead>
                      <TableHead>Müşteri</TableHead>
                      <TableHead>Ürünler</TableHead>
                      <TableHead>Tutar</TableHead>
                      <TableHead>Durum</TableHead>
                      <TableHead>Kargo</TableHead>
                      <TableHead>İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-mono">{order.orderNumber}</TableCell>
                        <TableCell>
                          <div>
                            {order.shipmentAddress?.firstName} {order.shipmentAddress?.lastName}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {order.shipmentAddress?.city}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-xs">
                            {order.lines?.map((line, i) => (
                              <div key={i} className="text-sm truncate">
                                {line.quantity}x {line.productName}
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{order.totalPrice?.toFixed(2)} ₺</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {order.cargoProviderName || '-'}
                          </div>
                          {order.cargoTrackingNumber && (
                            <div className="text-xs text-muted-foreground font-mono">
                              {order.cargoTrackingNumber}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedPackageId(order.id);
                              setInvoiceDialog(true);
                            }}
                          >
                            <FileText className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Questions Tab */}
        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Müşteri Soruları</CardTitle>
                  <CardDescription>Trendyol'dan gelen müşteri sorularını cevaplayın</CardDescription>
                </div>
                <Button 
                  onClick={loadQuestions}
                  disabled={actionLoading === 'questions'}
                >
                  {actionLoading === 'questions' ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-2" />
                  )}
                  Soruları Getir
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {questions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Soruları görüntülemek için "Soruları Getir" butonuna tıklayın
                </div>
              ) : (
                <div className="space-y-4">
                  {questions.map((question) => (
                    <Card key={question.id}>
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{question.productName}</Badge>
                              <span className="text-xs text-muted-foreground">
                                {formatDate(question.createdDate)}
                              </span>
                            </div>
                            <p className="text-sm">{question.text}</p>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedQuestion(question);
                              setAnswerDialog(true);
                            }}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Cevapla
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Stock Update Dialog */}
      <Dialog open={stockDialog} onOpenChange={setStockDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Stok ve Fiyat Güncelle</DialogTitle>
            <DialogDescription>
              Seçili ürünlerin stok ve fiyat bilgilerini güncelleyin
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {stockItems.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Güncellemek istediğiniz ürünleri ekleyin
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    const items = products.slice(0, 5).map(p => ({
                      barcode: p.barcode,
                      quantity: p.quantity,
                      salePrice: p.salePrice
                    }));
                    setStockItems(items);
                  }}
                >
                  İlk 5 Ürünü Ekle
                </Button>
              </div>
            ) : (
              stockItems.map((item, index) => (
                <div key={item.barcode} className="grid grid-cols-3 gap-2">
                  <Input value={item.barcode} disabled className="font-mono text-xs" />
                  <Input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => {
                      const newItems = [...stockItems];
                      newItems[index].quantity = parseInt(e.target.value) || 0;
                      setStockItems(newItems);
                    }}
                    placeholder="Stok"
                  />
                  <Input 
                    type="number" 
                    step="0.01"
                    value={item.salePrice}
                    onChange={(e) => {
                      const newItems = [...stockItems];
                      newItems[index].salePrice = parseFloat(e.target.value) || 0;
                      setStockItems(newItems);
                    }}
                    placeholder="Fiyat"
                  />
                </div>
              ))
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setStockDialog(false)}>
              İptal
            </Button>
            <Button 
              onClick={handleUpdateStock}
              disabled={stockItems.length === 0 || actionLoading === 'stock'}
            >
              {actionLoading === 'stock' && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Güncelle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Invoice Dialog */}
      <Dialog open={invoiceDialog} onOpenChange={setInvoiceDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Fatura Gönder</DialogTitle>
            <DialogDescription>
              Sipariş için fatura linkini gönderin
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="https://fatura.orneksite.com/fatura.pdf"
              value={invoiceLink}
              onChange={(e) => setInvoiceLink(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setInvoiceDialog(false)}>
              İptal
            </Button>
            <Button 
              onClick={handleSendInvoice}
              disabled={!invoiceLink || actionLoading === 'invoice'}
            >
              {actionLoading === 'invoice' && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Gönder
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Answer Question Dialog */}
      <Dialog open={answerDialog} onOpenChange={setAnswerDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Soruyu Cevapla</DialogTitle>
            <DialogDescription>
              {selectedQuestion?.productName}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">{selectedQuestion?.text}</p>
            </div>
            <Textarea
              placeholder="Cevabınızı yazın..."
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAnswerDialog(false)}>
              İptal
            </Button>
            <Button 
              onClick={handleAnswerQuestion}
              disabled={!answerText || actionLoading === 'answer'}
            >
              {actionLoading === 'answer' && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Cevabı Gönder
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
