
import { GraduationCap, BookOpen, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const OurFaculty = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const statsData = [
    { number: 8, label: "Expert Teachers", suffix: "+" },
    { number: 15, label: "Subjects Covered", suffix: "+" },
    { number: 100, label: "Dedicated Support", suffix: "%" }
  ];

  useEffect(() => {
    const animateCounters = () => {
      statsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('faculty-stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const faculty = [
    {
      name: "Md. Khurshid Alam",
      photo: "/lovable-uploads/ec45bc48-ea7d-4275-bc70-2a7eb674d3f2.png",
      subjects: ["Account", "Taxation", "Financial Management", "Economics", "Corporate Law"],
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      name: "Saquib Iqbal",
      photo: "/lovable-uploads/a56124d6-fc87-47b1-8cc5-e0606a694dbe.png",
      subjects: ["Cost and Management Account", "Business Mathematics and Statistics"],
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      name: "Irfan Khan",
      photo: "/lovable-uploads/ac4f9945-66f2-4941-a820-6f10f287ae2d.png",
      subjects: ["PPM", "Commercial Law", "Computerised Accounting", "E filing", "E commerce", "Business Communication"],
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      name: "Abu Bakar",
      photo: "/lovable-uploads/3c5eed04-941f-40cf-ae6e-49577b02b7cb.png",
      subjects: ["Economics", "Commerce", "Sales Management", "Human Resources Management", "Marketing Management"],
      icon: <Star className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      imagePosition: "object-top"
    },
    {
      name: "Shahbaz Alam",
      photo: "/lovable-uploads/fb3fe1b0-78d8-4887-906d-94ccf4e5ef29.png",
      subjects: ["Business Studies", "Entrepreneurship Development", "Constitutional Value"],
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      imagePosition: "object-top"
    },
    {
      name: "Tahreem Fatma",
      subjects: ["English", "Hindi"],
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      name: "Gulafshan",
      subjects: ["Information Technology", "Computer Application"],
      icon: <Award className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50"
    },
    {
      name: "Maariyah Islam",
      subjects: ["Sociology"],
      icon: <Star className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Our Faculty
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our experienced and dedicated teachers who are committed to providing quality education 
              and helping students achieve their academic goals with personalized attention and expertise.
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Faculty Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${teacher.bgColor} border-0 overflow-hidden animate-scale-in hover-lift`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${teacher.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    {teacher.photo ? (
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${teacher.color} rounded-full opacity-20 animate-pulse-glow`}></div>
                        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl group-hover:scale-110 transition-all duration-500 border-4 border-white/50 backdrop-blur-sm">
                          <img 
                            src={teacher.photo} 
                            alt={teacher.name}
                            className={`w-full h-full ${teacher.imagePosition || 'object-cover object-center'} transform group-hover:scale-105 transition-transform duration-500 brightness-105 contrast-105`}
                            style={{
                              filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                            }}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${teacher.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          {/* Enhanced overlay for better face visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5"></div>
                        </div>
                        <div className={`absolute -bottom-3 -right-3 p-3 rounded-full bg-gradient-to-r ${teacher.color} text-white shadow-xl animate-bounce-in border-3 border-white/30`} style={{ animationDelay: `${index * 150 + 300}ms` }}>
                          {teacher.icon}
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${teacher.color} rounded-full opacity-20 animate-pulse-glow`}></div>
                        <div className={`relative w-40 h-40 rounded-full bg-gradient-to-r ${teacher.color} text-white shadow-2xl group-hover:scale-110 transition-all duration-500 flex items-center justify-center border-4 border-white/50`}>
                          <div className="text-5xl">{teacher.icon}</div>
                        </div>
                      </div>
                    )}
                    <div className="text-center">
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 animate-slide-in-right" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                        {teacher.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 font-medium">Faculty Member</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <h4 className="font-semibold text-gray-700 mb-3 text-lg">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${teacher.color} text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 animate-fade-in hover-scale`}
                        style={{ animationDelay: `${index * 100 + subIndex * 50 + 400}ms` }}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div id="faculty-stats-section" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-10 rounded-3xl shadow-2xl hover-glow">
              <h3 className="text-3xl font-bold mb-4">Excellence in Education</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Our faculty members bring years of experience and expertise to provide the best possible education. 
                With personalized attention and innovative teaching methods, we ensure every student receives 
                the guidance they need to excel in their academic journey.
              </p>
              <div className="mt-8 flex justify-center space-x-8">
                {statsData.map((stat, index) => (
                  <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="text-3xl font-bold">
                      {counts[index]}{stat.suffix}
                    </div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFaculty;
