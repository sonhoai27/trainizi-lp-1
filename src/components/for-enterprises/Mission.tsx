export default function Mission() {
  return (
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
  );
}