import CloseIcon from "@/assets/svg/nav/CloseIcon";

const FormErrorContainer = ({ errorMsg }: { errorMsg?: string | null }) => {
  return (
    <>
      {errorMsg && (
        <div className="bg-error-light text-error border-error flex w-full items-center gap-x-2 border-l-[5px] px-4 py-3">
          <div className="bg-error flex h-5 w-5 items-center justify-center rounded-full">
            <CloseIcon size={18} className="fill-brand-white" />
          </div>
          <p className="text-body">{errorMsg}</p>
        </div>
      )}
    </>
  );
};

export default FormErrorContainer;
