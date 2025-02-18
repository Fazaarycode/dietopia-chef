
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { subscriptionPlans } from "@/lib/subscription-types";
import { toast } from "@/components/ui/use-toast";

export const Pricing = () => {
  const handleSubscribe = (planId: string) => {
    // TODO: Implement Stripe integration
    toast({
      title: "Coming Soon",
      description: "Subscription functionality will be available soon!",
    });
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that's right for you
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {subscriptionPlans.map((plan) => (
            <Card
              key={plan.id}
              className="flex flex-col justify-between border-2 hover:border-sage-300 transition-all duration-200"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price > 0 && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-sage-500" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-sage-400 hover:bg-sage-500"
                  onClick={() => handleSubscribe(plan.id)}
                >
                  {plan.price === 0 ? "Get Started" : "Subscribe"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
