
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <main className="min-h-screen">
        <section className="bg-framer-light-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              Trainizi Blog
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Insights on AI, education, and the future of learning.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-black mb-2">The Future of AI in Education</h3>
                  <p className="text-gray-600 mb-4">How artificial intelligence is transforming the way we learn and teach.</p>
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                </div>
              </article>

              <article className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-black mb-2">Microlearning Best Practices</h3>
                  <p className="text-gray-600 mb-4">Effective strategies for implementing microlearning in your organization.</p>
                  <span className="text-sm text-gray-500">March 10, 2024</span>
                </div>
              </article>

              <article className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-black mb-2">Cultural Context in Learning</h3>
                  <p className="text-gray-600 mb-4">Why cultural awareness matters in global training programs.</p>
                  <span className="text-sm text-gray-500">March 5, 2024</span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}