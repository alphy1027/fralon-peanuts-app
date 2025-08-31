import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "./components/about-section";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import WhyUsSection from "../about/components/why-us-section";
import ContactUsSection from "../contacts/components/contact-us-section";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";
import CategorySection from "./components/category-section";
import HeroSection from "./components/hero-section/HeroSection";

const Home = () => {
  return (
    <section className="flex flex-col gap-12">
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ProductsSection />
      <SectionContainter className="flex flex-col items-center gap-y-6">
        <SectionTitle>Get discounts!</SectionTitle>
        <BodyText className="text-heading-4 max-w-[850px] text-center italic">
          At Fralon Peanuts, we believe in keeping it real. That’s why we open our doors and invite you to visit our space, see how every jar of peanut butter is crafted, and experience the care that
          goes into every step. And here’s a treat for making the trip—enjoy up to 20% off any products you buy when you visit us in person. Because peanut butter tastes even better when you know the
          story behind it.
        </BodyText>
      </SectionContainter>
      <WhyUsSection />
      <div className="bg-primary-light py-4">
        <TestimonialsSection />
      </div>
      <ContactUsSection />
    </section>
  );
};

export default Home;
