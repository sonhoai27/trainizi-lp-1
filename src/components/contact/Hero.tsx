import React from 'react';
import ContactForm from './ContactForm';

const Hero = () => {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(rgb(255, 239, 241) 0%, rgb(255, 239, 241) 52.8814%, rgb(245, 245, 255) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              Leave a message and we'll reach out to you within 12 hours.
            </h1>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;