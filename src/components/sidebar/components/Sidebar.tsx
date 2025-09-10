import Logo from "@/assets/svg/logo/Logo";
import SidebarLink from "./SidebarLink";
import Button from "@/components/UI-primitives/Button";
import CloseSidebarIcon from "@/assets/svg/sidebar/CloseSidebarIcon";
import { motion } from "framer-motion";

type SidebarProps = {
  closeSidebar: () => void;
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
      type: "spring",
      damping: 18,
      stiffness: 80,
    },
  },
};

const asideVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    x: -1000,
    transition: {
      duration: 0.6,
    },
  },
};

const ulVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
      staggerChildren: 0.1,
    },
  },
};

const navLinks = [
  { to: "/", link: "Home" },
  { to: "products", link: "Products" },
  { to: "recipes", link: "Recipes" },
  { to: "about", link: "About Us" },
  { to: "contact-us", link: "Contact Us" },
];

const Sidebar = ({ closeSidebar }: SidebarProps) => {
  return (
    <motion.aside key="aside" variants={{ asideVariants }} initial="hidden" animate="visible" exit="exit" className="bg-secondary relative z-50 flex h-full w-3/4 flex-col justify-between p-4 pb-2">
      <motion.div exit={{ opacity: 0 }} onClick={closeSidebar} className="absolute top-0 right-0 bottom-0 w-full translate-x-full transform bg-black/40" />

      <motion.nav variants={{ navVariants }} className="flex items-center justify-between">
        <Logo width={47} height={28} />
        <Button onClick={closeSidebar} variant="transparent" rightIcon={<CloseSidebarIcon />} className="translate-x-1/4 transform" />
      </motion.nav>

      <motion.nav variants={{ navVariants }} onClick={closeSidebar} className="">
        <motion.ul variants={{ ulVariants }} className="divide-primary/50 flex flex-col gap-2 divide-y">
          {navLinks.map((item) => (
            <SidebarLink key={item.link} to={item.to}>
              {item.link}
            </SidebarLink>
          ))}
        </motion.ul>
      </motion.nav>
      <p className=""></p>
    </motion.aside>
  );
};

export default Sidebar;
