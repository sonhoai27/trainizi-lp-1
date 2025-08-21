import React from 'react';
import { useTranslations } from 'next-intl';

interface Feature {
  title: string;
  description: string;
  gif: string;
  layout: 'text-left' | 'text-right';
}

interface FeatureSectionProps extends Feature {}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, gif, layout }) => (
  <div className="py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${layout === 'text-right' ? 'lg:grid-flow-col-dense' : ''}`}>
        <div className={layout === 'text-right' ? 'lg:col-start-2' : ''}>
          <h3 className="text-3xl sm:text-4xl text-black mb-6 leading-tight">{title}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className={layout === 'text-right' ? 'lg:col-start-1' : ''}>
          <div className="relative flex justify-center items-center">
            <img
              src={gif}
              alt={`${title} demonstration`}
              className="w-1/2 max-w-md h-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  const t = useTranslations('features');

  const featuresData: Feature[] = [
    {
      title: t('feature1.title'),
      description: t('feature1.description'),
      gif: 'https://framerusercontent.com/images/4DCYaF07OMmhVbUjfU3rHUZFnCQ.gif',
      layout: 'text-left'
    },
    {
      title: t('feature2.title'),
      description: t('feature2.description'),
      gif: 'https://framerusercontent.com/images/NPKInYNf2FnlnQ0uyCkwQLsNI.gif',
      layout: 'text-right'
    },
    {
      title: t('feature3.title'),
      description: t('feature3.description'),
      gif: 'https://framerusercontent.com/images/NYvelptljsUJfpdn6FK9V7Gm8g.gif',
      layout: 'text-left'
    },
    {
      title: t('feature4.title'),
      description: t('feature4.description'),
      gif: 'https://framerusercontent.com/images/oG9TGXQHz5fR2pMFxVhyKumf6ko.gif',
      layout: 'text-right'
    },
  ];

  return (
    <section className="bg-white">
      {featuresData.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;