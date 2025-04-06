import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  index: number;
  title: string;
};

const ReasonCard = ({ children, index, title }: CardProps) => {
  return (
    <article className="flex max-w-[478px] gap-x-4 p-2">
      <div className="text-primary text-4xl font-extrabold opacity-60">0{index}</div>
      <section className="">
        <h4 className="text-heading-3 font-bold">{title}</h4>
        <p className="text-caption text-gray-700">{children}</p>
      </section>
    </article>
  );
};

export default ReasonCard;
