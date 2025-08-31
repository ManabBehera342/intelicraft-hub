import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Brain, Search, BookOpen, MessageCircle, Users, BarChart3, ArrowRight } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Brain,
      title: "Digital Twin Profile",
      description: "Create your comprehensive career profile with AI-powered analysis of skills, interests, and potential.",
      gradient: "bg-gradient-primary",
      href: "/profile"
    },
    {
      icon: Search,
      title: "Smart Career Explorer",
      description: "Discover 5000+ career paths with AI-driven matching, salary insights, and future readiness scores.",
      gradient: "bg-gradient-secondary",
      href: "/careers"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "Get custom learning roadmaps with curated courses, certifications, and skill development plans.",
      gradient: "bg-gradient-primary",
      href: "/learning"
    },
    {
      icon: MessageCircle,
      title: "AI Career Mentor",
      description: "24/7 intelligent guidance with conversational AI that understands your career aspirations.",
      gradient: "bg-gradient-secondary",
      href: "/mentor"
    },
    {
      icon: Users,
      title: "Industry Connect",
      description: "Connect with mentors, practice interviews, and build your professional network in your field.",
      gradient: "bg-gradient-primary",
      href: "/connect"
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Real-time job market trends, salary benchmarks, and industry growth predictions.",
      gradient: "bg-gradient-secondary",
      href: "/dashboard"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Complete <span className="gradient-text">Career Toolkit</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Everything you need to make informed career decisions, from discovery to achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="group relative overflow-hidden glass-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant">
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`${feature.gradient} p-3 rounded-xl w-fit mb-4 shadow-glow group-hover:shadow-elegant transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-glow transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary-glow transition-all duration-300"
                >
                  Explore Feature
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary shadow-elegant">
            Start Building Your Profile
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;