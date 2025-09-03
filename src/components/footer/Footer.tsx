import Facebook from "@/assets/svg/socials/facebook";
import Instagram from "@/assets/svg/socials/Instagram";
import Tiktok from "@/assets/svg/socials/Tiktok";
import Twitter from "@/assets/svg/socials/Twitter";
import Whatsapp from "@/assets/svg/socials/Whatsapp";
import { Link } from "react-router-dom";
import BrandLogo from "../logo+title/BrandLogo";
import { navLinks } from "@/app-data/navLinks";

const Footer = () => {
  return (
    <footer className="bg-primary-light flex w-full flex-col items-center justify-center gap-6 px-4 pt-6 pb-3">
      <section className="mb-4 flex flex-col items-center gap-2">
        <BrandLogo />
      </section>

      <nav className="text-caption lg:text-body flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-12 md:gap-16">
        {navLinks.map((link) => (
          <Link key={link.link} to={link.to} className="footer-link">
            {link.link}
          </Link>
        ))}
      </nav>

      <section className="flex gap-8 sm:gap-16">
        <Whatsapp />
        <Instagram />
        <Twitter />
        <Tiktok />
        <Facebook />
      </section>

      <p className="text-extra-sm sm:text-caption font-semibold text-slate-500">&copy;Copyright2025. All rights reserved</p>
    </footer>
  );
};

export default Footer;
