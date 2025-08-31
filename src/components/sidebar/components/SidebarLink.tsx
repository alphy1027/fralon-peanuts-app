import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type LinkProps = {
  to: string;
  children: ReactNode;
};

const navVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const SidebarLink = ({ to, children }: LinkProps) => {
  return (
    <motion.li variants={{ navVariants }} className="flex">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-heading-4 font-secondary flex-1 px-4 py-2 text-end font-medium tracking-wide uppercase ${isActive ? "text-primary after:bg-primary -translate-x-[10%] scale-110 transform font-bold content-none after:absolute after:top-1/2 after:-right-1.5 after:h-1.5 after:w-1.5 after:-translate-y-1/2 after:rounded-full" : "text-slate-500"}`
        }
      >
        {children}
      </NavLink>
    </motion.li>
  );
};

export default SidebarLink;
