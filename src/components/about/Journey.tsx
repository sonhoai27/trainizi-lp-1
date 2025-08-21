import Image from 'next/image';

interface JourneyProps {
  title: string;
  subtitle: string;
  image: string;
}

const Journey = ({ title, subtitle, image }: JourneyProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-700 mb-8">{subtitle}</p>
          <div className="relative h-96">
            <Image
              src={image}
              alt="Our Journey"
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

export default Journey;