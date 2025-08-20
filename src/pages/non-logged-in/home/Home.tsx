import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "./components/about-section";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import WhyUsSection from "../about/components/why-us-section";
import ContactUsSection from "../contacts/components/contact-us-section";
import Button from "@/components/UI-primitives/Button";
import heroImg from "@/assets/images/hero-img.png";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import BodyText from "@/components/UI-primitives/BodyText";
import CategorySection from "./components/category-section";

const Home = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionContainter className="bg-secondary flex flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-sm">
        <div className="flex flex-col gap-y-3 p-2 md:w-1/2">
          <h1 className="text-heading-2 font-secondary text-primary font-semibold tracking-wider uppercase">
            Crafted for the{" "}
            <span className="text-tertiary">
              Peanut
              <br /> Butter
            </span>{" "}
            Lover in You
          </h1>
          <p className="text-slate-700">
            Not Just Any Butter, It's Peanut Perfection. Nutty, But in the Best Way. We offer quality peanut butter products. You can get all our products in a store nearby.
          </p>
          <div className="flex w-fit flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-6">
            <Button size="md">View Products</Button>
            <Button variant="outline" size="md">
              Order Now!
            </Button>
          </div>
        </div>
        <img src={heroImg} className="h-[400px] w-[300px]" />
      </SectionContainter>
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
