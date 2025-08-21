import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return (
    <div className="feature-section py-16" id="feature">
      <div className="container mx-auto px-4">
        <div className="heading-wrap text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">Our core</h3>
          <h2 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              ✦ AI models
            </span>{' '}
            revolutionize
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">
            Content Creation & Content Delivery
          </h3>
        </div>
        <div className="feature-container">
          <div className="feature-top flex flex-col md:flex-row items-center mb-16">
            <div className="img-container w-full md:w-1/2">
              <Image
                src="https://framerusercontent.com/images/3VUPlG7cSX6kxpk4ysFEbcHqnaU.gif"
                alt="Rapid Content Creation"
                width={580}
                height={543}
              />
            </div>
            <div className="content-wrap w-full md:w-1/2 pl-0 md:pl-12">
              <h2 className="text-3xl font-semibold mb-6">Rapid Content Creation</h2>
              <div className="item-wrap space-y-4">
                <div className="feature-item flex items-center">
                  {/* SVG Icon */}
                  <p>From complex books/PDFs and long videos to micro-courses</p>
                </div>
                <div className="feature-item flex items-center">
                  {/* SVG Icon */}
                  <p>Instructional algorithm to optimize content for mobile learning behaviors</p>
                </div>
                <div className="feature-item flex items-center">
                  {/* SVG Icon */}
                  <p>Easy-to-use interface to review, edit & publish content</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-bottom flex flex-col md:flex-row items-center">
            <div className="content-wrap w-full md:w-1/2 pr-0 md:pr-12">
              <h2 className="text-3xl font-semibold mb-6">Personalized & Social Delivery</h2>
              <div className="item-wrap space-y-4">
                <div className="feature-item flex items-center">
                  {/* SVG Icon */}
                  <p>1-min media-rich & interactive micro-lessons</p>
                </div>
                <div className="feature-item flex items-center">
                  {/* SVG Icon */}
                  <p>Social learning experience through groups</p>
                </div>
                <div className="feature-item flex items-center">
                  {/* SVG Icon */}
                  <p>Personal AI-tutor with 24/7 readiness</p>
                </div>
              </div>
            </div>
            <div className="img-container w-full md:w-1/2">
              <Image
                src="https://framerusercontent.com/images/VEymMGfSphhQiP2Yq3NhvWE7ons.png"
                alt="Personalized & Social Delivery"
                width={580}
                height={543}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;