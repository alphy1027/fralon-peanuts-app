import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import { useSearchParams } from "react-router-dom";
import RecipeTabButton from "./components/single-recipe/RecipeTabButton";

const SingleRecipe = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "ingredients";

  const handleTabClick = (tabName: string) => {
    setSearchParams({ tab: tabName });
  };

  return (
    <SectionContainter className="flex flex-col items-center gap-y-4">
      <section className="flex flex-col justify-center gap-x-10 gap-y-6 lg:flex-row">
        <figure className="h-[204px] w-full max-w-[510px] rounded-2xl bg-yellow-200 lg:h-[650px] lg:w-[510px]">
          <img src="null" alt="" />
          <figcaption className="sr-only">Peanut Butter recipe</figcaption>
        </figure>

        <div className="flex max-w-[510px] flex-col justify-center gap-y-6">
          <h4 className="font-secondary text-tertiary text-heading-3">Peanut Butter Crunchy Baked Cookies with Chocolate</h4>
          <BodyText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam
          </BodyText>

          <div className="bg-primary-light text-caption flex h-8 items-center justify-around rounded-lg text-gray-600">
            <span className="">Serves 2</span>
            <span className="">1hr 50m</span>
            <span className="">Medium</span>
          </div>

          <nav className="flex h-[45px] justify-between border-b-2 border-gray-300 pb-0.5">
            <RecipeTabButton isActive={currentTab === "ingredients" ? true : false} onClick={() => handleTabClick("ingredients")}>
              Ingredients
            </RecipeTabButton>
            <RecipeTabButton isActive={currentTab === "directions" ? true : false} onClick={() => handleTabClick("directions")}>
              Directions
            </RecipeTabButton>
            <RecipeTabButton isActive={currentTab === "nutrition" ? true : false} onClick={() => handleTabClick("nutrition")}>
              Nutrition
            </RecipeTabButton>
          </nav>

          <ul className="flex list-disc flex-col gap-y-3 pl-4 text-gray-600 sm:pl-8 lg:pl-10">
            {currentTab === "ingredients" && (
              <>
                <li>1/4 Cup warm milk (Optional)</li>
                <li>25gms of grounded chocolate</li>
                <li>2 tablespoon of olive oil</li>
                <li>400gms minimum, of peanut butter</li>
                <li>1/4 teaspoon of sugar</li>
              </>
            )}
            {currentTab === "directions" && (
              <>
                <li>Mix the milk and sugar</li>
                <li>Stir continuously adding the olive oil</li>
                <li>Place in pan at low heat</li>
                <li>Add the peanut butter and stir continuously</li>
                <li>When it is almost solidified add the crushed chocolate</li>
              </>
            )}
            {currentTab === "nutrition" && (
              <>
                <li>Strengthen bones</li>
                <li>Improved immune system</li>
                <li>Antioxidants</li>
                <li>Regulates blood pressure</li>
                <li>Smooth skin</li>
              </>
            )}
          </ul>
          <Button size="md" width="full">
            Print Recipe
          </Button>
        </div>
      </section>
    </SectionContainter>
  );
};

export default SingleRecipe;
