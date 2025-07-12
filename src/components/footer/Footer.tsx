import Facebook from "@/assets/svg/socials/facebook";
import Instagram from "@/assets/svg/socials/Instagram";
import Logo from "@/assets/svg/logo/Logo";
import Tiktok from "@/assets/svg/socials/Tiktok";
import Twitter from "@/assets/svg/socials/Twitter";
import Whatsapp from "@/assets/svg/socials/Whatsapp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-light flex w-full flex-col items-center justify-center gap-8 px-4 py-6">
      <section className="mb-4 flex flex-col items-center gap-2">
        <Logo width={44} height={27} />
        <h3 className="text-heading-5 sm:text-heading-4 font-secondary text-tertiary">Fralon Peanuts</h3>
      </section>

      <nav className="text-caption lg:text-body flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-12 md:gap-16">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="products" className="footer-link">
          Products
        </Link>
        <Link to="recipes" className="footer-link">
          Recipes
        </Link>
        <Link to="about" className="footer-link">
          About Us
        </Link>
        <Link to="contact-us" className="footer-link">
          Contact Us
        </Link>
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
