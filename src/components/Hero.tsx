import { Button } from "./ui/button";
import { ArrowRight, Play, Star, Users, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="AI Career Guidance" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
        <div className="animate-float absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" style={{ animationDelay: '1s' }} />
        <div className="animate-float absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-primary-glow" />
            <span className="text-sm font-medium">India's First AI-Powered Career Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your <span className="gradient-text">AI Career</span>
            <br />
            Companion
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover your perfect career path with AI-powered insights, personalized learning roadmaps, 
            and real-time industry intelligence. Transform your future with data-driven decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-elegant text-lg px-8 py-6 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-lg px-8 py-6 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">5000+</div>
              <div className="text-sm text-foreground/60">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-sm text-foreground/60">Students Guided</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">95%</div>
              <div className="text-sm text-foreground/60">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;