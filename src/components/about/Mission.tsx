import Image from 'next/image';

const Mission = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            We exist to re-ignite the joy and freedom that was once the
            foundation of education.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src="https://framerusercontent.com/images/0XDpmLX4pzx1BHIKsowMpDpZEsk.png"
                    alt="Laura Phan"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Laura Phan</p>
                  <p className="text-gray-600">Founder & CEO @Trainizi</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Growing up surrounded in the rural countryside of Vietnam, I
                witnessed firsthand the unspoken struggles of making a good
                living as a result of an ineffective education system. It was
                right in front of me: my family, my neighbors and strangers I
                met on the streets.
                <br />
                <br />
                Education then came and gave me opportunities to work and
                travel around the globe. This opened my eyes to how much the
                world has to offer and how big the gap is between my hometown
                community and first-world societies. These contrasting
                experiences have shaped my worldview on how education can be
                the means to liberate lives.
                <br />
                <br />
                Without access to quality education, this economic and
                quality-of-life gap will keep widening. Realizing how many
                people worldwide were in my shoes yet not fortunate enough to
                access quality education opportunites, I turned sympathy into
                actions."
              </p>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Our founding team are lifelong friends who come from contrasting
              backgrounds and education paths, yet bond over the same obsession
              with innovation and impact.
            </p>
            <div className="relative h-64">
              <Image
                src="https://framerusercontent.com/images/WxbEmyL76AsdUM9NstnqPwc.jpg"
                alt="Founding Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg text-gray-700 mt-8">
              Heath completed his studies in Global Development &
              International Business in Europe. He has spent his career
              operating & scaling new business in AI/data, consulting,
              & education.
              <br />
              <br />
              Huy holds a PhD. from the United States & is an Associate
              Professor at New York University Tandon & CNYU City College.
              He has over 15 years of research and academic experience in the
              fields of data science, big data, & machine learning.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-16">
          <p className="text-lg text-gray-700">
            They are rooted in Vietnam yet traveled, lived and worked around
            the globe, which nurtured their desire to bring global education to
            underserved communities in Vietnam and Vietnamese communities,
            along with their fascinating and deep-rooted culture, to the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;