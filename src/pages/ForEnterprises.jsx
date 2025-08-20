import React from 'react';
import { Link } from 'react-router-dom';

const ForEnterprises = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Transform Your Enterprise Training
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Scale learning across your organization with AI-powered microlearning that adapts to every employee's needs and delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
              className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Schedule Enterprise Demo
            </a>
            <Link
              to="/contact"
              className="bg-transparent text-white py-3 px-8 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Why Fortune 500 Companies Choose Trainizi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our enterprise-grade AI learning platform delivers proven results for organizations of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Scale Globally</h3>
              <p className="text-gray-600">Deploy training across multiple locations, languages, and time zones with AI-powered localization.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Measure ROI</h3>
              <p className="text-gray-600">Track learning progress, engagement metrics, and business impact with comprehensive analytics.</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Enterprise Security</h3>
              <p className="text-gray-600">SOC 2 compliant with enterprise-grade security, SSO integration, and data governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">
              Enterprise Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-6">
                <div className="text-4xl text-framer-purple mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
              <h3 className="text-xl text-black mb-4">Global Manufacturing Company</h3>
              <p className="text-gray-600 mb-4">
                "Trainizi transformed our safety training program across 15 countries. The AI adaptation to local cultures and languages resulted in our highest completion rates ever."
              </p>
              <div className="text-sm text-gray-500">— Head of Learning & Development</div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="mb-6">
                <div className="text-4xl text-framer-purple mb-2">60%</div>
                <div className="text-gray-600">Reduction in Training Time</div>
              </div>
              <h3 className="text-xl text-black mb-4">Fortune 500 Tech Company</h3>
              <p className="text-gray-600 mb-4">
                "The microlearning approach allowed our engineers to learn new technologies without disrupting their workflow. Productivity increased while training costs decreased."
              </p>
              <div className="text-sm text-gray-500">— Chief Technology Officer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-framer-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Ready to Transform Your Enterprise Training?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join leading companies already using Trainizi to scale learning across their organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
              className="bg-framer-purple text-white py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Book Enterprise Demo
            </a>
            <Link
              to="/contact"
              className="bg-transparent text-white py-3 px-8 rounded-lg border border-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForEnterprises;