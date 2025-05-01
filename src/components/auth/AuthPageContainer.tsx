import { ReactNode } from "react";
import BodyText from "../UI-primitives/BodyText";

type PropsType = {
  Icon?: ReactNode;
  children?: ReactNode;
  title: string;
  body: string;
};

const AuthPageContainer = ({ Icon, children, title, body }: PropsType) => {
  return (
    <section className="flex flex-col gap-y-8 p-4">
      {Icon && <div className="bg-primary-light grid h-[80px] w-[80px] place-content-center self-center rounded-full md:h-[100px] md:w-[100px]">{Icon}</div>}
      <h2 className="text-body-default text-heading-2 text-center font-bold">{title}</h2>
      <BodyText className="max-w-[382px] text-center">{body}</BodyText>
      {children}
    </section>
  );
};

export default AuthPageContainer;
