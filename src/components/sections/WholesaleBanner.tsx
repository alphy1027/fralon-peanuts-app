import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import wholesalePeanuts from "@/assets/images/wholesale-peanuts.webp";

const WholesaleBanner = () => {
  return (
    <SectionContainter className="">
      <div
        style={{ backgroundImage: `linear-gradient(to right,rgba(249, 210, 155,0.6),rgba(249, 210, 155,0.7)),url(${wholesalePeanuts})` }}
        className="from-secondary to-tertiary flex flex-col items-center gap-4 rounded-md bg-gradient-to-r bg-cover bg-bottom py-4"
      >
        <SectionTitle className="">Wholesale prices!</SectionTitle>
        <p className="text-body-lg max-w-[450px] text-center font-medium text-slate-700 backdrop-blur-[4px]">
          Enjoy wholesale pricing when you grab 12 or more. Perfect for families, shops, events, and peanut lovers alike.
        </p>
        <Button size="md">Shop Wholesale</Button>
      </div>
    </SectionContainter>
  );
};

export default WholesaleBanner;
