import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: TitleProps) => {
  return <h2 className={twMerge("font-secondary text-primary text-center text-2xl font-semibold tracking-wide uppercase", className)}>{children}</h2>;
};

export default SectionTitle;
