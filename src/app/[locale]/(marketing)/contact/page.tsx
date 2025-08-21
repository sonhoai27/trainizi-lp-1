import CallToBanner from '@/components/CallToBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <CallToBanner />
      <Header />
      <main className="min-h-screen">
        <section className="bg-framer-light-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Ready to transform your learning experience? Let's talk.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl text-black mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-black mb-2">Sales Inquiries</h3>
                    <p className="text-gray-600">sales@trainizi.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-2">Support</h3>
                    <p className="text-gray-600">support@trainizi.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-2">General</h3>
                    <p className="text-gray-600">hello@trainizi.com</p>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-framer-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-framer-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-framer-purple"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-framer-purple text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}