import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-izi-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className="mb-4">
          <span className="inline-block bg-izi-200 text-izi-800 text-sm px-4 py-1 rounded-full">
            #1 ASEAN Award-Winning AI Solution
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tighter">
          A dynamic & adaptive AI instructor for all educational purposes.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          Rapidly create and deliver microlearning content at speed & scale with AI. The #1 award-winning AI solution in Southeast Asia for enterprises, schools and communities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block bg-framer-purple text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Book a Demo
          </a>
          <a
            href="https://play.trainizi.com/?c=294779e0-33a8-450a-b5ed-48914d42f18d"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block bg-framer-black text-white py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            Take a Trial Lesson
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;