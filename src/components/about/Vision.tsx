import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Vision = () => {
  const t = useTranslations('about');

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 relative bg-gradient-to-b from-gradient-blue-start to-gradient-blue-end text-white">
    
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {t("vision.title")}
        </h2>
        <div className="mt-8 space-y-4 text-base md:text-xl">
          <p>{t("vision.imagine1")}</p>
          <p>{t("vision.imagine2")}</p>
          <p>{t("vision.imagine3")}</p>
        </div>
        <h2 className="mt-8 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          {t("vision.subtitle")}
        </h2>
      </div>
      <div className="mt-12 mx-auto max-w-7xl">
        <Image
          src="/assets/framer/mcn5tDtr76yDdjTfkW8IY5dpts.png"
          alt="Vision"
          width={1200}
          height={675}
          className="rounded-lg"
        />
      </div>
      <div className="relative mx-auto max-w-7xl text-center">
        <p className="mt-8 text-base leading-6 text-gray-300 md:text-xl">
          {t("vision.description")}
        </p>
      </div>
    </section>
  );
};

export default Vision;