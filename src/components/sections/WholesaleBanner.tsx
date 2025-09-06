import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const WholesaleBanner = () => {
  return (
    <div className="bg-primary w-full py-4">
      <SectionContainter className="">
        <div className="custom-margin-auto flex max-w-[850px] flex-col items-center gap-4 rounded-2xl">
          <SectionTitle className="text-brand-white">Wholesale prices!</SectionTitle>
          <p className="text-primary-light text-body-lg max-w-[450px] text-center font-medium">
            Enjoy wholesale pricing when you grab 12 or more. Perfect for families, shops, events, and peanut lovers alike.
          </p>
          <Button variant="secondary-outline" size="md">
            Shop Wholesale
          </Button>
        </div>
      </SectionContainter>
    </div>
  );
};

export default WholesaleBanner;
