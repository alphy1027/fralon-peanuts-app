const FormErrorContainer = ({ errorMsg }: { errorMsg?: string | null }) => {
  return (
    <>
      {errorMsg && (
        <div className="bg-error-light text-error border-error flex w-full items-center border-l-[5px] px-4 py-3">
          <p className="text-body">{errorMsg}</p>
        </div>
      )}
    </>
  );
};

export default FormErrorContainer;
