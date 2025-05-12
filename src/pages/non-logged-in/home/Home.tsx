import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import AboutSection from "./components/about-section";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import WhyUsSection from "../about/components/why-us-section";
import ContactUsSection from "../contacts/components/contact-us-section";

const Home = () => {
  const { user } = useAuth();

  return (
    <section className="flex flex-col gap-12">
      <SectionContainter className="flex flex-col items-center gap-4">
        <SectionTitle className="text-blue-600">Welcome to Fralon Peanuts App.</SectionTitle>
        {user.isAuthenticated ? (
          <>
            <h2 className="">Logged in as :</h2>
            <h3 className="text-emerald-500">Username :: {user.username}</h3>
            <h3 className="text-emerald-500">UserID :: {user.userId}</h3>
            <h3 className="text-emerald-500">Roles :: {user.roles[0]}</h3>
          </>
        ) : (
          <h3 className="text-red-400">Please Login to view your information</h3>
        )}
      </SectionContainter>
      <SectionContainter className="flex flex-wrap justify-center gap-4">
        <Link to="auth/reset-password" className="text-primary font-semibold underline">
          Reset Password
        </Link>
        <Link to="auth/forgot-password" className="text-primary font-semibold underline">
          Forgot Password
        </Link>
        <Link to="auth/successful-verification" className="text-primary font-semibold underline">
          Successful Verification
        </Link>
        <Link to="auth/successful-reset" className="text-primary font-semibold underline">
          Successful Reset
        </Link>
        <Link to="auth/verification-sent" className="text-primary font-semibold underline">
          Verification Sent
        </Link>
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
