import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const ErrorText = ({ children, className }: TextProps) => {
  return <p className={twMerge("text-body text-error p-1 font-medium", className)}>{children}</p>;
};

export default ErrorText;
