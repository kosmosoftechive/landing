import React from 'react';

const ContactDetailSection = () => {
  return (
    <section className="contact-detail-section bg-white pt-30">
      <div className="container mx-auto">
        <h1 className="section-title mb-2">
          <span>Information</span>
          Contact Details
        </h1>
        {/* <p className="max-w-[450px]">
          As you might expect of a company that began as a high-end interiors contractor, we pay
          strict attention.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-y-10">
          <div className="flex justify-between">
            <div className="flex gap-4 items-start">
              <img src="/assets/images/contact/ci-1.png" />
              <div>
                <h4 className="text-primary text-18 uppercase">Phone Number</h4>
                <p className="text-black">+6282216866725</p>
              </div>
            </div>
            <div className="hidden lg:block w-[1px] bg-gray-200 mr-20" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 items-start">
              <img src="/assets/images/contact/ci-2.png" />
              <div>
                <h4 className="text-primary text-18 uppercase">Email Address</h4>
                <p className="text-black">info@kosmosoftechive.com</p>
              </div>
            </div>
            <div className="hidden lg:block w-[1px] bg-gray-200 mr-20" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 items-start">
              <img src="/assets/images/contact/ci-3.png" />
              <div>
                <h4 className="text-primary text-18 uppercase">Office Location</h4>
                <p className="text-black">
                  Jalan Taman Kopo Indah 3 No.D 75, Kabupaten Bandung, Provinsi Jawa Barat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-100 mt-20">
          <div
            id="map_canvas"
            className="map_canvas"
            data-latitude="40.712776"
            data-longitude="-74.005974"
            data-marker="images/marker.png"
            data-marker-name="Bingo"
          ></div>
          <iframe
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.370207878663!2d107.5540501!3d-6.965579999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef23cfe4efa3%3A0xaf199c549839bd99!2sJl.%20Taman%20Kopo%20Indah%203%20No.D%2075%2C%20Mekar%20Rahayu%2C%20Kec.%20Margaasih%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040218%2C%20Indonesia!5e0!3m2!1sen!2suk!4v1711482099895!5m2!1sen!2suk"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailSection;
