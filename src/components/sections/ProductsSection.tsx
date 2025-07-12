import SectionContainter from "../UI-primitives/SectionContainter";
import LeftArrow from "@/assets/svg/nav/LeftArrow";
import Button from "../UI-primitives/Button";
import RightArrow from "@/assets/svg/nav/RightArrow";

const ProductsSection = () => {
  return (
    <section className="bg-primary py-6">
      <SectionContainter className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-brand-white font-secondary text-heading-3 pb-3 text-center">Our Products</h2>
          <p className="text-primary-light text-caption max-w-[650px]">
            At Fralon Peanuts, we take pride in crafting the finest peanut-based products that are perfect for every moment—from quick snacks to hearty meals. Each product is made with premium-grade
            peanuts, roasted to perfection, and packed with love and nutrition.
          </p>
          <div className="flex gap-2 self-end pt-2">
            <Button variant="secondary-outline" leftIcon={<LeftArrow />}></Button>
            <Button variant="secondary-outline" rightIcon={<RightArrow />}></Button>
          </div>
        </div>
        <section className="bg-primary-active h-[280px]"></section>

        <Button variant="transparent" className="text-secondary self-end" rightIcon={<RightArrow />}>
          More Products
        </Button>
      </SectionContainter>
    </section>
  );
};

export default ProductsSection;
