import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <Link to="/" className="rounded-md px-2">
      <h1 className="text-primary font-secondary text-[22px] font-semibold tracking-wide uppercase">
        Fralon
        <span className="text-secondary">Peanuts</span>
      </h1>
    </Link>
  );
};

export default BrandLogo;
