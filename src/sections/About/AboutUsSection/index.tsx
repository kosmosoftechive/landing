import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="about-us-section pt-30 pb-22">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h1 className="section-title">
            <span>Who Are We</span>
            About Us
          </h1>
          <p className="md:-mt-8">
            As you might expect of a company that began as a high-end interiors contractor.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2">
          <p>
            We're more than just a development company; we're your partners in innovation. With a
            team of dedicated experts, we strive to transform your ideas into impactful digital
            solutions that drive your business forward. Our commitment to excellence, coupled with
            our passion for technology, ensures that we deliver results that exceed expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-y-10">
            <div>
              <img
                className="w-15 h-15"
                src="/assets/images/services/services-5.png"
                alt="Our Mission"
              />
              <h3 className="uppercase text-black text-24 mt-9 mb-6">Our Mission</h3>
              <p>
                Our mission is to empower businesses through innovative software solutions that
                streamline processes, enhance efficiency, and drive sustainable growth.
              </p>
            </div>
            <div>
              <img
                className="w-15 h-15"
                src="/assets/images/services/services-6.png"
                alt="Our Vision"
              />
              <h3 className="uppercase text-black text-24 mt-9 mb-6">Our Vision</h3>
              <p>
                Our vision is to be the forefront of technological advancement, shaping the future
                through pioneering software solutions that revolutionize industries and enrich
                lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
