import { ReactNode } from "react";

type LinkProps = {
  icon: ReactNode;
  to: string;
};

const SocialLink = ({ icon, to }: LinkProps) => {
  return (
    <a href={to} target="_blank" rel="noreferrer noopener" className="rounded-sm p-1">
      {icon}
    </a>
  );
};

export default SocialLink;
