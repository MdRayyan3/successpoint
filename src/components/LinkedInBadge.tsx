
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Website Author & Developer
            </h3>
            <p className="text-gray-600 mb-6">
              Connect with the creator of this website
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center animate-scale-in">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Md Rayyan</h4>
                <p className="text-sm text-gray-600 mb-4">Full Stack Developer & Web Designer</p>
                
                {/* LinkedIn Badge with enhanced styling */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-glow"></div>
                  <div 
                    className="badge-base LI-profile-badge relative z-10 hover-scale transition-all duration-300" 
                    data-locale="en_US" 
                    data-size="medium" 
                    data-theme="dark" 
                    data-type="VERTICAL" 
                    data-vanity="-~mdrayyan5363" 
                    data-version="v1"
                  >
                    <a 
                      className="badge-base__link LI-simple-link hover-glow" 
                      href="https://in.linkedin.com/in/-%7Emdrayyan5363?trk=profile-badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Md Rayyan
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-left max-w-md animate-slide-in-right">
                <h5 className="text-md font-semibold text-gray-700 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">About the Developer</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This website was crafted with modern web technologies to provide the best user experience 
                  for Success Point Coaching Centre. Built with React, TypeScript, and Tailwind CSS for 
                  optimal performance and responsive design.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Modern Design'].map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 animate-bounce-in"
                      style={{ animationDelay: `${index * 100 + 300}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBadge;
