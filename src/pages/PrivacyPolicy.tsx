import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">How we collect, use, and protect your personal information</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Controller</h2>
            <p className="mb-4">
              SAFI COSMETİC LİMİTED COMPANY ("Company", "we", "us", "our") is the data controller 
              responsible for your personal information. We are committed to protecting and respecting your privacy.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Identity Information (Name, surname, identification number)</li>
              <li>Contact Information (Email address, phone number, postal address)</li>
              <li>Customer Transaction Information (Order history, preferences)</li>
              <li>Marketing Information (Interests, demographic data)</li>
              <li>Financial Information (Payment details, billing address)</li>
              <li>Technical Information (IP address, browser type, device information)</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We process your personal information for the following purposes:</p>
            <ul className="list-disc list-inside mb-4">
              <li>To provide and deliver our products and services</li>
              <li>To process your orders and manage your account</li>
              <li>To communicate with you about your orders and our services</li>
              <li>To improve our website and customer experience</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
              <li>To conduct statistical analysis and research</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Legal Basis for Processing</h2>
            <p className="mb-4">We process your personal information based on:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Contract performance - to fulfill our obligations to you</li>
              <li>Legitimate interests - to improve our services and communicate with you</li>
              <li>Legal compliance - to meet our legal and regulatory obligations</li>
              <li>Consent - for marketing communications and optional services</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Access your personal information</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Erase your personal information in certain circumstances</li>
              <li>Restrict processing of your information</li>
              <li>Object to processing based on legitimate interests</li>
              <li>Data portability in certain circumstances</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, no method 
              of transmission over the internet is 100% secure.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, 
              please contact us:
            </p>
            <ul className="list-disc list-inside">
              <li>Email: privacy@sinceva.com</li>
              <li>Phone: +90 (212) 123 45 67</li>
              <li>Address: [Company Address]</li>
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