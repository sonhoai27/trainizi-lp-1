import CallToBanner from '@/components/CallToBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function AboutPage() {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <CallToBanner />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-framer-light-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              About Trainizi
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              We're on a mission to make learning accessible, engaging, and effective for everyone through the power of adaptive AI technology.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl text-black mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Trainizi, we believe that learning should be personal, engaging, and effective. Our AI-powered platform adapts to each learner's unique style, pace, and cultural context to deliver microlearning experiences that stick.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We're democratizing access to quality education by making it possible for organizations of any size to deliver world-class training at scale.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl text-framer-purple mb-2">2019</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl text-framer-purple mb-2">1M+</div>
                    <div className="text-gray-600">Learners Reached</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Mission Visual</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-black mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-framer-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-xl text-black mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, continuously improving our technology and user experience.</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-framer-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl text-black mb-2">Inclusivity</h3>
                <p className="text-gray-600">Learning should be accessible to everyone, regardless of background, location, or learning style.</p>
              </div>

              <div className="text-center p-6">
                <div className="bg-framer-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 className="text-xl text-black mb-2">Innovation</h3>
                <p className="text-gray-600">We push the boundaries of what's possible with AI to create learning experiences that were never before achievable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-black mb-4">Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the visionaries behind Trainizi's AI-powered learning revolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl text-black mb-1">CEO & Founder</h3>
                <p className="text-gray-600 mb-2">Former AI researcher with 10+ years in EdTech</p>
                <p className="text-sm text-gray-500">Stanford AI Lab, Google Research</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl text-black mb-1">CTO & Co-Founder</h3>
                <p className="text-gray-600 mb-2">ML Engineer specializing in adaptive learning systems</p>
                <p className="text-sm text-gray-500">MIT AI Lab, Microsoft Research</p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl text-black mb-1">Head of Product</h3>
                <p className="text-gray-600 mb-2">Product strategist with expertise in learning design</p>
                <p className="text-sm text-gray-500">Coursera, Khan Academy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-framer-light-purple">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl text-black mb-8">Recognition & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6">
                <div className="text-2xl text-framer-purple mb-2">🏆</div>
                <h3 className="text-lg text-black mb-2">#1 ASEAN AI Solution</h3>
                <p className="text-gray-600">Best AI Innovation Award 2023</p>
              </div>
              <div className="p-6">
                <div className="text-2xl text-framer-purple mb-2">🌟</div>
                <h3 className="text-lg text-black mb-2">EdTech Breakthrough</h3>
                <p className="text-gray-600">Most Innovative Learning Platform 2023</p>
              </div>
              <div className="p-6">
                <div className="text-2xl text-framer-purple mb-2">🚀</div>
                <h3 className="text-lg text-black mb-2">Fast Company</h3>
                <p className="text-gray-600">Most Innovative AI Company 2022</p>
              </div>
              <div className="p-6">
                <div className="text-2xl text-framer-purple mb-2">💡</div>
                <h3 className="text-lg text-black mb-2">TechCrunch</h3>
                <p className="text-gray-600">Best AI Startup 2022</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}