
import React, { useEffect } from 'react';
import { Sparkles, Code, Palette, Star } from 'lucide-react';

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
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          {/* Section Header with Modern Design */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Developer Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 font-inter">
              Website Creator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the talented developer who brought this vision to life with cutting-edge technology and creative design
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Design Elements */}
            <div className="lg:col-span-1 space-y-6 animate-slide-in-right">
              <div className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Full Stack Developer</h4>
                      <p className="text-sm text-gray-600">Frontend & Backend</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">UI/UX Designer</h4>
                      <p className="text-sm text-gray-600">Modern & Responsive</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Tailwind', 'Design Systems'].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Center - LinkedIn Badge */}
            <div className="lg:col-span-1 flex justify-center animate-scale-in">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl scale-110 animate-pulse"></div>
                
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/30 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  {/* Header */}
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl mb-4">
                      <Star className="w-5 h-5 text-yellow-500" />
                    </div>
                    
                    {/* Enhanced Developer Name */}
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-2 font-inter tracking-tight">
                        Md Rayyan
                      </h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3"></div>
                      <p className="text-gray-600 text-sm font-medium">
                        Meet the developer behind this website
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn Badge - Exact code as provided by user */}
                  <div className="mb-4 flex justify-center">
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
                      >
                        Md Rayyan
                      </a>
                    </div>
                  </div>
                  
                  {/* Author text below name */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 font-medium bg-gradient-to-r from-gray-100 to-blue-50 px-4 py-2 rounded-full border border-gray-200">
                      Author & Creator of this Website
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Additional Info */}
            <div className="lg:col-span-1 space-y-6 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  Key Achievements
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Modern, Responsive Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Performance Optimized
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    SEO Friendly Architecture
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    Cross-browser Compatible
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-1">2024</div>
                  <div className="text-sm text-gray-600 font-medium">Year of Excellence</div>
                  <div className="mt-3 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Elements */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Modern Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Quality Focused</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInBadge;
