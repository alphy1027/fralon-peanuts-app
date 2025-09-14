import { Link } from "react-router-dom";
import BrandLogo from "../logo+title/BrandLogo";
import { navLinks } from "@/app-data/navLinks";
import GroupSocialLink from "../socials/GroupSocialLink";

const Footer = () => {
  return (
    <footer className="bg-secondary flex w-full flex-col items-center justify-center gap-6 px-4 pt-6 pb-3">
      <section className="mb-4 flex flex-col items-center gap-2">
        <BrandLogo />
      </section>

      <nav className="text-caption lg:text-body flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-12 md:gap-16">
        {navLinks.map((link) => (
          <Link key={link.link} to={link.to} className="text-primary sm:text-body-lg px-2 py-1 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:contrast-150">
            {link.link}
          </Link>
        ))}
      </nav>

      <GroupSocialLink />

      <p className="text-extra-sm sm:text-caption font-semibold text-slate-500">&copy;Copyright2025. All rights reserved</p>
    </footer>
  );
};

export default Footer;
