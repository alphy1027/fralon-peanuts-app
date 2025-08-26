import cn from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Loading from "../Loading";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

const buttonVariants = cva(
  "flex gap-x-3 items-center justify-center rounded-full font-semibold cursor-pointer tracking-wider disabled:contrast-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all duration-200 ease-in",
  {
    variants: {
      variant: {
        primary: "bg-primary text-brand-white hover:brightness-110 active:contrast-125",
        secondary: "bg-secondary text-primary hover:brightness-110 active:contrast-125",
        outline: "bg-transparent text-primary border border-primary",
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

const Button = ({ children, className, variant, loading, size, width, leftIcon, rightIcon, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, width }), className)} {...props}>
      {loading && <Loading className={clsx("fill-primary h-6 w-6", { "fill-brand-white": variant === "primary" })} />}
      {leftIcon && <span className="">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="">{rightIcon}</span>}
    </button>
  );
};

export default Button;
