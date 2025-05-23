import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <SectionContainter className="">
      <div className="bg-primary custom-margin-auto flex max-w-[850px] flex-col items-center gap-4 rounded-2xl px-4 py-8">
        <p className="text-primary-light text-body-lg max-w-[450px] text-center font-bold">Get yourself Our tasty peanut butter to brighten your days</p>
        <Button variant="secondary" size="md">
          Shop Now
        </Button>
      </div>
      <p className="text-heading-5 pt-12 text-center font-semibold">
        Want to learn more about Our business, or you got further enquiries?{" "}
        <Link to="contact-us" className="text-primary underline">
          Contact Us
        </Link>
      </p>
    </SectionContainter>
  );
};

export default CtaSection;
