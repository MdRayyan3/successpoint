
const About = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              About Success Point
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-scale-in">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Success Point Coaching Centre is dedicated to providing comprehensive and quality education to students pursuing Class 11th, 12th, and B.Com courses. We believe in nurturing young minds and helping them achieve their academic goals through innovative teaching methods and personalized attention.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our commitment to excellence in education has made us a trusted name in the coaching industry, with a focus on building strong foundations and developing critical thinking skills in our students.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">SP</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Success Point</h3>
                  <p className="text-gray-600">Coaching Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Features</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-green-600 mr-3 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Experienced and qualified teachers for all subjects</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-600 mr-3 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Fully digital classroom infrastructure</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-600 mr-3 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Flexible class schedules (offline, online, recorded)</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-600 mr-3 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Comprehensive study materials and resources</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-green-600 mr-3 group-hover:scale-125 transition-transform duration-200">✓</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Regular assessments and progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">★</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Excellence</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 group-hover:scale-125 transition-transform duration-200">★</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Best and most experienced teachers available</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 group-hover:scale-125 transition-transform duration-200">★</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Personalized attention to every student</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 group-hover:scale-125 transition-transform duration-200">★</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Proven track record of student success</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 group-hover:scale-125 transition-transform duration-200">★</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Modern teaching methodologies</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-blue-600 mr-3 group-hover:scale-125 transition-transform duration-200">★</span>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Supportive learning environment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-10 rounded-3xl text-center shadow-2xl animate-fade-in transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6">Why Students Choose Us</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              At Success Point, we don't just teach subjects - we build futures. Our comprehensive approach to education, 
              combined with the expertise of our faculty and the flexibility of our digital learning platform, 
              ensures that every student receives the best possible preparation for their academic journey.
            </p>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
