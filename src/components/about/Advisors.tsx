import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Advisors = () => {
  const t = useTranslations('about.advisors');
  const logos = [
    {
      src: '/assets/framer/LQW9UDEkUFXwNhGAdm8ob9HDcK8.png',
      alt: 'Logo 1',
    },
    {
      src: '/assets/framer/linLQMCTnqT2N4wxqgW4DbMw6A.png',
      alt: 'Logo 2',
    },
    {
      src: '/assets/framer/plx3j7H9GiMWXjNuYEWa1kBOxiU.png',
      alt: 'Logo 3',
    },
    {
      src: '/assets/framer/QhCKRc73O4ecSk6ZznVxHn2NY.png',
      alt: 'Logo 4',
    },
  ];

  return (
    <section className="relative w-full h-min overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;