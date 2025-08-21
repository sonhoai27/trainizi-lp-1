import Image from 'next/image';

interface AdvisorsProps {
  title: string;
}

const Advisors = ({ title }: AdvisorsProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="https://framerusercontent.com/images/LQW9UDEkUFXwNhGAdm8ob9HDcK8.png"
              alt="Advisor 1"
              width={196}
              height={110}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://framerusercontent.com/images/linLQMCTnqT2N4wxqgW4DbMw6A.png"
              alt="Advisor 2"
              width={196}
              height={110}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://framerusercontent.com/images/plx3j7H9GiMWXjNuYEWa1kBOxiU.png?scale-down-to=1024"
              alt="Advisor 3"
              width={299}
              height={110}
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://framerusercontent.com/images/QhCKRc73O4ecSk6ZznVxHn2NY.png?scale-down-to=2048"
              alt="Advisor 4"
              width={124}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisors;