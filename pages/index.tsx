import React, { useEffect, useState } from 'react';
import { useSpring, useSpringRef } from '@react-spring/web';

import { FullLayout, Meta } from '@layouts';
import HomeBanner from '@sections/Home/Banner';
import AboutSection from '@sections/Home/AboutSection';
import ProjectSection from '@sections/Home/ProjectSection';
import ServicesSection from '@sections/Home/ServicesSection';
import TeamSection from '@sections/Home/TeamSection';
import CallToSection from '@sections/Home/CallToSection';
import LatestNewsSection from '@sections/Home/LatestNewsSection';

const Index = () => {
  const [index] = useState(0);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const transRef = useSpringRef();

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="main-home-section pb-0">
          <HomeBanner />
          <AboutSection />
          <ProjectSection />
          <ServicesSection />
          <TeamSection />
          <CallToSection />
          <LatestNewsSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default Index;
