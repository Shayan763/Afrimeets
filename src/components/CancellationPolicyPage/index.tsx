import React from 'react';

const CancellationPolicyPage = () => {
  return (
    <div className="min-h-screen p-6 sm:p-12 md:p-20">
      <div className="p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Cancellation Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">1. Subscription Cancellation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>You can cancel your subscription at any time through your Afrimeets account settings.</li>
            <li>If you cancel during the 7-day free trial, you will not be charged.</li>
            <li>Cancellations after the trial period will stop the next billing cycle, and you will retain access to premium features until the end of the paid subscription term.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">2. Refund Policy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Subscriptions are non-refundable after payment has been processed.</li>
            <li>If you experience technical issues or billing discrepancies, please contact our support team for resolution.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">3. How to Cancel</h2>
          <p className="text-gray-600 mb-4">To cancel your subscription:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Log in to your Afrimeets account.</li>
            <li>Navigate to Subscription Settings.</li>
            <li>Select Cancel Subscription.</li>
          </ol>
          <p className="text-gray-600 mt-4">For assistance with cancellations, contact us directly:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Email: <a href="mailto:support@afrimeets.com" className="text-blue-500">support@afrimeets.com</a></li>
            <li>Phone: 405-219-0063</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">7-Day Free Trial Period</h2>
          <p className="text-gray-600 mb-4">At Afrimeets, we want you to get started on your journey to meaningful connections with confidence. That’s why we offer a 7-Day Free Trial, giving you a chance to explore essential features of the platform at no cost.</p>

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">What’s Included in the 7-Day Free Trial?</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Messaging: Send and receive messages to initiate conversations with other members.</li>
            <li>Basic Matchmaking: Access curated match suggestions based on your profile preferences and interests.</li>
            <li>Profile Browsing: Explore profiles of potential matches to find individuals that align with your values and goals.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">What’s Not Included</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Premium Features such as advanced filters, private chats, profile boosts, and additional connects are not available during the trial period.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Sign Up: Create your profile and complete the simple registration process.</li>
            <li>Activate the Free Trial: Your 7-day free trial begins automatically once your profile is set up.</li>
            <li>Explore & Connect: Browse matches, send messages, and start meaningful interactions.</li>
            <li>Upgrade Anytime: To access premium features and additional connects, you can upgrade to a subscription plan during or after your trial.</li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">Terms of the 7-Day Free Trial</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>The free trial is valid for 7 days from the date of activation.</li>
            <li>Includes messaging, basic matchmaking, and profile browsing.</li>
            <li>Premium features such as private chats, profile boosts, and additional connects are not included.</li>
            <li>After the trial ends, users can upgrade to a subscription plan to continue using Afrimeets’ full range of features.</li>
            <li>No charges apply during the trial period unless a subscription is purchased.</li>
          </ul>

          <p className="text-gray-600 mt-4">For assistance or questions:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Email: <a href="mailto:support@afrimeets.com" className="text-blue-500">support@afrimeets.com</a></li>
            <li>Phone: 405-219-0063</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CancellationPolicyPage;
