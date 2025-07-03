
import React, { useEffect } from 'react';

const LinkedInBadge = () => {
  useEffect(() => {
    // Load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-100 via-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Website Author & Developer
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with the creator of this website
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Md Rayyan</h4>
                <p className="text-sm text-gray-600 mb-4">Full Stack Developer & Web Designer</p>
                
                {/* LinkedIn Badge */}
                <div 
                  className="badge-base LI-profile-badge" 
                  data-locale="en_US" 
                  data-size="medium" 
                  data-theme="dark" 
                  data-type="VERTICAL" 
                  data-vanity="-~mdrayyan5363" 
                  data-version="v1"
                >
                  <a 
                    className="badge-base__link LI-simple-link" 
                    href="https://in.linkedin.com/in/-%7Emdrayyan5363?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Md Rayyan
                  </a>
                </div>
              </div>
              
              <div className="text-left max-w-md">
                <h5 className="text-md font-semibold text-gray-700 mb-2">About the Developer</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This website was crafted with modern web technologies to provide the best user experience 
                  for Success Point Coaching Centre. Built with React, TypeScript, and Tailwind CSS for 
                  optimal performance and responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBadge;
