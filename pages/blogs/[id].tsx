import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import BlogDetailsSection from '@sections/BlogDetails/BlogDetailsSection';

const BlogDetails = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="projects-page pb-0">
          <TopBanner className="pt-25 pb-0" />
          <BlogDetailsSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default BlogDetails;
