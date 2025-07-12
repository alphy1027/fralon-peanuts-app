import { navLinks } from "@/app-data/navLinks";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="hidden justify-center lg:flex">
      <ul className="text-heading-6 flex gap-x-3 py-3 font-medium uppercase">
        {navLinks.map((navLink) => (
          <li key={navLink.link} className="inline-block p-1">
            <NavLink to={navLink.to} className="bg-red-40 px-4 py-2 transition-all duration-200 ease-in-out hover:scale-105">
              {navLink.link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
