//import ProductsSection from "@/components/sections/ProductsSection";
//import TestimonialsSection from "@/components/sections/TestimonialsSection";
//import AboutSection from "./components/about-section";
//import WhyUsSection from "../about/components/why-us-section";
//import ContactUsSection from "../contacts/components/contact-us-section";
//import CategorySection from "./components/category-section";
//import HeroSection from "./components/hero-section/HeroSection";
//import WholesaleBanner from "@/components/sections/WholesaleBanner";
//import VisitUsSection from "./components/visit-section/VisitUsSection";
import { lazy } from "react";

const ProductsSection = lazy(() => import("@/components/sections/ProductsSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const AboutSection = lazy(() => import("./components/about-section"));
const WhyUsSection = lazy(() => import("../about/components/why-us-section"));
const ContactUsSection = lazy(() => import("../contacts/components/contact-us-section"));
const CategorySection = lazy(() => import("./components/category-section"));
const HeroSection = lazy(() => import("./components/hero-section/HeroSection"));
const WholesaleBanner = lazy(() => import("@/components/sections/WholesaleBanner"));
const VisitUsSection = lazy(() => import("./components/visit-section/VisitUsSection"));

const Home = () => {
  return (
    <section className="flex flex-col gap-12">
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <ProductsSection />
      <VisitUsSection />
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
