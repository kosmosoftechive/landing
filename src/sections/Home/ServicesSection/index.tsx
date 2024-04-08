import React from 'react';

const data = [
  {
    image: '/assets/images/services/services-1.png',
    heading: 'REALTIME ASSISTANCE',
    content:
      'Offer real-time assistance to ensure seamless integration and immediate resolution of any technical challenges you may encounter.',
  },
  {
    image: '/assets/images/services/services-2.png',
    heading: 'DEVELOPMENT SUPPORT',
    content:
      'We provide comprehensive development support, guiding you through every stage of the process to bring your vision to life.',
  },
  {
    image: '/assets/images/services/services-3.png',
    heading: 'SECURITY MANAGEMENT',
    content:
      'Prioritize security management, implementing robust measures to safeguard your data and protect your systems from potential threats.',
  },
  {
    image: '/assets/images/services/services-4.png',
    heading: 'ARCHITECTURE DESIGN',
    content:
      'Focus on crafting scalable and efficient systems that lay a strong foundation for your application\'s growth and success.',
  },
];

const counterData = [
  {
    name: 'Projects Completed',
    value: 127,
  },
  {
    name: 'Happy Clients',
    value: 85,
  },
  {
    name: 'Awards Received',
    value: 36,
  },
  {
    name: 'Cups of Coffee',
    value: 74,
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
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-15 mt-30">
            {counterData.map((item) => (
              <div key={item.name} className="flex gap-3 items-center">
                <h2 className="text-primary text-32 md:text-60 md:leading-[52px]">{item.value}</h2>
                <h5 className="text-black text-18 uppercase break-words">{item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
