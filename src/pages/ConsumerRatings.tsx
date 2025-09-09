import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const ConsumerRatings: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tüketici Puanlama ve Değerlendirme Kuralları</h1>
          <p className="text-xl opacity-90">Ürün değerlendirme ve yorum sistemi kuralları</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Genel İlkeler</h2>
            <p className="mb-4">
              SAFI COSMETİC LİMİTED COMPANY olarak, tüketicilerimizin dürüst ve objektif değerlendirmelerine 
              değer vermekteyiz. Bu kurallar, değerlendirme sistemimizin adil ve güvenilir olmasını sağlamak için oluşturulmuştur.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Değerlendirme Kriterleri</h2>
            <p className="mb-4">Değerlendirme ve yorumlar aşağıdaki kriterlere uygun olmalıdır:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Gerçek kullanım deneyimi olan kişiler tarafından yazılmalı</li>
              <li>Objektif ve yapıcı olmalı</li>
              <li>Ürünle ilgili olmalı ve konuya uygun olmalı</li>
              <li>Saygılı dil kullanılmalı</li>
              <li>Rekabet eden markalar hakkında olumsuz yorumlar içermemeli</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Yasak İçerikler</h2>
            <p className="mb-4">Aşağıdaki türde içerikler kabul edilmez ve silinir:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Hakaret, küfür veya saldırgan dil içeren yorumlar</li>
              <li>Sahte veya yanıltıcı bilgiler</li>
              <li>Reklamcı veya spam içerikler</li>
              <li>Kişisel bilgi paylaşımı</li>
              <li>Telif hakkı ihlali içeren içerikler</li>
              <li>Yasal olmayan faaliyetleri teşvik eden içerikler</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Moderasyon Süreci</h2>
            <p className="mb-4">
              Tüm değerlendirmeler yayınlanmadan önce incelenir. Moderasyon süreci 1-3 iş günü sürebilir. 
              Kurallara uygun olmayan içerikler reddedilir ve gerekçesi ile birlikte kullanıcıya bildirilir.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Puanlama Sistemi</h2>
            <p className="mb-4">Puanlama sistemi aşağıdaki şekilde çalışır:</p>
            <ul className="list-disc list-inside mb-4">
              <li>1 Yıldız: Çok Kötü - Ürün beklentileri hiç karşılamadı</li>
              <li>2 Yıldız: Kötü - Ürün beklentilerin altında kaldı</li>
              <li>3 Yıldız: Orta - Ürün kabul edilebilir seviyede</li>
              <li>4 Yıldız: İyi - Ürün beklentileri karşıladı</li>
              <li>5 Yıldız: Mükemmel - Ürün beklentileri aştı</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Teşvik ve Ödüller</h2>
            <p className="mb-4">
              Kaliteli ve faydalı değerlendirmeler yapan kullanıcılarımıza zaman zaman özel teklifler 
              ve indirimler sunabiliriz. Ancak bu durum değerlendirmenin objektifliğini etkilememelidir.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Şikayet ve İtiraz</h2>
            <p className="mb-4">
              Değerlendirme sistemi ile ilgili şikayetlerinizi aşağıdaki kanallardan iletebilirsiniz:
            </p>
            <ul className="list-disc list-inside">
              <li>E-posta: reviews@sinceva.com</li>
              <li>Telefon: +90 (212) 123 45 67</li>
              <li>İletişim formu: /contact</li>
            </ul>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            <p>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ConsumerRatings;