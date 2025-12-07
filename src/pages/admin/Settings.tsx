import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Lock, Eye, EyeOff, Shield, BarChart3, Search, Globe, CheckCircle, Loader2, ExternalLink } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "https://sinceva.com/api";

interface IntegrationSettings {
  googleAnalyticsId: string;
  googleSearchConsoleId: string;
  facebookPixelId: string;
  googleTagManagerId: string;
  hotjarId: string;
  clarityId: string;
}

export default function Settings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [savingIntegrations, setSavingIntegrations] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
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

  useEffect(() => {
    // Load saved integrations from localStorage (these are public keys)
    const saved = localStorage.getItem('sinceva_integrations');
    if (saved) {
      try {
        setIntegrations(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load integrations:', e);
      }
    }
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

  const handleSaveIntegrations = async () => {
    setSavingIntegrations(true);
    
    try {
      // Save to localStorage (these are public/measurement IDs)
      localStorage.setItem('sinceva_integrations', JSON.stringify(integrations));
      
      // Also save to backend for persistence
      await fetch(`${API_URL}/admin/settings.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ type: 'integrations', data: integrations }),
      });

      toast({
        title: "Başarılı",
        description: "Entegrasyon ayarları kaydedildi. Değişikliklerin aktif olması için index.html dosyasına script eklenmelidir.",
      });
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
        <TabsList>
          <TabsTrigger value="integrations">Entegrasyonlar</TabsTrigger>
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
