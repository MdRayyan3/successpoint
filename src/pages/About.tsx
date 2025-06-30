
const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Success Point</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Success Point Coaching Centre is dedicated to providing comprehensive and quality education to students pursuing Class 11th, 12th, and B.Com courses. We believe in nurturing young minds and helping them achieve their academic goals through innovative teaching methods and personalized attention.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence in education has made us a trusted name in the coaching industry, with a focus on building strong foundations and developing critical thinking skills in our students.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl">
              <img 
                src="/lovable-uploads/8d137088-a954-45fc-934d-f714104fd4dd.png" 
                alt="Success Point Brochure" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  <span className="text-gray-600">Experienced and qualified teachers for all subjects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  <span className="text-gray-600">Fully digital classroom infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  <span className="text-gray-600">Flexible class schedules (offline, online, recorded)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  <span className="text-gray-600">Comprehensive study materials and resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  <span className="text-gray-600">Regular assessments and progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Excellence</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">★</span>
                  <span className="text-gray-600">Best and most experienced teachers available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">★</span>
                  <span className="text-gray-600">Personalized attention to every student</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">★</span>
                  <span className="text-gray-600">Proven track record of student success</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">★</span>
                  <span className="text-gray-600">Modern teaching methodologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">★</span>
                  <span className="text-gray-600">Supportive learning environment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">Why Students Choose Us</h3>
            <p className="text-lg leading-relaxed">
              At Success Point, we don't just teach subjects - we build futures. Our comprehensive approach to education, 
              combined with the expertise of our faculty and the flexibility of our digital learning platform, 
              ensures that every student receives the best possible preparation for their academic journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
