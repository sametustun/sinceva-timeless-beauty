import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Mail, FileText, Package, TrendingUp, Clock, Eye, ArrowRight, Image as ImageIcon, BarChart3, CheckCircle, XCircle, ExternalLink, Activity, Globe, MousePointer, Target, Zap, Settings, Search } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
interface Stats {
  summary: {
    subscribers: { total: number; confirmed: number; pending: number; new_this_week: number };
    contacts: { total: number; unread: number; replied: number; new_this_week: number };
    blog: { total: number; published: number; draft: number };
    products: { total: number; active: number; featured: number };
  };
  charts: {
    labels: string[];
    subscribers: number[];
    contacts: number[];
    cumulative_subscribers: number[];
  };
  featured_products: Array<{
    id: string;
    name: string;
    category: string;
    image: string;
  }>;
  recent_activity: {
    subscribers: Array<{ email: string; confirmed: boolean; created_at: string }>;
    contacts: Array<{ name: string; email: string; read: boolean; created_at: string }>;
  };
  recent_products?: Array<{
    id: string;
    name: { tr: string; en: string; ar: string };
    category: string;
    images: string[];
    created_at: string;
  }>;
  recent_posts?: Array<{
    id: string;
    title: { tr: string; en: string; ar: string };
    category: string;
    image: string;
    published: boolean;
    created_at: string;
  }>;
}

