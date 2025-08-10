import BodyText from "@/components/UI-primitives/BodyText";
import { ReactNode } from "react";

type PropsType = {
  headIcon?: ReactNode;
  children?: ReactNode;
  title: string;
  error?: boolean;
};

const FeedbackHead = ({ headIcon, children, title, error }: PropsType) => {
  return (
    <section className="flex flex-col items-center gap-y-2 p-4">
      {headIcon && <div className={`${error ? "bg-error-light" : "bg-success-light"} grid h-20 w-20 place-content-center self-center rounded-full`}>{headIcon}</div>}
      <h2 className="text-body-default text-heading-2 text-center font-bold">{title}</h2>
      <BodyText className="text-center">{children}</BodyText>
    </section>
  );
};

export default FeedbackHead;
