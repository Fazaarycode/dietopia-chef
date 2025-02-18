
import { useLocation, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { toast } from "@/components/ui/use-toast";

const mockMealPlan = {
  breakfast: ["Oatmeal with berries", "Greek yogurt with honey", "Green smoothie"],
  lunch: ["Quinoa bowl with vegetables", "Grilled chicken salad", "Lentil soup"],
  dinner: ["Baked salmon", "Roasted vegetables", "Brown rice"],
  snacks: ["Mixed nuts", "Apple slices", "Hummus with carrots"],
};

const MealPlan = () => {
  const location = useLocation();
  const { user } = useAuth();
  const diet = location.state?.diet || "Any";

  // Redirect if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const handleDownloadPDF = () => {
    // Mock PDF generation
    toast({
      title: "PDF Generation",
      description: "Your meal plan PDF is being generated. This is a mock feature.",
    });
  };

  return (
    <div className="min-h-screen bg-sage-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your {diet} Meal Plan
            </h1>
            <p className="text-gray-600">
              Here's your personalized meal plan based on your preferences
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(mockMealPlan).map(([mealTime, meals]) => (
              <div key={mealTime} className="space-y-3">
                <h2 className="text-xl font-semibold capitalize text-gray-800">
                  {mealTime}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {meals.map((meal, index) => (
                    <li key={index}>{meal}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t">
            <Button
              onClick={handleDownloadPDF}
              className="bg-sage-400 hover:bg-sage-500"
            >
              <FileDown className="mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
