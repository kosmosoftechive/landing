import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import ContactDetailSection from '@sections/Contact/ContactDetailSection/ContactDetailSection';
import ContactFormSection from '@sections/Contact/ContactFormSection/ContactFormSection';

const ContactPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="projects-page pb-0">
          <TopBanner className="pt-25 pb-0" />
          <ContactDetailSection />
          <ContactFormSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default ContactPage;
