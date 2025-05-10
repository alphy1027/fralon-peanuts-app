import Button from "../UI-primitives/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Nav from "./components/Nav";
import CartIcon from "@/assets/svg/nav/CartIcon";
import Badge from "../logo+title/Badge";
import ProfileDropdown from "./components/profile-dropdown/ProfileDropdown";
import MenuIcon from "@/assets/svg/sidebar/MenuIcon";

type HeaderProps = {
  openSidebar: () => void;
};

const Header = ({ openSidebar }: HeaderProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogin = () => {
    navigate("/auth/login");
  };

  return (
    <header className="relative flex items-center justify-between px-3 py-3.5 sm:px-8">
      <Button onClick={openSidebar} variant="transparent" rightIcon={<MenuIcon />} className="-translate-x-1/4 transform lg:hidden" />

      <Link to="/" className="absolute top-1/4 left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
        <Badge size="small" />
      </Link>

      <Nav />

      <section className="flex items-center gap-4">
        <nav className="flex transform items-center gap-2 sm:transform-none">
          <Link to="cart" className="relative p-1">
            <CartIcon />
            <span className="absolute -top-1/2 -right-1/4 grid h-[16px] w-[16px] place-content-center rounded-full bg-red-500 text-xs text-white">{/* {getCartCount()} */}0</span>
          </Link>
          <ProfileDropdown />
        </nav>

        {!user.isAuthenticated && (
          <Button size="sm" variant="outline" className="hidden lg:block" onClick={handleLogin}>
            Login
          </Button>
        )}
      </section>
    </header>
  );
};

export default Header;
