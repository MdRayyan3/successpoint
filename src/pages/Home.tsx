
import { Phone, Mail, MapPin, GraduationCap, Users, Award, BookOpen, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  SUCCESS POINT
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                A Comprehensive Coaching Classes dedicated to providing quality education and shaping bright futures for students in Class 11th, 12th, and B.Com programs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <a href="/admission" className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="relative z-10">Apply for Admission</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-pink-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="/contact" className="group relative px-8 py-4 border-2 border-red-600 text-red-600 rounded-2xl font-semibold text-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 bg-white/50 backdrop-blur-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Head Teacher Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Meet Our Head Teacher
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/3 p-8 lg:p-12">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                      <div className="relative w-64 h-64 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                          alt="Md. Khurshid Alam Sir" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                      Md. Khurshid Alam Sir
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      Our experienced and dedicated head teacher, committed to providing the best education and guidance to all our students. With years of experience in comprehensive coaching, Md. Khurshid Alam Sir ensures that every student receives personalized attention and quality education.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="tel:9163924237" className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                        <Phone size={16} className="mr-2 group-hover:animate-pulse" />
                        Call Now
                      </a>
                      <a href="https://wa.me/919163924237" className="group flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                        <span className="mr-2 group-hover:animate-pulse">💬</span>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Why Choose Success Point?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Expert Teachers",
                description: "Best and experienced teachers available for each subject with personalized attention.",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Digital Classes",
                description: "Fully digital classes with offline, online, and recorded options for flexible learning.",
                gradient: "from-green-500 to-blue-600",
                bgGradient: "from-green-50 to-blue-50"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Comprehensive Curriculum",
                description: "Complete coverage of Class 11th, 12th, and B.Com syllabus with regular assessments.",
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className={`group bg-gradient-to-br ${feature.bgGradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-scale-in hover-lift`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-12 animate-fade-in">Our Achievements</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Students Taught", icon: <Users className="w-8 h-8" /> },
                { number: "95%", label: "Success Rate", icon: <Star className="w-8 h-8" /> },
                { number: "10+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
                { number: "8+", label: "Expert Teachers", icon: <GraduationCap className="w-8 h-8" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Visit Our Location
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in overflow-hidden">
              <CardContent className="p-0">
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <span className="text-2xl font-semibold text-gray-800">Rajabazar (Near Danish Restaurant)</span>
                  </div>
                </div>
                
                <div className="w-full h-80 relative overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0123456789!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Success Point Location"
                    className="hover:grayscale-0 grayscale transition-all duration-500"
                  ></iframe>
                </div>
                
                <div className="p-8 text-center">
                  <a 
                    href="https://maps.app.goo.gl/eepnR5hKncrbXDkz5?g_st=a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold text-lg"
                  >
                    <MapPin size={20} className="mr-3 group-hover:animate-pulse" />
                    Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
