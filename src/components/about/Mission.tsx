import Image from 'next/image';

const Mission = () => {
  return (
    <section className="bg-white py-16 w-full">
      <div className="mx-auto px-4">
        <div className="mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Our founding team are lifelong friends who come from contrasting
            backgrounds and education paths, yet bond over the same obsession
            with innovation and impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-96">
            <Image
              src="/assets/framer/WxbEmyL76AsdUM9NstnqPwc.jpg"
              alt="Our Mission"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Heath completed his studies in Global Development & International
              Business in Europe. He has spent his career operating & scaling new
              business in AI/data, consulting, & education.
              <br />
              <br />
              Huy holds a PhD. from the United States & is an Associate
              Professor at New York University Tandon & CNYU City College. He has
              over 15 years of research and academic experience in the fields of
              data science, big data, & machine learning.
            </p>
          </div>
        </div>
        <div className="mx-auto text-center">
          <p className="text-lg text-gray-700">
            They are rooted in Vietnam yet traveled, lived and worked around the
            globe, which nurtured their desire to bring global education to
            underserved communities in Vietnam and Vietnamese communities, along
            with their fascinating and deep-rooted culture, to the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;