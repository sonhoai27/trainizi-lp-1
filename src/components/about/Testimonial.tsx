import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Testimonial() {
  const t = useTranslations('about.testimonial');

  return (
    <div className="bg-white py-24 sm:py-32 w-full">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
            <figure className="flex flex-col items-center text-center">
              <figcaption className="flex items-center gap-x-4">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={t('avatar')}
                  alt={t('name')}
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold">{t('name')}</div>
                  <div className="text-gray-600">{t('handle')}</div>
                </div>
              </figcaption>
              <blockquote className="mt-6 text-gray-900">
                <p>{`“${t('quote')}”`}</p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}