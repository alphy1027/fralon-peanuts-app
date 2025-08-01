import cn from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

const inputVariants = cva("rounded-lg block w-full py-2 px-4 border text-body focus:border-2 focus:outline-none font-medium", {
  variants: {
    variant: {
      primary: "text-body-default border-gray-300 focus:outline-none focus:border-primary",
      danger: "text-error border-error placeholder:text-error bg-error-light",
      success: "text-success border-success focus:border-success placeholder:text-success bg-success-light",
      disabled: "bg-gray-200 text-gray-700 border-gray-300",
    },
    inputSize: {
      sm: "px-2 py-1 text-body",
      md: "px-4 py-2 text-body",
      lg: "px-6 py-3 text-body-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    inputSize: "md",
  },
});

const Input = ({ className, variant, inputSize, error, label, rightIcon, leftIcon, ...props }: inputProps) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={props.id} className="text-body-lg font-semibold text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && <span className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500">{leftIcon}</span>}
        <input className={cn(inputVariants({ variant, inputSize }), leftIcon && "pl-9", rightIcon && "pr-9", className)} {...props} />
        {rightIcon && <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500">{rightIcon}</span>}
      </div>
      {error && <span className="text-error text-sm">{error}</span>}
    </div>
  );
};

export default Input;
