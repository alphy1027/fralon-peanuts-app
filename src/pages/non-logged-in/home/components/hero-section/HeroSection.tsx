import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import heroImg from "@/assets/images/hero-img.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleViewProducts = () => {
    navigate("/products");
  };
  const handleLoginUser = () => {
    navigate("/auth/login");
  };
  return (
    <SectionContainter className="bg-secondary flex flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-sm">
      <div className="flex flex-col gap-y-3 p-2 md:w-1/2">
        <h1 className="text-heading-2 font-secondary text-primary font-bold tracking-wider uppercase">
          Just pure
          <span className="text-tertiary"> peanut goodness</span>, nothing else
        </h1>
        <p className="text-slate-700">
          Not Just Any Butter, It's Peanut Perfection. Nutty, But in the Best Way. We offer quality peanut butter products. You can get all our products in a store nearby.
        </p>
        <div className="flex w-fit flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-6">
          <Button onClick={handleViewProducts} size="md">
            View Products
          </Button>
          {user.isAuthenticated ? (
            <Button variant="outline" size="md">
              Order Now!
            </Button>
          ) : (
            <Button onClick={handleLoginUser} variant="outline" size="md">
              Log in
            </Button>
          )}
        </div>
      </div>
      <img src={heroImg} className="h-[400px] w-[300px]" />
    </SectionContainter>
  );
};

export default HeroSection;
