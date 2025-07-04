
import React from 'react';

const LinkedInBadge = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20 text-center animate-fade-in">
            
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Website Creator
              </h3>
              <p className="text-gray-600 text-sm">
                Meet the developer behind this website
              </p>
            </div>

            {/* LinkedIn Badge - Exact code provided by user */}
            <div className="mb-3">
              <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="-~mdrayyan5363" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/-%7Emdrayyan5363?trk=profile-badge">Md Rayyan</a>
              </div>
            </div>
            
            {/* Author text below name */}
            <p className="text-xs text-gray-500 font-medium">
              Author & Creator of this Website
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBadge;
