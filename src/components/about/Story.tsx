import Image from 'next/image';

interface StoryProps {
  title: string;
  content1: string;
  content2: string;
  image: string;
}

const Story = ({ title, content1, content2, image }: StoryProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96">
              <Image
                src={image}
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-8">{content1}</p>
              <p className="text-lg text-gray-700">{content2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;