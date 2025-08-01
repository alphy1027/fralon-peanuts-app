import Button from "../UI-primitives/Button";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import CartIcon from "@/assets/svg/nav/CartIcon";
import Badge from "../logo+title/Badge";
import ProfileDropdown from "./components/profile-dropdown/ProfileDropdown";
import MenuIcon from "@/assets/svg/sidebar/MenuIcon";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useLogoutMutation } from "@/hooks/query-hooks/auth/useLogoutMutation";
import { useCartQuery } from "@/hooks/query-hooks/cart/useCartQuery";

type HeaderProps = {
  openSidebar: () => void;
};

const Header = ({ openSidebar }: HeaderProps) => {
  const [isHeaderHidden, setIsHeaderHidden] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { scrollY } = useScroll();
  const loginMutate = useLogoutMutation();
  const { data: cart, isPending } = useCartQuery();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  const handleLogin = () => {
    navigate("/auth/login");
  };

  const handleLogout = () => {
    loginMutate.mutate();
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.header variants={headerVariants} animate={isHeaderHidden ? "hidden" : "visible"} className="bg-brand-white sticky top-0 right-0 left-0 z-30 flex items-center justify-between px-3 sm:px-8">
      <div className="flex w-full flex-col gap-y-2 py-2">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <Button onClick={openSidebar} variant="transparent" rightIcon={<MenuIcon />} className="-translate-x-1/4 transform lg:hidden" />

          <Link to="/" className="custom-margin-auto">
            <Badge size="small" />
          </Link>

          <section className="flex items-center gap-4">
            <nav className="flex transform items-center gap-2 sm:transform-none">
              <Link to="cart" className="relative p-1">
                <CartIcon />
                {cart && <span className="absolute -top-1/2 -right-1/4 grid h-[16px] w-[16px] place-content-center rounded-full bg-red-500 text-xs text-white">{cart?.items.length}</span>}
              </Link>
              <ProfileDropdown />
            </nav>

            {!user.isAuthenticated && (
              <Button size="sm" variant="outline" className="hidden lg:block" onClick={handleLogin}>
                Login
              </Button>
            )}
          </section>
        </div>

        <div className="">
          <Nav />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
