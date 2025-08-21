import CallToBanner from '@/components/CallToBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ForEnterprisesPage() {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <CallToBanner />
      <Header />
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
              <a
                href="#contact"
                className="bg-transparent text-white py-3 px-8 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Contact Sales
              </a>
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
                <h3 className="text-xl text-black mb-2">85% Engagement Increase</h3>
                <p className="text-gray-600">Our adaptive AI keeps learners engaged with personalized content that matches their learning style and pace.</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl text-black mb-2">70% Faster Onboarding</h3>
                <p className="text-gray-600">Streamline employee onboarding with culturally-aware microlearning modules that get teams productive faster.</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl text-black mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Track learning progress, identify skill gaps, and measure ROI with comprehensive enterprise dashboards.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}