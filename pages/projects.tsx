import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Common/TopBanner';
import ProjectListSection from '@sections/Projects/ProjectListSection';

const ProjectsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="projects-page pb-0">
          <TopBanner title="Our Projects" name="Projects" />
          <ProjectListSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default ProjectsPage;
