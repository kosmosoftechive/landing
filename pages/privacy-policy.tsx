import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import ProjectDetailSection from '@sections/Projects/DetailSection';

const TermsConditionsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <TopBanner title="Privacy Policy"/>
      <div className="p-10">
        <p className="pb-3"><strong>Effective Date:</strong> 01.06.2024</p>

        <p>Kosmos Softech Hive ("Company", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website (<a href="https://www.kosmosoftechive.com">www.kosmosoftechive.com</a>), use our services, or interact with us.</p>

        <p>Please read this policy carefully to understand our views and practices regarding your personal data.</p>

        <h2 className="pt-8">1. Information We Collect</h2>
        <p>We may collect and process the following categories of information:</p>
        <ul className="pl-5 list-disc">
          <li><strong>Personal Identification Information:</strong> Name, email address, phone number, job title, and company name</li>
          <li><strong>Technical Information:</strong> IP address, browser type, device type, OS version, location data</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent on site, clickstream data, preferences, and behavioral data</li>
          <li><strong>Communications:</strong> Content of emails, inquiries, support requests, and chat messages</li>
          <li><strong>Account Information:</strong> Login credentials, billing address, project history, and other settings</li>
        </ul>

        <h2 className="pt-8">2. How We Use Your Information</h2>
        <p>We use your information for various business purposes, including:</p>
        <ul className="pl-5 list-disc">
          <li>To provide and maintain our services</li>
          <li>To respond to inquiries or support requests</li>
          <li>To personalize user experience</li>
          <li>To improve our website and service offerings</li>
          <li>To manage billing and account management</li>
          <li>To communicate updates, security notices, and promotional offers</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="pt-8">3. Legal Bases for Processing</h2>
        <p>We process your personal data based on the following legal grounds:</p>
        <ul className="pl-5 list-disc">
          <li>Your consent</li>
          <li>The performance of a contract with you</li>
          <li>Our legal obligations</li>
          <li>Our legitimate business interests</li>
        </ul>

        <h2 className="pt-8">4. How We Share Information</h2>
        <p>We do not sell your personal information. We may share it with:</p>
        <ul className="pl-5 list-disc">
          <li>Trusted third-party service providers (e.g., cloud hosting, email services)</li>
          <li>Payment processors for invoicing and transactions</li>
          <li>Government and law enforcement agencies, if required by law</li>
          <li>Successors in the event of a business transfer, merger, or acquisition</li>
        </ul>

        <h2 className="pt-8">5. Cookies and Tracking Technologies</h2>
        <p>We use cookies, web beacons, and similar technologies to improve your experience. You can manage your cookie preferences in your browser settings. See our <a href="/cookie-policy" className="underline">Cookie Policy</a> for details.</p>

        <h2 className="pt-8">6. Data Retention</h2>
        <p>We retain your personal data only as long as necessary for the purposes described in this policy, or as required by law. Once no longer needed, it will be securely deleted or anonymized.</p>

        <h2 className="pt-8">7. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>

        <h2 className="pt-8">8. International Data Transfers</h2>
        <p>If you are located outside Indonesia, your information may be transferred to and stored in countries that may not have the same data protection laws. We take steps to ensure your information receives appropriate protection.</p>

        <h2 className="pt-8">9. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="pl-5 list-disc">
          <li>Access the personal data we hold about you</li>
          <li>Correct or update inaccurate data</li>
          <li>Request deletion of your data ("right to be forgotten")</li>
          <li>Object to or restrict certain types of processing</li>
          <li>Withdraw consent at any time (if processing was based on consent)</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>

        <h2 className="pt-8">10. Children's Privacy</h2>
        <p>Our services are not intended for individuals under the age of 16 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal data from children.</p>

        <h2 className="pt-8">11. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. We encourage you to read their privacy policies before submitting any personal data.</p>

        <h2 className="pt-8">12. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date. We recommend reviewing this policy regularly to stay informed.</p>

        <h2 className="pt-8">13. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
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
