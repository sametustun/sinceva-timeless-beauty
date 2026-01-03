import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Lock, Eye, EyeOff, Shield, BarChart3, Search, Globe, CheckCircle, Loader2, ExternalLink, ShoppingBag, Key, Store, AlertCircle, CreditCard, Zap, XCircle } from "lucide-react";
const API_URL = import.meta.env.VITE_API_URL || "https://sinceva.com/api";

interface IntegrationSettings {
  googleAnalyticsId: string;
  googleSearchConsoleId: string;
  facebookPixelId: string;
  googleTagManagerId: string;
  hotjarId: string;
  clarityId: string;
}

interface TrendyolSettings {
  apiKey: string;
  apiSecret: string;
  sellerId: string;
}

interface PaymentSettings {
  paytr: {
    merchantId: string;
    merchantKey: string;
    merchantSalt: string;
    testMode: boolean;
  };
  iyzico: {
    apiKey: string;
    secretKey: string;
    testMode: boolean;
  };
}



export default function Settings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [savingIntegrations, setSavingIntegrations] = useState(false);
  const [savingTrendyol, setSavingTrendyol] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [integrations, setIntegrations] = useState<IntegrationSettings>({
    googleAnalyticsId: "",
    googleSearchConsoleId: "",
    facebookPixelId: "",
    googleTagManagerId: "",
    hotjarId: "",
    clarityId: "",
  });

  const [trendyol, setTrendyol] = useState<TrendyolSettings>({
    apiKey: "",
    apiSecret: "",
    sellerId: "",
  });

  const [payment, setPayment] = useState<PaymentSettings>({
    paytr: { merchantId: "", merchantKey: "", merchantSalt: "", testMode: true },
    iyzico: { apiKey: "", secretKey: "", testMode: true },
  });
  const [savingPayment, setSavingPayment] = useState(false);
  const [showPaytrKey, setShowPaytrKey] = useState(false);
  const [showPaytrSalt, setShowPaytrSalt] = useState(false);
  const [showIyzicoSecret, setShowIyzicoSecret] = useState(false);
  const [testingPaytr, setTestingPaytr] = useState(false);
  const [testingIyzico, setTestingIyzico] = useState(false);
  const [paytrTestResult, setPaytrTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [iyzicoTestResult, setIyzicoTestResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    // Load all settings from backend
    const loadSettings = async () => {
      try {
        const [trendyolRes, paymentRes, integrationsRes] = await Promise.all([
          fetch(`${API_URL}/admin/settings.php?type=trendyol`, { credentials: 'include' }),
          fetch(`${API_URL}/admin/settings.php?type=payment`, { credentials: 'include' }),
          fetch(`${API_URL}/admin/settings.php?type=integrations`, { credentials: 'include' }),
        ]);
        
        const trendyolData = await trendyolRes.json();
        if (trendyolData.success && trendyolData.data) {
          setTrendyol({
            apiKey: trendyolData.data.apiKey || "",
            apiSecret: trendyolData.data.apiSecret || "",
            sellerId: trendyolData.data.sellerId || "",
          });
        }

        const paymentData = await paymentRes.json();
        if (paymentData.success && paymentData.data) {
          setPayment({
            paytr: {
              merchantId: paymentData.data.paytr?.merchantId || "",
              merchantKey: paymentData.data.paytr?.merchantKey || "",
              merchantSalt: paymentData.data.paytr?.merchantSalt || "",
              testMode: paymentData.data.paytr?.testMode ?? true,
            },
            iyzico: {
              apiKey: paymentData.data.iyzico?.apiKey || "",
              secretKey: paymentData.data.iyzico?.secretKey || "",
              testMode: paymentData.data.iyzico?.testMode ?? true,
            },
          });
        }

        const integrationsData = await integrationsRes.json();
        if (integrationsData.success && integrationsData.data) {
          setIntegrations({
            googleAnalyticsId: integrationsData.data.googleAnalyticsId || "",
            googleSearchConsoleId: integrationsData.data.googleSearchConsoleId || "",
            facebookPixelId: integrationsData.data.facebookPixelId || "",
            googleTagManagerId: integrationsData.data.googleTagManagerId || "",
            hotjarId: integrationsData.data.hotjarId || "",
            clarityId: integrationsData.data.clarityId || "",
          });
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };
    loadSettings();
  }, []);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordForm.newPassword.length < 8) {
      toast({
        title: "Hata",
        description: "Yeni şifre en az 8 karakter olmalıdır.",
        variant: "destructive"
      });
      return;
    }
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Hata",
        description: "Yeni şifreler eşleşmiyor.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/admin/password.php`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(passwordForm)
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Başarılı",
          description: "Şifreniz güncellendi."
        });
        setPasswordForm({
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        });
      } else {
        const errorMessages: Record<string, string> = {
          INVALID_CURRENT_PASSWORD: "Mevcut şifre yanlış.",
          PASSWORD_TOO_SHORT: "Yeni şifre en az 8 karakter olmalıdır.",
          PASSWORDS_NOT_MATCH: "Yeni şifreler eşleşmiyor.",
          MISSING_FIELDS: "Tüm alanları doldurun.",
          UPDATE_FAILED: "Şifre güncellenemedi. Tekrar deneyin."
        };
        
        toast({
          title: "Hata",
          description: errorMessages[data.error] || "Bir hata oluştu.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Sunucuya bağlanılamadı.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTrendyol = async () => {
    setSavingTrendyol(true);
    
    try {
      const response = await fetch(`${API_URL}/admin/settings.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ type: 'trendyol', data: trendyol }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Başarılı",
          description: "Trendyol API ayarları kaydedildi.",
        });
      } else {
        throw new Error(data.error || 'Save failed');
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Trendyol ayarları kaydedilemedi.",
        variant: "destructive",
      });
    } finally {
      setSavingTrendyol(false);
    }
  };

  const handleSaveIntegrations = async () => {
    setSavingIntegrations(true);
    
    try {
      // Save to backend for cross-device persistence
      const response = await fetch(`${API_URL}/admin/settings.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ type: 'integrations', data: integrations }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Başarılı",
          description: "Entegrasyon ayarları kaydedildi. Değişikliklerin aktif olması için index.html dosyasına script eklenmelidir.",
        });
      } else {
        throw new Error(data.error || 'Save failed');
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Ayarlar kaydedilemedi.",
        variant: "destructive",
      });
    } finally {
      setSavingIntegrations(false);
    }
  };

  const handleSavePayment = async () => {
    setSavingPayment(true);
    
    try {
      const response = await fetch(`${API_URL}/admin/settings.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ type: 'payment', data: payment }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Başarılı",
          description: "Ödeme entegrasyonu ayarları kaydedildi.",
        });
      } else {
        throw new Error(data.error || 'Save failed');
      }
    } catch (error) {
      toast({
        title: "Hata",
        description: "Ödeme ayarları kaydedilemedi.",
        variant: "destructive",
      });
    } finally {
      setSavingPayment(false);
    }
  };

  const handleTestPaytr = async () => {
    setTestingPaytr(true);
    setPaytrTestResult(null);
    
    try {
      const response = await fetch(`${API_URL}/admin/payment-test.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ provider: 'paytr' }),
      });

      const data = await response.json();
      
      setPaytrTestResult({
        success: data.success,
        message: data.success ? data.message : (data.details || data.error),
      });

      toast({
        title: data.success ? "Başarılı" : "Hata",
        description: data.success ? data.message : (data.details || data.error),
        variant: data.success ? "default" : "destructive",
      });
    } catch (error) {
      setPaytrTestResult({
        success: false,
        message: 'Bağlantı hatası',
      });
      toast({
        title: "Hata",
        description: "Sunucuya bağlanılamadı.",
        variant: "destructive",
      });
    } finally {
      setTestingPaytr(false);
    }
  };

  const handleTestIyzico = async () => {
    setTestingIyzico(true);
    setIyzicoTestResult(null);
    
    try {
      const response = await fetch(`${API_URL}/admin/payment-test.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ provider: 'iyzico' }),
      });

      const data = await response.json();
      
      setIyzicoTestResult({
        success: data.success,
        message: data.success ? data.message : (data.details || data.error),
      });

      toast({
        title: data.success ? "Başarılı" : "Hata",
        description: data.success ? data.message : (data.details || data.error),
        variant: data.success ? "default" : "destructive",
      });
    } catch (error) {
      setIyzicoTestResult({
        success: false,
        message: 'Bağlantı hatası',
      });
      toast({
        title: "Hata",
        description: "Sunucuya bağlanılamadı.",
        variant: "destructive",
      });
    } finally {
      setTestingIyzico(false);
    }
  };

  const integrationCards = [
    {
      id: 'googleAnalyticsId',
      name: 'Google Analytics 4',
      description: 'Site trafiğini ve kullanıcı davranışlarını takip edin',
      icon: BarChart3,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      placeholder: 'G-XXXXXXXXXX',
      helpUrl: 'https://analytics.google.com/',
    },
    {
      id: 'googleSearchConsoleId',
      name: 'Google Search Console',
      description: 'Arama performansını ve site sağlığını izleyin',
      icon: Search,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      placeholder: 'Site doğrulama meta etiketi',
      helpUrl: 'https://search.google.com/search-console',
    },
    {
      id: 'googleTagManagerId',
      name: 'Google Tag Manager',
      description: 'Tüm pazarlama etiketlerini tek yerden yönetin',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      placeholder: 'GTM-XXXXXXX',
      helpUrl: 'https://tagmanager.google.com/',
    },
    {
      id: 'facebookPixelId',
      name: 'Facebook Pixel',
      description: 'Facebook reklamları için dönüşüm takibi',
      icon: Globe,
      color: 'text-blue-700',
      bgColor: 'bg-blue-700/10',
      placeholder: 'XXXXXXXXXXXXXXX',
      helpUrl: 'https://business.facebook.com/events_manager',
    },
    {
      id: 'hotjarId',
      name: 'Hotjar',
      description: 'Kullanıcı ısı haritaları ve oturum kayıtları',
      icon: BarChart3,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      placeholder: 'XXXXXXX',
      helpUrl: 'https://www.hotjar.com/',
    },
    {
      id: 'clarityId',
      name: 'Microsoft Clarity',
      description: 'Ücretsiz kullanıcı davranış analizi',
      icon: BarChart3,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      placeholder: 'XXXXXXXXXX',
      helpUrl: 'https://clarity.microsoft.com/',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ayarlar</h1>
        <p className="text-muted-foreground">Hesap, güvenlik ve entegrasyon ayarları</p>
      </div>

      <Tabs defaultValue="integrations" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger value="integrations">Entegrasyonlar</TabsTrigger>
          <TabsTrigger value="payment">Ödeme Sistemleri</TabsTrigger>
          <TabsTrigger value="trendyol">Trendyol API</TabsTrigger>
          <TabsTrigger value="security">Güvenlik</TabsTrigger>
        </TabsList>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Analitik ve Pazarlama Entegrasyonları
              </CardTitle>
              <CardDescription>
                Site trafiğini izlemek ve pazarlama kampanyalarını takip etmek için entegrasyonları yapılandırın.
                Bu ID'ler herkese açık ölçüm kodlarıdır ve güvenli bir şekilde saklanabilir.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {integrationCards.map((integration) => (
                  <Card key={integration.id} className="border-dashed">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${integration.bgColor}`}>
                            <integration.icon className={`h-4 w-4 ${integration.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-base">{integration.name}</CardTitle>
                            <CardDescription className="text-xs">
                              {integration.description}
                            </CardDescription>
                          </div>
                        </div>
                        <a
                          href={integration.helpUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Input
                        value={integrations[integration.id as keyof IntegrationSettings]}
                        onChange={(e) =>
                          setIntegrations((prev) => ({
                            ...prev,
                            [integration.id]: e.target.value,
                          }))
                        }
                        placeholder={integration.placeholder}
                        className="font-mono text-sm"
                      />
                      {integrations[integration.id as keyof IntegrationSettings] && (
                        <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          Yapılandırıldı
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t">
                <Button onClick={handleSaveIntegrations} disabled={savingIntegrations}>
                  {savingIntegrations ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Kaydediliyor...
                    </>
                  ) : (
                    'Entegrasyonları Kaydet'
                  )}
                </Button>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Kurulum Talimatları</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Entegrasyon ID'lerini kaydettikten sonra, aşağıdaki kod parçacıklarını <code className="bg-background px-1 rounded">index.html</code> dosyanızın <code className="bg-background px-1 rounded">&lt;head&gt;</code> bölümüne ekleyin:
                  </p>
                  
                  {integrations.googleAnalyticsId && (
                    <div className="mb-4">
                      <Label className="text-xs font-medium">Google Analytics 4</Label>
                      <pre className="mt-1 p-3 bg-background rounded-lg text-xs overflow-x-auto">
{`<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${integrations.googleAnalyticsId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${integrations.googleAnalyticsId}');
</script>`}
                      </pre>
                    </div>
                  )}

                  {integrations.googleTagManagerId && (
                    <div className="mb-4">
                      <Label className="text-xs font-medium">Google Tag Manager</Label>
                      <pre className="mt-1 p-3 bg-background rounded-lg text-xs overflow-x-auto">
{`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${integrations.googleTagManagerId}');</script>`}
                      </pre>
                    </div>
                  )}

                  {integrations.facebookPixelId && (
                    <div className="mb-4">
                      <Label className="text-xs font-medium">Facebook Pixel</Label>
                      <pre className="mt-1 p-3 bg-background rounded-lg text-xs overflow-x-auto">
{`<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${integrations.facebookPixelId}');
fbq('track', 'PageView');
</script>`}
                      </pre>
                    </div>
                  )}

                  {integrations.clarityId && (
                    <div className="mb-4">
                      <Label className="text-xs font-medium">Microsoft Clarity</Label>
                      <pre className="mt-1 p-3 bg-background rounded-lg text-xs overflow-x-auto">
{`<!-- Microsoft Clarity -->
<script type="text/javascript">
(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${integrations.clarityId}");
</script>`}
                      </pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-green-600" />
                Ödeme Entegrasyonları
              </CardTitle>
              <CardDescription>
                PayTR ve iyzico ödeme sistemlerini yapılandırarak web sitenizden ödeme alın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* PayTR Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <CreditCard className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">PayTR</h3>
                      <p className="text-sm text-muted-foreground">Türkiye'nin önde gelen ödeme altyapısı</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="paytr-test" className="text-sm">Test Modu</Label>
                    <Switch 
                      id="paytr-test"
                      checked={payment.paytr.testMode}
                      onCheckedChange={(checked) => setPayment(prev => ({ 
                        ...prev, 
                        paytr: { ...prev.paytr, testMode: checked }
                      }))}
                    />
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Merchant ID</Label>
                    <Input
                      value={payment.paytr.merchantId}
                      onChange={(e) => setPayment(prev => ({ 
                        ...prev, 
                        paytr: { ...prev.paytr, merchantId: e.target.value }
                      }))}
                      placeholder="Merchant ID"
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Merchant Key</Label>
                    <div className="relative">
                      <Input
                        type={showPaytrKey ? "text" : "password"}
                        value={payment.paytr.merchantKey}
                        onChange={(e) => setPayment(prev => ({ 
                          ...prev, 
                          paytr: { ...prev.paytr, merchantKey: e.target.value }
                        }))}
                        placeholder="Merchant Key"
                        className="font-mono text-sm pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPaytrKey(!showPaytrKey)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPaytrKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Merchant Salt</Label>
                    <div className="relative">
                      <Input
                        type={showPaytrSalt ? "text" : "password"}
                        value={payment.paytr.merchantSalt}
                        onChange={(e) => setPayment(prev => ({ 
                          ...prev, 
                          paytr: { ...prev.paytr, merchantSalt: e.target.value }
                        }))}
                        placeholder="Merchant Salt"
                        className="font-mono text-sm pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPaytrSalt(!showPaytrSalt)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPaytrSalt ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  {payment.paytr.merchantId && (
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle className="h-3 w-3" />
                      PayTR yapılandırıldı
                    </div>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    {paytrTestResult && (
                      <div className={`flex items-center gap-1 text-xs ${paytrTestResult.success ? 'text-green-600' : 'text-red-600'}`}>
                        {paytrTestResult.success ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                        {paytrTestResult.message}
                      </div>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleTestPaytr}
                      disabled={testingPaytr || !payment.paytr.merchantId}
                    >
                      {testingPaytr ? (
                        <>
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Test Ediliyor...
                        </>
                      ) : (
                        <>
                          <Zap className="h-3 w-3 mr-1" />
                          Bağlantıyı Test Et
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6" />

              {/* iyzico Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <CreditCard className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">iyzico</h3>
                      <p className="text-sm text-muted-foreground">Kolay ve güvenli ödeme çözümü</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="iyzico-test" className="text-sm">Test Modu</Label>
                    <Switch 
                      id="iyzico-test"
                      checked={payment.iyzico.testMode}
                      onCheckedChange={(checked) => setPayment(prev => ({ 
                        ...prev, 
                        iyzico: { ...prev.iyzico, testMode: checked }
                      }))}
                    />
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>API Key</Label>
                    <Input
                      value={payment.iyzico.apiKey}
                      onChange={(e) => setPayment(prev => ({ 
                        ...prev, 
                        iyzico: { ...prev.iyzico, apiKey: e.target.value }
                      }))}
                      placeholder="API Key"
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Secret Key</Label>
                    <div className="relative">
                      <Input
                        type={showIyzicoSecret ? "text" : "password"}
                        value={payment.iyzico.secretKey}
                        onChange={(e) => setPayment(prev => ({ 
                          ...prev, 
                          iyzico: { ...prev.iyzico, secretKey: e.target.value }
                        }))}
                        placeholder="Secret Key"
                        className="font-mono text-sm pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowIyzicoSecret(!showIyzicoSecret)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showIyzicoSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  {payment.iyzico.apiKey && (
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <CheckCircle className="h-3 w-3" />
                      iyzico yapılandırıldı
                    </div>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    {iyzicoTestResult && (
                      <div className={`flex items-center gap-1 text-xs ${iyzicoTestResult.success ? 'text-green-600' : 'text-red-600'}`}>
                        {iyzicoTestResult.success ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                        {iyzicoTestResult.message}
                      </div>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleTestIyzico}
                      disabled={testingIyzico || !payment.iyzico.apiKey}
                    >
                      {testingIyzico ? (
                        <>
                          <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                          Test Ediliyor...
                        </>
                      ) : (
                        <>
                          <Zap className="h-3 w-3 mr-1" />
                          Bağlantıyı Test Et
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t">
                <Button onClick={handleSavePayment} disabled={savingPayment}>
                  {savingPayment ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Kaydediliyor...
                    </>
                  ) : (
                    'Ödeme Ayarlarını Kaydet'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trendyol" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-orange-500" />
                Trendyol Marketplace Entegrasyonu
              </CardTitle>
              <CardDescription>
                Trendyol Partner Programı API bilgilerinizi buradan yönetin. 
                Bu bilgiler ileride ürün aktarımı, stok/fiyat güncellemesi ve sipariş işlemleri için kullanılacaktır.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200">API Altyapısı Hazır</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        Şu anda sadece API bilgilerini saklama altyapısı aktiftir. 
                        Stok, fiyat ve sipariş senkronizasyonu gibi tam entegrasyon özellikleri ileride eklenecektir.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-dashed">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10">
                        <Key className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">API Key</CardTitle>
                        <CardDescription className="text-xs">
                          Trendyol Seller Center'dan alınır
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Input
                      value={trendyol.apiKey}
                      onChange={(e) => setTrendyol(prev => ({ ...prev, apiKey: e.target.value }))}
                      placeholder="API Key giriniz"
                      className="font-mono text-sm"
                    />
                    {trendyol.apiKey && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        Yapılandırıldı
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10">
                        <Lock className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">API Secret</CardTitle>
                        <CardDescription className="text-xs">
                          Gizli anahtar - güvenle saklanır
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="relative">
                      <Input
                        type={showApiSecret ? "text" : "password"}
                        value={trendyol.apiSecret}
                        onChange={(e) => setTrendyol(prev => ({ ...prev, apiSecret: e.target.value }))}
                        placeholder="API Secret giriniz"
                        className="font-mono text-sm pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowApiSecret(!showApiSecret)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showApiSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {trendyol.apiSecret && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        Yapılandırıldı
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-500/10">
                        <Store className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Seller ID</CardTitle>
                        <CardDescription className="text-xs">
                          Mağaza/Satıcı kimlik numarası
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Input
                      value={trendyol.sellerId}
                      onChange={(e) => setTrendyol(prev => ({ ...prev, sellerId: e.target.value }))}
                      placeholder="Seller ID giriniz"
                      className="font-mono text-sm"
                    />
                    {trendyol.sellerId && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                        <CheckCircle className="h-3 w-3" />
                        Yapılandırıldı
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-end pt-4 border-t">
                <Button onClick={handleSaveTrendyol} disabled={savingTrendyol}>
                  {savingTrendyol ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Kaydediliyor...
                    </>
                  ) : (
                    'Trendyol Ayarlarını Kaydet'
                  )}
                </Button>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">API Bilgilerine Nasıl Ulaşılır?</h4>
                  <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                    <li>
                      <a 
                        href="https://partner.trendyol.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Trendyol Seller Center <ExternalLink className="h-3 w-3" />
                      </a>
                      {" "}adresine giriş yapın
                    </li>
                    <li>Sol menüden <strong>Entegrasyon</strong> → <strong>API Entegrasyonları</strong> bölümüne gidin</li>
                    <li>API Key ve API Secret bilgilerinizi kopyalayın</li>
                    <li>Seller ID'nizi profil sayfanızdan veya entegrasyon ayarlarından bulabilirsiniz</li>
                  </ol>
                  
                  <div className="mt-4 pt-4 border-t">
                    <h5 className="font-medium text-sm mb-2">İleride Aktif Olacak Özellikler:</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Yakında</Badge>
                        Ürün aktarımı ve senkronizasyonu
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Yakında</Badge>
                        Stok ve fiyat güncellemesi
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Yakında</Badge>
                        Sipariş yönetimi ve takibi
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Yakında</Badge>
                        Fatura gönderimi
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Yakında</Badge>
                        Müşteri soruları yönetimi
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Şifre Değiştir
              </CardTitle>
              <CardDescription>
                Admin hesabınızın şifresini güncelleyin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mevcut Şifre</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="currentPassword"
                      type={showCurrentPassword ? "text" : "password"}
                      value={passwordForm.currentPassword}
                      onChange={(e) => setPasswordForm(prev => ({
                        ...prev,
                        currentPassword: e.target.value
                      }))}
                      className="pl-10 pr-10"
                      placeholder="Mevcut şifrenizi girin"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Yeni Şifre</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      value={passwordForm.newPassword}
                      onChange={(e) => setPasswordForm(prev => ({
                        ...prev,
                        newPassword: e.target.value
                      }))}
                      className="pl-10 pr-10"
                      placeholder="Yeni şifrenizi girin (en az 8 karakter)"
                      minLength={8}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Yeni Şifre (Tekrar)</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={passwordForm.confirmPassword}
                      onChange={(e) => setPasswordForm(prev => ({
                        ...prev,
                        confirmPassword: e.target.value
                      }))}
                      className="pl-10 pr-10"
                      placeholder="Yeni şifrenizi tekrar girin"
                      minLength={8}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Güncelleniyor..." : "Şifreyi Güncelle"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
