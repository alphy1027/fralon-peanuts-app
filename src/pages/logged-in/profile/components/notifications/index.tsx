import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import NotificationItem from "./components/NotificationItem";
import Input from "@/components/UI-primitives/Input";
import SortIcon from "@/assets/svg/nav/SortIcon";

const Notifications = () => {
  return (
    <SectionContainter className="flex flex-col gap-y-4">
      <SectionTitle className="text-start">Notifications</SectionTitle>
      <div className="flex items-center justify-between pt-4">
        <Input inputSize="sm" placeholder="Search" className="w-[200px] sm:w-[300px]" />
        <div className="text-body-default flex items-center gap-2">
          <span>Sort</span>
          <SortIcon />
        </div>
      </div>
      <section className="">
        {[...Array(10)].map((notification, index) => (
          <NotificationItem key={index}>
            Your order of ID <span className="text-primary">#660874357898</span> has been completed and ready for pick up anytime you are ready{notification}
          </NotificationItem>
        ))}
      </section>
    </SectionContainter>
  );
};

export default Notifications;
