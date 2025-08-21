const Journey = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Be with us on this journey.
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://trainizi.com/#:psoxY20AN"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600"
            >
              Leave your email here
            </a>
            <a
              href="https://www.linkedin.com/company/trainizi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900"
            >
              Follow us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;