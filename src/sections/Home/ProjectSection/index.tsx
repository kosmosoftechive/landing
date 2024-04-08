import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import { ArrowLeftIcon, ArrowRightIcon } from '@components/Common/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    id: 1,
    image: '/assets/images/project/project-1.jpg',
    title: 'Interiors',
    description: 'Lower River Street Astoria',
  },
  {
    id: 2,
    image: '/assets/images/project/project-2.jpg',
    title: 'Interiors',
    description: 'Lower River Street Astoria',
  },
  {
    id: 3,
    image: '/assets/images/project/project-3.jpg',
    title: 'Interiors',
    description: 'Lower River Street Astoria',
  },
  {
    id: 4,
    image: '/assets/images/project/project-4.jpg',
    title: 'Interiors',
    description: 'Lower River Street Astoria',
  },
  {
    id: 5,
    image: '/assets/images/project/project-3.jpg',
    title: 'Interiors',
    description: 'Lower River Street Astoria',
  },
];

const PreviousArrow = ({ style, onClick, ...rest }: CustomArrowProps) => {
  return (
    <div className="slick-arrow slick-prev !left-10 z-10" style={style} onClick={onClick}>
      <div className="w-14 h-14 flex-center bg-white">
        <ArrowLeftIcon className="text-black" />
      </div>
    </div>
  );
};

const NextArrow = ({ style, onClick, ...rest }: CustomArrowProps) => {
  return (
    <div className="slick-arrow slick-next !right-10 z-10" style={style} onClick={onClick}>
      <div className="w-14 h-14 flex-center bg-white">
        <ArrowRightIcon className="text-black" />
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipeToSlide: false,
    autoplay: false,
    autoplaySpeed: 5000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="project-section px-4">
      <h1 className="section-title text-center">
        <span>Our Works</span>
        LATEST PROJECTS
      </h1>
      <Slider {...settings} className="h-full !flex items-center justify-center">
        {data.map((slide) => (
          <div key={slide.id} className="px-4">
            <div className="relative group ">
              <img src={slide.image} />
              <div className="absolute -bottom-35 group-hover:bottom-6 left-5 right-5 bg-white py-6 px-4 transition-all duration-300 ease-in-out">
                <p className="uppercase text-primary text-center">{slide.title}</p>
                <h3 className="text-20 uppercase text-black text-center">{slide.description}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProjectSection;
