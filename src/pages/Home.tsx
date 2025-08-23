import { Phone, GraduationCap, BookOpen, Award, MessageCircle, ChevronDown, ArrowRight, Star, Users, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LazyImage } from '@/components/LazyImage';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Expert Teachers",
      description: "Experienced educators with proven track records in their respective subjects.",
      color: "from-primary to-primary-hover"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Digital Classes",
      description: "Modern learning with online, offline, and recorded class options.",
      color: "from-secondary to-secondary-hover"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Success",
      description: "95% success rate with comprehensive syllabus coverage and regular assessments.",
      color: "from-success to-emerald-600"
    }
  ];

  const quickCourses = [
    {
      title: "Class 11th",
      subtitle: "ISC/CBSE",
      students: "150+",
      rating: "4.9",
      image: "/lovable-uploads/8d137088-a954-45fc-934d-f714104fd4dd.png"
    },
    {
      title: "Class 12th", 
      subtitle: "W.B. Board",
      students: "200+",
      rating: "4.8",
      image: "/lovable-uploads/3c5eed04-941f-40cf-ae6e-49577b02b7cb.png"
    },
    {
      title: "B.Com",
      subtitle: "Honours/General",
      students: "100+",
      rating: "4.7",
      image: "/lovable-uploads/5934fa9b-0bdd-4db9-b127-63647b186662.png"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Class 12th",
      photo: "/lovable-uploads/a56124d6-fc87-47b1-8cc5-e0606a694dbe.png",
      quote: "Success Point transformed my understanding of complex subjects. Scored 95% in boards!",
      achievement: "95% in Boards"
    },
    {
      name: "Rahul Kumar", 
      course: "Class 11th",
      photo: "/lovable-uploads/06b2e7d6-a6e2-4df3-886a-bc9243206dbf.png",
      quote: "The digital classes are amazing! Interactive sessions made learning enjoyable.",
      achievement: "JEE Main Qualified"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary-light via-background to-secondary-light flex items-center overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Quality Education Since 2016
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="text-foreground">Shape Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Bright Future
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Join Success Point for comprehensive coaching in Class 11th, 12th, and B.Com with expert teachers, modern teaching methods, and proven results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  Join Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book Demo Class
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-display font-bold text-foreground">8+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border">
                  <LazyImage 
                    src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                    alt="Success Point Education - Quality Learning Environment" 
                    className="w-full h-auto rounded-2xl"
                    priority={true}
                  />
                  
                  {/* Floating Cards */}
                  <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">4.9 Rating</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">500+ Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Success Point?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine traditional teaching excellence with modern educational technology to deliver the best learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-border bg-card overflow-hidden relative"
              >
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Popular Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to help students excel in their academic journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {quickCourses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-light to-secondary-light overflow-hidden">
                  <LazyImage 
                    src={course.image} 
                    alt={`${course.title} Course`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{course.subtitle}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{course.students} enrolled</span>
                    </div>
                    <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
                View All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Head Teacher Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="inline-block bg-primary-light text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Meet Our Head Teacher
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                        Md. Khurshid Alam
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        With over 8 years of experience in comprehensive coaching, our dedicated head teacher ensures every student receives personalized attention and quality education for their success.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                        <Phone size={16} className="mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="border-success text-success hover:bg-success hover:text-success-foreground">
                        <MessageCircle size={16} className="mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square lg:aspect-auto lg:h-full bg-gradient-to-br from-primary-light to-secondary-light overflow-hidden">
                      <LazyImage 
                        src="/lovable-uploads/e23f35c3-881c-4a15-ad66-590640806b5a.png" 
                        alt="Md. Khurshid Alam - Head Teacher at Success Point" 
                        className="w-full h-full object-cover"
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Success stories from students who achieved their dreams with our guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-background shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary-light">
                      <LazyImage 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <span className="bg-success-light text-success px-2 py-1 rounded text-xs font-medium">
                      {testimonial.achievement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read More Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-hover to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who transformed their academic future with Success Point. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-medium shadow-lg hover:shadow-xl">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;