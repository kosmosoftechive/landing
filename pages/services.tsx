import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import ServicesSection from '@sections/Services/ServicesSection';
import CounterSection from '@sections/Services/CounterSection';
import ClientsSection from '@sections/Services/ClientsSection';

const ServicesPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="projects-page pb-0">
          <TopBanner title="Our Services" name="Our Services" />
          <ServicesSection />
          <CounterSection />
          <ClientsSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default ServicesPage;
