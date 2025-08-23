import { GraduationCap, Clock, Users, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Class 11th (ISC/CBSE)",
      duration: "1 Year",
      students: "150+",
      rating: "4.9",
      price: "₹15,000",
      image: "/lovable-uploads/8d137088-a954-45fc-934d-f714104fd4dd.png",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English"],
      features: [
        "Comprehensive syllabus coverage",
        "Regular tests & assessments", 
        "Doubt clearing sessions",
        "Study materials included"
      ],
      description: "Complete foundation building program for Class 11th students preparing for boards and competitive exams."
    },
    {
      id: 2,
      title: "Class 12th (W.B. Board)",
      duration: "1 Year", 
      students: "200+",
      rating: "4.8",
      price: "₹18,000",
      image: "/lovable-uploads/3c5eed04-941f-40cf-ae6e-49577b02b7cb.png",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Bengali"],
      features: [
        "Board exam focused preparation",
        "Previous year question practice",
        "Mock tests every month",
        "Career counseling sessions"
      ],
      description: "Intensive preparation program for Class 12th board exams with focus on scoring maximum marks."
    },
    {
      id: 3,
      title: "B.Com (Honours/General)",
      duration: "3 Years",
      students: "100+", 
      rating: "4.7",
      price: "₹12,000/year",
      image: "/lovable-uploads/5934fa9b-0bdd-4db9-b127-63647b186662.png",
      subjects: ["Accounting", "Business Studies", "Economics", "Statistics", "Computer Application"],
      features: [
        "University exam preparation",
        "Practical training sessions",
        "Industry exposure programs",
        "Placement assistance"
      ],
      description: "Complete undergraduate commerce program with practical knowledge and industry exposure."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Courses
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive educational programs designed to help students excel in their academic journey with expert guidance and modern teaching methods.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {course.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.slice(0, 3).map((subject, index) => (
                        <span key={index} className="bg-primary-light text-primary px-2 py-1 rounded text-xs">
                          {subject}
                        </span>
                      ))}
                      {course.subjects.length > 3 && (
                        <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                          +{course.subjects.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Our Courses?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Expert Faculty",
                description: "Experienced teachers with proven track records"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Flexible Timing",
                description: "Multiple batches to suit your schedule"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Small Batches",
                description: "Personal attention with limited students per class"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Proven Results",
                description: "High success rate in board and competitive exams"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;