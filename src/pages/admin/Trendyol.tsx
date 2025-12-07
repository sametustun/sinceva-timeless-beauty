import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Papa from "papaparse";
import { 
  RefreshCw, Package, ShoppingCart, MessageSquare, 
  CheckCircle, XCircle, Loader2, Download, Upload,
  Send, FileText, AlertCircle, Clock, Settings,
  Link2, Unlink, FileSpreadsheet, Zap, BarChart3,
  TrendingUp, DollarSign, ShoppingBag, Receipt
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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";

const API_URL = import.meta.env.VITE_API_URL || "https://sinceva.com/api";

const CHART_COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

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

interface ProductMapping {
  id: string;
  local_product_id: string;
  trendyol_barcode: string;
  local_product?: {
    id: string;
    name: string;
    barcode?: string;
  };
  trendyol_product?: {
    barcode: string;
    title: string;
    quantity: number;
    salePrice: number;
  };
  created_at: string;
}

interface CSVItem {
  barcode: string;
  quantity: number | null;
  salePrice: number | null;
  listPrice: number | null;
}

interface AnalyticsData {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  statusCounts: Record<string, number>;
  dailyRevenue: Record<string, number>;
  topProducts: Array<{
    barcode: string;
    name: string;
    quantity: number;
    revenue: number;
  }>;
  period: string;
}

interface InvoiceableOrder {
  id: number;
  orderNumber: string;
  status: string;
  totalPrice: number;
  shipmentAddress: {
    firstName: string;
    lastName: string;
    city: string;
  };
  lines: Array<{
    productName: string;
    quantity: number;
  }>;
}

export default function Trendyol() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);
  const [products, setProducts] = useState<TrendyolProduct[]>([]);
  const [orders, setOrders] = useState<TrendyolOrder[]>([]);
  const [questions, setQuestions] = useState<TrendyolQuestion[]>([]);
  const [mappings, setMappings] = useState<ProductMapping[]>([]);
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
  
  // CSV Import
  const [csvDialog, setCsvDialog] = useState(false);
  const [csvData, setCsvData] = useState<CSVItem[]>([]);
  const [csvErrors, setCsvErrors] = useState<string[]>([]);
  const [updateTrendyol, setUpdateTrendyol] = useState(true);
  
  // Filters
  const [orderStatus, setOrderStatus] = useState("");
  const [orderDays, setOrderDays] = useState("7");
  
  // Analytics
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [analyticsDays, setAnalyticsDays] = useState("30");
  
  // E-Invoice
  const [invoiceableOrders, setInvoiceableOrders] = useState<InvoiceableOrder[]>([]);
  const [eInvoiceDialog, setEInvoiceDialog] = useState(false);
  const [selectedEInvoiceOrder, setSelectedEInvoiceOrder] = useState<InvoiceableOrder | null>(null);
  const [eInvoiceNumber, setEInvoiceNumber] = useState("");
  const [eInvoiceDate, setEInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [eInvoiceLink, setEInvoiceLink] = useState("");

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
      if (orderStatus && orderStatus !== 'all') {
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

  const loadMappings = async () => {
    setActionLoading('mappings');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol-products.php?action=mappings`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setMappings(data.data.mappings || []);
      }
    } catch (error) {
      console.error('Failed to load mappings:', error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleAutoMatch = async () => {
    setActionLoading('auto-match');
    try {
      // First sync products from Trendyol
      await fetch(`${API_URL}/admin/trendyol-products.php?action=sync-products`, {
        credentials: 'include'
      });
      
      // Then run auto-match
      const res = await fetch(`${API_URL}/admin/trendyol-products.php?action=auto-match`, {
        method: 'POST',
        credentials: 'include'
      });
      const data = await res.json();
      
      toast({
        title: data.success ? "Otomatik Eşleştirme" : "Hata",
        description: data.message || data.error,
        variant: data.success ? "default" : "destructive"
      });
      
      if (data.success) {
        loadMappings();
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Otomatik eşleştirme başarısız",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleUnmatch = async (mappingId: string) => {
    try {
      const res = await fetch(`${API_URL}/admin/trendyol-products.php?action=unmatch&id=${mappingId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setMappings(mappings.filter(m => m.id !== mappingId));
        toast({ title: "Eşleştirme kaldırıldı" });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Eşleştirme kaldırılamadı",
        variant: "destructive"
      });
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

  // CSV Import Functions
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const items: CSVItem[] = [];
        const errors: string[] = [];

        results.data.forEach((row: any, index: number) => {
          const barcode = String(row.barcode || row.Barkod || row.BARKOD || '').trim();
          const quantity = row.quantity ?? row.stock ?? row.Stok ?? row.STOK ?? row.miktar ?? row.Miktar;
          const salePrice = row.sale_price ?? row.salePrice ?? row.price ?? row.Fiyat ?? row.FİYAT ?? row.fiyat;
          const listPrice = row.list_price ?? row.listPrice ?? row['Liste Fiyatı'] ?? salePrice;

          if (!barcode) {
            errors.push(`Satır ${index + 2}: Barkod eksik`);
            return;
          }

          if (quantity === undefined && salePrice === undefined) {
            errors.push(`Satır ${index + 2}: Stok veya fiyat bilgisi eksik`);
            return;
          }

          items.push({
            barcode,
            quantity: quantity !== undefined ? parseInt(quantity) : null,
            salePrice: salePrice !== undefined ? parseFloat(salePrice) : null,
            listPrice: listPrice !== undefined ? parseFloat(listPrice) : null
          });
        });

        setCsvData(items);
        setCsvErrors(errors);
        setCsvDialog(true);
      },
      error: (error) => {
        toast({
          title: "Hata",
          description: "CSV dosyası okunamadı: " + error.message,
          variant: "destructive"
        });
      }
    });

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCSVImport = async () => {
    if (csvData.length === 0) return;

    setActionLoading('csv-import');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol-products.php?action=import-csv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ data: csvData, update_trendyol: updateTrendyol })
      });
      const data = await res.json();

      if (data.success) {
        let message = `${data.data.parsed} ürün işlendi`;
        if (data.data.trendyol_update?.success) {
          message += `. Trendyol güncelleme isteği gönderildi.`;
        }
        toast({ title: "Import Başarılı", description: message });
        setCsvDialog(false);
        setCsvData([]);
        setCsvErrors([]);
      } else {
        toast({
          title: "Hata",
          description: data.error || "Import başarısız",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "CSV import başarısız",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  const runCronJob = async () => {
    setActionLoading('cron');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol-cron.php?key=sinceva_cron_2024`, {
        credentials: 'include'
      });
      const data = await res.json();

      if (data.success) {
        const message = `Import: ${data.import?.imported || 0} yeni, Sync: ${data.sync?.synced || 0} güncellendi`;
        toast({ title: "Cron Tamamlandı", description: message });
        loadSyncStatus();
      } else {
        toast({
          title: "Hata",
          description: data.error || "Cron çalıştırılamadı",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Cron çalıştırılamadı",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  // Analytics Functions
  const loadAnalytics = async () => {
    setActionLoading('analytics');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=analytics&days=${analyticsDays}`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setAnalytics(data.data);
        toast({ title: "Analitik Yüklendi" });
      } else {
        toast({
          title: "Hata",
          description: data.error || "Analitik yüklenemedi",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Analitik yüklenemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  // E-Invoice Functions
  const loadInvoiceableOrders = async () => {
    setActionLoading('invoiceable');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=invoiceable-orders&days=14`, {
        credentials: 'include'
      });
      const data = await res.json();
      
      if (data.success) {
        setInvoiceableOrders(data.data.orders || []);
        toast({
          title: "Siparişler Yüklendi",
          description: `${data.data.count || 0} fatura bekleyen sipariş`
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

  const handleSendEInvoice = async () => {
    if (!selectedEInvoiceOrder || !eInvoiceNumber) return;
    
    setActionLoading('einvoice');
    try {
      const res = await fetch(`${API_URL}/admin/trendyol.php?action=send-einvoice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          packageId: selectedEInvoiceOrder.id,
          invoiceNumber: eInvoiceNumber,
          invoiceDate: eInvoiceDate,
          invoiceLink: eInvoiceLink
        })
      });
      const data = await res.json();
      
      if (data.success) {
        toast({ title: "E-Fatura Gönderildi", description: data.message });
        setEInvoiceDialog(false);
        setEInvoiceNumber("");
        setEInvoiceLink("");
        setSelectedEInvoiceOrder(null);
        loadInvoiceableOrders();
      } else {
        toast({
          title: "Hata",
          description: data.error || "E-Fatura gönderilemedi",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "E-Fatura gönderilemedi",
        variant: "destructive"
      });
    } finally {
      setActionLoading(null);
    }
  };

  // Chart data preparation
  const getDailyRevenueChartData = () => {
    if (!analytics?.dailyRevenue) return [];
    return Object.entries(analytics.dailyRevenue).map(([date, revenue]) => ({
      date: new Date(date).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit' }),
      revenue
    }));
  };

  const getStatusChartData = () => {
    if (!analytics?.statusCounts) return [];
    const statusLabels: Record<string, string> = {
      'Created': 'Oluşturuldu',
      'Picking': 'Hazırlanıyor',
      'Invoiced': 'Faturalandı',
      'Shipped': 'Kargoda',
      'Delivered': 'Teslim Edildi',
      'Cancelled': 'İptal'
    };
    return Object.entries(analytics.statusCounts).map(([status, count]) => ({
      name: statusLabels[status] || status,
      value: count
    }));
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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Trendyol Entegrasyonu</h1>
          <p className="text-muted-foreground">Ürün, sipariş ve müşteri soru yönetimi</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant="outline" 
            onClick={runCronJob}
            disabled={actionLoading === 'cron'}
          >
            {actionLoading === 'cron' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Zap className="h-4 w-4 mr-2" />
            )}
            Senkronize Et
          </Button>
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

      <Tabs defaultValue="analytics" className="space-y-4">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="analytics" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Analitik
          </TabsTrigger>
          <TabsTrigger value="einvoice" className="gap-2">
            <Receipt className="h-4 w-4" />
            E-Fatura
          </TabsTrigger>
          <TabsTrigger value="products" className="gap-2">
            <Package className="h-4 w-4" />
            Ürünler
          </TabsTrigger>
          <TabsTrigger value="stock" className="gap-2">
            <FileSpreadsheet className="h-4 w-4" />
            Toplu Stok
          </TabsTrigger>
          <TabsTrigger value="matching" className="gap-2">
            <Link2 className="h-4 w-4" />
            Eşleştirme
          </TabsTrigger>
          <TabsTrigger value="orders" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Siparişler
          </TabsTrigger>
          <TabsTrigger value="questions" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Sorular
          </TabsTrigger>
        </TabsList>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle>Satış Analitikleri</CardTitle>
                  <CardDescription>Trendyol satış performansınızı analiz edin</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select value={analyticsDays} onValueChange={setAnalyticsDays}>
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">Son 7 gün</SelectItem>
                      <SelectItem value="14">Son 14 gün</SelectItem>
                      <SelectItem value="30">Son 30 gün</SelectItem>
                      <SelectItem value="60">Son 60 gün</SelectItem>
                      <SelectItem value="90">Son 90 gün</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button 
                    onClick={loadAnalytics}
                    disabled={actionLoading === 'analytics'}
                  >
                    {actionLoading === 'analytics' ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <BarChart3 className="h-4 w-4 mr-2" />
                    )}
                    Verileri Getir
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {!analytics ? (
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p>Analitik verilerini görüntülemek için "Verileri Getir" butonuna tıklayın</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Summary Cards */}
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Toplam Sipariş</p>
                            <p className="text-3xl font-bold">{analytics.totalOrders}</p>
                          </div>
                          <ShoppingBag className="h-10 w-10 text-primary opacity-50" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Toplam Gelir</p>
                            <p className="text-3xl font-bold">{analytics.totalRevenue.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} ₺</p>
                          </div>
                          <DollarSign className="h-10 w-10 text-green-500 opacity-50" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Ortalama Sipariş</p>
                            <p className="text-3xl font-bold">{analytics.averageOrderValue.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} ₺</p>
                          </div>
                          <TrendingUp className="h-10 w-10 text-blue-500 opacity-50" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Dönem</p>
                            <p className="text-3xl font-bold">{analyticsDays} gün</p>
                          </div>
                          <Clock className="h-10 w-10 text-purple-500 opacity-50" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Charts */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Günlük Gelir</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={getDailyRevenueChartData()}>
                              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                              <XAxis dataKey="date" className="text-xs" />
                              <YAxis className="text-xs" tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                              <Tooltip 
                                formatter={(value: number) => [`${value.toLocaleString('tr-TR')} ₺`, 'Gelir']}
                                contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="revenue" 
                                stroke="hsl(var(--primary))" 
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Sipariş Durumu Dağılımı</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={getStatusChartData()}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                              >
                                {getStatusChartData().map((_, index) => (
                                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Top Products */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">En Çok Satan Ürünler</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {analytics.topProducts.length === 0 ? (
                        <p className="text-muted-foreground text-center py-4">Veri bulunamadı</p>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>#</TableHead>
                              <TableHead>Ürün Adı</TableHead>
                              <TableHead className="text-right">Adet</TableHead>
                              <TableHead className="text-right">Gelir</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {analytics.topProducts.map((product, index) => (
                              <TableRow key={product.barcode}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell className="max-w-xs truncate">{product.name}</TableCell>
                                <TableCell className="text-right">{product.quantity}</TableCell>
                                <TableCell className="text-right font-medium">
                                  {product.revenue.toLocaleString('tr-TR', { maximumFractionDigits: 0 })} ₺
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* E-Invoice Tab */}
        <TabsContent value="einvoice" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle>E-Fatura / E-Arşiv Yönetimi</CardTitle>
                  <CardDescription>Trendyol siparişlerinize e-fatura bilgilerini gönderin</CardDescription>
                </div>
                <Button 
                  onClick={loadInvoiceableOrders}
                  disabled={actionLoading === 'invoiceable'}
                >
                  {actionLoading === 'invoiceable' ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-2" />
                  )}
                  Siparişleri Getir
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {invoiceableOrders.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Receipt className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p className="mb-2">Fatura bekleyen siparişleri görüntülemek için butona tıklayın</p>
                  <p className="text-sm">Son 14 günün "Created" ve "Picking" durumundaki siparişleri listelenir</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">E-Fatura/E-Arşiv Entegrasyonu</h4>
                    <p className="text-sm text-muted-foreground">
                      Bu bölümde Trendyol'dan gelen siparişlere e-fatura veya e-arşiv fatura bilgilerini gönderebilirsiniz.
                      Fatura numarası ve tarihi zorunludur. Opsiyonel olarak fatura PDF linki de ekleyebilirsiniz.
                    </p>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sipariş No</TableHead>
                        <TableHead>Müşteri</TableHead>
                        <TableHead>Ürünler</TableHead>
                        <TableHead>Tutar</TableHead>
                        <TableHead>Durum</TableHead>
                        <TableHead>İşlem</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoiceableOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-mono">{order.orderNumber}</TableCell>
                          <TableCell>
                            {order.shipmentAddress?.firstName} {order.shipmentAddress?.lastName}
                            <div className="text-xs text-muted-foreground">{order.shipmentAddress?.city}</div>
                          </TableCell>
                          <TableCell>
                            <div className="max-w-xs">
                              {order.lines?.slice(0, 2).map((line, i) => (
                                <div key={i} className="text-sm truncate">
                                  {line.quantity}x {line.productName}
                                </div>
                              ))}
                              {(order.lines?.length || 0) > 2 && (
                                <div className="text-xs text-muted-foreground">+{order.lines.length - 2} ürün daha</div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{order.totalPrice?.toFixed(2)} ₺</TableCell>
                          <TableCell>{getStatusBadge(order.status)}</TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              onClick={() => {
                                setSelectedEInvoiceOrder(order);
                                setEInvoiceDialog(true);
                              }}
                            >
                              <Receipt className="h-4 w-4 mr-2" />
                              Fatura Gir
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
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

        {/* Bulk Stock Tab */}
        <TabsContent value="stock" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle>Toplu Stok ve Fiyat Güncelleme</CardTitle>
                  <CardDescription>
                    CSV dosyası ile toplu stok ve fiyat güncellemesi yapın
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.txt"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button onClick={() => fileInputRef.current?.click()}>
                    <FileSpreadsheet className="h-4 w-4 mr-2" />
                    CSV Yükle
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">CSV Format Bilgisi</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    CSV dosyanızda aşağıdaki sütunlar bulunmalıdır:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-sm mb-1">Desteklenen Sütun İsimleri:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Barkod: <code>barcode, Barkod, BARKOD</code></li>
                        <li>• Stok: <code>quantity, stock, Stok, STOK, miktar</code></li>
                        <li>• Satış Fiyatı: <code>sale_price, salePrice, price, Fiyat</code></li>
                        <li>• Liste Fiyatı: <code>list_price, listPrice</code></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-sm mb-1">Örnek CSV:</h5>
                      <pre className="text-xs bg-background p-2 rounded">
{`barcode,quantity,sale_price
8680001234567,50,199.90
8680001234568,100,249.90`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Otomatik Senkronizasyon (Cron Job)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Sipariş durumlarını otomatik olarak güncellemek için aşağıdaki URL'yi cron job olarak ekleyin:
                  </p>
                  <code className="text-xs bg-muted p-2 rounded block break-all">
                    {API_URL}/admin/trendyol-cron.php?key=sinceva_cron_2024
                  </code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Önerilen: Her 5 dakikada bir çalıştırın (*/5 * * * *)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Product Matching Tab */}
        <TabsContent value="matching" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle>Ürün Eşleştirme</CardTitle>
                  <CardDescription>Lokal ürünleri Trendyol ürünleriyle barkod bazlı eşleştirin</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={loadMappings}
                    disabled={actionLoading === 'mappings'}
                  >
                    {actionLoading === 'mappings' ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4 mr-2" />
                    )}
                    Yenile
                  </Button>
                  <Button 
                    onClick={handleAutoMatch}
                    disabled={actionLoading === 'auto-match'}
                  >
                    {actionLoading === 'auto-match' ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Link2 className="h-4 w-4 mr-2" />
                    )}
                    Otomatik Eşleştir
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {mappings.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Link2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-2">Henüz eşleştirme yok</p>
                  <p className="text-sm">
                    "Otomatik Eşleştir" butonuna tıklayarak barkod bazlı eşleştirme yapabilirsiniz
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Lokal Ürün</TableHead>
                      <TableHead>Trendyol Barkod</TableHead>
                      <TableHead>Trendyol Ürün</TableHead>
                      <TableHead>Stok</TableHead>
                      <TableHead>Fiyat</TableHead>
                      <TableHead>İşlem</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mappings.map((mapping) => (
                      <TableRow key={mapping.id}>
                        <TableCell>{mapping.local_product?.name || '-'}</TableCell>
                        <TableCell className="font-mono text-sm">{mapping.trendyol_barcode}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {mapping.trendyol_product?.title || '-'}
                        </TableCell>
                        <TableCell>{mapping.trendyol_product?.quantity ?? '-'}</TableCell>
                        <TableCell>
                          {mapping.trendyol_product?.salePrice?.toFixed(2) ?? '-'} ₺
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUnmatch(mapping.id)}
                          >
                            <Unlink className="h-4 w-4" />
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

        {/* Orders Tab */}
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <CardTitle>Trendyol Siparişleri</CardTitle>
                  <CardDescription>Trendyol siparişlerini görüntüleyin ve sisteme aktarın</CardDescription>
                </div>
                <div className="flex gap-2 flex-wrap">
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

      {/* CSV Import Dialog */}
      <Dialog open={csvDialog} onOpenChange={setCsvDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>CSV Import Önizleme</DialogTitle>
            <DialogDescription>
              {csvData.length} ürün bulundu
              {csvErrors.length > 0 && `, ${csvErrors.length} hata`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4 max-h-96 overflow-auto">
            {csvErrors.length > 0 && (
              <div className="p-3 bg-destructive/10 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">Hatalar:</h4>
                <ul className="text-sm text-destructive space-y-1">
                  {csvErrors.slice(0, 5).map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                  {csvErrors.length > 5 && (
                    <li>... ve {csvErrors.length - 5} hata daha</li>
                  )}
                </ul>
              </div>
            )}
            
            {csvData.length > 0 && (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Barkod</TableHead>
                    <TableHead>Stok</TableHead>
                    <TableHead>Satış Fiyatı</TableHead>
                    <TableHead>Liste Fiyatı</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {csvData.slice(0, 10).map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-mono text-sm">{item.barcode}</TableCell>
                      <TableCell>{item.quantity ?? '-'}</TableCell>
                      <TableCell>{item.salePrice?.toFixed(2) ?? '-'} ₺</TableCell>
                      <TableCell>{item.listPrice?.toFixed(2) ?? '-'} ₺</TableCell>
                    </TableRow>
                  ))}
                  {csvData.length > 10 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground">
                        ... ve {csvData.length - 10} ürün daha
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}

            <div className="flex items-center space-x-2 pt-4 border-t">
              <Switch
                id="update-trendyol"
                checked={updateTrendyol}
                onCheckedChange={setUpdateTrendyol}
              />
              <Label htmlFor="update-trendyol">
                Trendyol'a otomatik gönder
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCsvDialog(false)}>
              İptal
            </Button>
            <Button 
              onClick={handleCSVImport}
              disabled={csvData.length === 0 || actionLoading === 'csv-import'}
            >
              {actionLoading === 'csv-import' && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {updateTrendyol ? 'Import & Trendyol Güncelle' : 'Sadece Import'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* E-Invoice Dialog */}
      <Dialog open={eInvoiceDialog} onOpenChange={setEInvoiceDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>E-Fatura / E-Arşiv Bilgisi</DialogTitle>
            <DialogDescription>
              Sipariş No: {selectedEInvoiceOrder?.orderNumber}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="einvoice-number">Fatura Numarası *</Label>
              <Input
                id="einvoice-number"
                placeholder="ABC2024000001"
                value={eInvoiceNumber}
                onChange={(e) => setEInvoiceNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="einvoice-date">Fatura Tarihi *</Label>
              <Input
                id="einvoice-date"
                type="date"
                value={eInvoiceDate}
                onChange={(e) => setEInvoiceDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="einvoice-link">Fatura Linki (Opsiyonel)</Label>
              <Input
                id="einvoice-link"
                placeholder="https://fatura.orneksite.com/fatura.pdf"
                value={eInvoiceLink}
                onChange={(e) => setEInvoiceLink(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                E-Arşiv fatura PDF'inin erişilebilir URL'si
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEInvoiceDialog(false)}>
              İptal
            </Button>
            <Button 
              onClick={handleSendEInvoice}
              disabled={!eInvoiceNumber || actionLoading === 'einvoice'}
            >
              {actionLoading === 'einvoice' && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Fatura Gönder
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
