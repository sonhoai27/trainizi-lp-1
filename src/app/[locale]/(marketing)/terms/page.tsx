import { useTranslations } from 'next-intl';
import React from 'react';

const TermsPage = () => {
  const t = useTranslations('terms');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{t('title')}</h1>
      <div className="prose max-w-none">
        {t('content')
          .split('\n')
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>
    </main>
  );
};

export default TermsPage;