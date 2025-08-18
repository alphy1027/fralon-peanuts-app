import cn from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode, TextareaHTMLAttributes } from "react";

interface inputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

const textAreaVariants = cva("rounded-lg block w-full py-2 px-4 border text-body focus:border-2 focus:outline-none font-medium", {
  variants: {
    variant: {
      primary: "text-body-default border-gray-300 focus:outline-none focus:border-primary",
      danger: "text-error border-error placeholder:text-error bg-error-light",
      success: "text-success border-success focus:border-success placeholder:text-success bg-success-light",
      disabled: "bg-gray-200 text-gray-700 border-gray-300",
    },
    areaSize: {
      sm: "px-2 py-1 text-body",
      md: "px-4 py-2 text-body",
      lg: "px-6 py-3 text-body-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    areaSize: "md",
  },
});

const TextArea = ({ className, variant, areaSize, error, label, rightIcon, leftIcon, ...props }: inputProps) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={props.id} className="text-body-lg text-body-default font-semibold">
          {label}
        </label>
      )}
      <textarea className={cn(textAreaVariants({ variant, areaSize }), leftIcon && "pl-9", rightIcon && "pr-9", className)} {...props}></textarea>
      {error && <span className="text-error text-sm">{error}</span>}
    </div>
  );
};

export default TextArea;
