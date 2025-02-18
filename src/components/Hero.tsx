
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gradient-to-b from-sage-50 to-white">
      <div className="animate-fade-up space-y-6 text-center max-w-3xl">
        <span className="px-3 py-1 text-sm font-medium bg-sage-100 text-sage-700 rounded-full">
          AI-Powered Meal Planning
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Your Personal Chef & Nutritionist
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Create personalized meal plans that match your dietary preferences and nutritional goals using the power of AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            className="bg-sage-400 hover:bg-sage-500 text-white px-8 py-6 text-lg rounded-full transition-all duration-200"
            onClick={() => window.location.href = "#preferences"}
          >
            Create Your Meal Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
