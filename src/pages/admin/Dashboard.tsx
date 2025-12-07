import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Mail, FileText, Package, TrendingUp, Clock, Eye, ArrowRight, Image as ImageIcon, BarChart3, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Link } from 'react-router-dom';

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

const API_BASE = 'https://sinceva.com/api/admin';

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

        {/* Analytics Integrations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                Analitik Entegrasyonları
              </CardTitle>
              <CardDescription>
                Takip ve analiz araçları durumu
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/settings" className="flex items-center gap-1">
                Ayarlar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <IntegrationStatus />
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

// Integration Status Component
function IntegrationStatus() {
  const [integrations, setIntegrations] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem('sinceva_integrations');
    if (saved) {
      try {
        setIntegrations(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load integrations:', e);
      }
    }
  }, []);

  const integrationItems = [
    { key: 'googleAnalyticsId', name: 'Google Analytics', icon: BarChart3, color: 'text-orange-500' },
    { key: 'googleTagManagerId', name: 'Tag Manager', icon: BarChart3, color: 'text-blue-600' },
    { key: 'facebookPixelId', name: 'Facebook Pixel', icon: BarChart3, color: 'text-blue-700' },
    { key: 'hotjarId', name: 'Hotjar', icon: BarChart3, color: 'text-red-500' },
    { key: 'clarityId', name: 'Clarity', icon: BarChart3, color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-3">
      {integrationItems.map((item) => {
        const isConfigured = !!integrations[item.key] && integrations[item.key] !== '';
        return (
          <div key={item.key} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <span className="text-sm">{item.name}</span>
            </div>
            {isConfigured ? (
              <span className="flex items-center gap-1 text-xs text-green-600">
                <CheckCircle className="h-3 w-3" />
                Aktif
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <XCircle className="h-3 w-3" />
                Yapılandırılmadı
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
