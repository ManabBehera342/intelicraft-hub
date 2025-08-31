import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Profile Builder", href: "/profile" },
        { name: "Career Explorer", href: "/careers" },
        { name: "Learning Paths", href: "/learning" },
        { name: "AI Mentor", href: "/mentor" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Help Center", href: "/help" },
        { name: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/jobs" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Security", href: "/security" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ];

  return (
    <footer className="relative border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">CareerCraft AI</span>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Empowering students across India with AI-driven career guidance, 
              personalized learning paths, and industry insights for a successful future.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-primary/30">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary/30">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary/30">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-primary/30">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-primary-glow">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">
              Get the latest career insights, industry trends, and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border/50 focus:border-primary/50 focus:outline-none"
              />
              <Button className="bg-gradient-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
          <div className="mb-4 md:mb-0">
            © 2024 CareerCraft AI. All rights reserved. Made with ❤️ for students.
          </div>
          <div className="flex space-x-6">
            <span>Privacy-First</span>
            <span>GDPR Compliant</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;