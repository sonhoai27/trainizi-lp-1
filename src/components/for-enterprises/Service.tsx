import React from 'react';

const Service = () => {
  return (
    <div className="service-section py-16" id="service">
      <div className="container mx-auto px-4">
        <div className="heading-wrap mb-12">
          <h3 className="text-4xl font-bold text-left text-gray-900">
            Catered to complex & <br />
            large-scale training needs
          </h3>
        </div>
        <div className="service-card-wrap">
          <div className="service-card-container">
            <div className="service-card bg-white rounded-lg shadow-lg p-8">
              <div className="icon-container mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-12 w-12 text-secondary">
                  <g>
                    <path d="M192,80v96H104a32,32,0,1,0-32-32H64V80Z" opacity="0.2"></path>
                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,144a24,24,0,1,1,24,24A24,24,0,0,1,80,144Zm136,56H159.43a64.39,64.39,0,0,0-28.83-26.16,40,40,0,1,0-53.2,0A64.39,64.39,0,0,0,48.57,200H40V56H216ZM56,96V80a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V88H72v8a8,8,0,0,1-16,0Z"></path>
                  </g>
                </svg>
              </div>
              <div className="content-wrap">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold">Internal Training</h2>
                  <p className="text-gray-600">10,000+ employees</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    - Onboarding training<br />
                    - Compliance training<br />
                    - Process training<br />
                    - Product & Services training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;