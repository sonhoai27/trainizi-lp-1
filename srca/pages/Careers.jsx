import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Singapore",
      type: "Full-time",
      description: "Join our AI team to develop cutting-edge adaptive learning algorithms."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Vietnam",
      type: "Full-time",
      description: "Lead product strategy for our enterprise learning platform."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive learning experiences for millions of users."
    },
    {
      title: "Sales Director - Enterprise",
      department: "Sales",
      location: "Remote / US",
      type: "Full-time",
      description: "Drive growth in the enterprise market segment."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-framer-purple to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Help us democratize learning worldwide with AI technology that adapts to every learner's unique needs.
          </p>
          <a
            href="#positions"
            className="bg-white text-purple-600 py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200 inline-block"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">Why Join Trainizi?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the future of learning, and we want you to be part of it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Impactful Work</h3>
              <p className="text-gray-600">Your work directly impacts millions of learners worldwide, making education more accessible and effective.</p>
            </div>

            <div className="p-6 text-center">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Remote-First Culture</h3>
              <p className="text-gray-600">Work from anywhere in the world with flexible hours and a culture that values work-life balance.</p>
            </div>

            <div className="p-6 text-center">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-600">Work with the latest AI and ML technologies, pushing the boundaries of what's possible in education.</p>
            </div>

            <div className="p-6 text-center">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Growth & Learning</h3>
              <p className="text-gray-600">Continuous learning opportunities, mentorship, and budget for conferences and professional development.</p>
            </div>

            <div className="p-6 text-center">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">Comprehensive health insurance, equity package, flexible PTO, and wellness stipend.</p>
            </div>

            <div className="p-6 text-center">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Diverse Team</h3>
              <p className="text-gray-600">Join a diverse, inclusive team from over 15 countries, all united by our mission to improve learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to make a difference? Check out our current openings and find your next opportunity.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h3 className="text-xl text-black">{job.title}</h3>
                      <span className="bg-framer-light-purple text-framer-purple px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span>📍 {job.location}</span>
                      <span>⏰ {job.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-framer-purple text-white py-2 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see a perfect fit? We're always looking for exceptional talent.</p>
            <Link
              to="/contact"
              className="bg-transparent text-framer-purple py-2 px-6 rounded-lg border border-framer-purple hover:bg-framer-purple hover:text-white transition-colors duration-200"
            >
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">Our Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in a transparent, fair hiring process that respects your time and showcases our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-framer-purple text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">1</div>
              <h3 className="text-lg text-black mb-2">Application Review</h3>
              <p className="text-gray-600">Our team reviews your application within 3-5 business days.</p>
            </div>

            <div className="text-center">
              <div className="bg-framer-purple text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">2</div>
              <h3 className="text-lg text-black mb-2">Phone/Video Screen</h3>
              <p className="text-gray-600">30-minute conversation with our talent team to learn more about you.</p>
            </div>

            <div className="text-center">
              <div className="bg-framer-purple text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">3</div>
              <h3 className="text-lg text-black mb-2">Technical/Skills Assessment</h3>
              <p className="text-gray-600">Role-specific interview or project to showcase your expertise.</p>
            </div>

            <div className="text-center">
              <div className="bg-framer-purple text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl">4</div>
              <h3 className="text-lg text-black mb-2">Final Interview</h3>
              <p className="text-gray-600">Meet the team and discuss how you'll contribute to our mission.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;