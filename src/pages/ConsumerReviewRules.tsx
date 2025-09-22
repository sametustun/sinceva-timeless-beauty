import React from 'react';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';

const ConsumerReviewRules: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-[40vh] bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Consumer Review Rules</h1>
          <p className="text-xl opacity-90">Guidelines for product reviews and ratings</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">General Principles</h2>
            <p className="mb-4">
              At SAFI COSMETİC LİMİTED COMPANY, we value honest and objective feedback from our customers. 
              These rules are established to ensure our review system remains fair, reliable, and helpful 
              for all users.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Review Guidelines</h2>
            <p className="mb-4">Reviews and ratings must meet the following criteria:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Must be based on actual product experience</li>
              <li>Should be objective and constructive</li>
              <li>Must be relevant to the product being reviewed</li>
              <li>Should use respectful language</li>
              <li>Must not contain negative comments about competing brands</li>
              <li>Should focus on product performance, quality, and value</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Prohibited Content</h2>
            <p className="mb-4">The following types of content are not permitted and will be removed:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Offensive language, profanity, or aggressive content</li>
              <li>False or misleading information</li>
              <li>Promotional or spam content</li>
              <li>Personal information sharing</li>
              <li>Copyright-infringing content</li>
              <li>Content promoting illegal activities</li>
              <li>Reviews not based on actual product use</li>
              <li>Discriminatory or hateful content</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Moderation Process</h2>
            <p className="mb-4">
              All reviews are reviewed before publication. The moderation process may take 1-3 business days. 
              Content that does not comply with our guidelines will be rejected, and the user will be notified 
              with the reason for rejection.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Reviews are checked for authenticity and compliance</li>
              <li>We reserve the right to edit reviews for clarity or length</li>
              <li>Repeated violations may result in account restrictions</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Rating System</h2>
            <p className="mb-4">Our rating system works as follows:</p>
            <ul className="list-disc list-inside mb-4">
              <li>1 Star: Poor - Product did not meet expectations at all</li>
              <li>2 Stars: Below Average - Product fell short of expectations</li>
              <li>3 Stars: Average - Product met basic expectations</li>
              <li>4 Stars: Good - Product met or exceeded expectations</li>
              <li>5 Stars: Excellent - Product far exceeded expectations</li>
            </ul>
            <p className="mb-4">
              Please consider product quality, effectiveness, value for money, and overall satisfaction 
              when assigning your rating.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Incentives and Rewards</h2>
            <p className="mb-4">
              We may occasionally offer special promotions or discounts to customers who provide 
              quality and helpful reviews. However, this should not influence the objectivity of 
              your review. All reviews must remain honest and unbiased.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Review Authenticity</h2>
            <p className="mb-4">
              We are committed to maintaining the authenticity of our review system:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Reviews must be from verified purchasers when possible</li>
              <li>We actively monitor for fake or manipulated reviews</li>
              <li>Family members, employees, and business partners cannot review our products</li>
              <li>Incentivized reviews must be clearly disclosed</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Complaints and Appeals</h2>
            <p className="mb-4">
              If you have concerns about our review system or wish to appeal a moderation decision, 
              please contact us through the following channels:
            </p>
            <ul className="list-disc list-inside">
              <li>Email: reviews@sinceva.com</li>
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

export default ConsumerReviewRules;