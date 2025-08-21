import Image from 'next/image';

interface MissionProps {
  title: string;
  content: string;
  image: string;
}

const Mission = ({ title, content, image }: MissionProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96">
            <Image
              src={image}
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p
              className="text-lg text-gray-700 mb-8"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;