import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { Button } from '@components/Common';
import styles from './styles.module.css';

const data = [
  {
    id: 1,
    image: '/assets/images/blog/latest-1.jpg',
    category: 'Architecture',
    title: 'Immutable array updates with Array.prototype.with',
    link: '/blogs/1',
  },
  {
    id: 2,
    image: '/assets/images/blog/latest-2.jpg',
    category: 'Interior',
    title: 'Celebrate a more interoperable web with Interop 2023',
    link: '/blogs/2',
  },
  {
    id: 3,
    image: '/assets/images/blog/latest-3.jpg',
    category: 'Planning',
    title: 'New to the web platform in January',
    link: '/blogs/3',
  },
];

const LatestNewsSection = () => {
  return (
    <section className="latest-news-section bg-white pt-30 pb-23">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start pb-10 sm:pb-0">
          <h1 className="section-title">
            <span>Latest News</span>
            From Our Blog
          </h1>
          <Link href="/blogs">
            <Button>View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">
          {data.map((item) => (
            <div key={item.id} className="shadow-blog-card group h-full flex flex-col">
              <img className="w-full" src={item.image} alt={item.title} style={{ width: 380, height: 253 }}/>
              <div className="pt-6 pb-6 px-7.5 flex-1 flex flex-col justify-between">
                {/* <span className="text-gray-200 uppercase text-14 mb-2.5 font-bold">
                  {item.category}
                </span> */}
                <p className="text-black text-22 mb-3 font-bold leading-[32px]">{item.title}</p>
                <Link
                  className={classnames(
                    'group-hover:after:left-auto group-hover:after:right-[-50px] group-hover:pl-0',
                    styles.readMore
                  )}
                  href={item.link}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
