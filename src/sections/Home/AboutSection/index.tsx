import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import { Button } from '@components/Common';

import styles from './styles.module.css';

const AboutSection = () => {
  return (
    <section className="about-section bg-white pt-10 pb-10 md:pt-40 md:pb-46">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="pt-20">
          <h1 className="section-title">
            <span>WHO ARE WE</span>
            Unveiling the Essence of Our Organization
          </h1>
          <p className="mt-7">
            We are a team of passionate innovators dedicated to crafting cutting-edge solutions tailored
            to meet our clients' needs. With a collective expertise spanning diverse domains,
            we thrive on tackling complex challenges and transforming ideas into reality.
          </p>
          <p className="mt-7 mb-15">
            Our commitment to excellence drives us to continuously evolve, ensuring that we remain at the forefront of technological advancements
          </p>
          <Link href="/about">
            <Button className="border-gray-100">Learn More</Button>
          </Link>
        </div>
        <div>
          <div className={classnames('relative md:ml-8', styles.aboutPicInner)}>
            <img className="relative z-[2]" src="/assets/images/about-pic.jpg" alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
