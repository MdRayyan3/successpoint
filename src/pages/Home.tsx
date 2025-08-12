import { Phone, GraduationCap, BookOpen, Award, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Teachers",
      description: "Best and experienced teachers available for each subject with personalized attention.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Classes",
      description: "Fully digital classes with offline, online, and recorded options for flexible learning.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Success Rate",
      description: "Complete coverage of Class 11th, 12th, and B.Com syllabus with regular assessments.",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-violet-50 via-cyan-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent animate-gradient">
                  SUCCESS POINT
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                A Comprehensive Coaching Classes dedicated to providing quality education and shaping bright futures for students in Class 11th, 12th, and B.Com programs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <a href="/admission" className="btn-modern bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700">
                <span className="relative z-10">Apply for Admission</span>
              </a>
              <a href="/contact" className="btn-modern bg-transparent border-2 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white hover:border-transparent">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Head Teacher Section */}
      <section className="py-16 bg-gradient-to-br from-white via-cyan-50 to-violet-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-50 to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent mb-4">
                Meet Our Head Teacher
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
            </div>
            
            <Card className="card-modern glass animate-scale-in">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/3 p-6 lg:p-8">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                      <div className="relative w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                          alt="Md. Khurshid Alam - Head Teacher at Success Point Coaching Centre" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                          loading="eager"
                          width="224"
                          height="224"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-gray-100">
                      Md. Khurshid Alam
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed dark:text-gray-300">
                      Our experienced and dedicated head teacher, committed to providing the best education and guidance to all our students. With years of experience in comprehensive coaching, Md. Khurshid Alam ensures that every student receives personalized attention and quality education.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="tel:9163924237" className="btn-modern bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800">
                        <Phone size={16} className="mr-2" />
                        Call Now
                      </a>
                      <a href="https://wa.me/919163924237" className="btn-modern bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800">
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
      <section className="py-16 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
              Why Choose Success Point?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`card-modern group bg-gradient-to-br ${feature.bgGradient} animate-scale-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3 animate-pulse-glow`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300">
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
