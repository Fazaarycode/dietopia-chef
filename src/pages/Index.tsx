
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PreferencesForm } from "@/components/PreferencesForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <PreferencesForm />
    </div>
  );
};

export default Index;
