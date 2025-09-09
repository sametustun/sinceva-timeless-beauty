import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const CookiePolicy: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Çerez Politikası</h1>
          <p className="text-xl opacity-90">Web sitemizdeki çerez kullanımı hakkında bilgiler</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Çerez Nedir?</h2>
            <p className="mb-4">
              Çerezler, web sitelerinin kullanıcıların bilgisayarlarında sakladığı küçük metin dosyalarıdır. 
              Bu dosyalar, web sitesinin daha verimli çalışmasını sağlar ve site sahiplerine 
              kullanıcı deneyimini geliştirme konusında yardımcı olur.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Çerez Türleri</h2>
            
            <h3 className="text-xl font-semibold mb-3">Zorunlu Çerezler</h3>
            <p className="mb-4">
              Bu çerezler web sitesinin çalışması için gereklidir ve devre dışı bırakılamazlar. 
              Genellikle gizlilik tercihleri, giriş yapma veya form doldurma gibi eylemlerinize 
              yanıt olarak ayarlanırlar.
            </p>

            <h3 className="text-xl font-semibold mb-3">Analitik Çerezler</h3>
            <p className="mb-4">
              Bu çerezler ziyaretçilerin web sitesini nasıl kullandığını anlamamızı sağlar. 
              Tüm bilgiler anonim olarak toplanır ve site performansını iyileştirmek için kullanılır.
            </p>

            <h3 className="text-xl font-semibold mb-3">Pazarlama Çerezleri</h3>
            <p className="mb-4">
              Bu çerezler, size ve ilgi alanlarınıza daha uygun reklamlar sunmak için kullanılır. 
              Ayrıca reklam kampanyalarının etkinliğini ölçmek için de kullanılabilir.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Çerez Yönetimi</h2>
            <p className="mb-4">
              Çoğu web tarayıcısı çerezleri otomatik olarak kabul eder, ancak tarayıcı ayarlarınızı 
              değiştirerek çerezleri kontrol edebilirsiniz. Çerezleri tamamen devre dışı bırakırsanız, 
              web sitesinin bazı özelliklerinin düzgün çalışmayabileceğini unutmayın.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">İletişim</h2>
            <p>
              Çerez politikamız hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>E-posta: info@sinceva.com</li>
              <li>Telefon: +90 (212) 123 45 67</li>
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

export default CookiePolicy;