import { Phone, GraduationCap, BookOpen, Award, MessageCircle, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LazyImage } from '@/components/LazyImage';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Teachers",
      description: "Best and experienced teachers available for each subject with personalized attention.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Classes",
      description: "Fully digital classes with offline, online, and recorded options for flexible learning.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Success Rate",
      description: "Complete coverage of Class 11th, 12th, and B.Com syllabus with regular assessments.",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
              Welcome to{' '}
              <span className="text-blue-600">
                SUCCESS POINT
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A Comprehensive Coaching Classes dedicated to providing quality education and shaping bright futures for students in Class 11th, 12th, and B.Com programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/admission" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Apply for Admission
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-blue-600 animate-bounce" />
        </div>
      </section>

      {/* Head Teacher Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Meet Our Head Teacher
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/3 p-6 lg:p-8">
                    <div className="w-56 h-56 mx-auto rounded-2xl overflow-hidden shadow-lg">
                      <LazyImage 
                        src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                        alt="Md. Khurshid Alam - Head Teacher at Success Point Coaching Centre" 
                        className="w-full h-full object-cover"
                        priority={true}
                        loading="eager"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Md. Khurshid Alam
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Our experienced and dedicated head teacher, committed to providing the best education and guidance to all our students. With years of experience in comprehensive coaching, Md. Khurshid Alam ensures that every student receives personalized attention and quality education.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="tel:9163924237" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <Phone size={16} className="mr-2" />
                        Call Now
                      </a>
                      <a 
                        href="https://wa.me/919163924237" 
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <MessageCircle size={16} className="mr-2" />
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Success Point?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="shadow-lg border-0 bg-white hover:shadow-xl transition-shadow duration-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;