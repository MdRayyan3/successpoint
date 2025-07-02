
import { useEffect, useState } from 'react';
import { Users, Star, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
  targetValue: number;
}

const AnimatedStats = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  const stats: StatItem[] = [
    { number: "500+", label: "Students Taught", icon: <Users className="w-8 h-8" />, targetValue: 500 },
    { number: "95%", label: "Success Rate", icon: <Star className="w-8 h-8" />, targetValue: 95 },
    { number: "10+", label: "Years Experience", icon: <Award className="w-8 h-8" />, targetValue: 10 },
    { number: "8+", label: "Expert Teachers", icon: <GraduationCap className="w-8 h-8" />, targetValue: 8 }
  ];

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.targetValue;
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
    <section id="stats-section" className="py-16 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 animate-fade-in">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-0 backdrop-blur-sm animate-scale-in hover:bg-white/20 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl font-bold mb-2">
                    {index === 1 ? `${counts[index]}%` : 
                     index === 0 ? `${counts[index]}+` : 
                     `${counts[index]}+`}
                  </div>
                  <div className="text-sm md:text-lg opacity-90">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
