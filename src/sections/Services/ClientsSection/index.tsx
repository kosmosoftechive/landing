import React from 'react';

const ClientsSection = () => {
  return (
    <section className="clients-section bg-white pt-30 pb-15">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <h1 className="section-title">
              <span>Branding</span>
              Our Clients
            </h1>
          </div>
          <div className="col-span-7 grid grid-cols-2 md:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div>
                  <img className="mb-10" src={`/assets/images/logo/logo-${index + 1}.png`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
