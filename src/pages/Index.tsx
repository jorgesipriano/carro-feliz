import { Header, Hero } from "@/components/Hero";
import { Vehicles } from "@/components/Vehicles";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Vehicles />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
