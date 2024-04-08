import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import BlogsSection from '@sections/Blogs/BlogsSection';

const BlogsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="projects-page pb-0">
          <TopBanner title="Our Blogs" name="Blogs" />
          <BlogsSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default BlogsPage;
