import React from 'react';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTA = ({ title, subtitle, buttonText, buttonLink }: CTAProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
          <a
            href={buttonLink}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;