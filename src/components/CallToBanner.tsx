import React from 'react';

const CallToBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base tracking-wide">
            SCHEDULE A CALL TO EXPERIENCE OUR AI ENGINE AT WORK
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Book a Demo
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToBanner;