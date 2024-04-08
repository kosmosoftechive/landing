import React from 'react';

const ProjectDetailSection = () => {
  return (
    <section className="pt-30 pb-22.5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <img src="/assets/images/project/details/details-1.jpg" alt="Details 1" />
            <img src="/assets/images/project/details/details-3.jpg" alt="Details 3" />
            <img src="/assets/images/project/details/details-5.jpg" alt="Details 5" />
          </div>
          <div className="flex flex-col gap-8">
            <img src="/assets/images/project/details/details-2.jpg" alt="Details 2" />
            <img src="/assets/images/project/details/details-4.jpg" alt="Details 4" />
            <img src="/assets/images/project/details/details-6.jpg" alt="Details 6" />
          </div>
        </div>
        <div>
          <h1 className="text-36 text-black uppercase mb-5">OFFICE BUILDING CREATIVE</h1>
          <p className="mb-6">
            Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic
            grids. We propose and discuss design rules for functional metasurfaces with randomly
            placed.
          </p>
          <p className="mb-6">
            Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non
            tellus id gravida. Cras neque dolor, volutpat et hendrerit et.
          </p>
          <div className="mb-7.5">
            <span className="text-15 text-gray-300">Clients:</span>
            <h3 className="text-24 uppercase text-black">John Smith</h3>
          </div>
          <div className="mb-7.5">
            <span className="text-15 text-gray-300">Location:</span>
            <h3 className="text-24 uppercase text-black">101 E 129th St, East Chicago, US</h3>
          </div>
          <div className="mb-7.5">
            <span className="text-15 text-gray-300">Location:</span>
            <h3 className="text-24 uppercase text-black">Decoration, building, Office.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
