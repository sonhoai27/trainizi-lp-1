const Story = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Our<strong> </strong>current education system was designed{' '}
            <a
              href="http://hackeducation.com/2015/04/25/factory-model"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              200
            </a>{' '}
            years ago to teach future factory workers to be “punctual, docile,
            and sober” to adapt with the requirements of industrialization and
            globalization back then.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            To ensure maximum efficiency, the system was standardized and
            impersonalized with curriculums, textbooks, lectures, and grading.
            Our early industrial capitalists benefited from this
            one-size-fit-all methodology which helped them acquire abundant
            workers to scale horizontally.
          </p>
          <p className="text-lg text-gray-700">
            Fast forward to today, the “industrial era” is long behind us but
            “factory learning” is still alive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;