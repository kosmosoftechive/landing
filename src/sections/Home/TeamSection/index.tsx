import React from 'react';
import classnames from 'classnames';

import { Button } from '@components/Common';
import { FacebookIcon, InstagramIcon } from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';

import styles from './styles.module.css';

const data = [
  {
    id: 1,
    name: 'Vincentius Dwi Prasetyo',
    job: 'Co-Founder',
    image: '/assets/images/team/team-1.png',
    description: 'Meet our co-founder, Vincentius Dwi Prasetyo, whose passion and expertise have been instrumental in shaping our company\'s journey towards innovation and success.',
  },
  {
    id: 2,
    name: 'Galuh Joko Pamungkas',
    job: 'Co-Founder',
    image: '/assets/images/team/team-2.png',
    description: 'Meet our co-founder, Galuh Joko Pamungkas, bringing a wealth of experience and innovation to our company\'s journey towards success.',
  },
  {
    id: 1,
    name: 'Yesaya Tommy',
    job: 'Advisor',
    image: '/assets/images/team/team-3.png',
    description: 'Meet our trusted advisor, Yesaya Tommy, whose expertise and guidance will undoubtedly propel our company to new heights.',
  },
];

const TeamSection = () => {
  return (
    <section className="relative team-section bg-white pt-20 md:pt-40 pb-23">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start pb-10 sm:pb-0">
          <h1 className="section-title">
            <span>Our Team</span>
            Meet Our Team
          </h1>
          {/* <Button>View All</Button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {data.map((member) => (
            <div
              key={member.id}
              className={classnames('bg-cover bg-no-repeat group', styles.teamCard)}
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="relative h-full pt-8.5 pb-10 px-7.5 group-hover:bg-black group-hover:bg-opacity-80">
                <div className="team-title absolute left-0 bottom-[42px] w-full pt-0 px-7.5 transition-all duration-700 ease-out group-hover:border-bottom group-hover:border-gray-100 group-hover:pt-0 group-hover:px-0 group-hover:pb-8 group-hover:mb-8.5 group-hover:relative group-hover:bottom-0 group-hover:opacity-100 group-hover:visible">
                  <p className="text-white font-bold mb-1.5 text-20">{member.name}</p>
                  <span className="text-14 text-primary">{member.job}</span>
                </div>
                <p className="text-gray-200 opacity-0 invisible transition-all duration-700 ease-out">
                  {member.description}
                </p>
                {/* <div className="team-social absolute left-0 bottom-0 w-full px-7.5 opacity-0 invisible trandition-all duration-700 ease-out flex gap-4 group-hover:opacity-100 group-hover:visible group-hover:bottom-[34px]">
                  <FacebookIcon className="text-white transition-all duration-500 hover:text-primary" />
                  <TwitterIcon className="text-white transition-all duration-500 hover:text-primary" />
                  <InstagramIcon className="text-white transition-all duration-500 hover:text-primary" />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
