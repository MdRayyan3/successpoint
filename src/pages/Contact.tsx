
import { Phone, Mail, MapPin, Clock, Users, GraduationCap, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Load LinkedIn badge script
    if (!document.querySelector('script[src*="linkedin.com/badge"]')) {
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-cyan-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-scale-in">
              Get In <span className="text-yellow-300 animate-shimmer">Touch</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slide-in-right opacity-90">
              Ready to start your success journey? We're here to help!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        {/* Teacher Contact Highlight */}
        <div className="mb-12 animate-fade-in">
          <Card className="card-modern bg-gradient-to-r from-cyan-50 via-violet-50 to-fuchsia-50 hover:shadow-3xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl text-gray-800 font-bold">
                Meet Our <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Head Teacher</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col lg:flex-row items-center gap-6 p-4">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-glow"></div>
                  <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transform transition-all duration-500">
                    <img 
                      src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                      alt="Md. Khurshid Alam Sir" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Md. Khurshid Alam</h3>
                  <p className="text-violet-600 font-semibold mb-4">Head Teacher & Director</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Leading Success Point with excellence and dedication. 
                    Get personalized guidance for your academic journey and career goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="btn-modern bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700">
                      <Phone size={16} className="mr-2" />
                      Call: 9163924237
                    </Button>
                    <Button className="btn-modern bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700">
                      <MessageCircle size={16} className="mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="card-modern group bg-gradient-to-br from-cyan-50 to-blue-50 animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-300 animate-pulse-glow">
                <Phone className="text-white" size={20} />
              </div>
              <CardTitle className="text-cyan-600 text-lg">Phone Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="space-y-2">
                <a href="tel:9163924237" className="text-lg text-gray-700 hover:text-cyan-600 transition-colors duration-300 block font-semibold hover-scale flex items-center justify-center">
                  <Phone size={16} className="mr-2" />
                  9163924237
                </a>
                <a href="tel:7003837463" className="text-lg text-gray-700 hover:text-cyan-600 transition-colors duration-300 block font-semibold hover-scale flex items-center justify-center">
                  <Phone size={16} className="mr-2" />
                  7003837463
                </a>
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
                <Clock size={14} className="mr-2" />
                Available during office hours
              </div>
            </CardContent>
          </Card>

          <Card className="card-modern group bg-gradient-to-br from-violet-50 to-purple-50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-300 animate-pulse-glow">
                <Mail className="text-white" size={20} />
              </div>
              <CardTitle className="text-violet-600 text-lg">Email & Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="space-y-2">
                <a href="mailto:rayyanmd130@gmail.com" className="text-lg text-gray-700 hover:text-violet-600 transition-colors duration-300 block font-semibold hover-scale flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  rayyanmd130@gmail.com
                </a>
                <a href="https://wa.me/919163924237" className="text-lg text-gray-700 hover:text-emerald-600 transition-colors duration-300 block font-semibold hover-scale flex items-center justify-center">
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
                <Phone size={14} className="mr-2" />
                Quick response guaranteed
              </div>
            </CardContent>
          </Card>

          <Card className="card-modern group bg-gradient-to-br from-emerald-50 to-teal-50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center">
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-all duration-300 animate-pulse-glow">
                <MapPin className="text-white" size={20} />
              </div>
              <CardTitle className="text-emerald-600 text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center">
                  <MapPin size={16} className="mr-2" />
                  Our Location
                </p>
                <p className="text-gray-600">Rajabazar (Near Danish Restaurant)</p>
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
                <Users size={14} className="mr-2" />
                Walk-ins welcome
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Map Section */}
        <Card className="card-modern mb-12 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-6">
            <CardTitle className="text-2xl font-bold flex items-center justify-center">
              <MapPin className="mr-3" size={28} />
              Find Us Here
            </CardTitle>
            <p className="text-emerald-100 mt-2">Located in the heart of Rajabazar for easy access</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative">
              <div className="w-full h-64 md:h-80 rounded-b-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.208465820948!2d88.36210781495395!3d22.58135938516891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277594f1b5c1b%3A0x8e5b8b5c6b5d4e2a!2sRajabazar%2C%20Kolkata%2C%20West%20Bengal%20700054%2C%20India!5e0!3m2!1sen!2sin!4v1703076000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Success Point Location"
                  className="hover:saturate-150 transition-all duration-500"
                ></iframe>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <Button 
                  className="btn-modern w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => window.open('https://maps.app.goo.gl/eepnR5hKncrbXDkz5?g_st=a', '_blank')}
                >
                  <MapPin size={16} className="mr-2" />
                  Get Directions on Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call-to-Action Section */}
        <div className="text-center mb-12 animate-bounce-in">
          <Card className="card-modern bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 gradient-text-rainbow">Ready to Start Your Success Journey?</h3>
              <p className="text-lg mb-6 opacity-90">Join thousands of successful students at Success Point Coaching Centre</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-modern bg-white text-violet-600 hover:bg-gray-100 flex items-center justify-center">
                  <GraduationCap size={16} className="mr-2" />
                  Apply for Admission
                </Button>
                <Button className="btn-modern bg-transparent border-2 border-white text-white hover:bg-white hover:text-violet-600">
                  <Users size={16} className="mr-2" />
                  Meet Our Faculty
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Website Creator Section */}
        <div className="text-center mb-12">
          <Card className="card-modern bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Website Creator</h3>
              <p className="text-gray-600 mb-6">Meet the talented developer who brought this vision to life with cutting-edge technology and creative design</p>
              
              {/* LinkedIn Badge */}
              <div className="flex justify-center mb-4">
                <div 
                  className="badge-base LI-profile-badge" 
                  data-locale="en_US" 
                  data-size="medium" 
                  data-theme="dark" 
                  data-type="VERTICAL" 
                  data-vanity="mdrayyan3" 
                  data-version="v1"
                >
                  <a 
                    className="badge-base__link LI-simple-link" 
                    href="https://in.linkedin.com/in/mdrayyan3?trk=profile-badge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Md Rayyan
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-gray-500">Author & Creator of this Website</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
