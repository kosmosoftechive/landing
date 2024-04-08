import React from 'react';

import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@components/Common/icons';
import { Input } from '@components/Common';
import { TwitterIcon } from '@components/Common/icons/Twitter';

const BlogsSection = () => {
  return (
    <section className="blogs-section py-30 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="pb-14">
            <p className="text-gray-200 text-14 uppercase font-bold">
              December 20, 2019 <span className="mx-2 md:mx-6">•</span> By John Doe{' '}
              <span className="mx-2 md:mx-6">•</span> Planning
            </p>
            <h1 className="text-black text-28 md:text-36 font-bold my-6">
              Target and Amazon Shopping List for Home Stagers
            </h1>
            <img className="" src="/assets/images/blog/blog-1.jpg" />
            <div className="p-10">
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.
              </p>
              <span className="text-black font-semibold text-14">Read More</span>
            </div>
            <div className="py-8.5 px-12.5 bg-primary">
              <h2 className="text-white text-24 mb-3">
                “Without question this is the stager you want to use! Jennifer staged a hard to sell
                home for me and we sold it fast! …. Jennifer made it possible.”
              </h2>
              <span className="text-white text-14 uppercase font-bold">MARTIN LOCKHART</span>
            </div>
          </div>
          <div className="border-b border-gray-100">
            <p className="text-gray-200 text-14 uppercase font-bold">
              December 20, 2019 <span className="mx-2 md:mx-6">•</span> By John Doe{' '}
              <span className="mx-2 md:mx-6">•</span> Planning
            </p>
            <h1 className="text-black text-28 md:text-36 font-bold my-6">
              6 Ideas for Team Building & Employee Appreciation for Home Stagers
            </h1>
            <img className="" src="/assets/images/blog/blog-2.jpg" />
            <div className="p-10">
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.
              </p>
              <span className="text-black font-semibold text-14">Read More</span>
            </div>
          </div>
          <div className="mt-14 border-b border-gray-100">
            <p className="text-gray-200 text-14 uppercase font-bold">
              December 20, 2019 <span className="mx-2 md:mx-6">•</span> By John Doe{' '}
              <span className="mx-2 md:mx-6">•</span> Planning
            </p>
            <h1 className="text-black text-28 md:text-36 font-bold my-6">
              How to Find the Best Price Structure for Your Home Staging Services
            </h1>
            <img className="" src="/assets/images/blog/blog-2.jpg" />
            <div className="p-10">
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.
              </p>
              <span className="text-black font-semibold text-14">Read More</span>
            </div>
          </div>
          <div className="mt-10 flex gap-2">
            <div className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer">
              <span className="text-black font-bold text-15">1</span>
            </div>
            <div className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer">
              <span className="text-black font-bold text-15">2</span>
            </div>
            <div className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer">
              <span className="text-black font-bold text-15">3</span>
            </div>
            <div className="border-2 border-transparent flex-center w-10 h-10 transition-all duration-300 ease-out hover:border-primary cursor-pointer text-black">
              <ArrowRightIcon size={18} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center justify-center mb-10">
            <img src="/assets/images/blog/blog-about.png" />
            <p className="text-black my-6 text-center">
              Quis ipsum suspendisse ultrices gravid. Risus commodo viverra maece accums lacus vel
              facilisis.
            </p>
            <img src="/assets/images/blog/signature.png" />
          </div>
          <Input placeholder="Search..." />
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-2">Categories</h4>
            <div className="flex flex-col gap-4 text-gray-200">
              <p>Work Space</p>
              <p>Office Building</p>
              <p>HomeStay</p>
              <p>Making</p>
              <p>Process</p>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">Feature News</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <img src="/assets/images/blog/br-1.jpg" />
                <div>
                  <p className="text-14 font-bold text-gray-200 mb-2">December 20, 2019</p>
                  <p className="text-black">
                    Grace Millane's mother tells killer she died 'terrified
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="/assets/images/blog/br-2.jpg" />
                <div>
                  <p className="text-14 font-bold text-gray-200 mb-2">December 20, 2019</p>
                  <p className="text-black">A 'gregarious' gap-year student who dreamed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="/assets/images/blog/br-3.jpg" />
                <div>
                  <p className="text-14 font-bold text-gray-200 mb-2">December 20, 2019</p>
                  <p className="text-black">A 'gregarious' gap-year student who dreamed.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">Tag</h4>
            <p className="text-14 font-bold text-gray-200 uppercase break-words">
              {[
                'Branding',
                'Office',
                'Creative',
                'Building',
                'Portfolio',
                'Products',
                'Website',
                'Design',
                'Working Space',
              ].map((item, index) => (
                <>
                  {index > 0 && <span className="mx-2">•</span>}
                  {item}
                </>
              ))}
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">Follow Us</h4>
            <div className="flex items-center gap-7">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon size={20} />
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-black uppercase text-20 mb-6">NewsLetter</h4>
            <Input placeholder="Your Email Address" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
