import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import AboutUsSection from '@sections/About/AboutUsSection';
import CallToSection from '@sections/Home/CallToSection';
import TeamSection from '@sections/Home/TeamSection';

const AboutPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="about-page pb-0">
          <TopBanner title="About Us" name="About Us" />
          <AboutUsSection />
          <CallToSection />
          <TeamSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default AboutPage;
