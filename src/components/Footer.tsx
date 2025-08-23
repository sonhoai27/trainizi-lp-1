import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <img
                className="h-8 w-auto bg-white rounded-full p-1"
                src="https://framerusercontent.com/images/xgcyBgjh9eQgKC89h9k2QITNSIw.png?scale-down-to=512"
                alt="Trainizi Logo"
              />
              <span className="text-2xl font-extrabold text-white">trainizi</span>
            </a>
            <p className="text-gray-400">
              {t('description')}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('solutions.title')}</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('solutions.enterprises')}</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('solutions.schools')}</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('solutions.communities')}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('company.title')}</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('company.about')}</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('company.blog')}</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('company.careers')}</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('company.contact')}</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('legal.title')}</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="/terms" className="text-base text-gray-300 hover:text-white">{t('legal.terms')}</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">{t('legal.privacy')}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base text-gray-400">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;