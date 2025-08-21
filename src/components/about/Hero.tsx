import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  image1: string;
  image2: string;
  image3: string;
}

const Hero = ({ title, subtitle, image1, image2, image3 }: HeroProps) => {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-64">
            <Image
              src={image1}
              alt="Our Journey 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src={image2}
              alt="Our Journey 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src={image3}
              alt="Our Journey 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;