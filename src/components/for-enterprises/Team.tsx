export default function Team() {
  return (
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
  );
}