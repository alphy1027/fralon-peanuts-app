import cn from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const buttonVariants = cva(
  "flex gap-4 items-center justify-center rounded-md font-semibold cursor-pointer tracking-wider disabled:bg-slate-500 disabled:text-body-default disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all duration-200 ease-in",
  {
    variants: {
      variant: {
        primary: "bg-primary text-brand-white hover:bg-primary-hover active:bg-primary-active",
        secondary: "bg-secondary text-brand-black hover:bg-secondary-hover active:bg-secondary-active",
        outline: "bg-transparent text-primary border-2 border-primary",
        "secondary-outline": "bg-transparent text-secondary border-2 border-secondary",
        transparent: "bg-transparent text-primary",
        "secondary-transparent": "bg-transparent text-secondary",
        danger: "bg-error text-error-light hover:contrast-125",
        "secondary-danger": "bg-error-light text-error",
      },
      size: {
        sm: "px-4 py-2 font-medium text-sm",
        md: "px-6 py-3 font-semibold",
        lg: "px-8 py-4 font-bold text-lg",
      },
      width: {
        full: "w-full",
        normal: "w-fit",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "sm",
        className: "text-white",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "sm",
      width: "normal",
    },
  },
);

const Button = ({ children, className, variant, size, width, leftIcon, rightIcon, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, width }), className)} {...props}>
      {leftIcon && <span className="">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="">{rightIcon}</span>}
    </button>
  );
};

export default Button;