const API_BASE = 'https://sinceva.com/backend/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch stats, products, and blog posts in parallel
        const [statsRes, productsRes, postsRes] = await Promise.all([
          fetch(`${API_BASE}/stats.php?days=7`, { credentials: 'include' }),
          fetch(`${API_BASE}/products.php`, { credentials: 'include' }),
          fetch(`${API_BASE}/blog.php`, { credentials: 'include' }),
        ]);

        const [statsData, productsData, postsData] = await Promise.all([
          statsRes.json(),
          productsRes.json(),
          postsRes.json(),
        ]);

        if (statsData.success) {
          setStats(statsData);
        }

        if (productsData.success && productsData.products) {
          // Get last 5 products sorted by created_at
          const sorted = [...productsData.products]
            .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 5);
          setRecentProducts(sorted);
        }

        if (postsData.success && postsData.posts) {
          // Get last 5 posts sorted by created_at
          const sorted = [...postsData.posts]
            .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 5);
          setRecentPosts(sorted);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Prepare chart data
  const chartData = stats?.charts.labels.map((label, index) => ({
    name: label,
    subscribers: stats.charts.subscribers[index] || 0,
    contacts: stats.charts.contacts[index] || 0,
    total: stats.charts.cumulative_subscribers[index] || 0,
  })) || [];

  const statCards = [
    {
      title: 'Toplam Abone',
      value: stats?.summary.subscribers.total || 0,
      description: `+${stats?.summary.subscribers.new_this_week || 0} bu hafta`,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'İletişim Mesajları',
      value: stats?.summary.contacts.total || 0,
      description: `${stats?.summary.contacts.unread || 0} okunmamış`,
      icon: Mail,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Blog Yazıları',
      value: stats?.summary.blog.total || 0,
      description: `${stats?.summary.blog.published || 0} yayında`,
      icon: FileText,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Ürünler',
      value: stats?.summary.products.total || 0,
      description: `${stats?.summary.products.featured || 0} öne çıkan`,
      icon: Package,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          SincEva yönetim paneline hoş geldiniz
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {isLoading ? '...' : stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Subscriber Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Abone Artışı
            </CardTitle>
            <CardDescription>
              Son 7 günlük abone sayısı
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Yükleniyor...
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="subscriberGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      className="text-xs fill-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="total" 
                      stroke="hsl(var(--primary))" 
                      fill="url(#subscriberGradient)"
                      strokeWidth={2}
                      name="Toplam Abone"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Daily Activity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-green-500" />
              Günlük Aktivite
            </CardTitle>
            <CardDescription>
              Yeni aboneler ve iletişim mesajları
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              {isLoading ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Yükleniyor...
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="name" 
                      className="text-xs fill-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground"
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar 
                      dataKey="subscribers" 
                      fill="hsl(var(--primary))" 
                      name="Yeni Aboneler"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="contacts" 
                      fill="#22c55e" 
                      name="İletişim Mesajları"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Items Row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Products */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-orange-500" />
                Son Eklenen Ürünler
              </CardTitle>
              <CardDescription>
                En son eklenen 5 ürün
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/products" className="flex items-center gap-1">
                Tümünü Gör
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-4 text-muted-foreground">Yükleniyor...</div>
              ) : recentProducts.length > 0 ? (
                recentProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={product.name?.tr || product.name?.en}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{product.name?.tr || product.name?.en}</p>
                      <div className="flex items-center gap-2">
                        {product.category && (
                          <Badge variant="outline" className="text-xs">{product.category}</Badge>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {new Date(product.created_at).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  Henüz ürün yok
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Recent Blog Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                Son Blog Yazıları
              </CardTitle>
              <CardDescription>
                En son eklenen 5 blog yazısı
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/blog" className="flex items-center gap-1">
                Tümünü Gör
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-4 text-muted-foreground">Yükleniyor...</div>
              ) : recentPosts.length > 0 ? (
                recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title?.tr || post.title?.en}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{post.title?.tr || post.title?.en}</p>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={post.published ? 'default' : 'secondary'} 
                          className="text-xs"
                        >
                          {post.published ? 'Yayında' : 'Taslak'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.created_at).toLocaleDateString('tr-TR')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  Henüz yazı yok
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Featured Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-orange-500" />
              Öne Çıkan Ürünler
            </CardTitle>
            <CardDescription>
              Öne çıkarılmış ürünler
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-4 text-muted-foreground">Yükleniyor...</div>
              ) : stats?.featured_products && stats.featured_products.length > 0 ? (
                stats.featured_products.map((product, index) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    {product.image && (
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-muted-foreground">
                  Öne çıkan ürün yok
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Dashboard */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Analitik & İzleme Paneli
              </CardTitle>
              <CardDescription>
                Tüm izleme araçları ve entegrasyonların durumu
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/settings" className="flex items-center gap-1">
                <Settings className="h-4 w-4 mr-1" />
                Ayarlar
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <AnalyticsDashboard />
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Sistem Durumu
            </CardTitle>
            <CardDescription>
              Sunucu ve API durumu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">API Durumu</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-green-600">Aktif</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Veritabanı</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-green-600">Bağlı</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">E-posta Servisi</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium text-green-600">Çalışıyor</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Yanıtlanan Mesajlar</span>
                <span className="font-medium">
                  {stats?.summary.contacts.replied || 0} / {stats?.summary.contacts.total || 0}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Analytics Dashboard Component
function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('realtime');
  const [realtimeData, setRealtimeData] = useState({
    activeUsers: 0,
    pageViews: 0,
    avgSessionDuration: '0:00',
    bounceRate: 0,
    topPages: [] as { page: string; views: number; percentage: number }[],
    trafficSources: [] as { source: string; users: number; color: string }[],
    userTimeline: [] as { time: string; users: number }[],
    devices: { desktop: 0, mobile: 0, tablet: 0 },
  });
  const [isLive, setIsLive] = useState(true);
  const [analyticsConfig, setAnalyticsConfig] = useState({
    googleTagManager: { id: '', active: false },
    googleAnalytics: { id: '', active: false },
    googleSearchConsole: { id: '', active: false },
    facebookPixel: { id: '', active: false },
    hotjar: { id: '', active: false },
    clarity: { id: '', active: false },
  });
  const [ga4Configured, setGa4Configured] = useState<boolean | null>(null);
  const [ga4Message, setGa4Message] = useState('');
  const [loadingRealtime, setLoadingRealtime] = useState(false);

  // Fetch analytics settings from API
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('https://sinceva.com/backend/admin/settings.php?type=integrations', {
          credentials: 'include'
        });
        const data = await response.json();
        if (data.success && data.data) {
          const s = data.data;
          // Backend uses: googleTagManagerId, googleAnalyticsId, googleSearchConsoleId, facebookPixelId, hotjarId, clarityId
          setAnalyticsConfig({
            googleTagManager: { 
              id: s.googleTagManagerId || '', 
              active: !!(s.googleTagManagerId && s.googleTagManagerId.trim() && !s.googleTagManagerId.includes('YOUR_'))
            },
            googleAnalytics: { 
              id: s.googleAnalyticsId || '', 
              active: !!(s.googleAnalyticsId && s.googleAnalyticsId.trim() && !s.googleAnalyticsId.includes('YOUR_') && !s.googleAnalyticsId.includes('XXXXX'))
            },
            googleSearchConsole: { 
              id: s.googleSearchConsoleId || '', 
              active: !!(s.googleSearchConsoleId && s.googleSearchConsoleId.trim() && !s.googleSearchConsoleId.includes('YOUR_'))
            },
            facebookPixel: { 
              id: s.facebookPixelId || '', 
              active: !!(s.facebookPixelId && s.facebookPixelId.trim() && !s.facebookPixelId.includes('YOUR_'))
            },
            hotjar: { 
              id: s.hotjarId || '', 
              active: !!(s.hotjarId && s.hotjarId.trim() && s.hotjarId !== '0')
            },
            clarity: { 
              id: s.clarityId || '', 
              active: !!(s.clarityId && s.clarityId.trim() && !s.clarityId.includes('YOUR_'))
            },
          });
        }
      } catch (error) {
        console.error('Failed to fetch analytics settings:', error);
      }
    };
    fetchSettings();
  }, []);

  // Fetch real-time data from GA4 API
  const fetchRealtimeData = async () => {
    setLoadingRealtime(true);
    try {
      const response = await fetch('https://sinceva.com/backend/admin/analytics.php?type=realtime', {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.success) {
        if (data.configured === false) {
          setGa4Configured(false);
          setGa4Message(data.message || 'GA4 API yapılandırılmamış');
        } else if (data.data) {
          setGa4Configured(true);
          setRealtimeData({
            activeUsers: data.data.activeUsers || 0,
            pageViews: data.data.pageViews || 0,
            avgSessionDuration: data.data.avgSessionDuration || '0:00',
            bounceRate: data.data.bounceRate || 0,
            topPages: data.data.topPages || [],
            trafficSources: data.data.trafficSources || [],
            userTimeline: [], // Would need separate endpoint
            devices: data.data.devices || { desktop: 0, mobile: 0, tablet: 0 },
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch realtime data:', error);
      setGa4Configured(false);
      setGa4Message('GA4 API bağlantısı kurulamadı');
    } finally {
      setLoadingRealtime(false);
    }
  };

  // Fetch realtime data on mount and periodically if live
  useEffect(() => {
    fetchRealtimeData();
    
    const interval = isLive ? setInterval(fetchRealtimeData, 30000) : null; // 30 seconds
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLive]);

  const integrationItems = [
    { 
      key: 'googleTagManager',
      name: 'Google Tag Manager', 
      description: 'Etiket yönetimi ve event tracking',
      icon: Target, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10',
      id: analyticsConfig.googleTagManager.id,
      active: analyticsConfig.googleTagManager.active,
      docsUrl: 'https://tagmanager.google.com'
    },
    { 
      key: 'googleAnalytics',
      name: 'Google Analytics 4', 
      description: 'Web trafiği ve kullanıcı davranışı analizi',
      icon: BarChart3, 
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      id: analyticsConfig.googleAnalytics.id,
      active: analyticsConfig.googleAnalytics.active,
      docsUrl: 'https://analytics.google.com'
    },
    { 
      key: 'googleSearchConsole',
      name: 'Google Search Console', 
      description: 'Arama performansı ve site sağlığı',
      icon: Search, 
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      id: analyticsConfig.googleSearchConsole.id,
      active: analyticsConfig.googleSearchConsole.active,
      docsUrl: 'https://search.google.com/search-console'
    },
    { 
      key: 'facebookPixel',
      name: 'Meta Pixel', 
      description: 'Facebook/Instagram reklam dönüşüm takibi',
      icon: Globe, 
      color: 'text-blue-700',
      bgColor: 'bg-blue-700/10',
      id: analyticsConfig.facebookPixel.id,
      active: analyticsConfig.facebookPixel.active,
      docsUrl: 'https://business.facebook.com/events_manager'
    },
    { 
      key: 'hotjar',
      name: 'Hotjar', 
      description: 'Isı haritaları ve kullanıcı kayıtları',
      icon: MousePointer, 
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      id: analyticsConfig.hotjar.id,
      active: analyticsConfig.hotjar.active,
      docsUrl: 'https://hotjar.com'
    },
    { 
      key: 'clarity',
      name: 'Microsoft Clarity', 
      description: 'Ücretsiz kullanıcı davranış analizi',
      icon: Zap, 
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      id: analyticsConfig.clarity.id,
      active: analyticsConfig.clarity.active,
      docsUrl: 'https://clarity.microsoft.com'
    },
  ];

  const activeCount = integrationItems.filter(i => i.active).length;
  const totalCount = integrationItems.length;

  const totalDevices = realtimeData.devices.desktop + realtimeData.devices.mobile + realtimeData.devices.tablet;

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="realtime" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Gerçek Zamanlı
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Entegrasyonlar
            </TabsTrigger>
          </TabsList>
          
          {activeTab === 'realtime' && (
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-muted'}`} />
              <span className="text-xs text-muted-foreground">
                {isLive ? 'Canlı' : 'Duraklatıldı'}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsLive(!isLive)}
              >
                {isLive ? 'Duraklat' : 'Devam'}
              </Button>
            </div>
          )}
        </div>

        <TabsContent value="realtime" className="space-y-6 mt-0">
          {/* GA4 Configuration Warning */}
          {ga4Configured === false && (
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-700 dark:text-amber-400">GA4 API Yapılandırması Gerekli</h4>
                  <p className="text-sm text-muted-foreground mt-1">{ga4Message}</p>
                  <div className="mt-3 text-xs text-muted-foreground space-y-1">
                    <p>Gerçek zamanlı verileri görmek için:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Google Cloud Console'da Service Account oluşturun</li>
                      <li>GA4 property'ye bu hesabı "Görüntüleyici" olarak ekleyin</li>
                      <li>JSON key dosyasını <code className="bg-muted px-1 rounded">backend/data/ga-credentials.json</code> olarak yükleyin</li>
                      <li>Ayarlar'dan GA4 Property ID'yi girin (sayısal)</li>
                    </ol>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <Link to="/admin/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Ayarlara Git
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {loadingRealtime && ga4Configured === null && (
            <div className="text-center py-8 text-muted-foreground">
              <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2" />
              GA4 verileri yükleniyor...
            </div>
          )}

          {/* Real-time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-2xl font-bold text-green-600">{realtimeData.activeUsers}</span>
              </div>
              <div className="text-xs text-muted-foreground">Aktif Kullanıcı</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-600">{realtimeData.pageViews}</div>
              <div className="text-xs text-muted-foreground">Sayfa Görüntüleme</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-600">{realtimeData.avgSessionDuration}</div>
              <div className="text-xs text-muted-foreground">Ort. Oturum</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <div className="text-2xl font-bold text-orange-600">{realtimeData.bounceRate}%</div>
              <div className="text-xs text-muted-foreground">Hemen Çıkma</div>
            </div>
          </div>

          {/* Timeline Chart */}
          <div className="p-4 rounded-lg border bg-card">
            <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Son 12 Saat Kullanıcı Trafiği
            </h4>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={realtimeData.userTimeline}>
                  <defs>
                    <linearGradient id="realtimeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} className="fill-muted-foreground" />
                  <YAxis tick={{ fontSize: 10 }} className="fill-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="hsl(var(--primary))" 
                    fill="url(#realtimeGradient)"
                    strokeWidth={2}
                    name="Kullanıcı"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Top Pages */}
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-500" />
                En Çok Görüntülenen
              </h4>
              <div className="space-y-3">
                {realtimeData.topPages.map((page, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="truncate max-w-[120px]">{page.page}</span>
                      <span className="text-muted-foreground">{page.views}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${page.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-green-500" />
                Trafik Kaynakları
              </h4>
              <div className="space-y-3">
                {realtimeData.trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span 
                        className="h-3 w-3 rounded-full" 
                        style={{ backgroundColor: source.color }}
                      />
                      <span className="text-sm">{source.source}</span>
                    </div>
                    <span className="text-sm font-medium">{source.users}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Breakdown */}
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="text-sm font-medium mb-4 flex items-center gap-2">
                <MousePointer className="h-4 w-4 text-purple-500" />
                Cihaz Dağılımı
              </h4>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>💻 Masaüstü</span>
                    <span className="text-muted-foreground">{totalDevices > 0 ? Math.round((realtimeData.devices.desktop / totalDevices) * 100) : 0}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${totalDevices > 0 ? (realtimeData.devices.desktop / totalDevices) * 100 : 0}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>📱 Mobil</span>
                    <span className="text-muted-foreground">{totalDevices > 0 ? Math.round((realtimeData.devices.mobile / totalDevices) * 100) : 0}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${totalDevices > 0 ? (realtimeData.devices.mobile / totalDevices) * 100 : 0}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>📟 Tablet</span>
                    <span className="text-muted-foreground">{totalDevices > 0 ? Math.round((realtimeData.devices.tablet / totalDevices) * 100) : 0}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${totalDevices > 0 ? (realtimeData.devices.tablet / totalDevices) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6 mt-0">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="text-2xl font-bold text-green-600">{activeCount}</div>
              <div className="text-xs text-muted-foreground">Aktif Araç</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted border border-border">
              <div className="text-2xl font-bold text-muted-foreground">{totalCount - activeCount}</div>
              <div className="text-xs text-muted-foreground">Yapılandırılmadı</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="text-2xl font-bold text-primary">{totalCount}</div>
              <div className="text-xs text-muted-foreground">Toplam Entegrasyon</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <div className="text-2xl font-bold text-orange-600">{Math.round((activeCount / totalCount) * 100)}%</div>
              <div className="text-xs text-muted-foreground">Tamamlanma</div>
            </div>
          </div>

          {/* Integration List */}
          <div className="space-y-3">
            {integrationItems.map((item) => (
              <div 
                key={item.key} 
                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  item.active 
                    ? 'bg-green-500/5 border-green-500/20' 
                    : 'bg-muted/50 border-border'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${item.bgColor}`}>
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {item.active && (
                        <Badge variant="outline" className="text-green-600 border-green-500/30 bg-green-500/10">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Aktif
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.active && item.id && (
                      <code className="text-xs bg-muted px-2 py-0.5 rounded mt-1 inline-block">
                        {item.id}
                      </code>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.active ? (
                    <a 
                      href={item.docsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      Dashboard
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <XCircle className="h-4 w-4" />
                      ID Gerekli
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            <Button variant="outline" size="sm" asChild>
              <a href="https://tagmanager.google.com" target="_blank" rel="noopener noreferrer">
                <Target className="h-4 w-4 mr-2" />
                GTM Aç
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer">
                <BarChart3 className="h-4 w-4 mr-2" />
                GA4 Aç
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://business.facebook.com/events_manager" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 mr-2" />
                Meta Events
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/admin/settings">
                <Settings className="h-4 w-4 mr-2" />
                ID'leri Düzenle
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
