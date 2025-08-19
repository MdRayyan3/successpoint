import { useEffect, useState } from 'react';

const About = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const statsData = [
    { number: 500, label: "Students Taught", suffix: "+" },
    { number: 95, label: "Success Rate", suffix: "%" },
    { number: 10, label: "Years Experience", suffix: "+" }
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

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-6">
              About Success Point
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">
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
              <div className="bg-white p-8 rounded-2xl shadow-lg border">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">SP</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Success Point</h3>
                  <p className="text-gray-600">Coaching Excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">✓</span>
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
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">★</span>
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
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3">★</span>
                    <span className="text-gray-600">{excellence}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="stats-section" className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Why Students Choose Us</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              At Success Point, we don't just teach subjects - we build futures. Our comprehensive approach to education, 
              combined with the expertise of our faculty and the flexibility of our digital learning platform, 
              ensures that every student receives the best possible preparation for their academic journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2 text-white">
                    {counts[index]}{stat.suffix}
                  </div>
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