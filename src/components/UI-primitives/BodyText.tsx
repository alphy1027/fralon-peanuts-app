import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const BodyText = ({ children, className }: TextProps) => {
  return <p className={twMerge("text-body text-body-default", className)}>{children}</p>;
};

export default BodyText;
