import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useProducts } from '@/hooks/useProducts';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShoppingBag, CreditCard, Truck, AlertCircle } from 'lucide-react';

type PaymentMethod = 'paytr' | 'iyzico';

interface PaymentMethodStatus {
  paytr: { enabled: boolean; test_mode: boolean };
  iyzico: { enabled: boolean; test_mode: boolean };
}

const API_BASE = import.meta.env.VITE_API_URL || 'https://sinceva.com/backend';

export default function Checkout() {
  const { items, clearCart } = useCart();
  const { products } = useProducts();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Get fresh prices from backend for cart items
  const itemsWithFreshPrices = useMemo(() => {
    return items.map(item => {
      const backendProduct = products.find(p => p.id.toString() === item.id);
      if (backendProduct) {
        // Use sale_price if available, otherwise use price
        const freshPrice = (backendProduct.sale_price && backendProduct.sale_price > 0)
          ? backendProduct.sale_price
          : (backendProduct.price && backendProduct.price > 0)
            ? backendProduct.price
            : item.price;
        return { ...item, price: freshPrice };
      }
      return item;
    });
  }, [items, products]);

  // Calculate total with fresh prices
  const totalAmount = useMemo(() => {
    return itemsWithFreshPrices.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [itemsWithFreshPrices]);
  
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paytr');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodStatus | null>(null);
  const [paymentToken, setPaymentToken] = useState<string | null>(null);
  const [iyzicoFormContent, setIyzicoFormContent] = useState<string | null>(null);
  const iyzicoFormRef = useRef<HTMLDivElement>(null);
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

  // Fetch available payment methods
  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await fetch(`${API_BASE}/payment-status.php`);
        const data = await response.json();
        console.log('Payment methods response:', data);
        if (data.success) {
          // Response format: { success: true, paytr: {...}, iyzico: {...} }
          const methods: PaymentMethodStatus = {
            paytr: data.paytr || { enabled: false, test_mode: true },
            iyzico: data.iyzico || { enabled: false, test_mode: true }
          };
          setPaymentMethods(methods);
          // Default to paytr, or iyzico if only iyzico is available
          if (!methods.paytr.enabled && methods.iyzico.enabled) {
            setPaymentMethod('iyzico');
          }
        }
      } catch (error) {
        console.error('Failed to fetch payment methods:', error);
      }
    };
    fetchPaymentMethods();
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && !paymentToken && !iyzicoFormContent) {
      navigate('/shop');
    }
  }, [items, paymentToken, iyzicoFormContent, navigate]);

  // Render iyzico form when content is available
  useEffect(() => {
    if (iyzicoFormContent && iyzicoFormRef.current) {
      iyzicoFormRef.current.innerHTML = iyzicoFormContent;
      // Execute any scripts in the form
      const scripts = iyzicoFormRef.current.querySelectorAll('script');
      scripts.forEach((script) => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });
    }
  }, [iyzicoFormContent]);

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
      const endpoint = paymentMethod === 'paytr' 
        ? `${API_BASE}/paytr/initiate.php`
        : `${API_BASE}/iyzico/initiate.php`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          items: itemsWithFreshPrices.map(item => ({
            product_id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (data.success) {
        if (paymentMethod === 'paytr') {
          setPaymentToken(data.token);
        } else {
          // iyzico returns checkoutFormContent
          setIyzicoFormContent(data.checkoutFormContent);
        }
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

  // If we have a payment token (PayTR), show the PayTR iframe
  if (paymentToken) {
    return (
      <Layout>
        <div className="container max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Güvenli Ödeme - PayTR
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

  // If we have iyzico form content, show the iyzico checkout
  if (iyzicoFormContent) {
    return (
      <Layout>
        <div className="container max-w-4xl py-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Güvenli Ödeme - iyzico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                ref={iyzicoFormRef} 
                id="iyzipay-checkout-form" 
                className="w-full min-h-[500px]"
              />
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Ödeme işlemi iyzico güvenli altyapısı üzerinden gerçekleştirilmektedir.
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

              {/* Payment Method Selection */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Ödeme Yöntemi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}
                    className="space-y-3"
                  >
                    {paymentMethods?.paytr.enabled && (
                      <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="paytr" id="paytr" />
                        <Label htmlFor="paytr" className="flex-1 cursor-pointer">
                          <div className="font-medium">PayTR</div>
                          <p className="text-sm text-muted-foreground">Kredi kartı, banka kartı, havale/EFT</p>
                        </Label>
                      </div>
                    )}
                    {paymentMethods?.iyzico.enabled && (
                      <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="iyzico" id="iyzico" />
                        <Label htmlFor="iyzico" className="flex-1 cursor-pointer">
                          <div className="font-medium">iyzico</div>
                          <p className="text-sm text-muted-foreground">Kredi kartı, banka kartı ile güvenli ödeme</p>
                        </Label>
                      </div>
                    )}
                    {!paymentMethods?.paytr.enabled && !paymentMethods?.iyzico.enabled && (
                      <div className="p-4 bg-destructive/10 text-destructive rounded-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>Ödeme sistemi yapılandırılmamış. Lütfen yönetici ile iletişime geçin.</span>
                      </div>
                    )}
                  </RadioGroup>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full mt-6" 
                size="lg" 
                disabled={loading || (!paymentMethods?.paytr.enabled && !paymentMethods?.iyzico.enabled)}
              >
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
                {itemsWithFreshPrices.map(item => (
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
                    Siparişiniz {paymentMethod === 'iyzico' ? 'iyzico' : 'PayTR'} güvenli ödeme altyapısı üzerinden işlenecektir.
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
