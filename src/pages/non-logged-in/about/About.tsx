import StorySection from "./components/story-section";
import IdentitySection from "./components/identity-section";
import FoundersSection from "./components/founders-section";
import WhyUsSection from "./components/why-us-section";
import CtaSection from "./components/cta-section";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductsSection from "@/components/sections/ProductsSection";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <StorySection />
      <IdentitySection />
      <FoundersSection />
      <WhyUsSection />
      <ProductsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default About;
