import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const TermsAndConditions: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl opacity-90">Terms of use and conditions for our website and services</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="mb-4">Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Products and Services</h2>
            <p className="mb-4">
              We strive to provide accurate product descriptions and pricing information. However, 
              we reserve the right to correct any errors, inaccuracies, or omissions and to change 
              or update information at any time without prior notice.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>All orders are subject to availability and confirmation</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to limit quantities purchased</li>
              <li>Product images are for illustration purposes only</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Orders and Payment</h2>
            <p className="mb-4">Terms and conditions for ordering and payment:</p>
            <ul className="list-disc list-inside mb-4">
              <li>All orders are subject to acceptance and availability</li>
              <li>Payment must be received before shipping</li>
              <li>We accept various payment methods as indicated at checkout</li>
              <li>All transactions are secured with SSL encryption</li>
              <li>Delivery times are estimates and not guarantees</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Returns and Exchanges</h2>
            <p className="mb-4">
              You may return products within 14 days of delivery for a full refund, provided that:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Products are unused and in original packaging</li>
              <li>Products are returned in saleable condition</li>
              <li>Return shipping costs may apply</li>
              <li>Some products may be non-returnable for hygiene reasons</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              SAFI COSMETİC LİMİTED COMPANY shall not be held liable for any direct, indirect, 
              incidental, special, or consequential damages arising from the use of this website 
              or our products. We do not guarantee uninterrupted or error-free operation of the website.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the website, to understand our practices.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws 
              of Turkey, and you irrevocably submit to the exclusive jurisdiction of the courts 
              in Istanbul, Turkey.
            </p>
          </section>

          <div className="text-sm text-gray-600 mt-8">
            <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;