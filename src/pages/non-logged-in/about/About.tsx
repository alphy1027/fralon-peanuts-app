import StorySection from "./components/story-section";
import IdentitySection from "./components/identity-section";
import FoundersSection from "./components/founders-section";
import WhyUsSection from "./components/why-us-section";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WholesaleBanner from "@/components/sections/WholesaleBanner";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <StorySection />
      <IdentitySection />
      <FoundersSection />
      <WhyUsSection />
      <ProductsSection />
      <TestimonialsSection />
      <WholesaleBanner />
    </div>
  );
};

export default About;
