import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const CTA = () => {
  const t = useTranslations('about.cta');
  return (
    <section className="relative w-full h-min overflow-hidden py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {t('title')}
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            {t('button')}
          </Link>
          <a
            href="https://www.linkedin.com/company/trainizi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            {t('follow')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;