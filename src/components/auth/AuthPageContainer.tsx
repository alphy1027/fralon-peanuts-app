import { ReactNode } from "react";

type PropsType = {
  Icon?: ReactNode;
  children?: ReactNode;
  title: string;
  body: ReactNode;
  bg?: string;
};

const AuthPageContainer = ({ Icon, children, title, body, bg = "success-light" }: PropsType) => {
  return (
    <section className="flex flex-col items-center gap-y-6 p-4">
      {Icon && <div className={`bg-${bg} grid h-[80px] w-[80px] place-content-center self-center rounded-full md:h-[100px] md:w-[100px]`}>{Icon}</div>}
      <h2 className="text-body-default text-heading-2 text-center font-bold">{title}</h2>
      <div className="text-body text-body-default max-w-[382px] text-center">{body}</div>
      {children}
    </section>
  );
};

export default AuthPageContainer;
