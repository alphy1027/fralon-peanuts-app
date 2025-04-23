import BodyText from "@/components/UI-primitives/BodyText";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import RecipeCard from "./components/RecipeCard";
import React from "react";
import Button from "@/components/UI-primitives/Button";
import RightArrow from "@/assets/svg/nav/RightArrow";

const Recipes = () => {
  const recipes = [...Array(24)];
  return (
    <SectionContainter className="flex flex-col items-center gap-y-6">
      <SectionTitle>Recipes</SectionTitle>
      <BodyText className="max-w-[820px] text-center">
        Looking for inspiration? Explore a collection of delicious ,tasty and creative recipes that showcase the versatility of our peanut butter From breakfast bites to dessert delights, these
        easy-to-follow recipes are packed with flavor and perfect for any occasion.
      </BodyText>

      <section className="flex flex-wrap justify-center gap-10 py-10">
        {recipes.map((recipe, index) => (
          <React.Fragment key={index}>
            <RecipeCard>Crunchy Peanut Butter Cookies{recipe}</RecipeCard>
          </React.Fragment>
        ))}
      </section>
      <Button variant="transparent" rightIcon={<RightArrow className="fill-primary" />} className="self-end">
        More Recipes
      </Button>
    </SectionContainter>
  );
};

export default Recipes;
