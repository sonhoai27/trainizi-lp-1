import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              On a journey to bring delight and liberation to learning since 2021
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Sharing a belief that education should bring joy and empower its
              learners to make quality decisions towards a self-sustaining
              life, we started Trainizi, previously known as iZi.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="https://framerusercontent.com/images/OyfDyvsu1CBZ7okFKxIu5XgJCQ.png"
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

export default Hero;