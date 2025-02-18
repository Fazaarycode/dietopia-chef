
export type SubscriptionTier = "free" | "basic" | "premium";

export interface SubscriptionPlan {
  id: SubscriptionTier;
  name: string;
  description: string;
  price: number;
  features: string[];
  plansPerMonth: number;
}

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for trying out our service",
    price: 0,
    plansPerMonth: 2,
    features: [
      "2 meal plans per month",
      "Basic recipe selection",
      "Shopping list generation",
      "Email support",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    description: "Great for regular meal planning",
    price: 9.99,
    plansPerMonth: 10,
    features: [
      "10 meal plans per month",
      "Extended recipe selection",
      "Shopping list generation",
      "Priority email support",
      "Nutritional information",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "Ultimate meal planning experience",
    price: 19.99,
    plansPerMonth: -1, // Unlimited
    features: [
      "Unlimited meal plans",
      "Premium recipe selection",
      "Advanced nutritional analysis",
      "Priority support",
      "Custom recipe suggestions",
      "Meal prep guides",
    ],
  },
];
