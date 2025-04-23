import { ReactNode } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ children }: { children: ReactNode }) => {
  return (
    <Link to="/recipes/single" className="flex flex-col gap-y-2">
      <img src="none" alt="" className="bg-primary-light h-[300px] w-[250px] rounded-lg sm:rounded-2xl" />
      <p className="text-heading-5 text-body-default max-w-[250px] px-2 font-semibold">{children}</p>
    </Link>
  );
};

export default RecipeCard;
