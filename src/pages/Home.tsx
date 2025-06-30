
import { Phone, Mail, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-red-600">SUCCESS POINT</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A Comprehensive Coaching Classes dedicated to providing quality education and shaping bright futures for students in Class 11th, 12th, and B.Com programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admission" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Apply for Admission
            </a>
            <a href="/contact" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Head Teacher Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Head Teacher</h2>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                    alt="Khurshid Alam Sir" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Khurshid Alam Sir</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our experienced and dedicated head teacher, committed to providing the best education and guidance to all our students. With years of experience in comprehensive coaching, Khurshid Alam Sir ensures that every student receives personalized attention and quality education.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:9163924237" className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <Phone size={16} className="mr-2" />
                      Call Now
                    </a>
                    <a href="https://wa.me/919163924237" className="flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Success Point?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Teachers</h3>
              <p className="text-gray-600">Best and experienced teachers available for each subject with personalized attention.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Digital Classes</h3>
              <p className="text-gray-600">Fully digital classes with offline, online, and recorded options for flexible learning.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-600">Complete coverage of Class 11th, 12th, and B.Com syllabus with regular assessments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="text-red-600 mr-2" size={24} />
                <span className="text-lg font-semibold text-gray-800">Rajabazar (Near Danish Restaurant)</span>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0123456789!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Success Point Location"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <a 
                  href="https://maps.app.goo.gl/eepnR5hKncrbXDkz5?g_st=a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MapPin size={16} className="mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
