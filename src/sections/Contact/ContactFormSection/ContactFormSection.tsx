import React from 'react';

import { Button, Input, TextArea } from '@components/Common';

const ContactFormSection = () => {
  return (
    <section className="contact-form-section py-25">
      <div className="container mx-auto">
        <h1 className="section-title mb-2">
          <span>Form</span>
          Get In Touch
        </h1>
        <p className="max-w-[450px]">
          As you might expect of a company that began as a high-end interiors contractor, we pay
          strict attention.
        </p>
        <div className="mt-10 flex flex-col gap-8 max-w-[700px]">
          <div className="flex flex-col md:flex-row gap-8">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
          </div>
          <TextArea placeholder="Message" />
          <Button className="w-fit" color="secondary">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
