import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="testimonial-section py-16" id="testimonial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">
            Trusted by training professionals from 50+ organizations
          </h3>
        </div>
        <div className="logos-container mb-12">
          {/* This would be a scrolling logo carousel */}
        </div>
        <div className="testimonial-cards-container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="client-info flex items-center mb-4">
              <div className="client-image rounded-full overflow-hidden mr-4">
                <Image src="https://framerusercontent.com/images/g0tiRBVzunK9dsgPZLvNgkNSpk.webp" alt="Mina Chung" width={60} height={60} />
              </div>
              <div>
                <p className="font-semibold">Mina Chung</p>
                <p className="text-sm text-gray-600">Financial Literacy Director @Money With Mina</p>
              </div>
            </div>
            <p className="text-gray-700">
              “I have worked with many training platforms before, but Trainizi really gets us. It’s rare to find that kind of genuine care in the industry, and I appreciate to call them a true partner.”
            </p>
          </div>
          <div className="testimonial-card bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="client-info flex items-center mb-4">
              <div className="client-image rounded-full overflow-hidden mr-4">
                <Image src="https://framerusercontent.com/images/NMAfad39LLmpizMa75ymPNxdJNA.png" alt="James Cooper" width={60} height={60} />
              </div>
              <div>
                <p className="font-semibold">James Cooper</p>
                <p className="text-sm text-gray-600">IELTS Lecturer @Capital Education</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Integrating Trainizi into our LMS was quick and smooth. Now we have an advanced tool to assign homework, do live quizzes, and creating short courses for our students to learn at their own pace."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;