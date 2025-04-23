import { ReactNode } from "react";

type InfoProps = {
  children: ReactNode;
  title: string;
  icon: ReactNode;
};

const ContactInfo = ({ children, title, icon }: InfoProps) => {
  return (
    <section className="flex items-center gap-x-4">
      <div className="bg-primary-light grid h-12 w-12 place-content-center rounded-full">{icon}</div>
      <div className="flex flex-col items-start gap-y-0.5">
        <h4 className="text-body text-body-default font-semibold">{title}</h4>
        <p className="text-caption text-start text-gray-700">{children}</p>
      </div>
    </section>
  );
};

export default ContactInfo;
