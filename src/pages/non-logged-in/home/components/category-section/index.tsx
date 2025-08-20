import BodyText from "@/components/UI-primitives/BodyText";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import CategoryCard from "./components/CategoryCard";

const CategorySection = () => {
  return (
    <SectionContainter className="flex flex-col items-center gap-y-4">
      <SectionTitle>We do everything Peanuts</SectionTitle>
      <BodyText className="">From spread to snack, if it’s peanuts, we’ve got it. Your one-stop home for everything peanuts.</BodyText>
      <div className="flex w-full flex-wrap justify-center gap-6 py-4">
        <CategoryCard image="none" title="Peanut Butter">
          Smooth, creamy, or crunchy — our signature peanut butter is made with love and without additives. A wholesome spread for every moment.
        </CategoryCard>
        <CategoryCard image="none" title="Peanut Powder">
          Packed with natural protein and flavor, our peanut powder is perfect for smoothies, baking, or healthy cooking.
        </CategoryCard>
        <CategoryCard image="none" title="Roasted Peanuts">
          Golden roasted to perfection, crunchy and satisfying — a healthy snack full of protein that keeps it simple, tasty, and natural.
        </CategoryCard>
      </div>
    </SectionContainter>
  );
};

export default CategorySection;
