import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isActive: boolean;
}

const RecipeTabButton = ({ children, isActive, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge("cursor-pointer px-2 py-1.5 text-gray-600 transition-all duration-200 ease-in-out sm:px-4", isActive && "border-primary text-primary border-b-4 font-semibold")}
    >
      {children}
    </button>
  );
};

export default RecipeTabButton;
