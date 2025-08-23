import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';

const Feature = () => {
  const t = useTranslations('Feature');

  return (
    <div className="feature-section py-16" id="feature">
      <div className="container mx-auto px-4">
        <div className="heading-wrap text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">{t('ourCore')}</h3>
          <h2 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              {t('aiModels')}
            </span>{' '}
            {t('revolutionize')}
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">
            {t('contentCreationDelivery')}
          </h3>
        </div>
        <div className="feature-container">
          <div className="feature-top flex flex-col md:flex-row items-center mb-16">
            <div className="img-container w-full md:w-1/2">
              <Image
                src="/assets/framer/3VUPlG7cSX6kxpk4ysFEbcHqnaU.gif"
                alt={t('rapidContentCreation')}
                width={580}
                height={543}
              />
            </div>
            <div className="content-wrap w-full md:w-1/2 pl-0 md:pl-12">
              <h2 className="text-3xl font-semibold mb-6">
                {t('rapidContentCreation')}
              </h2>
              <div className="item-wrap space-y-4">
                <div className="feature-item flex items-center">
                  <p>{t('rapidFeature1')}</p>
                </div>
                <div className="feature-item flex items-center">
                  <p>{t('rapidFeature2')}</p>
                </div>
                <div className="feature-item flex items-center">
                  <p>{t('rapidFeature3')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-bottom flex flex-col md:flex-row items-center">
            <div className="content-wrap w-full md:w-1/2 pr-0 md:pr-12">
              <h2 className="text-3xl font-semibold mb-6">
                {t('personalizedDelivery')}
              </h2>
              <div className="item-wrap space-y-4">
                <div className="feature-item flex items-center">
                  <p>{t('personalizedFeature1')}</p>
                </div>
                <div className="feature-item flex items-center">
                  <p>{t('personalizedFeature2')}</p>
                </div>
                <div className="feature-item flex items-center">
                  <p>{t('personalizedFeature3')}</p>
                </div>
              </div>
            </div>
            <div className="img-container w-full md:w-1/2">
              <Image
                src="/assets/framer/VEymMGfSphhQiP2Yq3NhvWE7ons.png"
                alt={t('personalizedDelivery')}
                width={580}
                height={543}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;