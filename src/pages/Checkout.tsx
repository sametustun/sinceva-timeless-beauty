import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShoppingBag, CreditCard, Truck, AlertCircle } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://sinceva.com/api';

export default function Checkout() {
  const { items, totalAmount, clearCart } = useCart();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [paymentToken, setPaymentToken] = useState<string | null>(null);
  const [form, setForm] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    customer_address: '',
    customer_city: '',
    customer_district: '',
    customer_postal_code: '',
    notes: '',
  });

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && !paymentToken) {
      navigate('/shop');
    }
  }, [items, paymentToken, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!form.customer_name || !form.customer_email || !form.customer_phone || !form.customer_address || !form.customer_city) {
      toast({
        title: 'Hata',
        description: 'Lütfen zorunlu alanları doldurun.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/paytr/initiate.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          items: items.map(item => ({
            product_id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setPaymentToken(data.token);
      } else {
        throw new Error(data.error || 'Ödeme başlatılamadı');
      }
    } catch (error: any) {
      toast({
        title: 'Hata',
        description: error.message || 'Bir hata oluştu',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // If we have a payment token, show the PayTR iframe
  if (paymentToken) {
    return (
      <Layout>
        <div className="container max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Güvenli Ödeme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={`https://www.paytr.com/odeme/guvenli/${paymentToken}`}
                  className="w-full h-full min-h-[500px] border-0 rounded-lg"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Ödeme işlemi PayTR güvenli altyapısı üzerinden gerçekleştirilmektedir.
              </p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-6xl py-12">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <ShoppingBag className="h-8 w-8" />
          Ödeme
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Teslimat Bilgileri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="customer_name">Ad Soyad *</Label>
                      <Input
                        id="customer_name"
                        name="customer_name"
                        value={form.customer_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer_email">E-posta *</Label>
                      <Input
                        id="customer_email"
                        name="customer_email"
                        type="email"
                        value={form.customer_email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer_phone">Telefon *</Label>
                    <Input
                      id="customer_phone"
                      name="customer_phone"
                      value={form.customer_phone}
                      onChange={handleInputChange}
                      placeholder="05XX XXX XX XX"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customer_address">Adres *</Label>
                    <Textarea
                      id="customer_address"
                      name="customer_address"
                      value={form.customer_address}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="customer_city">İl *</Label>
                      <Input
                        id="customer_city"
                        name="customer_city"
                        value={form.customer_city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer_district">İlçe</Label>
                      <Input
                        id="customer_district"
                        name="customer_district"
                        value={form.customer_district}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customer_postal_code">Posta Kodu</Label>
                      <Input
                        id="customer_postal_code"
                        name="customer_postal_code"
                        value={form.customer_postal_code}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Sipariş Notu</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="Siparişinizle ilgili özel notlarınız..."
                    />
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" className="w-full mt-6" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Yükleniyor...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Ödemeye Geç (₺{totalAmount.toLocaleString('tr-TR')})
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Sipariş Özeti</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="flex-1">
                      {item.name} <span className="text-muted-foreground">x{item.quantity}</span>
                    </span>
                    <span className="font-medium">
                      ₺{(item.price * item.quantity).toLocaleString('tr-TR')}
                    </span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between">
                  <span>Ara Toplam</span>
                  <span>₺{totalAmount.toLocaleString('tr-TR')}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Kargo</span>
                  <span>Ücretsiz</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Toplam</span>
                  <span>₺{totalAmount.toLocaleString('tr-TR')}</span>
                </div>

                <div className="flex items-start gap-2 p-3 bg-muted rounded-lg text-sm">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Siparişiniz PayTR güvenli ödeme altyapısı üzerinden işlenecektir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
