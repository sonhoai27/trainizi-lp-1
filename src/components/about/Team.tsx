import Image from 'next/image';

const Team = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our people.</h2>
          <p className="text-lg text-gray-700 mb-12">
            An experienced, international & multi-disciplinary founding team
            with combined expertise in instructional design, venture building,
            and machine learning.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="https://framerusercontent.com/images/AmxBHdodxPfjncssc8XBauSjmF0.png"
                alt="Laura Phan"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Laura Phan</h3>
            <p className="text-gray-600">CEO</p>
            <p className="text-gray-700 mt-4">
              2 prior exits
              <br />
              👍 Designed programs & trained for World Bank & Vietnamese
              government.
              <br />
              💟 Loves dogs & trekking
              <br />
              😎 Often described as: "intellectually honest"
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="https://framerusercontent.com/images/hdWKQrznIjjLpArw0MqvOstlX4.png"
                alt="Heath Nguyen"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Heath Nguyen</h3>
            <p className="text-gray-600">COO</p>
            <p className="text-gray-700 mt-4">
              MSc. in Global Development
              <br />
              👍 Grew & operated the highest-traffic K12 edtech in Vietnam.
              <br />
              💟 Loves resting & K-dramas
              <br />
              😎 Often described as: "peacefully competitive"
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="https://framerusercontent.com/images/5Uhr6JGSVDwg41gDWSvPilgjT6k.jpg"
                alt="Huy Vo"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold">Huy Vo</h3>
            <p className="text-gray-600">CTO</p>
            <p className="text-gray-700 mt-4">
              PhD. in Computer Science
              <br />
              👍 Published 3 patents & 28 publications on data science, big
              data, large-scale visualization & high-performance system
              <br />
              💟 Loves the cinema & biking
              <br />
              😎 Often described as: "emotionally rational"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;