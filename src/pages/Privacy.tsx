import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const Privacy: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kişisel Verilerin Korunması Politikası</h1>
          <p className="text-xl opacity-90">KVKK kapsamında kişisel verilerinizin korunması</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Veri Sorumlusu</h2>
            <p className="mb-4">
              SAFI COSMETİC LİMİTED COMPANY olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") 
              uyarınca veri sorumlusu sıfatıyla, kişisel verilerinizin korunmasına önem vermekteyiz.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Toplanan Kişisel Veriler</h2>
            <p className="mb-4">Aşağıdaki kişisel verileriniz işlenebilmektedir:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Kimlik Bilgileri (Ad, soyad, T.C. kimlik numarası)</li>
              <li>İletişim Bilgileri (E-posta, telefon, adres)</li>
              <li>Müşteri İşlem Bilgileri (Sipariş geçmişi, tercihler)</li>
              <li>Pazarlama Bilgileri (İlgi alanları, demografik veriler)</li>
              <li>Finansal Bilgiler (Ödeme bilgileri, fatura adresi)</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Veri İşleme Amaçları</h2>
            <p className="mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Ürün ve hizmetlerin sunulması</li>
              <li>Müşteri memnuniyetinin sağlanması</li>
              <li>Pazarlama faaliyetlerinin yürütülmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>İstatistiksel analizlerin yapılması</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Haklarınız</h2>
            <p className="mb-4">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
              <li>İşlenen kişisel veriler hakkında bilgi talep etme</li>
              <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">İletişim</h2>
            <p className="mb-4">
              KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki kanallardan bizimle iletişime geçebilirsiniz:
            </p>
            <ul className="list-disc list-inside">
              <li>E-posta: kvkk@sinceva.com</li>
              <li>Telefon: +90 (212) 123 45 67</li>
              <li>Posta: [Şirket Adresi]</li>
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

export default Privacy;