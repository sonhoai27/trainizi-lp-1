import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Story = () => {
  const t = useTranslations('about');

  return (
    <section className="relative w-full h-min overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("mission.title")}
          </h2>
          <div className="p-8 border border-solid border-neutral-300 bg-white rounded-xl">
            <div className="mb-8 flex items-center">
              <Image
                src="/assets/framer/0XDpmLX4pzx1BHIKsowMpDpZEsk.png"
                alt={t("testimonial.name")}
                width={48}
                height={48}
                className="h-12 w-12 object-cover rounded-full"
              />
              <div className="ml-4">
                <p className="text-base font-semibold text-gray-900 md:text-lg">
                  {t("testimonial.name")}
                </p>
                <p className="text-sm text-gray-500 md:text-base">
                  {t("testimonial.handle")}
                </p>
              </div>
            </div>
            <div className="text-base leading-7 text-gray-600 md:text-xl">
              <p>{t("testimonial.quote")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mt-10 mx-auto max-w-7xl text-center">
          <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
            {t("story.content1")}
          </p>
        </div>
        <div className="mt-10 mx-auto max-w-7xl flex flex-col md:flex-row items-stretch">
          <div className="md:w-1/2">
            <Image
              src="/assets/framer/WxbEmyL76AsdUM9NstnqPwc.jpg"
              alt="Founders"
              width={1009}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 flex flex-col justify-between">
            <div>
              <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
                {t("story.content2")}
              </p>
              <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
                {t("story.content3")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-7xl text-center">
          <p className="mt-4 text-base leading-6 text-gray-500 md:text-xl">
            {t("story.content4")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;