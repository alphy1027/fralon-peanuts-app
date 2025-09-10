import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const VisitUsSection = () => {
  return (
    <div className="bg-primary w-full py-4">
      <SectionTitle className="text-brand-white">Get discounts!</SectionTitle>
      <SectionContainter className="flex flex-wrap items-center justify-evenly gap-y-6">
        <BodyText className="text-secondary max-w-[650px] text-lg italic sm:text-xl">
          Enjoy wholesale prices on any of our products when you visit us in person — because peanut butter tastes even better when you know its story.
        </BodyText>
        <Button variant="secondary-outline" size="md" className="border">
          Our Location
        </Button>
      </SectionContainter>
    </div>
  );
};

export default VisitUsSection;
