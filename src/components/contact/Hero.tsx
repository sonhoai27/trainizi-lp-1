import { useTranslations } from 'next-intl';
import React from 'react';
import ContactForm from './ContactForm';

const Hero = () => {
  const t = useTranslations('contact');
  return (
    <section className="py-20 text-center" style={{ background: 'linear-gradient(rgb(255, 239, 241) 0%, rgb(255, 239, 241) 52.8814%, rgb(245, 245, 255) 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
          {t('title')}
        </h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;