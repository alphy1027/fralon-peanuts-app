import { ReactNode } from "react";

type SummaryProps = {
  title: string;
  children: ReactNode;
};

const OrderSuccessSummaryDetails = ({ title, children }: SummaryProps) => {
  return (
    <div className="text-primary-light text-body flex flex-col gap-y-1">
      <p className="font-light">{title}</p>
      <p className="font-semibold">{children}</p>
    </div>
  );
};

export default OrderSuccessSummaryDetails;
