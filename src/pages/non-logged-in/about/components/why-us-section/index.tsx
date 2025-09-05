import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import ReasonCard from "./ReasonCard";

const WhyUsSection = () => {
  return (
    <SectionContainter className="flex flex-col items-center gap-4">
      <SectionTitle>Why Choose Us</SectionTitle>
      <p className="text-body max-w-[710px] text-center text-gray-700">
        At Fralon Peanuts, we go beyond just selling peanut products—we deliver a wholesome experience rooted in quality, nutrition, and community. Here's why our customers keep coming back:
      </p>

      <div className="flex max-w-[1000px] flex-wrap justify-center gap-2 pt-4 sm:gap-4">
        <ReasonCard index={1} title="100% Natural">
          We source only the best-grade peanuts, ensuring every product is rich in flavor, nutrition, and freshness—no compromises.
        </ReasonCard>
        <ReasonCard index={2} title="Naturally Nutritious">
          No additives or preservatives. Our products are packed with plant-based protein, fiber, and essential nutrients your body craves.
        </ReasonCard>
        <ReasonCard index={3} title="Locally Made">
          Rooted in tradition, inspired by innovation. Our products reflect the rich Kenyan heritage and meet world-class standards.
        </ReasonCard>
        <ReasonCard index={4} title="Sustainable and Responsible">
          We support eco-friendly farming, responsible sourcing, and giving back to our communities.
        </ReasonCard>
      </div>
    </SectionContainter>
  );
};

export default WhyUsSection;
