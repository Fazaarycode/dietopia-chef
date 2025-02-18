
import { useLocation, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileDown, ChevronRight, Home } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { toast } from "@/components/ui/use-toast";
import jsPDF from "jspdf";

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
    const pdf = new jsPDF();
    let yOffset = 20;
    
    // Add title
    pdf.setFontSize(20);
    pdf.text(`Your ${diet} Meal Plan`, 20, yOffset);
    yOffset += 20;

    // Add content
    pdf.setFontSize(12);
    Object.entries(mockMealPlan).forEach(([mealTime, meals]) => {
      // Add meal time header
      pdf.setFont(undefined, 'bold');
      pdf.text(mealTime.charAt(0).toUpperCase() + mealTime.slice(1), 20, yOffset);
      yOffset += 10;

      // Add meals
      pdf.setFont(undefined, 'normal');
      meals.forEach(meal => {
        pdf.text(`• ${meal}`, 30, yOffset);
        yOffset += 10;
      });

      yOffset += 5; // Add space between sections
    });

    // Download PDF
    pdf.save("meal-plan.pdf");
    
    toast({
      title: "PDF Downloaded",
      description: "Your meal plan has been downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-sage-50">
      {/* Navigation */}
      <nav className="bg-white border-b px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-sage-600 flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/meal-plan" className="text-sage-600 font-medium">
              Meal Plan
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
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
                className="bg-sage-400 hover:bg-sage-500 transition-colors"
              >
                <FileDown className="mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
