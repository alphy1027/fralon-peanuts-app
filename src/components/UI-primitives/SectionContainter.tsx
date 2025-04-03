import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const SectionContainter = ({ children, className }: SectionProps) => {
  return <section className={twMerge("custom-margin-auto w-[95%] max-w-[1200px] px-4 py-4 sm:px-6 sm:py-6", className)}>{children}</section>;
};

export default SectionContainter;
