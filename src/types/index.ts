// Define any custom types for your application here

// Example form input type that could be used across components
export type FormInput = {
  name: string;
  value: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  label: string;
};

// Example form data type for consistency across components
export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

// Define the structure for law case awards
export interface LawCaseAward {
  amount: string;
  description: string;
}

// Define achievement card props for reusability
export interface AchievementCardProps {
  amount: string;
  description: string;
}
