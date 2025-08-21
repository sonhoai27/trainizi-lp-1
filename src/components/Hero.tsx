import React from 'react';
import { useTranslations } from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="w-full bg-izi-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <video
              className="rounded-lg"
              src="https://izi-prod-bucket.s3.ap-southeast-1.amazonaws.com/dev_video/TLh4LfKGbwBtCkQP9jk4X7hlQ8.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="inline-block bg-izi-200 text-izi-800 text-sm px-4 py-1 rounded-full">
                {t('subtitle')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tighter">
              {t('title')}
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block bg-framer-purple text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                {t('cta')}
              </a>
              <a
                href="https://play.trainizi.com/?c=294779e0-33a8-450a-b5ed-48914d42f18d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block bg-framer-black text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                {t('trial')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;