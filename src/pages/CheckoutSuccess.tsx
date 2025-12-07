import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://sinceva.com/api';

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order');
  const { clearCart } = useCart();
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Clear cart on successful payment
    clearCart();

    // Check order status
    if (orderId) {
      const checkStatus = async () => {
        try {
          const response = await fetch(`${API_BASE}/paytr/status.php?order_id=${orderId}`);
          const data = await response.json();
          if (data.success) {
            setOrderStatus(data.payment_status);
          }
        } catch (error) {
          console.error('Failed to check order status:', error);
        } finally {
          setLoading(false);
        }
      };
      checkStatus();
    } else {
      setLoading(false);
    }
  }, [orderId, clearCart]);

  return (
    <Layout>
      <div className="container max-w-2xl py-16">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-2xl">Siparişiniz Alındı!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Siparişiniz başarıyla oluşturuldu. Sipariş detayları e-posta adresinize gönderilecektir.
            </p>

            {orderId && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Sipariş Numarası</p>
                <p className="text-xl font-bold">{orderId}</p>
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin mx-auto mt-2" />
                ) : orderStatus === 'paid' ? (
                  <p className="text-sm text-green-600 mt-2">Ödeme Onaylandı</p>
                ) : null}
              </div>
            )}

            <div className="flex items-center justify-center gap-2 p-4 border rounded-lg">
              <Package className="h-5 w-5 text-primary" />
              <span>Siparişiniz en kısa sürede kargoya verilecektir.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/shop">Alışverişe Devam Et</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Ana Sayfa</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
