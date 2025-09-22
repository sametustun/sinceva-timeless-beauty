import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const CookiePolicyPage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl opacity-90">Information about how we use cookies on our website</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you 
              visit a website. They are widely used to make websites work more efficiently and to 
              provide information to website owners about how visitors use their sites.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">Necessary Cookies</h3>
            <p className="mb-4">
              These cookies are essential for the website to function properly. They enable basic 
              functions like page navigation, access to secure areas, and shopping cart functionality. 
              The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website performance 
              and user experience.
            </p>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="mb-4">
              These cookies are used to deliver advertisements that are more relevant to you and your 
              interests. They may also be used to limit the number of times you see an advertisement 
              and measure the effectiveness of advertising campaigns.
            </p>

            <h3 className="text-xl font-semibold mb-3">Preference Cookies</h3>
            <p className="mb-4">
              These cookies allow the website to remember choices you make (such as your username, 
              language, or region) and provide enhanced, more personal features.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              We may also use third-party cookies from trusted partners to help us understand how 
              you use our website, show you relevant advertisements, and measure the effectiveness 
              of our marketing campaigns.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Use our cookie preference center that appears when you first visit our site</li>
              <li>Change your browser settings to refuse or delete cookies</li>
              <li>Use browser add-ons or plugins to manage cookies</li>
              <li>Visit your browser's help section for specific instructions</li>
            </ul>
            <p className="mb-4">
              Please note that if you disable certain cookies, some features of our website may not 
              function properly, and your user experience may be affected.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookie Retention</h2>
            <p className="mb-4">
              Cookies are stored for different periods depending on their purpose:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Session cookies: Deleted when you close your browser</li>
              <li>Persistent cookies: Remain on your device for a set period or until manually deleted</li>
              <li>The retention period varies from a few hours to several years</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We encourage you to review this 
              policy periodically.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <ul className="list-disc list-inside">
              <li>Email: cookies@sinceva.com</li>
              <li>Phone: +90 (212) 123 45 67</li>
              <li>Contact form: /contact</li>
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