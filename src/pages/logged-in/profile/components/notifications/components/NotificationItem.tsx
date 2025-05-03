import { ReactNode } from "react";
import { Link } from "react-router-dom";

type NotificationProps = {
  children: ReactNode;
};

const NotificationItem = ({ children }: NotificationProps) => {
  return (
    <article className="flex flex-col gap-y-2 border-b border-slate-300 py-3 sm:px-4">
      <section className="flex items-center gap-x-2">
        <h4 className="text-body-lg font-bold">Order Completed</h4>
        <p className="text-caption text-slate-500">Nov 22, 2024</p>
      </section>
      <p className="text-body-default text-body">{children}</p>
      <Link to="" className="text-body text-primary self-end">
        View Order
      </Link>
    </article>
  );
};

export default NotificationItem;
