import BodyText from "@/components/UI-primitives/BodyText";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  image: string;
  title: string;
};

const CategoryCard = ({ children, image, title }: CardProps) => {
  return (
    <article className="flex w-[350px] flex-col items-center gap-y-2 rounded-md p-1 lg:p-2">
      <img src={image} alt="" className="bg-secondary h-20 w-20 rounded-md" />
      <h4 className="font-secondary text-body-lg text-primary font-medium tracking-wider uppercase">{title}</h4>
      <BodyText className="text-caption text-center">{children}</BodyText>
    </article>
  );
};

export default CategoryCard;
