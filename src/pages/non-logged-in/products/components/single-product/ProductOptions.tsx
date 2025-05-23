import { ReactNode } from "react";

type OptionsTypes = {
  label: string;
  children: ReactNode;
};

const ProductOptions = ({ label, children }: OptionsTypes) => {
  return (
    <h6 className="flex items-center gap-x-6">
      <span className="text-body-default text-body font-semibold">{label} : </span>
      <div className="">{children}</div>
    </h6>
  );
};

export default ProductOptions;
