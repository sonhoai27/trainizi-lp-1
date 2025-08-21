export default function Awards() {
  return (
    <section className="py-20">
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
  );
}