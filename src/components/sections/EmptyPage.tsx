import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
  icon?: ReactNode;
};
const EmptyPage = ({ children, icon }: PageProps) => {
  return (
    <section className="flex translate-y-1/3 flex-col items-center gap-y-6">
      {icon}
      <h4 className="text-heading-3 text-center font-semibold tracking-wider uppercase">{children}</h4>
    </section>
  );
};

export default EmptyPage;
