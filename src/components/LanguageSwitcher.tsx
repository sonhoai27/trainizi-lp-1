'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const switchLanguage = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-800 hover:text-izi-600 transition-colors duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span>{locale.toUpperCase()}</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-50">
          <button
            onClick={() => switchLanguage('en')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              locale === 'en' ? 'text-izi-600 font-medium' : 'text-gray-700'
            }`}
          >
            {t('english')}
          </button>
          <button
            onClick={() => switchLanguage('vi')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              locale === 'vi' ? 'text-izi-600 font-medium' : 'text-gray-700'
            }`}
          >
            {t('vietnamese')}
          </button>
        </div>
      )}
    </div>
  );
}