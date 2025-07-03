
import React from 'react';
import { ExternalLink, User, Code, Palette } from 'lucide-react';

const LinkedInBadge = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 hover-lift animate-fade-in border border-white/20">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Website Developer
                </span>
              </h3>
              <p className="text-gray-600 text-lg">
                Meet the creator behind this modern web experience
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Developer Profile */}
              <div className="text-center md:text-left space-y-6">
                
                {/* Profile Card */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg hover-scale">
                  <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">Md Rayyan</h4>
                      <p className="text-blue-100">Full Stack Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-blue-100">
                    <p>• Web Developer | HTML | CSS | JavaScript | SQL</p>
                    <p>• Python | C++ Developer</p>
                    <p>• Scaler School of Technology</p>
                  </div>
                  
                  {/* LinkedIn CTA */}
                  <a 
                    href="https://in.linkedin.com/in/-%7Emdrayyan5363?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
                  >
                    <span className="text-sm font-medium">View LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800">About This Website</h5>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This website was crafted with modern web technologies to provide the best user experience 
                    for Success Point Coaching Centre. Built with performance and responsive design in mind.
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Modern UI/UX'].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 animate-bounce-in"
                        style={{ animationDelay: `${index * 100 + 300}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Additional Info */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-white" />
                    </div>
                    <h6 className="font-semibold text-gray-800">Design Philosophy</h6>
                  </div>
                  <p className="text-sm text-gray-600">
                    Clean, modern, and user-focused design with attention to performance and accessibility.
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

export default LinkedInBadge;
