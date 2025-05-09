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
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const handleLogin = () => {
    navigate("/auth/login");
  };

  return (
    <header className="bg-amber-20 bg-primary-light flex items-center justify-between px-4 py-4 sm:px-8">
      <Button onClick={openSidebar} variant="transparent" rightIcon={<MenuIcon />} className="-translate-x-1/4 transform lg:hidden" />

      <Link to="/" className="flex flex-col items-center">
        <Badge size="small" />
      </Link>

      <Nav />

      <section className="flex items-center gap-4">
        <nav className="flex translate-x-1/4 transform items-center gap-4 sm:transform-none">
          <Link to="cart" className="relative">
            <CartIcon />
            <span className="absolute -top-1/2 -right-1/2 grid h-[16px] w-[16px] place-content-center rounded-full bg-red-500 text-xs text-white">{/* {getCartCount()} */}0</span>
          </Link>
          <ProfileDropdown />
        </nav>

        {user.isAuthenticated ? (
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button size="sm" variant="outline" className="hidden lg:block" onClick={handleLogin}>
            Login
          </Button>
        )}
      </section>
    </header>
  );
};

export default Header;
