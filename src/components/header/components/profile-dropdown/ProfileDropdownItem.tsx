import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
type ItemProps = {
  Icon?: ReactNode;
  children: ReactNode;
  to: string;
  className?: string;
};

const ProfileDropdownItem = ({ Icon, children, to, className }: ItemProps) => {
  return (
    <Link
      to={to}
      className={twMerge(
        "hover:bg-primary-light hover:text-primary text-body-default flex items-center gap-x-4 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out",
        className,
      )}
    >
      {Icon && <div className="">{Icon}</div>}
      <span className="">{children}</span>
    </Link>
  );
};

export default ProfileDropdownItem;
