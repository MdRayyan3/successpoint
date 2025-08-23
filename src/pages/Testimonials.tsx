import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Class 12th (W.B. Board)",
      year: "2023",
      photo: "/lovable-uploads/a56124d6-fc87-47b1-8cc5-e0606a694dbe.png",
      rating: 5,
      quote: "Success Point transformed my understanding of complex subjects. The teachers' dedication and personalized attention helped me score 95% in my boards. I'm forever grateful!",
      achievement: "95% in Board Exams"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "Class 11th (CBSE)",
      year: "2023", 
      photo: "/lovable-uploads/06b2e7d6-a6e2-4df3-886a-bc9243206dbf.png",
      rating: 5,
      quote: "The digital classes at Success Point are amazing! Even during lockdown, I never missed a lesson. The interactive sessions and doubt-clearing made learning enjoyable.",
      achievement: "JEE Main Qualified"
    },
    {
      id: 3,
      name: "Sneha Das",
      course: "B.Com (Honours)",
      year: "2022",
      photo: "/lovable-uploads/ac4f9945-66f2-4941-a820-6f10f287ae2d.png",
      rating: 5,
      quote: "The practical approach to teaching commerce subjects at Success Point is exceptional. It prepared me not just for exams but for real-world applications too.",
      achievement: "University Topper"
    },
    {
      id: 4,
      name: "Arjun Ghosh",
      course: "Class 12th (W.B. Board)",
      year: "2022",
      photo: "/lovable-uploads/d4e8327f-e672-4b59-b9d8-952e52b2fe41.png",
      rating: 5,
      quote: "Md. Khurshid Alam sir's teaching methodology is brilliant. He made Physics and Mathematics so easy to understand. Highly recommend Success Point!",
      achievement: "92% in Board Exams"
    },
    {
      id: 5,
      name: "Ananya Roy",
      course: "Class 11th (ISC)",
      year: "2023",
      photo: "/lovable-uploads/ec45bc48-ea7d-4275-bc70-2a7eb674d3f2.png",
      rating: 5,
      quote: "The study materials and regular tests at Success Point kept me ahead of my syllabus. The supportive environment here is unmatched.",
      achievement: "NEET Qualified"
    },
    {
      id: 6,
      name: "Vikash Singh",
      course: "B.Com (General)",
      year: "2022",
      photo: "/lovable-uploads/fb3fe1b0-78d8-4887-906d-94ccf4e5ef29.png",
      rating: 5,
      quote: "Success Point gave me the confidence to excel in my commerce studies. The career guidance sessions were particularly helpful for my future planning.",
      achievement: "Placed in MNC"
    }
  ];

  const stats = [
    { number: "500+", label: "Success Stories" },
    { number: "95%", label: "Success Rate" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Toppers Produced" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Student Success Stories
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hear from our successful students who achieved their dreams with Success Point's guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="bg-background border-border shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-primary-light">
                      <img 
                        src={testimonials[currentTestimonial].photo} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <Quote className="w-12 h-12 text-primary opacity-20 mb-4 mx-auto md:mx-0" />
                    
                    <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div className="mb-4">
                      <div className="flex justify-center md:justify-start mb-2">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                        ))}
                      </div>
                      
                      <h4 className="text-xl font-display font-bold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].course} • Class of {testimonials[currentTestimonial].year}
                      </p>
                      <div className="inline-block bg-success-light text-success px-3 py-1 rounded-full text-sm font-medium mt-2">
                        {testimonials[currentTestimonial].achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              More Success Stories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-light">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center">
                    <span className="inline-block bg-success-light text-success px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.achievement}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your academic success. Join Success Point and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-medium">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;