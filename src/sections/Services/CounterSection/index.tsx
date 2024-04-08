import React from 'react';

const counterData = [
  {
    name: 'Projects Completed',
    value: 85,
  },
  {
    name: 'Happy Clients',
    value: 127,
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

const CounterSection = () => {
  return (
    <section
      className="counter-section py-25"
      style={{ backgroundImage: 'url(/assets/images/counter-bg.jpg)' }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15">
        {counterData.map((item) => (
          <div key={item.name} className="flex gap-3 text-white">
            <h2 className="text-primary text-60 leading-[52px]">{item.value}</h2>
            <h5 className="text-18 uppercase break-words">{item.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
