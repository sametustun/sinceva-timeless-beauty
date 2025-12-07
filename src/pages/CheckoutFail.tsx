import { useSearchParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, RefreshCw, ShoppingCart } from 'lucide-react';

export default function CheckoutFail() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order');

  return (
    <Layout>
      <div className="container max-w-2xl py-16">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl">Ödeme Başarısız</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Ödemeniz işlenirken bir sorun oluştu. Lütfen tekrar deneyin veya farklı bir ödeme yöntemi kullanın.
            </p>

            {orderId && (
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Sipariş Referansı</p>
                <p className="font-mono">{orderId}</p>
              </div>
            )}

            <div className="p-4 border rounded-lg text-left space-y-2">
              <p className="font-medium">Olası Nedenler:</p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Kart bilgileri hatalı girilmiş olabilir</li>
                <li>Kartınızda yeterli bakiye olmayabilir</li>
                <li>Bankanız işlemi onaylamamış olabilir</li>
                <li>3D Secure doğrulaması başarısız olmuş olabilir</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/checkout">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Tekrar Dene
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/shop">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Alışverişe Dön
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Sorun devam ederse{' '}
              <Link to="/contact" className="text-primary underline">
                bizimle iletişime geçin
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
