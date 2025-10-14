import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const ConsumerReviewRules: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"></div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.reviewGuidelines}</h2>
            <p className="mb-4">
              {t.reviewGuidelinesText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.acceptableContent}</h2>
            <p className="mb-4">{t.reviewsShouldText}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.basedOnExperience}</li>
              <li>{t.honestFeedback}</li>
              <li>{t.focusQuality}</li>
              <li>{t.includeDetails}</li>
              <li>{t.respectfulLanguage}</li>
              <li>{t.relevantProduct}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.prohibitedContent}</h2>
            <p className="mb-4">{t.reviewsMustNot}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.offensiveLanguage}</li>
              <li>{t.personalInfo}</li>
              <li>{t.spamContent}</li>
              <li>{t.falseInfo}</li>
              <li>{t.violateIP}</li>
              <li>{t.notPurchased}</li>
              <li>{t.defamatoryStatements}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.reviewVerification}</h2>
            <p className="mb-4">
              {t.verificationText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.moderationProcess}</h2>
            <p className="mb-4">
              {t.moderationText}
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>{t.reviewApprove}</li>
              <li>{t.editRemove}</li>
              <li>{t.rejectReviews}</li>
              <li>{t.removeReported}</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.incentivizedReviews}</h2>
            <p className="mb-4">
              {t.incentivizedText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.reportingReviews}</h2>
            <p className="mb-4">
              {t.reportingText}
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{t.reviewerRights}</h2>
            <p className="mb-4">
              {t.reviewerRightsText}
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

export default ConsumerReviewRules;
