
import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'For Enterprises', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <img className="h-8 w-auto bg-white rounded-full p-1" src="https://framerusercontent.com/images/xgcyBgjh9eQgKC89h9k2QITNSIw.png?scale-down-to=512" alt="Trainizi Logo" />
              <span className="text-2xl font-extrabold text-white">trainizi</span>
            </a>
            <p className="text-gray-400">
              Trainizi is an adaptive AI instruction engine designed for all educational purposes: enterprises, schools, and communities.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">For Enterprises</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">For Schools</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">For Communities</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms & Conditions</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trainizi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
