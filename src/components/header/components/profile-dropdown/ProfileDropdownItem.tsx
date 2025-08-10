import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
type ItemProps = {
  Icon?: ReactNode;
  children: ReactNode;
  to: string;
  className?: string;
  closeDropdown: () => void;
};

const ProfileDropdownItem = ({ Icon, children, closeDropdown, to, className }: ItemProps) => {
  return (
    <NavLink
      to={to}
      onClick={closeDropdown}
      className={({ isActive }) =>
        twMerge(
          "hover:bg-primary-light hover:text-primary flex items-center gap-x-4 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out",
          className,
          isActive ? "text-primary" : "text-body-default",
        )
      }
    >
      {Icon && <div className="">{Icon}</div>}
      <span className="">{children}</span>
    </NavLink>
  );
};

export default ProfileDropdownItem;
