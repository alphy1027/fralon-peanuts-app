import { ReactNode } from "react";

const FormContainer = ({ children, title, errorMsg }: { children: ReactNode; title: string; errorMsg?: string }) => {
  return (
    <div className="flex w-[75%] max-w-[350px] flex-col gap-y-6 sm:w-[50%] md:w-[55%] lg:w-[40%]">
      <h2 className="text-body-default text-heading-1 text-center font-bold">{title}</h2>
      {errorMsg && (
        <div className="bg-error-light text-error border-error flex w-full items-center border-l-[5px] px-4 py-3">
          <p className="text-body">{errorMsg}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default FormContainer;
