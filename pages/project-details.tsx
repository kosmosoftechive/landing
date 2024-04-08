import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import ProjectDetailSection from '@sections/Projects/DetailSection';

const ProjectDetailsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="projects-page pb-0">
          <TopBanner title="Projects Details" name="Project Details" />
          <ProjectDetailSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default ProjectDetailsPage;
