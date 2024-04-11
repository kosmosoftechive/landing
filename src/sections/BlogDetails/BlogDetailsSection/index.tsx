import React, { useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@components/Common/icons';
import { useRouter } from 'next/router';
import { TwitterIcon } from '@components/Common/icons/Twitter';

import { blogs } from '@constants/blogs';

const BlogDetailsSection = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const blog = useMemo(() => {
    return blogs.find((item) => item.id.toString() === id);
  }, [id]);

  const prevBlog = useMemo(() => {
    // @ts-ignore
    return blogs.find((item) => item.id.toString() === (parseInt(id) - 1).toString());
  }, [id]);

  const nextBlog = useMemo(() => {
    // @ts-ignore
    return blogs.find((item) => item.id.toString() === (parseInt(id) + 1).toString());
  }, [id]);

  return blog && (
    <section className="blog-details-section py-25 bg-white">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 lg:col-span-10 mx-auto">
          <p className="text-gray-200 text-14 uppercase font-bold">
            By {blog.author}{' '}
            <span className="mx-6">•</span> {blog.category}
          </p>
          <h1 className="text-black text-48 font-bold my-7">
            {blog.title}
          </h1>
          <img className="w-250 h-150" src={blog.image} />
          {blog.content}
          <div className="flex items-center justify-between my-10">
              <div className="flex items-center">
                <span className="text-black text-14 mr-2">Tags:</span>
                <p className="text-gray-200 text-14 uppercase font-bold">
                    {blog.tags.join(' • ')}
                </p>
              </div>
          </div>
          <div className="p-12.5 bg-gray-50 flex gap-10">
            <img className="w-30 h-30 rounded-full" src={blog.authorImage} />
            <div>
              <p className="text-black text-19 font-bold mb-2">{blog.author}</p>
              <p className="text-gray text-18">
                {blog.authorBio}
              </p>
            </div>
          </div>
          <div className="flex mt-6 justify-between">
            <div className="flex items-center gap-5">
              {
                prevBlog && (
                  <>
                    <img className="w-20 h-20" src={prevBlog.image} />
                    <div>
                      <div className="flex items-center text-gray">
                        <ArrowLeftIcon />
                        <Link href={`/blogs/${prevBlog.id}`}>
                          <span className="text-15">Previous Post</span>
                        </Link>
                      </div>
                      <p className="text-black text-18 font-bold">{prevBlog.title.substring(0, 30)}...</p>
                    </div>
                  </>
                )
              }
            </div>
            <div className="flex items-center gap-5">
              {
                nextBlog && (
                  <>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-gray">
                        <Link href={`/blogs/${nextBlog.id}`}>
                          <span className="text-15">Next Post</span>
                        </Link>
                        <ArrowRightIcon />
                      </div>
                      <p className="text-black text-18 font-bold">{nextBlog.title.substring(0, 30)}...</p>
                    </div>
                    <img className="w-20 h-20" src={nextBlog.image} />
                  </>
                )
              }
            </div>
          </div>
          {/* <div className="mt-15">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsSection;
