import React, { useState } from 'react';
import Link from 'next/link';

import {
  ArrowRightIcon,
  ArrowLeftIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@components/Common/icons';
import { Input } from '@components/Common';
import { TwitterIcon } from '@components/Common/icons/Twitter';

import { blogs } from '@constants/blogs';

const PAGE_SIZE = 3;

const BlogsSection = () => {
  const [page, setPage] = useState(1);
  
  return (
    <section className="blogs-section py-30 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="pb-14">
            {
              blogs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((blog) => (
                <>
                  <p className="text-gray-200 text-14 uppercase font-bold">
                    By {blog.author}{' '}
                    <span className="mx-2 md:mx-6">•</span> {blog.category}
                  </p>
                  <h1 className="text-black text-28 md:text-36 font-bold my-6">
                    {blog.title}
                  </h1>
                  <img className="w-200 h-130" src={blog.image}/>
                  <div className="p-10">
                    <p className="mb-2">
                      {blog.heading.substring(0, 200)}...
                      <Link href={`/blogs/${blog.id}`}><span className="text-black font-semibold text-14">Read More</span></Link>
                    </p>
                  </div>
                </>
              ))
            }
          </div>
          <div className="mt-10 flex gap-2">
            {
              page > 1 && (
                <div className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer text-black">
                  <ArrowLeftIcon onClick={() => setPage(page - 1)} size={18} />
                </div>
              )
            }
            {
              new Array(Math.ceil(blogs.length / PAGE_SIZE)).fill(0).map((v, index) => (
                <div onClick={() => setPage(index + 1)} className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer">
                  <span className="text-black font-bold text-15">{index + 1}</span>
                </div>
              ))
            }
            {
              page < Math.ceil(blogs.length / PAGE_SIZE) && (
                <div className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer text-black">
                  <ArrowRightIcon onClick={() => setPage(page + 1)} size={18} />
                </div>
              )
            }
            
          </div>
        </div>
        <div className="col-span-1">
          {/* <div className="flex flex-col items-center justify-center mb-10">
            <img src="/assets/images/blog/blog-about.png" />
            <p className="text-black my-6 text-center">
              Quis ipsum suspendisse ultrices gravid. Risus commodo viverra maece accums lacus vel
              facilisis.
            </p>
            <img src="/assets/images/blog/signature.png" />
          </div> */}
          {/* <Input placeholder="Search..." /> */}
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-2">Categories</h4>
            <div className="flex flex-col gap-4 text-gray-200">
              <p>Backend</p>
              <p>Frontend</p>
              <p>Testing</p>
              <p>Cloud</p>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">Feature News</h4>
            <div className="flex flex-col gap-6">
              {
                blogs.filter(blog => blog.featured).map((blog) => (
                  <div className="flex gap-4">
                    <img className="w-20 h-20" src={blog.image} />
                    <div>
                      <p className="text-black">
                        {blog.title}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">Tag</h4>
            <p className="text-14 font-bold text-gray-200 uppercase break-words">
              {[
                'Javascript',
                'CSS',
                'HTML',
                'Theme',
                'Array',
                'Immutable',
                'Testing'
              ].map((item, index) => (
                <>
                  {index > 0 && <span className="mx-2">•</span>}
                  {item}
                </>
              ))}
            </p>
          </div>
          {/* <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">Follow Us</h4>
            <div className="flex items-center gap-7">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon size={20} />
            </div>
          </div> */}
          {/* <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">NewsLetter</h4>
            <Input placeholder="Your Email Address" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
