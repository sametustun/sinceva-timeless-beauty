import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800"></div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Purchase history and preferences</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Process and fulfill your orders</li>
              <li>Provide customer service and support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud or security incidents</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Service providers who assist us in operating our website and business</li>
              <li>Legal requirements or to protect our rights and safety</li>
              <li>Business transfers (mergers, acquisitions, or asset sales)</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <ul className="list-disc list-inside">
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

export default PrivacyPolicy;
