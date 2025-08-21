import { useTranslations } from 'next-intl';
import React from 'react';

const ContactForm = () => {
  const t = useTranslations('contact.form');
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder={t('name')}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={t('phone')}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder={t('email')}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder={t('company')}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <textarea
            placeholder={t('purpose')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-500">
            <option value="" disabled selected>{t('source')}</option>
            <option value="Referral">{t('referral')}</option>
            <option value="Social Media">{t('social')}</option>
            <option value="Trainizi's Blog">{t('blog')}</option>
            <option value="Press/Media">{t('media')}</option>
            <option value="Others">{t('others')}</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;