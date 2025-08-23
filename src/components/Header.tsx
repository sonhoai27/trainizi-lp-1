'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import CallToBanner from './CallToBanner';

const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBannerVisible(false);
      } else {
        setIsBannerVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('home'), href: `/${locale}` },
    { name: t('forEnterprises'), href: `/${locale}/for-enterprises` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    const pathWithoutLocale = href.replace(`/${locale}`, '') || '/';
    return pathname === pathWithoutLocale;
  };

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isBannerVisible ? 'max-h-40' : 'max-h-0 overflow-hidden'
        }`}
      >
        <CallToBanner />
      </div>
      <header className="bg-pink-header/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href={`/${locale}`} className="flex items-center space-x-2">
              <Image
                src="https://framerusercontent.com/images/xgcyBgjh9eQgKC89h9k2QITNSIw.png?scale-down-to=512"
                alt="Trainizi Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-semibold text-black">trainizi</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-secondary font-semibold'
                    : 'text-gray-800 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="https://trainizi.com/login"
              target="_blank"
              rel="noopener"
              className="bg-secondary text-white py-2 px-6 rounded-[32px] hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>{t('login')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-secondary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-secondary bg-red-50'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <LanguageSwitcher />
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="https://trainizi.com/login"
                target="_blank"
                rel="noopener"
                className="block w-full text-left bg-secondary text-white py-2 px-3 rounded-[32px] hover:bg-red-700 transition-colors duration-200"
              >
                {t('login')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;