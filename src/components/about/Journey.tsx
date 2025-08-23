import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Journey = () => {
  const t = useTranslations('about');

  return (
    <section className="relative w-full h-min overflow-hidden pt-10 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("journey.title")}
          </h2>
          <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
            {t("journey.description")}
          </p>
        </div>
      </div>
      <div className="mt-10 mx-auto max-w-7xl">
        <Image
          src="/assets/framer/OyfDyvsu1CBZ7okFKxIu5XgJCQ.png"
          alt="Journey"
          width={2018}
          height={1000}
          className="w-full rounded-lg"
        />
      </div>
      <div className="mt-10 mx-auto max-w-7xl text-left">
        <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
          {t("journey.content1")}
        </p>
        <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
          {t("journey.content2")}
        </p>
        <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
          {t("journey.content3")}
        </p>
      </div>
    </section>
  );
};

export default Journey;