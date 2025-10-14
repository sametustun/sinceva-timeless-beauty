import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"></div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.informationWeCollect}</h2>
            <p className="mb-4">
              {t.informationCollectText}
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.personalIdentifiers}</li>
              <li>{t.billingAddresses}</li>
              <li>{t.paymentInfo}</li>
              <li>{t.purchaseHistory}</li>
              <li>{t.communicationPrefs}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.howWeUse}</h2>
            <p className="mb-4">{t.howWeUseText}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.processOrders}</li>
              <li>{t.provideSupport}</li>
              <li>{t.sendMarketing}</li>
              <li>{t.improveProducts}</li>
              <li>{t.complyLegal}</li>
              <li>{t.detectFraud}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.informationSharing}</h2>
            <p className="mb-4">
              {t.informationSharingText}
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.serviceProviders}</li>
              <li>{t.legalRequirements}</li>
              <li>{t.businessTransfers}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.dataSecurity}</h2>
            <p className="mb-4">
              {t.dataSecurityText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.yourRights}</h2>
            <p className="mb-4">{t.yourRightsText}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.accessInfo}</li>
              <li>{t.correctInfo}</li>
              <li>{t.deleteInfo}</li>
              <li>{t.objectProcessing}</li>
              <li>{t.withdrawConsent}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.contactUsPolicy}</h2>
            <p className="mb-4">
              {t.contactPolicyText}
            </p>
            <ul className="list-disc list-inside">
              <li>Email: info@sinceva.com</li>
              <li>Phone: +90 (545) 378 21 30</li>
            </ul>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            <p>{t.lastUpdated} {new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'tr' ? 'tr-TR' : 'en-US')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
