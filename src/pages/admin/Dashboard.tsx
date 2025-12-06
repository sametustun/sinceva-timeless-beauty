import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, FileText, Package, TrendingUp, Clock } from 'lucide-react';

interface Stats {
  subscribers: { total: number; confirmed: number; pending: number };
  contacts: { total: number; unread: number };
  blog: { total: number; published: number; draft: number };
  products: { total: number; active: number; inactive: number };
}

const API_BASE = 'https://sinceva.com/api/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [subscribersRes, contactsRes, blogRes, productsRes] = await Promise.all([
          fetch(`${API_BASE}/subscribers.php`, { credentials: 'include' }),
          fetch(`${API_BASE}/contacts.php`, { credentials: 'include' }),
          fetch(`${API_BASE}/blog.php`, { credentials: 'include' }),
          fetch(`${API_BASE}/products.php`, { credentials: 'include' }),
        ]);

        const [subscribersData, contactsData, blogData, productsData] = await Promise.all([
          subscribersRes.json(),
          contactsRes.json(),
          blogRes.json(),
          productsRes.json(),
        ]);

        setStats({
          subscribers: subscribersData.stats || { total: 0, confirmed: 0, pending: 0 },
          contacts: contactsData.stats || { total: 0, unread: 0 },
          blog: blogData.stats || { total: 0, published: 0, draft: 0 },
          products: productsData.stats || { total: 0, active: 0, inactive: 0 },
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Aboneler',
      value: stats?.subscribers.total || 0,
      description: `${stats?.subscribers.confirmed || 0} onaylı, ${stats?.subscribers.pending || 0} bekleyen`,
      icon: Users,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'İletişim Mesajları',
      value: stats?.contacts.total || 0,
      description: `${stats?.contacts.unread || 0} okunmamış`,
      icon: Mail,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Blog Yazıları',
      value: stats?.blog.total || 0,
      description: `${stats?.blog.published || 0} yayında, ${stats?.blog.draft || 0} taslak`,
      icon: FileText,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Ürünler',
      value: stats?.products.total || 0,
      description: `${stats?.products.active || 0} aktif, ${stats?.products.inactive || 0} pasif`,
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

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Hızlı İstatistikler
            </CardTitle>
            <CardDescription>
              Son 30 günlük özet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Yeni Aboneler</span>
                <span className="font-medium">{stats?.subscribers.total || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">İletişim Formları</span>
                <span className="font-medium">{stats?.contacts.total || 0}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Yayındaki Yazılar</span>
                <span className="font-medium">{stats?.blog.published || 0}</span>
              </div>
            </div>
          </CardContent>
        </Card>

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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
