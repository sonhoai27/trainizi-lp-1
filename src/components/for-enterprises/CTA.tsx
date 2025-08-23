import { useTranslations } from 'next-intl';
import React from 'react';

const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <div className="cta-section bg-gray-100 py-16" id="cta">
      <div className="container mx-auto px-4">
        <div className="cta-container bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">{t('title')}</h3>
          <p className="mb-8">{t('subtitle')}</p>
          <div className="form-container max-w-lg mx-auto">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder={t('namePlaceholder')}
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <input
                  type="text"
                  placeholder={t('phonePlaceholder')}
                  className="w-full p-3 rounded-lg text-gray-900"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="w-full p-3 rounded-lg text-gray-900"
                />
                <input
                  type="text"
                  placeholder={t('companyPlaceholder')}
                  className="w-full p-3 rounded-lg text-gray-900"
                />
              </div>
              <div className="mb-4">
                <select className="w-full p-3 rounded-lg text-gray-500">
                  <option value="">{t('learnersPlaceholder')}</option>
                  <option value="<100">{t('learnersOption1')}</option>
                  <option value="100-500">{t('learnersOption2')}</option>
                  <option value="500-2000">{t('learnersOption3')}</option>
                  <option value="2000-5000">{t('learnersOption4')}</option>
                  <option value="5000-10000">{t('learnersOption5')}</option>
                  <option value=">10000">{t('learnersOption6')}</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  placeholder={t('messagePlaceholder')}
                  className="w-full p-3 rounded-lg text-gray-900"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg"
              >
                {t('submitButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;