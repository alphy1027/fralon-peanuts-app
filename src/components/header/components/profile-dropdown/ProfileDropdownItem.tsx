import { ReactNode } from "react";
import { Link } from "react-router-dom";
type ItemProps = {
  Icon?: ReactNode;
  children: ReactNode;
  to: string;
};

const ProfileDropdownItem = ({ Icon, children, to }: ItemProps) => {
  return (
    <Link to={to} className="hover:bg-primary-light hover:text-primary text-body-default rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out">
      {Icon && <div className="">{Icon}</div>}
      <span className="">{children}</span>
    </Link>
  );
};

export default ProfileDropdownItem;
