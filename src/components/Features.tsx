
import { UtensilsCrossed, Clock, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Planning",
    description: "Get personalized meal plans created by advanced AI technology",
  },
  {
    icon: Heart,
    title: "Dietary Preferences",
    description: "Customized to your specific dietary needs and restrictions",
  },
  {
    icon: UtensilsCrossed,
    title: "Recipe Database",
    description: "Access to thousands of delicious, chef-curated recipes",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Automated shopping lists and meal prep instructions",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Our Meal Planner?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md"
            >
              <div className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center p-2 bg-sage-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-sage-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
