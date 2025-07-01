
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Faculty', path: '/faculty' },
    { name: 'Admission', path: '/admission' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              SUCCESS POINT
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive(item.path)
                    ? 'text-red-600 bg-gradient-to-r from-red-50 to-pink-50 shadow-sm'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-pink-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="space-y-2 pt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform ${
                  isActive(item.path)
                    ? 'text-red-600 bg-gradient-to-r from-red-50 to-pink-50 shadow-sm'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50'
                } ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
