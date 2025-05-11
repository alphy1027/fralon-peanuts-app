import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-blue-600">Welcome to Fralon Peanuts App.</h1>
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
      <ProductsSection />
      <TestimonialsSection />
    </section>
  );
};

export default Home;
