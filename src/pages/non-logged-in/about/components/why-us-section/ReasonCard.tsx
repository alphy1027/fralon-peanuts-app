import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  index: number;
  title: string;
};

const ReasonCard = ({ children, index, title }: CardProps) => {
  return (
    <article className="bg-primary-light flex max-w-[478px] flex-col gap-x-4 rounded-sm p-4">
      <div className="text-primary text-4xl font-black opacity-60">0{index}</div>
      <section className="">
        <h4 className="text-heading-4 text-body-default font-bold">{title}</h4>
        <p className="text-caption text-gray-700">{children}</p>
      </section>
    </article>
  );
};

export default ReasonCard;
