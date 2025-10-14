import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const CookiePolicyPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"></div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.whatAreCookies}</h2>
            <p className="mb-4">
              {t.cookiesDefinition}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.typesOfCookies}</h2>
            
            <h3 className="text-xl font-semibold mb-3">{t.necessaryCookies}</h3>
            <p className="mb-4">
              {t.necessaryText}
            </p>

            <h3 className="text-xl font-semibold mb-3">{t.analyticsCookies}</h3>
            <p className="mb-4">
              {t.analyticsText}
            </p>

            <h3 className="text-xl font-semibold mb-3">{t.marketingCookies}</h3>
            <p className="mb-4">
              {t.marketingText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.howWeUseCookies}</h2>
            <p className="mb-4">{t.cookieUsageText}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.ensureFunction}</li>
              <li>{t.rememberPreferences}</li>
              <li>{t.analyzeTraffic}</li>
              <li>{t.personalizedContent}</li>
              <li>{t.improveSecurity}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.managingCookies}</h2>
            <p className="mb-4">
              {t.managingText}
            </p>
            <p className="mb-4">
              {t.cookieBanner}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.thirdPartyCookies}</h2>
            <p className="mb-4">
              {t.thirdPartyText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.contactUsPolicy}</h2>
            <p>
              {t.contactPolicyText}
            </p>
            <ul className="list-disc list-inside mt-2">
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

export default CookiePolicyPage;
