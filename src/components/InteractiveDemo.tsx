import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { TrendingUp, Star, Clock, MapPin, DollarSign, Play, Pause } from "lucide-react";

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState<'profile' | 'career' | 'mentor'>('profile');
  const [profileProgress, setProfileProgress] = useState(65);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = {
    profile: {
      title: "Digital Twin Builder",
      description: "See how AI creates your comprehensive career profile",
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Profile Completeness</h4>
            <span className="text-primary-glow font-bold">{profileProgress}%</span>
          </div>
          <Progress value={profileProgress} className="h-3" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Academic Records</span>
                <Badge variant="secondary">Complete</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Skills Assessment</span>
                <Badge variant="secondary">Complete</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm">Career Interests</span>
                <Badge>In Progress</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-lg glass-card">
                <h5 className="font-medium mb-2">AI Insights</h5>
                <p className="text-sm text-foreground/70">
                  "Strong analytical skills with interest in technology. Consider data science or AI engineering paths."
                </p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={() => setProfileProgress(prev => prev < 100 ? prev + 10 : 65)}
            className="w-full bg-gradient-primary"
          >
            Continue Building Profile
          </Button>
        </div>
      )
    },
    career: {
      title: "Smart Career Matching",
      description: "Discover careers tailored to your profile",
      content: (
        <div className="space-y-4">
          {[
            {
              title: "AI/ML Engineer",
              match: 95,
              salary: "₹15-25L",
              growth: "High",
              location: "Bangalore"
            },
            {
              title: "Data Scientist",
              match: 88,
              salary: "₹12-20L", 
              growth: "High",
              location: "Mumbai"
            },
            {
              title: "Software Engineer",
              match: 82,
              salary: "₹8-15L",
              growth: "Medium",
              location: "Remote"
            }
          ].map((career, index) => (
            <Card key={career.title} className="p-4 glass-card hover:border-primary/30 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold">{career.title}</h5>
                <Badge className="bg-gradient-primary">{career.match}% Match</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-3 w-3 text-secondary" />
                  <span>{career.salary}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-3 w-3 text-secondary" />
                  <span>{career.growth}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3 text-secondary" />
                  <span>{career.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-primary-glow" />
                  <span>4.{8 - index}/5</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )
    },
    mentor: {
      title: "AI Career Mentor",
      description: "Get instant guidance from our AI mentor",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-lg glass-card">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">AI</span>
              </div>
              <span className="font-medium">CareerCraft Mentor</span>
            </div>
            <p className="text-sm mb-3">
              "Based on your profile, I'd recommend focusing on machine learning fundamentals. Would you like me to create a 6-month roadmap?"
            </p>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-gradient-primary">Yes, create roadmap</Button>
              <Button size="sm" variant="outline">Tell me more</Button>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-muted/30">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-6 h-6 bg-secondary rounded-full" />
              <span className="text-sm font-medium">You</span>
            </div>
            <p className="text-sm">
              "What skills should I focus on for AI engineering?"
            </p>
          </div>
          
          <div className="flex items-center space-x-2 p-3 rounded-lg border border-border/50">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <span className="text-sm text-foreground/70">Voice conversation available</span>
          </div>
        </div>
      )
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience <span className="gradient-text">AI-Powered</span> Career Guidance
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Interactive demos showing how CareerCraft AI transforms your career journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Selector */}
          <div className="flex flex-col sm:flex-row justify-center mb-8 space-y-2 sm:space-y-0 sm:space-x-2">
            {Object.entries(demos).map(([key, demo]) => (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "outline"}
                onClick={() => setActiveDemo(key as any)}
                className={activeDemo === key ? "bg-gradient-primary shadow-primary" : ""}
              >
                {demo.title}
              </Button>
            ))}
          </div>

          {/* Demo Content */}
          <Card className="glass-card border-border/50 p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{demos[activeDemo].title}</h3>
              <p className="text-foreground/70">{demos[activeDemo].description}</p>
            </div>
            
            <div className="min-h-[400px]">
              {demos[activeDemo].content}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;