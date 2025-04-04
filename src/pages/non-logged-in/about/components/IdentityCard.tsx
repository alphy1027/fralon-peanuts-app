import SectionTitle from "@/components/UI-primitives/SectionTitle";
import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IdentityCardProps = {
  children: ReactNode;
  title?: string;
  index: 1 | 2 | 3 | 4;
  className: string;
  titleClassName?: string;
};
const IdentityCard = ({ children, title, className, titleClassName, index }: IdentityCardProps) => {
  return (
    <article className={twMerge(clsx("flex min-h-[180px] max-w-[488px] flex-col justify-center gap-y-2 rounded-2xl p-3 sm:p-4", { "max-w-[590px]": index === 2 || index === 1 }), className)}>
      {index === 1 && (
        <SectionTitle className="text-start">
          Unveiling Our Identity,
          <br /> Vision and Values
        </SectionTitle>
      )}
      <h4 className={twMerge(clsx("text-heading-3 text-body-default font-extrabold", { "text-brand-white": index === 4 }), titleClassName)}>{title}</h4>
      <p className={twMerge(clsx("text-caption text-body-default sm:text-body", { "text-primary-light": index === 4 }))}>{children}</p>
    </article>
  );
};

export default IdentityCard;
