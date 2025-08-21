'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          {t('subtitle')}
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-600 text-white py-4 px-6 rounded-lg inline-block">
            <svg className="inline w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={t('placeholder')}
                className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? t('subscribing') : t('subscribe')}
              </button>
            </div>
          </form>
        )}
        
        <p className="text-gray-400 text-sm mt-4">
          {t('privacy')}
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;