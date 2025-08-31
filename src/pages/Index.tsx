import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import InteractiveDemo from "@/components/InteractiveDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureCards />
      <InteractiveDemo />
      <Footer />
    </div>
  );
};

export default Index;
