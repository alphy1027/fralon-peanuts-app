import { ReactNode } from "react";
import FormErrorContainer from "./components/FormErrorContainer";

const FormContainer = ({ children, title, errorMsg }: { children: ReactNode; title?: string; errorMsg?: string }) => {
  return (
    <div className="flex w-[75%] max-w-[350px] flex-col gap-y-6 sm:w-[50%] md:w-[55%] lg:w-[40%]">
      <h2 className="text-body-default text-heading-1 text-center font-bold">{title}</h2>
      {errorMsg && <FormErrorContainer errorMsg={errorMsg} />}
      {children}
    </div>
  );
};

export default FormContainer;
