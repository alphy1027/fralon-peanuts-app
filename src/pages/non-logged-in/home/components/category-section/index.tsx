import BodyText from "@/components/UI-primitives/BodyText";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import CategoryCard from "./components/CategoryCard";

const CategorySection = () => {
  return (
    <SectionContainter className="flex flex-col items-center gap-y-4">
      <SectionTitle>We do everything Peanuts</SectionTitle>
      <BodyText className="text-center">From spread to snack, if it’s peanuts, we’ve got it. Your one-stop home for everything peanuts.</BodyText>
      <div className="flex w-full flex-wrap justify-center gap-6 py-4">
        <CategoryCard title="Peanut Butter">Smooth, creamy, and 100% natural — perfect for spreading, dipping, or blending.</CategoryCard>
        <CategoryCard title="Peanut Powder">Light, protein-packed, and versatile — ideal for smoothies, baking, or cooking.</CategoryCard>
        <CategoryCard title="Roasted Peanuts">Crunchy, flavorful, and wholesome — the classic snack done right.</CategoryCard>
      </div>
    </SectionContainter>
  );
};

export default CategorySection;
