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
    <motion.li variants={navVariants} className="flex">
      <NavLink to={to} className={({ isActive }) => `text-body-lg flex-1 px-4 py-2 ${isActive ? "text-primary font-semibold" : "text-slate-500"}`}>
        {children}
      </NavLink>
    </motion.li>
  );
};

export default SidebarLink;
