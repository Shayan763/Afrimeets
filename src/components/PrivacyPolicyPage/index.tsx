import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="p-6 sm:p-12 md:p-20 text-gray-800">
      <div className="mx-auto p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 text-center mb-8">Effective Date: December 16th 2024</p>
        <p className="mb-6">
          At Afrimeets, we are committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, and safeguard your information when you use our website or mobile applications.
        </p>

        <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Personal Information:</strong> Name, email address, phone number, payment details, and profile information when creating an account.</li>
          <li><strong>Usage Data:</strong> Information on how you interact with our platform, such as clicks, pages visited, and time spent.</li>
          <li><strong>Device Information:</strong> IP address, browser type, and device identifiers.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">We collect and use your information to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Create and manage your account.</li>
          <li>Match you with compatible profiles.</li>
          <li>Process subscriptions and payments securely.</li>
          <li>Improve and optimize our platform based on user behavior.</li>
          <li>Respond to inquiries and provide support.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">3. Sharing of Information</h2>
        <p className="mb-6">
          Afrimeets does not sell or share your information with third parties, except:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>With service providers assisting in payment processing, data storage, or analytics.</li>
          <li>To comply with legal obligations or respond to lawful requests.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-6">
          We implement industry-standard security measures to protect your personal data. However, no method
          of transmission over the internet is 100% secure, and Afrimeets cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-6">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Access, update, or delete your account information.</li>
          <li>Withdraw consent for data processing at any time.</li>
          <li>Request clarification on how your data is being used.</li>
        </ul>
        <p className="mb-6">
          For data-related inquiries, please contact us:
        </p>
        <ul className="list-none pl-0 mb-6">
          <li><strong>Email:</strong> <a href="mailto:support@afrimeets.com" className="text-blue-600">support@afrimeets.com</a></li>
          <li><strong>Phone:</strong> 405-219-0063</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">6. Changes to Privacy Policy</h2>
        <p className="mb-6">
          Afrimeets reserves the right to update this Privacy Policy. Significant changes will be communicated
          to you. Continued use of the platform constitutes acceptance of the updated policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
