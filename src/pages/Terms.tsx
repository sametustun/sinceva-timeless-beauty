import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kural ve Koşullar</h1>
          <p className="text-xl opacity-90">Web sitesi kullanım şartları ve koşulları</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Genel Hükümler</h2>
            <p className="mb-4">
              Bu web sitesini kullanarak, aşağıdaki kural ve koşulları kabul etmiş sayılırsınız. 
              Bu şartları kabul etmiyorsanız, lütfen web sitesini kullanmayınız.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Web Sitesi Kullanımı</h2>
            <p className="mb-4">Web sitesini aşağıdaki koşullarda kullanabilirsiniz:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Yasal ve meşru amaçlar için kullanım</li>
              <li>Diğer kullanıcıların haklarına saygı gösterme</li>
              <li>Sisteme zarar verebilecek her türlü faaliyetten kaçınma</li>
              <li>Telif hakları ve fikri mülkiyet haklarına saygı gösterme</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ürün ve Hizmetler</h2>
            <p className="mb-4">
              Web sitemizdeki ürün ve hizmet bilgileri güncel tutulmaya çalışılmaktadır. 
              Ancak, ürün özellikleri, fiyatlar ve stok durumu önceden haber verilmeksizin değişebilir.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sipariş ve Ödeme</h2>
            <p className="mb-4">Sipariş ve ödeme işlemleri için aşağıdaki kurallar geçerlidir:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Tüm siparişler onay sürecinden geçer</li>
              <li>Stokta bulunmayan ürünler için alternatif önerilir</li>
              <li>Ödeme güvenliği SSL sertifikası ile sağlanır</li>
              <li>Kargo ve teslimat süreleri tahminidir</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">İade ve Değişim</h2>
            <p className="mb-4">
              Ürünlerinizi teslim aldığınız tarihten itibaren 14 gün içinde iade edebilirsiniz. 
              İade edilecek ürünlerin kullanılmamış ve orijinal ambalajında olması gerekmektedir.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sorumluluk Sınırlaması</h2>
            <p className="mb-4">
              SAFI COSMETİC LİMİTED COMPANY, web sitesinin kesintisiz ve hatasız çalışacağını 
              garanti etmez. Teknik arızalar veya bakım çalışmaları nedeniyle oluşabilecek 
              zararlardan sorumlu değildir.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Yürürlük</h2>
            <p className="mb-4">
              Bu kural ve koşullar Türkiye Cumhuriyeti yasalarına tabidir. 
              Herhangi bir uyuşmazlık durumunda İstanbul mahkemeleri yetkilidir.
            </p>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            <p>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;