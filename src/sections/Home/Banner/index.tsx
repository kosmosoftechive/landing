import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Link from 'next/link';

import { Button } from '@components/Common';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    id: 1,
    heading: 'QUALITY IS NOT ONLY OUR STANDARD.',
  },
  {
    id: 2,
    heading: 'EXCELLENCE IS NOT JUST OUR GOAL.',
  },
];

const PreviousArrow = ({ style, onClick, ...rest }: CustomArrowProps) => {
  return (
    <div
      className="slick-arrow slick-prev !left-2 lg:!left-10 z-10"
      style={style}
      onClick={onClick}
    >
      <Button className="!px-2" color="white">
        <ArrowLeftIcon className="text-white" />
      </Button>
    </div>
  );
};

const NextArrow = ({ style, onClick, ...rest }: CustomArrowProps) => {
  return (
    <div
      className="slick-arrow slick-next !right-2 lg:!right-10 z-10"
      style={style}
      onClick={onClick}
    >
      <Button className="!px-2" color="white">
        <ArrowRightIcon className="text-white" />
      </Button>
    </div>
  );
};

const HomeBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section
      className="home-banner-section relative h-screen w-screen bg-cover bg-no-repeat bg-center px-4 lg:px-20"
      style={{ backgroundImage: `url(/assets/images/hero/hero-1.jpg)` }}
    >
      <Slider {...settings} className="h-full !flex items-center justify-center">
        {data.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <h1 className="text-24 md:text-36 lg:text-72 lg:leading-[80px] text-white text-center max-w-[840px] mx-auto mb-11">
                {slide.heading}
              </h1>
              <Link href="/projects">
                <Button color="white">See Projects</Button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-end px-20">
        <div className="flex gap-2">
          <div className="w-10 h-10 rounded-full text-white hover:text-primary cursor-pointer">
            <FacebookIcon className="transition-all duration-300" />
          </div>
          <div className="w-10 h-10 rounded-full text-white hover:text-primary cursor-pointer">
            <TwitterIcon className="transition-all duration-300" />
          </div>
          <div className="w-10 h-10 rounded-full text-white hover:text-primary cursor-pointer">
            <InstagramIcon className="transition-all duration-300" />
          </div>
          <div className="w-10 h-10 rounded-full text-white hover:text-primary cursor-pointer">
            <LinkedinIcon size={20} className="transition-all duration-300" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HomeBanner;
