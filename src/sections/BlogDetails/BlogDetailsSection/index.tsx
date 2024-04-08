import React from 'react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';
import { Button, Input, TextArea } from '@components/Common';

const BlogDetailsSection = () => {
  return (
    <section className="blog-details-section py-25 bg-white">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 lg:col-span-10 mx-auto">
          <p className="text-gray-200 text-14 uppercase font-bold">
            December 20, 2019 <span className="mx-6">•</span> By John Doe{' '}
            <span className="mx-6">•</span> Planning
          </p>
          <h1 className="text-black text-48 font-bold my-7">
            Target and Amazon Shopping List for Home Stagers
          </h1>
          <img className="" src="/assets/images/blog/details/blog-details.jpg" />
          <p className="text-18 my-8">
            Forget Ebay and other forms of advertising for your property that costs you hard earned
            money. Properties have ready several locations around the world to take your free
            listings for any luxury property you have.
            <br />
            <br />
            Each location web site is purpose built so every Search Engine will pick up new listings
            within minutes. This way your customers only have to type in keywords relating to their
            search for a luxury home and the Search Engine will show the Invest Asset web site
            applicable to their location they are looking for.
            <br />
            <br /> Most real estate companies are way too busy with selling their client’s
            properties to put any effort forth to their web site. Hence, making it difficult for web
            surfers to find their listings.
          </p>
          <div className="py-8.5 px-12.5 bg-primary">
            <h2 className="text-white text-24 mb-3">
              “Without question this is the stager you want to use! Jennifer staged a hard to sell
              home for me and we sold it fast! …. Jennifer made it possible.”
            </h2>
            <span className="text-white text-14 uppercase font-bold">MARTIN LOCKHART</span>
          </div>
          <p className="text-18 my-8">
            Now times have changed and we at Investment Assets Properties are thinking of the
            customer before the business. If you have a property in a location not listed at
            Investment Assets Properties. Don’t worry. A quick email to us will ensure your location
            is built to accommodate your listing.
            <br />
            <br />
            Selling your luxury home, condominium or property should not be a painstaking event. It
            should be easy and stress free and it should be able to be advertised on a global scale
            for free. Investment Assets Properties can and will do this for you in a hassle free
            way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <img src="/assets/images/blog/details/bi-1.jpg" />
            <img src="/assets/images/blog/details/bi-2.jpg" />
            <img src="/assets/images/blog/details/bi-3.jpg" />
          </div>
          <div className="flex items-center justify-between my-10">
            <div className="flex items-center">
              <span className="text-black text-14 mr-2">Tags:</span>
              <p className="text-gray-200 text-14 uppercase font-bold">
                Branding <span className="mx-2">•</span>Office <span className="mx-2">•</span>{' '}
                Creative
              </p>
            </div>
            <div className="flex items-center gap-6">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon size={20} />
            </div>
          </div>
          <div className="p-12.5 bg-gray-50 flex gap-10">
            <img src="/assets/images/blog/blog-about.png" />
            <div>
              <p className="text-black text-19 font-bold mb-2">Dana Vaughn</p>
              <p className="text-gray text-18">
                Now times have changed and we at Investment Assets Properties are thinking of the
                customer before the business. If you have a property in a location not listed at
                Investment Assets Properties.
              </p>
            </div>
          </div>
          <div className="flex mt-6 justify-between">
            <div className="flex items-center gap-5">
              <img src="/assets/images/blog/details/prev.jpg" />
              <div>
                <div className="flex items-center text-gray">
                  <ArrowLeftIcon />
                  <span className="text-15">Previous Post</span>
                </div>
                <p className="text-black text-18 font-bold">Popular Uses Of The Internet</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-end">
                <div className="flex items-center text-gray">
                  <span className="text-15">Next Post</span>
                  <ArrowRightIcon />
                </div>
                <p className="text-black text-18 font-bold">Help Finding Information Online</p>
              </div>
              <img src="/assets/images/blog/details/next.jpg" />
            </div>
          </div>
          <div className="mt-15">
            <h3 className="text-black uppercase mb-9 text-24">Leave a Reply</h3>
            <div className="mt-6 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Input placeholder="Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Phone Number" />
              </div>
              <TextArea placeholder="Your Comment" />
              <Button className="w-fit" color="black">
                Submit Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
