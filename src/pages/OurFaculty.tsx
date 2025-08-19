import { GraduationCap, BookOpen, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { LazyImage } from '@/components/LazyImage';

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
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-600"
    },
    {
      name: "Saquib Iqbal",
      photo: "/lovable-uploads/a56124d6-fc87-47b1-8cc5-e0606a694dbe.png",
      subjects: ["Cost and Management Account", "Business Mathematics and Statistics"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-green-600"
    },
    {
      name: "Irfan Khan",
      photo: "/lovable-uploads/ac4f9945-66f2-4941-a820-6f10f287ae2d.png",
      subjects: ["PPM", "Commercial Law", "Computerised Accounting", "E filing", "E commerce", "Business Communication"],
      icon: <Award className="w-6 h-6" />,
      color: "bg-orange-600"
    },
    {
      name: "Abu Bakar",
      photo: "/lovable-uploads/3c5eed04-941f-40cf-ae6e-49577b02b7cb.png",
      subjects: ["Economics", "Commerce", "Sales Management", "Human Resources Management", "Marketing Management"],
      icon: <Star className="w-6 h-6" />,
      color: "bg-indigo-600",
      imagePosition: "object-top"
    },
    {
      name: "Shahbaz Alam",
      photo: "/lovable-uploads/fb3fe1b0-78d8-4887-906d-94ccf4e5ef29.png",
      subjects: ["Business Studies", "Entrepreneurship Development", "Constitutional Value"],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-purple-600",
      imagePosition: "object-top"
    },
    {
      name: "Tahreem Fatma",
      subjects: ["English", "Hindi"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-pink-600"
    },
    {
      name: "Gulafshan",
      subjects: ["Information Technology", "Computer Application"],
      icon: <Award className="w-6 h-6" />,
      color: "bg-cyan-600"
    },
    {
      name: "Maariyah Islam",
      subjects: ["Sociology"],
      icon: <Star className="w-6 h-6" />,
      color: "bg-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              Our Faculty
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our experienced and dedicated teachers who are committed to providing quality education 
              and helping students achieve their academic goals with personalized attention and expertise.
            </p>
            <div className="mt-8 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Faculty Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <Card 
                key={index}
                className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="flex flex-col items-center space-y-4">
                    {teacher.photo ? (
                      <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
                        <LazyImage 
                          src={teacher.photo} 
                          alt={teacher.name}
                          className={`w-full h-full ${teacher.imagePosition || 'object-cover object-center'}`}
                        />
                      </div>
                    ) : (
                      <div className={`w-32 h-32 rounded-full ${teacher.color} text-white shadow-lg flex items-center justify-center`}>
                        <div className="text-4xl">{teacher.icon}</div>
                      </div>
                    )}
                    <div className="text-center">
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {teacher.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 font-medium">Faculty Member</p>
                    </div>
                    <div className={`p-2 rounded-full ${teacher.color} text-white shadow-md`}>
                      {teacher.icon}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-700 mb-3 text-lg">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject, subIndex) => (
                      <span
                        key={subIndex}
                        className={`px-3 py-1 text-sm rounded-full ${teacher.color} text-white shadow-sm`}
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
          <div className="mt-20 text-center">
            <div id="faculty-stats-section" className="bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Excellence in Education</h3>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                Our faculty members bring years of experience and expertise to provide the best possible education. 
                With personalized attention and innovative teaching methods, we ensure every student receives 
                the guidance they need to excel in their academic journey.
              </p>
              <div className="mt-8 flex justify-center space-x-8">
                {statsData.map((stat, index) => (
                  <div key={index} className="text-center">
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