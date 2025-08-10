import { ReactNode } from "react";

const OrderStatusIndicator = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${
        children === "completed" ? "text-primary bg-success-light" : children === "pending" ? "text-pending bg-pending-light" : children === "cancelled" ? "text-error bg-error-light" : ""
      } text-caption sm:text-body rounded-sm px-2 py-[2px] font-semibold`}
    >
      {children}
    </div>
  );
};

export default OrderStatusIndicator;
