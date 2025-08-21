import React from 'react';

const CTA = () => {
  return (
    <div className="cta-section bg-gray-100 py-16" id="cta">
      <div className="container mx-auto px-4">
        <div className="cta-container bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Further consultation needed?</h3>
          <p className="mb-8">Call (+84) 909 077 626 or fill in the following form</p>
          <div className="form-container max-w-lg mx-auto">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Your name" className="w-full p-3 rounded-lg text-gray-900" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 rounded-lg text-gray-900" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg text-gray-900" />
                <input type="text" placeholder="Company Name" className="w-full p-3 rounded-lg text-gray-900" />
              </div>
              <div className="mb-4">
                <select className="w-full p-3 rounded-lg text-gray-500">
                  <option value="">Number of Learners</option>
                  <option value="<100">Less than 100</option>
                  <option value="100-500">100 - 500</option>
                  <option value="500-2000">500 - 2,000</option>
                  <option value="2000-5000">2,000 - 5,000</option>
                  <option value="5000-10000">5,000 - 10,000</option>
                  <option value=">10000">More than 10,000</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message (optional)" className="w-full p-3 rounded-lg text-gray-900" rows={4}></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;