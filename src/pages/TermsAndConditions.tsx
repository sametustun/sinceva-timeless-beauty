import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const TermsAndConditions: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"></div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.acceptanceOfTerms}</h2>
            <p className="mb-4">
              {t.acceptanceText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.useLicense}</h2>
            <p className="mb-4">{t.useLicenseText}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.modifyMaterials}</li>
              <li>{t.commercialUse}</li>
              <li>{t.reverseEngineer}</li>
              <li>{t.removeCopyright}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.productInformation}</h2>
            <p className="mb-4">
              {t.productInfoText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.ordersPayment}</h2>
            <p className="mb-4">{t.ordersPaymentText}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.ordersSubject}</li>
              <li>{t.reserveRight}</li>
              <li>{t.paymentRequired}</li>
              <li>{t.pricesSubject}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.returnsRefunds}</h2>
            <p className="mb-4">
              {t.returnsText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.limitationLiability}</h2>
            <p className="mb-4">
              {t.limitationText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.governingLaw}</h2>
            <p className="mb-4">
              {t.governingText}
            </p>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            <p>{t.lastUpdated} {new Date().toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'tr' ? 'tr-TR' : 'en-US')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;