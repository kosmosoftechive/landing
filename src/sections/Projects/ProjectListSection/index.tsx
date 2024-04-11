import React from 'react';

import { Button } from '@components/Common';

const data = [
  {
    id: 1,
    name: 'Tradler',
    image: '/assets/images/project/project-p1.jpg',
  },
  {
    id: 2,
    name: 'Frumatic',
    image: '/assets/images/project/project-p2.jpg',
  },
  {
    id: 3,
    name: 'Dialiv',
    image: '/assets/images/project/project-p3.jpg',
  },
  {
    id: 4,
    name: 'FloodLightStudios',
    image: '/assets/images/project/project-p4.jpg',
  },
  {
    id: 5,
    name: 'QRMarketing',
    image: '/assets/images/project/project-p5.jpg',
  },
  {
    id: 6,
    name: 'Fasta',
    image: '/assets/images/project/project-p6.jpg',
  },
  {
    id: 7,
    name: 'Suvie',
    image: '/assets/images/project/project-p7.png',
  },
  {
    id: 8,
    name: 'Tixeltec',
    image: '/assets/images/project/project-p8.png',
  },
  {
    id: 9,
    name: 'Braiins',
    image: '/assets/images/project/project-p9.png',
  },
  {
    id: 10,
    name: 'HydraDX',
    image: '/assets/images/project/project-p10.png',
  },
];

const ProjectListSection = () => {
  return (
    <section className="project-list-section py-25">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item) => (
          <div key={item.id} className="">
            <img className="mb-6" src={item.image} alt={item.name} />
            <h3 className="text-black text-24 uppercase text-center">{item.name}</h3>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mt-10">
        <Button>Load More</Button>
      </div> */}
    </section>
  );
};

export default ProjectListSection;
