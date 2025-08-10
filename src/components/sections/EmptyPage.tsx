import { ReactNode } from "react";
import { Link } from "react-router-dom";

type PageProps = {
  children: ReactNode;
  icon?: ReactNode;
  link?: ReactNode;
  to?: string;
  linkIcon?: ReactNode;
};

const EmptyPage = ({ children, icon, to, link, linkIcon }: PageProps) => {
  return (
    <section className="flex translate-y-1/4 flex-col items-center gap-y-6">
      {icon}
      <h4 className="text-heading-3 text-center font-semibold tracking-wider uppercase">{children}</h4>
      {link && to && (
        <Link to={to} className="text-body-lg text-primary hover:text-primary-hover flex items-center gap-x-2 font-medium transition-all duration-200 ease-in hover:scale-105 hover:font-semibold">
          {linkIcon && linkIcon}
          <span className="">{link}</span>
        </Link>
      )}
    </section>
  );
};

export default EmptyPage;
