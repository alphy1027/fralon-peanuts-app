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
import Button from "@/components/UI-primitives/Button";
import WholesaleBanner from "@/components/sections/WholesaleBanner";

const Home = () => {
  return (
    <section className="flex flex-col gap-12">
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ProductsSection />
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
      <WhyUsSection />
      <WholesaleBanner />
      <div className="bg-primary-light py-4">
        <TestimonialsSection />
      </div>
      <ContactUsSection />
    </section>
  );
};

export default Home;
