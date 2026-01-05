import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, Truck, CheckCircle, AlertCircle } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://sinceva.com/backend';

interface ShippingProvider {
  id: string;
  name: string;
  code: string;
  is_active: boolean;
  settings: Record<string, string>;
  created_at: string;
  updated_at: string;
}

const providerFields: Record<string, { key: string; label: string; type: string; placeholder?: string }[]> = {
  yurtici: [
    { key: 'api_url', label: 'API URL', type: 'text', placeholder: 'https://webservices.yurticikargo.com' },
    { key: 'username', label: 'Kullanıcı Adı', type: 'text' },
    { key: 'password', label: 'Şifre', type: 'password' },
    { key: 'customer_code', label: 'Müşteri Kodu', type: 'text' },
    { key: 'sender_name', label: 'Gönderici Adı', type: 'text', placeholder: 'SincEva Kozmetik' },
    { key: 'sender_address', label: 'Gönderici Adresi', type: 'text' },
    { key: 'sender_city', label: 'Gönderici İl', type: 'text' },
    { key: 'sender_district', label: 'Gönderici İlçe', type: 'text' },
    { key: 'sender_phone', label: 'Gönderici Telefon', type: 'text' },
  ],
  hepsijet: [
    { key: 'api_url', label: 'API URL', type: 'text', placeholder: 'https://api.hepsijet.com' },
    { key: 'api_key', label: 'API Key', type: 'text' },
    { key: 'api_secret', label: 'API Secret', type: 'password' },
    { key: 'merchant_id', label: 'Merchant ID', type: 'text' },
    { key: 'sender_name', label: 'Gönderici Adı', type: 'text', placeholder: 'SincEva Kozmetik' },
    { key: 'sender_address', label: 'Gönderici Adresi', type: 'text' },
    { key: 'sender_city', label: 'Gönderici İl', type: 'text' },
    { key: 'sender_district', label: 'Gönderici İlçe', type: 'text' },
    { key: 'sender_phone', label: 'Gönderici Telefon', type: 'text' },
  ],
  trendyol_express: [
    { key: 'api_url', label: 'API URL', type: 'text', placeholder: 'https://api.trendyol.com/sapigw' },
    { key: 'api_key', label: 'API Key', type: 'text' },
    { key: 'api_secret', label: 'API Secret', type: 'password' },
    { key: 'seller_id', label: 'Seller ID', type: 'text' },
  ],
};

