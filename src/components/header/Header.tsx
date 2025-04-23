import Logo from "@/assets/svg/logo/Logo";
import Button from "../UI-primitives/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Nav from "./components/Nav";
import CartIcon from "@/assets/svg/nav/CartIcon";
import UserIcon from "@/assets/svg/nav/UserIcon";
import Badge from "../logo+title/Badge";
/* import useFetch from "@/hooks/useFetch";
import { CartResponse } from "@/types";
import { useCart } from "@/context/CartContext"; */

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  /* const { data: cartData } = useFetch<CartResponse | undefined>({ url: "/cart" }); */
  /* const { getCartCount, fetchCart } = useCart();
  fetchCart(); */

  const handleLogout = () => {
    logout();
  };
  const handleLogin = () => {
    navigate("/auth/login");
  };
  /*  const cartItemCount = cartData?.cart.items.length || 0; */
  return (
    <header className="bg-amber-20 bg-primary-light flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
      <Link to="/" className="flex flex-col items-center">
        <Badge size="extraSmall" />
      </Link>

      <Nav />

      <section className="flex items-center gap-2">
        <nav className="flex gap-4">
          <Link to="cart" className="relative">
            <CartIcon />
            <span className="absolute -top-1/2 -right-1/2 grid h-[16px] w-[16px] place-content-center rounded-full bg-red-500 text-xs text-white">{/* {getCartCount()} */}0</span>
          </Link>
          <Link to="profile">
            <UserIcon />
          </Link>
        </nav>

        {user.isAuthenticated ? (
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button size="sm" variant="outline" className="hidden md:block" onClick={handleLogin}>
            Login
          </Button>
        )}
      </section>
    </header>
  );
};

export default Header;
