import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import Link from 'next/link';
import ProjectDetailSection from '@sections/Projects/DetailSection';

const TermsConditionsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <TopBanner title="Cookie Policy"/>
      <div className="p-10">
        <p className="pb-3"><strong>Effective Date:</strong> 01.06.2024</p>

        <p>This Cookie Policy explains how Kosmos Softech Hive ("Company", "we", "us", or "our") uses cookies and similar technologies on our website <Link href="https://www.kosmosoftechive.com" className="underline">www.kosmosoftechive.com</Link>. This policy should be read in conjunction with our <Link href="/privacy-policy">Privacy Policy</Link>.</p>

        <h2 className="pt-8">1. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>

        <h2 className="pt-8">2. Why We Use Cookies</h2>
        <p>We use cookies for a variety of reasons, including:</p>
        <ul className="pl-5 list-disc">
          <li>To ensure the website functions properly</li>
          <li>To enhance your user experience</li>
          <li>To analyze usage and performance of our website</li>
          <li>To provide personalized content and advertising</li>
          <li>To remember your preferences and settings</li>
        </ul>

        <h2 className="pt-8">3. Types of Cookies We Use</h2>
        <ul className="pl-5 list-disc">
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the operation of our website and cannot be disabled. They include, for example, cookies that enable you to log into secure areas.</li>
          <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization based on your interactions.</li>
          <li><strong>Targeting/Advertising Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
        </ul>

        <h2 className="pt-8">4. Third-Party Cookies</h2>
        <p>We may allow third-party service providers to place cookies on your device to provide services such as analytics, advertising, and social media features. These providers include (but are not limited to):</p>
        <ul className="pl-5 list-disc">
          <li>Google Analytics</li>
          <li>Facebook Pixel</li>
          <li>LinkedIn Insights Tag</li>
          <li>Hotjar / Microsoft Clarity</li>
        </ul>
        <p>We do not control these cookies. Please refer to the third parties' own cookie policies for more information.</p>

        <h2 className="pt-8">5. Cookie Duration</h2>
        <p>Cookies may be either "session" or "persistent".</p>
        <ul className="pl-5 list-disc">
          <li><strong>Session Cookies:</strong> These cookies expire once you close your web browser.</li>
          <li><strong>Persistent Cookies:</strong> These remain on your device for a set period of time or until you delete them manually.</li>
        </ul>

        <h2 className="pt-8">6. How to Manage Cookies</h2>
        <p>You have the right to decide whether to accept or reject cookies. You can manage cookie settings through:</p>
        <ul className="pl-5 list-disc">
          <li>Your browser settings (Chrome, Firefox, Safari, Edge, etc.)</li>
          <li>Our website's cookie consent banner or preference center</li>
        </ul>
        <p>Please note that disabling certain cookies may affect the functionality of the site.</p>

        <h2 className="pt-8">7. Your Consent</h2>
        <p>By using our website, you consent to the use of cookies as described in this Cookie Policy. You may withdraw your consent at any time by disabling cookies in your browser</p>

        <h2 className="pt-8">8. Changes to This Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date. We recommend reviewing this policy periodically to stay informed about how we use cookies.</p>

        <h2 className="pt-8">9. Contact Us</h2>
        <p>If you have any questions about this Cookie Policy or our data practices, please contact us:</p>
        <p className="pt-3">
          <strong>Kosmos Softech Hive</strong><br />
          Jalan Taman Kopo Indah 3 No.D 75<br />
          Bandung, Indonesia<br />
          Phone: +6282216866725
        </p>
      </div>
    </FullLayout>
  );
};

export default TermsConditionsPage;
