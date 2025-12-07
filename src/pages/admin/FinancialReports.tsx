import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  CreditCard,
  BarChart3,
  PieChart as PieChartIcon,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const API_BASE = 'https://sinceva.com/api/admin';

interface Summary {
  total_revenue: number;
  total_orders: number;
  completed_orders: number;
  pending_orders: number;
  cancelled_orders: number;
  avg_order_value: number;
  today_revenue: number;
  week_revenue: number;
  month_revenue: number;
}

interface DailyData {
  date: string;
  label: string;
  revenue: number;
  orders: number;
  trendyol: number;
  website: number;
}

interface WeeklyData {
  week_start: string;
  week_end: string;
  label: string;
  revenue: number;
  orders: number;
  trendyol: number;
  website: number;
}

interface MonthlyData {
  month: string;
  label: string;
  revenue: number;
  orders: number;
  trendyol: number;
  website: number;
}

interface SourceData {
  name: string;
  revenue: number;
  orders: number;
  avg: number;
}

const COLORS = ['hsl(var(--primary))', '#22c55e', '#f59e0b', '#8b5cf6'];

export default function FinancialReports() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [revenueBySource, setRevenueBySource] = useState<Record<string, number>>({});
  const [ordersBySource, setOrdersBySource] = useState<Record<string, number>>({});
  const [dailyData, setDailyData] = useState<DailyData[]>([]);
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);
  const [sourceData, setSourceData] = useState<SourceData[]>([]);
  const [dailyTrend, setDailyTrend] = useState<{ change_percent: number }>({ change_percent: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDays, setSelectedDays] = useState('30');
  const [selectedWeeks, setSelectedWeeks] = useState('12');
  const [selectedMonths, setSelectedMonths] = useState('12');

  useEffect(() => {
    fetchSummary();
    fetchSourceData();
  }, []);

  useEffect(() => {
    fetchDailyData();
  }, [selectedDays]);

  useEffect(() => {
    fetchWeeklyData();
  }, [selectedWeeks]);

  useEffect(() => {
    fetchMonthlyData();
  }, [selectedMonths]);

  async function fetchSummary() {
    try {
      const res = await fetch(`${API_BASE}/financial-reports.php?action=summary`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setSummary(data.summary);
        setRevenueBySource(data.revenue_by_source || {});
        setOrdersBySource(data.orders_by_source || {});
      }
    } catch (error) {
      console.error('Failed to fetch summary:', error);
    }
  }

  async function fetchDailyData() {
    try {
      const res = await fetch(`${API_BASE}/financial-reports.php?action=daily&days=${selectedDays}`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setDailyData(data.data || []);
        setDailyTrend(data.trend || { change_percent: 0 });
      }
    } catch (error) {
      console.error('Failed to fetch daily data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchWeeklyData() {
    try {
      const res = await fetch(`${API_BASE}/financial-reports.php?action=weekly&weeks=${selectedWeeks}`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setWeeklyData(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch weekly data:', error);
    }
  }

  async function fetchMonthlyData() {
    try {
      const res = await fetch(`${API_BASE}/financial-reports.php?action=monthly&months=${selectedMonths}`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setMonthlyData(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch monthly data:', error);
    }
  }

  async function fetchSourceData() {
    try {
      const res = await fetch(`${API_BASE}/financial-reports.php?action=by-source`, { credentials: 'include' });
      const data = await res.json();
      if (data.success) {
        setSourceData(data.sources || []);
      }
    } catch (error) {
      console.error('Failed to fetch source data:', error);
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value);
  };

  // Prepare pie chart data
  const pieChartData = sourceData
    .filter(s => s.revenue > 0)
    .map(s => ({
      name: s.name,
      value: s.revenue
    }));

  const ordersPieData = sourceData
    .filter(s => s.orders > 0)
    .map(s => ({
      name: s.name,
      value: s.orders
    }));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finansal Raporlar</h1>
        <p className="text-muted-foreground mt-1">
          Ödeme geçmişi ve satış analitikleri
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Toplam Gelir
            </CardTitle>
            <div className="p-2 rounded-lg bg-primary/10">
              <DollarSign className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : formatCurrency(summary?.total_revenue || 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {summary?.completed_orders || 0} tamamlanan sipariş
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Bu Ay
            </CardTitle>
            <div className="p-2 rounded-lg bg-green-500/10">
              <Calendar className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : formatCurrency(summary?.month_revenue || 0)}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {dailyTrend.change_percent >= 0 ? (
                <>
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+{dailyTrend.change_percent}%</span>
                </>
              ) : (
                <>
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                  <span className="text-xs text-red-500">{dailyTrend.change_percent}%</span>
                </>
              )}
              <span className="text-xs text-muted-foreground">geçen haftaya göre</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Toplam Sipariş
            </CardTitle>
            <div className="p-2 rounded-lg bg-orange-500/10">
              <ShoppingCart className="h-4 w-4 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : summary?.total_orders || 0}
            </div>
            <div className="flex gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {summary?.pending_orders || 0} bekliyor
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {summary?.cancelled_orders || 0} iptal
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ortalama Sipariş
            </CardTitle>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <CreditCard className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : formatCurrency(summary?.avg_order_value || 0)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              sipariş başına ortalama
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Tabs */}
      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Günlük</TabsTrigger>
          <TabsTrigger value="weekly">Haftalık</TabsTrigger>
          <TabsTrigger value="monthly">Aylık</TabsTrigger>
          <TabsTrigger value="sources">Kaynaklara Göre</TabsTrigger>
        </TabsList>

        {/* Daily Tab */}
        <TabsContent value="daily" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Günlük Satış Grafiği</h3>
            <Select value={selectedDays} onValueChange={setSelectedDays}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Dönem seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Son 7 gün</SelectItem>
                <SelectItem value="14">Son 14 gün</SelectItem>
                <SelectItem value="30">Son 30 gün</SelectItem>
                <SelectItem value="60">Son 60 gün</SelectItem>
                <SelectItem value="90">Son 90 gün</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Gelir Trendi
                </CardTitle>
                <CardDescription>Günlük gelir değişimi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dailyData}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="label" className="text-xs fill-muted-foreground" tick={{ fontSize: 11 }} />
                      <YAxis 
                        className="text-xs fill-muted-foreground" 
                        tick={{ fontSize: 11 }}
                        tickFormatter={(value) => `₺${value}`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                        formatter={(value: number) => [formatCurrency(value), 'Gelir']}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(var(--primary))"
                        fill="url(#revenueGradient)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Orders Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-orange-500" />
                  Sipariş Sayısı
                </CardTitle>
                <CardDescription>Günlük sipariş adedi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="label" className="text-xs fill-muted-foreground" tick={{ fontSize: 11 }} />
                      <YAxis className="text-xs fill-muted-foreground" tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                      <Bar dataKey="orders" fill="#f59e0b" name="Sipariş" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stacked Revenue by Source */}
          <Card>
            <CardHeader>
              <CardTitle>Kaynaklara Göre Günlük Gelir</CardTitle>
              <CardDescription>Trendyol vs Website satışları</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dailyData}>
                    <defs>
                      <linearGradient id="trendyolGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="websiteGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="label" className="text-xs fill-muted-foreground" tick={{ fontSize: 11 }} />
                    <YAxis 
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 11 }}
                      tickFormatter={(value) => `₺${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => formatCurrency(value)}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="trendyol"
                      stackId="1"
                      stroke="#f59e0b"
                      fill="url(#trendyolGradient)"
                      name="Trendyol"
                    />
                    <Area
                      type="monotone"
                      dataKey="website"
                      stackId="1"
                      stroke="#22c55e"
                      fill="url(#websiteGradient)"
                      name="Website"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Weekly Tab */}
        <TabsContent value="weekly" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Haftalık Satış Grafiği</h3>
            <Select value={selectedWeeks} onValueChange={setSelectedWeeks}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Dönem seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4">Son 4 hafta</SelectItem>
                <SelectItem value="8">Son 8 hafta</SelectItem>
                <SelectItem value="12">Son 12 hafta</SelectItem>
                <SelectItem value="24">Son 24 hafta</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Haftalık Gelir</CardTitle>
              <CardDescription>Haftalık toplam satış geliri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="label" className="text-xs fill-muted-foreground" tick={{ fontSize: 11 }} />
                    <YAxis 
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 11 }}
                      tickFormatter={(value) => `₺${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => formatCurrency(value)}
                    />
                    <Legend />
                    <Bar dataKey="trendyol" fill="#f59e0b" name="Trendyol" stackId="stack" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="website" fill="#22c55e" name="Website" stackId="stack" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Monthly Tab */}
        <TabsContent value="monthly" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Aylık Satış Grafiği</h3>
            <Select value={selectedMonths} onValueChange={setSelectedMonths}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Dönem seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">Son 6 ay</SelectItem>
                <SelectItem value="12">Son 12 ay</SelectItem>
                <SelectItem value="18">Son 18 ay</SelectItem>
                <SelectItem value="24">Son 24 ay</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Aylık Gelir Trendi</CardTitle>
              <CardDescription>Aylık toplam satış geliri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="label" className="text-xs fill-muted-foreground" tick={{ fontSize: 11 }} />
                    <YAxis 
                      className="text-xs fill-muted-foreground" 
                      tick={{ fontSize: 11 }}
                      tickFormatter={(value) => `₺${value}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => formatCurrency(value)}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Toplam Gelir"
                      dot={{ fill: 'hsl(var(--primary))' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="trendyol" 
                      stroke="#f59e0b" 
                      strokeWidth={2}
                      name="Trendyol"
                      strokeDasharray="5 5"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="website" 
                      stroke="#22c55e" 
                      strokeWidth={2}
                      name="Website"
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-4">
          <h3 className="text-lg font-semibold">Kaynaklara Göre Dağılım</h3>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Revenue Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5 text-primary" />
                  Gelir Dağılımı
                </CardTitle>
                <CardDescription>Kaynaklara göre gelir yüzdesi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieChartData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Orders Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-orange-500" />
                  Sipariş Dağılımı
                </CardTitle>
                <CardDescription>Kaynaklara göre sipariş sayısı</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={ordersPieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {ordersPieData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Source Details Table */}
          <Card>
            <CardHeader>
              <CardTitle>Kaynak Detayları</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Kaynak</th>
                      <th className="text-right py-3 px-4 font-medium">Sipariş</th>
                      <th className="text-right py-3 px-4 font-medium">Gelir</th>
                      <th className="text-right py-3 px-4 font-medium">Ortalama</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sourceData.map((source, index) => (
                      <tr key={source.name} className="border-b last:border-0">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            {source.name}
                          </div>
                        </td>
                        <td className="text-right py-3 px-4">{source.orders}</td>
                        <td className="text-right py-3 px-4 font-medium">{formatCurrency(source.revenue)}</td>
                        <td className="text-right py-3 px-4 text-muted-foreground">{formatCurrency(source.avg)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
