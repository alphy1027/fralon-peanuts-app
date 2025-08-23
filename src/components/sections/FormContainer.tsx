import { ReactNode } from "react";

const FormContainer = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-[75%] max-w-[350px] flex-col gap-y-6 sm:w-[50%] md:w-[55%] lg:w-[40%]">{children}</div>;
};

export default FormContainer;
