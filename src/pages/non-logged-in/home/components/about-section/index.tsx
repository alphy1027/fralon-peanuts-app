import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <SectionContainter className="flex flex-wrap items-center justify-center gap-6">
      <div className="flex max-w-[550px] flex-col gap-y-6">
        <SectionTitle className="text-start">Hi we're Fralon Peanuts</SectionTitle>
        <BodyText className="">
          It all started with a simple love for peanuts – roasted to perfection, ground with care, and shared around the table. What began as a small family recipe has grown into a community of peanut
          butter lovers who believe that the best things in life are natural, simple, and shared. Every jar we craft carries that same spirit of home and togetherness, a taste of tradition made for
          today. With each spoonful, you’re not just enjoying peanut butter—you’re joining a family that celebrates real, wholesome goodness.
        </BodyText>
        <Button variant="outline" onClick={() => navigate("/about")} className="px-6 py-3">
          Learn More
        </Button>
      </div>
      <div className="bg-secondary h-[350px] w-full sm:w-[300px]"></div>
    </SectionContainter>
  );
};

export default AboutSection;
