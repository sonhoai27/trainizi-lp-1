import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-framer-light-purple py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Ready to transform your organization's learning experience? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-black mb-8">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to implement AI-powered learning in your organization or have questions about our platform, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-framer-light-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@trainizi.com</p>
                    <p className="text-gray-600">sales@trainizi.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-framer-light-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-1">Our Offices</h3>
                    <p className="text-gray-600">Singapore (HQ)</p>
                    <p className="text-gray-600">Ho Chi Minh City, Vietnam</p>
                    <p className="text-gray-600">San Francisco, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-framer-light-purple rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg text-black mb-1">Call Us</h3>
                    <p className="text-gray-600">+65 9123 4567 (Singapore)</p>
                    <p className="text-gray-600">+1 (555) 123-4567 (US)</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg text-black mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-framer-light-purple rounded-full w-12 h-12 flex items-center justify-center hover:bg-framer-purple hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-framer-light-purple rounded-full w-12 h-12 flex items-center justify-center hover:bg-framer-purple hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-framer-light-purple rounded-full w-12 h-12 flex items-center justify-center hover:bg-framer-purple hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-green-50 p-8 rounded-lg text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-xl text-black mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        subject: '',
                        message: '',
                        inquiryType: 'general'
                      });
                    }}
                    className="text-framer-purple hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm text-gray-700 mb-2">
                      How can we help?
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="demo">Request Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple"
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-framer-purple text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-black mb-4">Looking for Something Specific?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Schedule a Demo</h3>
              <p className="text-gray-600 mb-4">See Trainizi in action with a personalized demo.</p>
              <a
                href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
                className="bg-framer-purple text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 inline-block"
              >
                Book Demo
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Try for Free</h3>
              <p className="text-gray-600 mb-4">Experience our AI instructor with a trial lesson.</p>
              <a
                href="https://play.trainizi.com/?c=294779e0-33a8-450a-b5ed-48914d42f18d"
                className="bg-framer-black text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 inline-block"
              >
                Start Trial
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
              <div className="bg-framer-light-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-framer-purple" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.51-1.51a5.95 5.95 0 00-.587 4.81l2.138-1.22zm.32-3.47l1.559-1.559a4.002 4.002 0 012.258-.37l1.537-1.537A5.993 5.993 0 0010 4c-.95 0-1.85.201-2.67.565z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl text-black mb-2">Get Support</h3>
              <p className="text-gray-600 mb-4">Need help? Our support team is here for you.</p>
              <a
                href="mailto:support@trainizi.com"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 inline-block"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;