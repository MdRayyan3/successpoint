
const About = () => {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-violet-50 via-cyan-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-6">
              About Success Point
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-scale-in">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
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
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="card-modern relative bg-white p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                    <span className="text-white text-2xl font-bold">SP</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Success Point</h3>
                  <p className="text-gray-600">Coaching Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card-modern bg-gradient-to-br from-cyan-50 to-teal-50 p-8 animate-slide-in-right">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <span className="text-white text-xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Features</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Experienced and qualified teachers for all subjects",
                  "Fully digital classroom infrastructure",
                  "Flexible class schedules (offline, online, recorded)",
                  "Comprehensive study materials and resources",
                  "Regular assessments and progress tracking"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-emerald-600 mr-3 group-hover:scale-125 transition-transform duration-200">✓</span>
                    <span className="text-gray-600 group-hover:text-gray-800 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-modern bg-gradient-to-br from-violet-50 to-purple-50 p-8 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                  <span className="text-white text-xl">★</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Excellence</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Best and most experienced teachers available",
                  "Personalized attention to every student",
                  "Proven track record of student success",
                  "Modern teaching methodologies",
                  "Supportive learning environment"
                ].map((excellence, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-violet-600 mr-3 group-hover:scale-125 transition-transform duration-200">★</span>
                    <span className="text-gray-600 group-hover:text-gray-800 transition-colors">{excellence}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-modern bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white p-10 text-center animate-fade-in">
            <h3 className="text-3xl font-bold mb-6">Why Students Choose Us</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              At Success Point, we don't just teach subjects - we build futures. Our comprehensive approach to education, 
              combined with the expertise of our faculty and the flexibility of our digital learning platform, 
              ensures that every student receives the best possible preparation for their academic journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Students Taught" },
                { number: "95%", label: "Success Rate" },
                { number: "10+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center hover-scale">
                  <div className="text-4xl font-bold mb-2 gradient-text-rainbow">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