export default function ShippingProviders() {
  const [providers, setProviders] = useState<ShippingProvider[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const response = await fetch(`${API_BASE}/admin/shipping-providers.php`, {
        credentials: 'include',
      });
      const data = await response.json();
      if (data.success) {
        setProviders(data.providers);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Kargo sağlayıcıları yüklenemedi',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (provider: ShippingProvider) => {
    try {
      const response = await fetch(`${API_BASE}/admin/shipping-providers.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          id: provider.id,
          is_active: !provider.is_active,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setProviders(prev =>
          prev.map(p =>
            p.id === provider.id ? { ...p, is_active: !p.is_active } : p
          )
        );
        toast({
          title: 'Başarılı',
          description: `${provider.name} ${!provider.is_active ? 'aktifleştirildi' : 'pasifleştirildi'}`,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Durum güncellenemedi',
        variant: 'destructive',
      });
    }
  };

  const handleSaveSettings = async (provider: ShippingProvider, newSettings: Record<string, string>) => {
    setSaving(provider.id);
    try {
      const response = await fetch(`${API_BASE}/admin/shipping-providers.php`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          id: provider.id,
          settings: newSettings,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setProviders(prev =>
          prev.map(p =>
            p.id === provider.id ? { ...p, settings: newSettings } : p
          )
        );
        toast({
          title: 'Başarılı',
          description: `${provider.name} ayarları kaydedildi`,
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Hata',
        description: 'Ayarlar kaydedilemedi',
        variant: 'destructive',
      });
    } finally {
      setSaving(null);
    }
  };

  const ProviderCard = ({ provider }: { provider: ShippingProvider }) => {
    const [settings, setSettings] = useState(provider.settings);
    const fields = providerFields[provider.code] || [];

    const handleFieldChange = (key: string, value: string) => {
      setSettings(prev => ({ ...prev, [key]: value }));
    };

    const isConfigured = fields.slice(0, 4).every(f => settings[f.key] && settings[f.key] !== '********');

    return (
      <Card className={provider.is_active ? 'border-primary/50' : ''}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${provider.is_active ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">{provider.name}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  {isConfigured ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-green-600">Yapılandırılmış</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span className="text-yellow-600">Yapılandırma gerekli</span>
                    </>
                  )}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {provider.is_active ? 'Aktif' : 'Pasif'}
              </span>
              <Switch
                checked={provider.is_active}
                onCheckedChange={() => handleToggleActive(provider)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {provider.code === 'trendyol_express' && (
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg text-sm text-blue-700 dark:text-blue-300">
                <strong>Not:</strong> Trendyol Express, yeni kargo oluşturmaz. Trendyol Marketplace'ten gelen
                siparişlerdeki mevcut kargo bilgilerini sisteme import eder.
              </div>
            )}
            
            <div className="grid gap-3 md:grid-cols-2">
              {fields.map(field => (
                <div key={field.key} className="space-y-2">
                  <Label htmlFor={`${provider.id}-${field.key}`}>{field.label}</Label>
                  <Input
                    id={`${provider.id}-${field.key}`}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={settings[field.key] || ''}
                    onChange={e => handleFieldChange(field.key, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <Button
                onClick={() => handleSaveSettings(provider, settings)}
                disabled={saving === provider.id}
              >
                {saving === provider.id ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Ayarları Kaydet
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

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
        <div>
          <h1 className="text-2xl font-bold">Kargo Entegrasyonları</h1>
          <p className="text-muted-foreground">
            Kargo sağlayıcı API ayarlarını yapılandırın ve yönetin
          </p>
        </div>

        <Tabs defaultValue="providers">
          <TabsList>
            <TabsTrigger value="providers">Sağlayıcılar</TabsTrigger>
            <TabsTrigger value="info">Bilgi</TabsTrigger>
          </TabsList>

          <TabsContent value="providers" className="space-y-4 mt-4">
            {providers.map(provider => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </TabsContent>

          <TabsContent value="info" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Kargo Entegrasyonu Hakkında</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                <h4>Desteklenen Özellikler</h4>
                <ul>
                  <li><strong>Yurtiçi Kargo:</strong> Kargo oluşturma, takip numarası alma, durum sorgulama</li>
                  <li><strong>HepsiJet:</strong> Kargo oluşturma, etiket yazdırma, durum sorgulama</li>
                  <li><strong>Trendyol Express:</strong> Trendyol siparişlerinden kargo bilgisi import etme</li>
                </ul>

                <h4>Otomatik Durum Güncelleme</h4>
                <p>
                  Sistem saatlik olarak bekleyen kargoların durumunu sağlayıcı API'lerinden sorgular ve 
                  otomatik olarak günceller. Kargo teslim edildiğinde veya iade olduğunda sipariş durumu 
                  da otomatik olarak güncellenir.
                </p>

                <h4>API Bilgileri Nereden Alınır?</h4>
                <ul>
                  <li>
                    <strong>Yurtiçi Kargo:</strong>{' '}
                    <a href="https://www.yurticikargo.com/tr/kurumsal/e-ticaret" target="_blank" rel="noopener noreferrer">
                      Yurtiçi Kargo E-Ticaret
                    </a>
                  </li>
                  <li>
                    <strong>HepsiJet:</strong>{' '}
                    <a href="https://www.hepsijet.com/entegrasyon" target="_blank" rel="noopener noreferrer">
                      HepsiJet Entegrasyon
                    </a>
                  </li>
                  <li>
                    <strong>Trendyol Express:</strong> Trendyol Seller Panel &gt; Entegrasyonlar &gt; API Bilgileri
                  </li>
                </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
