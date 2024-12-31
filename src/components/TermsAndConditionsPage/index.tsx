import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-20 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 text-center mb-6">Effective Date: December 16th, 2024</p>
        <p className="mb-8">
          Welcome to Afrimeets. By using our website or mobile application, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully before accessing or using our services.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By accessing the Afrimeets platform (website or mobile applications), you agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You must be at least 18 years old to use Afrimeets.</li>
            <li>By creating an account, you confirm that you meet the age requirement and that the information provided is accurate and complete.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Account Creation and Usage</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You agree to use Afrimeets only for lawful purposes and in compliance with all applicable laws.</li>
            <li>Afrimeets reserves the right to suspend or terminate accounts that violate these terms.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Subscription and Payment</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Afrimeets offers subscription plans with a 7-day free trial. After the trial period, you will be charged according to the plan selected.</li>
            <li>Payments are billed monthly or annually depending on your plan.</li>
            <li>All transactions are securely processed, and you agree to provide accurate payment information.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Content and Conduct</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Users are prohibited from posting:
              <ul className="list-disc ml-6">
                <li>False, misleading, or offensive content.</li>
                <li>Spam, fraudulent content, or unauthorized promotions.</li>
                <li>Content that infringes on third-party intellectual property rights.</li>
              </ul>
            </li>
            <li>Afrimeets reserves the right to remove any content that violates these guidelines.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Termination of Service</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Breach these Terms and Conditions.</li>
            <li>Engage in abusive or harmful behavior on the platform.</li>
            <li>Violate applicable laws or third-party rights.</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>User actions or interactions on the platform.</li>
            <li>Loss of data, damages, or claims arising from misuse of the platform.</li>
            <li>Any third-party content or links provided within the service.</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Modifications to Terms</h2>
          <p>Afrimeets reserves the right to modify these Terms and Conditions at any time. You will be notified of significant changes, and continued use of the platform constitutes acceptance of the revised terms.</p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-2">For questions or concerns regarding these Terms, contact us:</p>
          <ul className="list-disc ml-6">
            <li>Email: <a href="mailto:support@afrimeets.com" className="text-blue-600 hover:underline">support@afrimeets.com</a></li>
            <li>Phone: 405-219-0063</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
