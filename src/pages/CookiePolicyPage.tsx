import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const CookiePolicyPage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"></div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small data files that are placed on your computer or mobile device 
              when you visit a website. Cookies are widely used by website owners to make 
              their websites work more efficiently and to provide reporting information.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">Necessary Cookies</h3>
            <p className="mb-4">
              These cookies are essential for the website to function properly. They enable 
              basic functions like page navigation and access to secure areas of the website. 
              The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website by 
              collecting and reporting information anonymously. This data helps us improve 
              our website's performance and user experience.
            </p>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="mb-4">
              These cookies are used to track visitors across websites. The intention is 
              to display ads that are relevant and engaging for the individual user and 
              thereby more valuable for publishers and third-party advertisers.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside mb-4">
              <li>To ensure our website functions properly</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To provide personalized content and advertisements</li>
              <li>To improve our website's security and performance</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You can control and manage cookies in various ways. Most web browsers 
              automatically accept cookies, but you can modify your browser settings 
              to decline cookies if you prefer. Please note that disabling cookies 
              may affect the functionality of our website.
            </p>
            <p className="mb-4">
              You can also manage your cookie preferences through our cookie consent 
              banner that appears when you first visit our website.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              Some cookies on our website are placed by third-party services. We have 
              no control over these cookies and they are governed by the privacy policies 
              of the respective third parties.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Email: info@sinceva.com</li>
              <li>Phone: +90 (545) 378 21 30</li>
            </ul>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicyPage;
