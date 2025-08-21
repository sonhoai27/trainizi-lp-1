import React from 'react';

const CTA: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-izi-700 text-white border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
          Join us to delight and liberate learning communities worldwide.
        </h2>
        <p className="text-lg text-izi-200 mb-8">
          Subscribe for the latest updates on our AI, new features, and success stories from our partners.
        </p>
        <form 
          className="w-full max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow w-full px-5 py-3 text-black font-semibold rounded-lg border-2 border-black focus:outline-none focus:ring-4 focus:ring-izi-400"
            required
          />
          <button
            type="submit"
            className="bg-white text-black font-bold py-3 px-6 border-2 border-black rounded-lg shadow-neobrutal hover:shadow-neobrutal-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;