import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <textarea
            placeholder="Purpose of Contact"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-500">
            <option value="" disabled selected>How did you learn about Trainizi?</option>
            <option value="Referral">Referral</option>
            <option value="Social Media">Social Media</option>
            <option value="Trainizi's Blog">Trainizi's Blog</option>
            <option value="Press/Media">Press/Media</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;