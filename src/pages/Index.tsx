
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PreferencesForm } from "@/components/PreferencesForm";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Pricing />
      <PreferencesForm />
    </div>
  );
};

export default Index;
