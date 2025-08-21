import CallToBanner from '@/components/CallToBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <CallToBanner />
      <Header />
      <main className="min-h-screen">
        <section className="bg-framer-light-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Help us transform education with AI. We're looking for passionate individuals to join our growing team.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-black mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're always looking for talented people to join our team.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl text-black mb-2">Senior AI Engineer</h3>
                <p className="text-gray-600 mb-4">Full-time • Remote • $120k-$180k</p>
                <p className="text-gray-700">Build the next generation of adaptive learning algorithms.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl text-black mb-2">Product Designer</h3>
                <p className="text-gray-600 mb-4">Full-time • Remote • $90k-$130k</p>
                <p className="text-gray-700">Design intuitive learning experiences for global audiences.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl text-black mb-2">DevOps Engineer</h3>
                <p className="text-gray-600 mb-4">Full-time • Remote • $100k-$150k</p>
                <p className="text-gray-700">Scale our infrastructure to serve millions of learners.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}