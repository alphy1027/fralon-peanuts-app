import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <SectionContainter className="flex flex-wrap items-center justify-center gap-12">
      <div className="flex max-w-[400px] flex-col gap-y-8">
        <SectionTitle className="text-start">About Our Business</SectionTitle>
        <BodyText>
          At Fralon Peanuts, we’re more than just a peanut butter company—we’re a family-run business with a passion for crafting high-quality peanut products. From our humble beginnings, we’ve
          dedicated ourselves to sourcing the finest peanuts and transforming them into products that bring joy to every table.
        </BodyText>
        <Button onClick={() => navigate("about")} size="md">
          Learn More
        </Button>
      </div>
      <figure className="w-fit">
        <img src="none" alt="" className="bg-secondary h-[370px] w-[300px] rounded-lg" />
        <figcaption className="sr-only">Company photo</figcaption>
      </figure>
    </SectionContainter>
  );
};

export default AboutSection;
