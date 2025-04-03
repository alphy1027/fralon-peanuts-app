import Logo from "@/assets/svg/logo/Logo";
import Button from "../UI-primitives/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Nav from "./components/Nav";
import CartIcon from "@/assets/svg/nav/CartIcon";
import UserIcon from "@/assets/svg/nav/UserIcon";

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  const handleLogin = () => {
    navigate("/auth/login");
  };
  return (
    <header className="bg-amber-20 bg-primary-light flex items-center justify-between px-8 py-6">
      <Link to="/" className="flex flex-col items-center">
        <Logo width={60} height={33} />
        <h4 className="text-heading-5 font-secondary">fralon peanuts</h4>
      </Link>

      <Nav />

      <section className="flex items-center gap-2">
        <nav className="flex gap-4">
          <Link to="cart">
            <CartIcon />
          </Link>
          <Link to="profile">
            <UserIcon />
          </Link>
        </nav>
        {/* <Button variant="outline" size="sm">
          Order Now!
        </Button> */}
        {user.isAuthenticated ? (
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button size="sm" variant="outline" onClick={handleLogin}>
            Login
          </Button>
        )}
      </section>
    </header>
  );
};

export default Header;
