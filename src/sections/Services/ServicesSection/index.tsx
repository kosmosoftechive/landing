import React from 'react';

const data = [
  {
    image: '/assets/images/services/services-1.png',
    heading: 'INTERIOR DESIGN',
    content:
      'As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.',
    items: [
      'Energy allocation',
      'Fire protection, safety',
      'Lifts and escalators.',
      'Facade engineering.',
    ],
  },
  {
    image: '/assets/images/services/services-2.png',
    heading: 'OFFICE DESIGN',
    content:
      'Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.',
    items: [
      'Active system.',
      'Air conditioning.',
      'BSRIA blue book.',
      'Building services engineer.',
    ],
  },
  {
    image: '/assets/images/services/services-3.png',
    heading: 'HOME DESIGN',
    content:
      'Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.',
    items: ['Pipework.', 'Plant room.', 'Plumbing.', 'Rules of Thumb'],
  },
  {
    image: '/assets/images/services/services-4.png',
    heading: 'DESIGN DRAWING',
    content:
      'Creating architectural and creative solutions to help people realize their vision and make them a reality.',
    items: [
      'Guidelines for building.',
      'Thermal comfort.',
      'Types of building services.',
      'Types of heating system.',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section bg-white pt-40 pb-22">
      <div className="container mx-auto">
        <h1 className="section-title">
          <span>Our specialization</span>
          What we do
        </h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
            {data.map((item) => (
              <div key={item.heading} className="flex flex-col gap-3">
                <img className="w-15 h-15" src={item.image} alt={item.heading} />
                <h2 className="text-24 text-black mt-3">{item.heading}</h2>
                <p>{item.content}</p>
                <div className="flex flex-col gap-2">
                  {item.items.map((d) => (
                    <p className="text-black" key={d}>
                      - {d}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
