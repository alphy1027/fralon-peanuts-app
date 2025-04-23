import Logo from "@/assets/svg/logo/Logo";
import { twMerge } from "tailwind-merge";
type BadgeProps = {
  size: "veryLarge" | "extraLarge" | "large" | "medium" | "small" | "extraSmall";
};

const Badge = ({ size }: BadgeProps) => {
  const badgeSize = {
    veryLarge: { width: 194, height: 116, labelSize: "text-heading-1" },
    extraLarge: { width: 132, height: 79, labelSize: "text-heading-2" },
    large: { width: 87, height: 52, labelSize: "text-heading-3" },
    medium: { width: 60, height: 33, labelSize: "text-heading-4" },
    small: { width: 44, height: 27, labelSize: "text-heading-5" },
    extraSmall: { width: 32, height: 19, labelSize: "text-heading-7" },
  };

  return (
    <section className="flex flex-col items-center">
      <Logo width={badgeSize[size].width} height={badgeSize[size].height} />
      <h4 className={twMerge("font-secondary text-primary", badgeSize[size].labelSize)}>fralon peanuts</h4>
    </section>
  );
};

export default Badge;
