import BodyText from "@/components/UI-primitives/BodyText";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title: string;
};

const CategoryCard = ({ children, title }: CardProps) => {
  return (
    <article className="flex w-[300px] flex-col items-center gap-y-2 rounded-md p-1 lg:p-2">
      <img src="none" alt="" className="bg-secondary h-16 w-16 rounded-sm" />
      <h4 className="text-body-lg text-primary font-semibold">{title}</h4>
      <BodyText className="text-caption text-center font-light text-slate-600">{children}</BodyText>
    </article>
  );
};

export default CategoryCard;
