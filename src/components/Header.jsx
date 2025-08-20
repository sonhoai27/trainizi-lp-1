
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'For Enterprises', href: '/for-enterprises' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-pink-header/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-8 w-auto" src="https://framerusercontent.com/images/xgcyBgjh9eQgKC89h9k2QITNSIw.png?scale-down-to=512" alt="Trainizi Logo" />
              <span className="text-2xl text-black">trainizi</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    isActive(link.href) 
                      ? 'text-izi-600' 
                      : 'text-gray-800 hover:text-izi-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="#" className="bg-framer-purple text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200">
                Log in
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-pink-header">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`block px-3 py-2 text-base transition-colors duration-200 ${
                  isActive(link.href) 
                    ? 'text-izi-600' 
                    : 'text-gray-800 hover:text-izi-600'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="#" className="bg-framer-purple text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 block text-center mt-2">
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
