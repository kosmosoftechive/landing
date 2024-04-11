import React from 'react';
import { Input } from '@components/Common';
import {
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  SendIcon,
} from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <section
        className="footer pt-22.5"
        style={{ backgroundImage: 'url(/assets/images/footer-bg.jpg)' }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between pb-18 mb-21 border-b border-gray-400 flex-col sm:flex-row">
            <h1 className="text-white text-30 md:text-38 uppercase mb-4 md:mb-0">
              Ready to Work with us?
            </h1>
            <div className="flex">
              <Input placeholder="Enter Your Email" />
              <div className="h-12.5 w-12.5 flex-center bg-primary text-white aspect-square cursor-pointer">
                <SendIcon />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-6 lg:grid-cols-12 text-gray-300 gap-y-10">
            <div className="col-span-3 lg:col-span-4">
              <div className="w-50">
                <img src="/assets/images/logo.svg" alt="Kosmos Softech Hive" />
                {/* <p className="my-7">
                  Jalan Taman Kopo Indah 3 No.D 75, Kabupaten Bandung, Provinsi Jawa Barat.
                </p>
                <p className="mb-7">info@kosmosoftechive.com<br/>+6282216866725</p> */}
                {/* <div className="flex gap-8">
                  <FacebookIcon className="text-white hover:text-primary transition-all duration-300 cursor-pointer" />
                  <TwitterIcon className="text-white hover:text-primary transition-all duration-300 cursor-pointer" />
                  <InstagramIcon className="text-white hover:text-primary transition-all duration-300 cursor-pointer" />
                  <LinkedinIcon
                    size={20}
                    className="text-white hover:text-primary transition-all duration-300 cursor-pointer"
                  />
                </div> */}
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <p className="text-white font-bold mb-7.5">Company</p>
              <div className="flex flex-col gap-3">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <p className="text-white font-bold mb-7.5">Services</p>
              <div className="flex flex-col gap-3">
                <span>Architecture</span>
                <span>Web Development</span>
                <span>Mobile Development</span>
                <span>Planning</span>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-4">
              <p className="text-white font-bold mb-7.5">Get In Touch</p>
              <div className="w-50">
                <p className="my-7">Jalan Taman Kopo Indah 3 No.D 75, Kabupaten Bandung, Provinsi Jawa Barat.</p>
                <p className="mb-7">
                  info@kosmosoftechive.com
                  <br />
                  +6282216866725
                </p>
              </div>
            </div>
          </div>
          <div className="py-6 mt-15 border-t border-gray-400 flex flex-col sm:flex-row items-center justify-between gap-y-4">
            <div className="flex items-center">Copyright © 2024 All rights reserved</div>
            {/* <div className="flex items-center gap-3">
              <Link href="#">Term of use</Link> | <Link href="#">Privacy Policy</Link>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
