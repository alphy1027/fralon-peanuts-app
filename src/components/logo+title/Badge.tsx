import Logo from "@/assets/svg/logo/Logo";
type sizeType = {
  size?: "sm" | "md" | "lg" | "xl";
};

const Badge = ({ size = "sm" }: sizeType) => {
  return (
    <section className="flex flex-col items-center">
      <Logo width={60} height={33} />
      <h4 className="text-heading-5 font-secondary">fralon peanuts</h4>
    </section>
  );
};

export default Badge;
