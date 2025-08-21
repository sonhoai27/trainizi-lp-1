'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('navigation');

  const navLinks = [
    { name: t('home'), href: `/${locale}` },
    { name: t('forEnterprises'), href: `/${locale}/for-enterprises` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}`;
    }
    return pathname.startsWith(href);
  };

  return (
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
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="https://trainizi.com/login" target="_blank" rel="noopener" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <span>{t('login')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;