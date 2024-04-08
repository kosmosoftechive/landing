import React from 'react';
import Link from 'next/link';
import { Button } from '@components/Common';

const CallToSection = () => {
  return (
    <section
      className="call-to-section pt-33 pb-34 bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url(/assets/images/call-bg.jpg)' }}
    >
      <div className="container mx-auto">
        <h1 className="section-title text-white text-center">
          <span className="!mb-6">Why Choose Us?</span>
          OUR ABILITY TO DELIVER OUTSTANDING RESULTS FOR OUR CLIENTS STARTS WITH OUR TEAM OF SMART.
        </h1>
        <div className="flex justify-center">
          <Link href="/contact">
            <Button className="" color="white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToSection;
