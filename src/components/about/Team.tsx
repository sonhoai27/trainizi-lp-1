import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  keyword: string;
  description: string[];
  image: string;
  quote: string;
  quoteAuthor: string;
}

const Team = () => {
  const t = useTranslations('about.team');
  const teamMembers: TeamMember[] = t.raw('members');

  return (
    <section className="relative w-full h-min overflow-hidden px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t('title')}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center min-h-[500px]">
                  <div className="w-48 h-48 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900 md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-600 md:text-lg">
                    {member.role}
                  </p>
                  <p className="text-base mt-4 font-semibold text-gray-500 md:text-lg">
                    {member.keyword}
                  </p>
                  <ul className="mt-4 text-left text-sm text-gray-600 space-y-3 flex-grow md:text-base">
                    {member.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flip-card-back bg-gray-800 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center">
                  <blockquote className="text-lg italic md:text-xl">
                    {member.quote}
                  </blockquote>
                  <cite className="mt-4 text-base not-italic md:text-lg">
                    - {member.quoteAuthor}
                  </cite>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;