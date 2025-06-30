
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>

          {/* Teacher Contact Section */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">Get in Touch with Our Head Teacher</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                      alt="Khurshid Alam Sir" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Khurshid Alam Sir</h3>
                    <p className="text-gray-600 mb-6">
                      Head Teacher & Director at Success Point Coaching Centre. 
                      Feel free to contact for any queries regarding admission, courses, or academic guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <a href="tel:9163924237" className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        <Phone size={16} className="mr-2" />
                        Call: 9163924237
                      </a>
                      <a href="https://wa.me/919163924237" className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="mr-2" size={24} />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <a href="tel:9163924237" className="text-lg text-gray-700 hover:text-red-600 transition-colors block">
                    📞 9163924237
                  </a>
                </div>
                <div>
                  <a href="tel:7003837463" className="text-lg text-gray-700 hover:text-red-600 transition-colors block">
                    📞 7003837463
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-gray-600">Available for calls during office hours</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Mail className="mr-2" size={24} />
                  Email & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <a href="mailto:rayyanmd130@gmail.com" className="text-lg text-gray-700 hover:text-blue-600 transition-colors block">
                    ✉️ rayyanmd130@gmail.com
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/919163924237" className="text-lg text-gray-700 hover:text-green-600 transition-colors block">
                    💬 WhatsApp: 9163924237
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/917003837463" className="text-lg text-gray-700 hover:text-green-600 transition-colors block">
                    💬 WhatsApp: 7003837463
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-600">
                <MapPin className="mr-2" size={24} />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Address</h4>
                  <p className="text-gray-600">Rajabazar (Near Danish Restaurant)</p>
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
                
                <div className="text-center">
                  <a 
                    href="https://maps.app.goo.gl/eepnR5hKncrbXDkz5?g_st=a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MapPin size={16} className="mr-2" />
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Action Buttons */}
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Join Success Point?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admission" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Apply for Admission
                </a>
                <a href="/registration" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Register Now
                </a>
                <a href="https://wa.me/919163924237" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
