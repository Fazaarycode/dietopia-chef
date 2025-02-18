
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const dietaryPreferences = [
  "Any",
  "Vegetarian",
  "Vegan",
  "Keto",
  "Paleo",
  "Mediterranean",
];

export const PreferencesForm = () => {
  const [diet, setDiet] = useState("Any");

  return (
    <div id="preferences" className="py-24 bg-sage-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Create Your Personalized Meal Plan
          </h2>
          <p className="text-gray-600">
            Tell us about your dietary preferences and we'll create a custom meal plan just for you.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Preference
              </label>
              <Select value={diet} onValueChange={setDiet}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your diet" />
                </SelectTrigger>
                <SelectContent>
                  {dietaryPreferences.map((pref) => (
                    <SelectItem key={pref} value={pref}>
                      {pref}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full bg-sage-400 hover:bg-sage-500 text-white py-6 text-lg rounded-xl transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Handle form submission
              }}
            >
              Generate Meal Plan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
