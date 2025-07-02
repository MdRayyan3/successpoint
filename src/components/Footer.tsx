
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-fuchsia-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text">
                SUCCESS POINT
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              A Comprehensive Coaching Classes providing quality education for Class 11th, 12th, and B.Com students with modern teaching methods and personalized attention.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Faculty', href: '/faculty' },
                { name: 'Admission', href: '/admission' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group text-sm"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-emerald-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs">Call us anytime</p>
                  <p className="text-white font-semibold text-sm">9163924237 / 7003837463</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs">Email us</p>
                  <p className="text-white font-semibold text-sm">rayyanmd130@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © 2024 Success Point Coaching Centre. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
