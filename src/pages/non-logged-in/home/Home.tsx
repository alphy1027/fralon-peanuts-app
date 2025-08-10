import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "./components/about-section";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import WhyUsSection from "../about/components/why-us-section";
import ContactUsSection from "../contacts/components/contact-us-section";
import Button from "@/components/UI-primitives/Button";
import mainImage from "@/assets/images/800g-product.png";

const Home = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionContainter className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-col items-center">
            <h2 className="font-secondary text-body-lg text-primary tracking-wide">pure happiness!</h2>
            <h1 className="text-heading-1 font-secondary text-primary text-center font-semibold tracking-wider uppercase">The Perfect Peanut</h1>
          </div>
          <p className="text-body-default font-medium">Experience our refreshening, creamy peanut butter. No preservatives, No additives, All Natural</p>
          <div className="flex items-center justify-center gap-x-6 p-2">
            <Button>Order Now!</Button>
            <Button variant="outline">Order Now!</Button>
          </div>
        </div>
        <div className="bg-primary flex h-[220px] w-full rounded-md p-6">
          <img src={mainImage} alt="" className="h-[200px] -translate-y-[10px] opacity-90" />
        </div>
      </SectionContainter>
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <div className="bg-primary-light py-4">
        <TestimonialsSection />
      </div>
      <ContactUsSection />
    </section>
  );
};

export default Home;
