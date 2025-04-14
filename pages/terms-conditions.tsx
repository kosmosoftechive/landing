import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import ProjectDetailSection from '@sections/Projects/DetailSection';

const TermsConditionsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <TopBanner title="Terms and Conditions"/>
      <div className="p-10">
        <p className="pb-3"><strong>Effective Date:</strong> 01.06.2024</p>

        <p>Welcome to Kosmos Softech Hive ("Company", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website (<a href="https://www.kosmosoftechive.com">www.kosmosoftechive.com</a>), applications, services, software, and technology offerings (collectively referred to as the "Services").</p>

        <p>By accessing our website or using our services, you agree to be legally bound by these Terms, our Privacy Policy, Cookie Policy, and any additional agreements you enter into with us. If you do not agree with any of these, please do not use our services.</p>

        <h2 className="pt-8">1. Company Services Overview</h2>
        <p>We offer a wide range of IT solutions, including but not limited to:</p>
        <ul className="pl-5 list-disc">
          <li>Custom Software Development</li>
          <li>Web & Mobile App Development</li>
          <li>Cloud Computing and Infrastructure Management</li>
          <li>IT Consulting and Project Management</li>
          <li>Cybersecurity and Risk Mitigation</li>
          <li>Data Analytics and Business Intelligence</li>
          <li>API Integrations and Microservices</li>
          <li>DevOps and Continuous Integration/Deployment</li>
          <li>Enterprise Software Solutions</li>
          <li>Managed IT Services and Technical Support</li>
        </ul>

        <h2 className="pt-8">2. Use of the Website and Services</h2>
        <p>You agree to use our Services in accordance with all applicable local, state, national, and international laws. You are solely responsible for your actions and for any data or content you upload or process via our platform.</p>

        <h2 className="pt-8">3. Acceptable Use Policy</h2>
        <p>Users shall not:</p>
        <ul className="pl-5 list-disc">
          <li>Use our Services for any illegal or unauthorized purpose</li>
          <li>Upload viruses, malware, or any other harmful code</li>
          <li>Attempt to access systems, data, or content without authorization</li>
          <li>Distribute spam, phishing links, or fraudulent content</li>
          <li>Violate any intellectual property or proprietary rights</li>
        </ul>

        <h2 className="pt-8">4. Service Availability</h2>
        <p>We strive to ensure high availability of our Services but do not guarantee uninterrupted access. Downtime may occur due to maintenance, updates, technical issues, or factors outside our control.</p>

        <h2 className="pt-8">5. Fees and Billing</h2>
        <p>All services are subject to agreed-upon pricing and payment terms. Fees are due according to your invoice or agreement schedule. We may suspend services for late or unpaid invoices. Additional fees may apply for late payments or chargebacks.</p>

        <h2 className="pt-8">6. Intellectual Property</h2>
        <p>All content, source code, graphics, logos, and trademarks are the exclusive property of Kosmos Softech Hive or our licensors. You may not reproduce, modify, distribute, or republish our intellectual property without express written permission.</p>

        <h2 className="pt-8">7. Client Content and License</h2>
        <p>You retain ownership of content you provide. You grant us a non-exclusive, royalty-free license to use, process, and display your content solely for the purpose of providing the agreed Services.</p>

        <h2 className="pt-8">8. Confidentiality</h2>
        <p>Both parties agree to protect the confidentiality of any non-public information exchanged. This obligation remains even after the termination of services and shall not apply to information that is publicly known, independently developed, or legally disclosed.</p>

        <h2 className="pt-8">9. Privacy and Data Protection</h2>
        <p>Our collection and use of personal data is governed by our <a href="/privacy-policy" className="underline">Privacy Policy</a>. We comply with applicable privacy laws including GDPR and CCPA where applicable. Users are responsible for securing their data and ensuring compliance with their own privacy obligations.</p>

        <h2 className="pt-8">10. Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to enhance your experience. You can manage your preferences through your browser settings. For more details, please refer to our <a href="/cookie-policy" className="underline">Cookie Policy</a>.</p>

        <h2 className="pt-8">11. Third-Party Services</h2>
        <p>We may use or integrate with third-party services (e.g., cloud providers, APIs, payment gateways). We are not responsible for the performance, security, or privacy practices of these services.</p>

        <h2 className="pt-8">12. Export Restrictions</h2>
        <p>You agree to comply with all export control laws and regulations. Our services may not be used in or by entities in embargoed countries or on restricted lists.</p>

        <h2 className="pt-8">13. Beta Services</h2>
        <p>We may offer beta or trial features. These are offered "as is" with no warranties. We reserve the right to modify or discontinue beta features at any time.</p>

        <h2 className="pt-8">14. DMCA and Copyright Claims</h2>
        <p>If you believe your copyrighted work has been used in violation of copyright law, please contact us with your name, contact details, proof of ownership, and the allegedly infringing content. We will respond in accordance with the Digital Millennium Copyright Act (DMCA).</p>

        <h2 className="pt-8">15. Disclaimers</h2>
        <p>All services are provided "as is" and "as available" without warranties of any kind. We disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that services will be error-free or secure.</p>

        <h2 className="pt-8">16. Limitation of Liability</h2>
        <p>In no event shall Kosmos Softech Hive be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, data, or goodwill. Our total liability under any contract shall not exceed the amount paid to us for that service within the last 12 months.</p>

        <h2 className="pt-8">17. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless Kosmos Softech Hive, its directors, employees, and agents from any claims, losses, or liabilities resulting from your use of the Services or violation of these Terms.</p>

        <h2 className="pt-8">18. Termination</h2>
        <p>We may suspend or terminate access to our services for violations of these Terms. You may also cancel your account by written notice. Termination does not relieve you of outstanding payment obligations.</p>

        <h2 className="pt-8">19. Force Majeure</h2>
        <p>We shall not be liable for any failure or delay in performance caused by circumstances beyond our reasonable control, including natural disasters, internet failures, labor strikes, or governmental actions.</p>

        <h2 className="pt-8">20. Governing Law and Jurisdiction</h2>
        <p>These Terms are governed by the laws of Indonesia. Any disputes shall be resolved in the courts located in Bandung, and you consent to the jurisdiction of such courts.</p>

        <h2 className="pt-8">21. Amendments</h2>
        <p>We reserve the right to modify these Terms at any time. Changes will be posted on this page with the revised effective date. Continued use after changes constitutes acceptance.</p>

        <h2 className="pt-8">22. Entire Agreement</h2>
        <p>These Terms, along with our Privacy Policy and any applicable agreements, constitute the entire agreement between you and Kosmos Softech Hive and supersede all prior communications.</p>

        <h2 className="pt-8">23. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <p className="pt-3">
          <strong>Kosmos Softech Hive</strong><br />
          Jalan Taman Kopo Indah 3 No.D 75, Kabupaten<br />
          Bandung, Indonesia<br />
          Email: <a href="mailto:info@kosmosoftechive.com">info@kosmosoftechive.com</a><br />
          Phone: +6282216866725
        </p>
      </div>
    </FullLayout>
  );
};

export default TermsConditionsPage;
