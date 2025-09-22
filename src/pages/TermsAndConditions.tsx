import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const TermsAndConditions: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl opacity-90">Terms of use for our website and services</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="mb-4">Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Product Information</h2>
            <p className="mb-4">
              We strive to provide accurate product information on our website. However, 
              we do not warrant that product descriptions, pricing, or other content is 
              accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Orders and Payment</h2>
            <p className="mb-4">The following terms apply to orders and payments:</p>
            <ul className="list-disc list-inside mb-4">
              <li>All orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Payment must be received before order processing</li>
              <li>Prices are subject to change without notice</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Returns and Refunds</h2>
            <p className="mb-4">
              We offer a 14-day return policy for unopened products in their original packaging. 
              Return shipping costs are the responsibility of the customer unless the return 
              is due to our error.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Sinceva or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use our website 
              or products, even if we have been notified orally or in writing of the 
              possibility of such damage.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with 
              the laws of Turkey, and you irrevocably submit to the exclusive jurisdiction 
              of the courts in that state or location.
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