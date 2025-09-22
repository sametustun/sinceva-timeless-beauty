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
            <h2 className="text-2xl font-bold mb-4">Review Guidelines</h2>
            <p className="mb-4">
              We encourage honest and helpful reviews from our customers. To ensure 
              the quality and authenticity of reviews on our platform, please follow 
              these guidelines when submitting your review.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptable Review Content</h2>
            <p className="mb-4">Reviews should:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Be based on your personal experience with the product</li>
              <li>Provide honest and constructive feedback</li>
              <li>Focus on product quality, effectiveness, and value</li>
              <li>Include specific details about your experience</li>
              <li>Be respectful and appropriate in language</li>
              <li>Be relevant to the product being reviewed</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Prohibited Content</h2>
            <p className="mb-4">Reviews must not contain:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Offensive, discriminatory, or inappropriate language</li>
              <li>Personal information about individuals</li>
              <li>Spam, promotional content, or advertisements</li>
              <li>False or misleading information</li>
              <li>Content that violates intellectual property rights</li>
              <li>Reviews for products you haven't purchased or used</li>
              <li>Defamatory statements about competitors</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Review Verification</h2>
            <p className="mb-4">
              To maintain authenticity, we may verify that reviewers have actually 
              purchased the products they are reviewing. Verified purchase reviews 
              will be clearly marked on our website.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Moderation Process</h2>
            <p className="mb-4">
              All reviews are subject to moderation before publication. We reserve 
              the right to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Review and approve submitted content</li>
              <li>Edit or remove inappropriate content</li>
              <li>Reject reviews that violate our guidelines</li>
              <li>Remove reviews that are reported by users</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Incentivized Reviews</h2>
            <p className="mb-4">
              Reviews in exchange for compensation, free products, or other incentives 
              must be clearly disclosed. Failure to disclose such relationships may 
              result in review removal and account suspension.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Reporting Inappropriate Reviews</h2>
            <p className="mb-4">
              If you find a review that violates our guidelines, please report it 
              using the "Report Review" function or contact our customer service team.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">
              As a reviewer, you retain ownership of your review content. However, 
              by submitting a review, you grant us a license to use, display, and 
              distribute your review on our platform and marketing materials.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions about our review policies, please contact us:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Email: reviews@sinceva.com</li>
              <li>Phone: +90 (212) 123 45 67</li>
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