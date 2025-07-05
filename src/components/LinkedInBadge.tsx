import React, { useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';

const LinkedInBadge = () => {
  useEffect(() => {
    // Optimized LinkedIn badge script loading
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    
    // Performance optimization - only load when component is visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.body.appendChild(script);
        observer.disconnect();
      }
    });

    const element = document.querySelector('.linkedin-badge-container');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 overflow-hidden large-element" aria-label="Developer Information">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-6 h-6 text-blue-600 mr-2" aria-hidden="true" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Developer Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 font-inter">
              Website Creator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the talented developer who brought this vision to life with cutting-edge technology and creative design
            </p>
          </header>

          {/* LinkedIn Badge Container */}
          <div className="flex justify-center animate-scale-in linkedin-badge-container">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl scale-110 animate-pulse" aria-hidden="true"></div>
              
              <article className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Header */}
                <header className="mb-6 text-center">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl mb-4">
                    <Star className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                  </div>
                  
                  {/* Enhanced Developer Name */}
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-2 font-inter tracking-tight">
                      Md Rayyan
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3" aria-hidden="true"></div>
                    <p className="text-gray-600 text-sm font-medium">
                      Meet the developer behind this website
                    </p>
                  </div>
                </header>

                {/* LinkedIn Badge */}
                <div className="mb-4 flex justify-center" role="complementary" aria-label="LinkedIn Profile">
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
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="View Md Rayyan's LinkedIn profile"
                    >
                      Md Rayyan
                    </a>
                  </div>
                </div>
                
                {/* Author text */}
                <footer className="text-center">
                  <p className="text-xs text-gray-500 font-medium bg-gradient-to-r from-gray-100 to-blue-50 px-4 py-2 rounded-full border border-gray-200">
                    Author & Creator of this Website
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInBadge;
