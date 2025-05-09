import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="recipes">Recipes</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
