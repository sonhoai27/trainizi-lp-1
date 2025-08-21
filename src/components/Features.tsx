import React from 'react';

interface Feature {
  title: string;
  description: string;
  gif: string;
  layout: 'text-left' | 'text-right';
}

interface FeatureSectionProps extends Feature {}

const featuresData: Feature[] = [
  {
    title: 'Ignite with inspiring questions.',
    description: 'Our AI engine ignites curiosity and critical thinking by asking relevant, critical and thought-provoking questions.',
    gif: 'https://framerusercontent.com/images/4DCYaF07OMmhVbUjfU3rHUZFnCQ.gif',
    layout: 'text-left'
  },
  {
    title: 'Connect with cultural depth.',
    description: 'Every learning is adapted to the local culture and community with the right language, metaphors, symbolisms and even humor.',
    gif: 'https://framerusercontent.com/images/NPKInYNf2FnlnQ0uyCkwQLsNI.gif',
    layout: 'text-right'
  },
  {
    title: 'Excite with entertaining delivery.',
    description: 'Our media-rich and interactive lessons are auto-adjusted to fit individual learning speed and style - at a completion rate of 95%.',
    gif: 'https://framerusercontent.com/images/NYvelptljsUJfpdn6FK9V7Gm8g.gif',
    layout: 'text-left'
  },
  {
    title: 'Empower with economic outcome.',
    description: 'Our technology enables instructors to dynamically grow and monetize communities with their edutainment content.',
    gif: 'https://framerusercontent.com/images/oG9TGXQHz5fR2pMFxVhyKumf6ko.gif',
    layout: 'text-right'
  },
];

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, gif, layout }) => (
  <div className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${layout === 'text-right' ? 'lg:grid-flow-col-dense' : ''}`}>
        <div className={layout === 'text-right' ? 'lg:col-start-2' : ''}>
          <h3 className="text-3xl sm:text-4xl text-black mb-6 leading-tight">{title}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className={layout === 'text-right' ? 'lg:col-start-1' : ''}>
          <div className="relative">
            <img 
              src={gif} 
              alt={`${title} demonstration`} 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="bg-white">
      {featuresData.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;