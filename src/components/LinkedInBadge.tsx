import React, { useEffect, useState } from 'react';
import { Sparkles, Star } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const LinkedInBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const loadLinkedInScript = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scriptLoaded) {
            setIsVisible(true);
            
            // Add a small delay to ensure the DOM is ready
            setTimeout(() => {
              if (!document.querySelector('script[src*="linkedin.com/badge"]')) {
                const script = document.createElement('script');
                script.src = 'https://platform.linkedin.com/badges/js/profile.js';
                script.async = true;
                script.defer = true;
                script.onload = () => setScriptLoaded(true);
                script.onerror = () => {
                  console.warn('LinkedIn badge script failed to load');
                  setScriptLoaded(true); // Set to true to show fallback
                };
                document.head.appendChild(script);
              } else {
                setScriptLoaded(true);
              }
            }, 200);
            
            observer.disconnect();
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      const element = document.querySelector('.linkedin-badge-container');
      if (element) {
        observer.observe(element);
      }

      return () => {
        observer.disconnect();
      };
    };

    return loadLinkedInScript();
  }, [scriptLoaded]);

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/20 py-16 overflow-hidden large-element" aria-label="Developer Information">
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/60 rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-accent/40 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-muted-foreground/50 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-primary/70 rounded-full opacity-70 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-r from-muted/20 to-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-6 backdrop-blur-sm border border-border/20">
              <Sparkles className="w-6 h-6 text-primary mr-2" aria-hidden="true" />
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Developer Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 font-inter">
              Website Creator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the talented developer who brought this vision to life with cutting-edge technology and creative design
            </p>
          </header>

          {/* LinkedIn Badge Container */}
          <div className="flex justify-center animate-scale-in linkedin-badge-container">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl scale-110 animate-pulse" aria-hidden="true"></div>
              
              <article className="relative bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-border/30 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Header */}
                <header className="mb-6 text-center">
                  <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl mb-4">
                    <Star className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                  </div>
                  
                  {/* Enhanced Developer Name */}
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-2 font-inter tracking-tight">
                      Md Rayyan
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3" aria-hidden="true"></div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Meet the developer behind this website
                    </p>
                  </div>
                </header>

                {/* LinkedIn Badge */}
                <div className="mb-4 flex justify-center" role="complementary" aria-label="LinkedIn Profile">
                  {isVisible && scriptLoaded && (
                    <div 
                      className="badge-base LI-profile-badge" 
                      data-locale="en_US" 
                      data-size="medium" 
                      data-theme={theme === 'dark' ? 'dark' : 'light'} 
                      data-type="VERTICAL" 
                      data-vanity="mdrayyan3" 
                      data-version="v1"
                    >
                      <a 
                        className="badge-base__link LI-simple-link" 
                        href="https://in.linkedin.com/in/mdrayyan3?trk=profile-badge"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="View Md Rayyan's LinkedIn profile"
                      >
                        Md Rayyan
                      </a>
                    </div>
                  )}
                  {isVisible && !scriptLoaded && (
                    <div className="w-64 h-32 bg-gradient-to-r from-muted/20 to-accent/20 rounded-lg animate-pulse flex flex-col items-center justify-center border border-border">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
                      <span className="text-primary text-sm font-medium">Loading LinkedIn Badge...</span>
                    </div>
                  )}
                  {!isVisible && (
                    <div className="w-64 h-32 bg-gradient-to-r from-muted/10 to-accent/10 rounded-lg flex items-center justify-center border border-border">
                      <a 
                        href="https://in.linkedin.com/in/mdrayyan3?trk=profile-badge"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                        aria-label="View Md Rayyan's LinkedIn profile"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                        </svg>
                        View LinkedIn Profile
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Author text */}
                <footer className="text-center">
                  <p className="text-xs text-muted-foreground font-medium bg-gradient-to-r from-muted/50 to-accent/20 px-4 py-2 rounded-full border border-border">
                    Author & Creator of this Website
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInBadge;