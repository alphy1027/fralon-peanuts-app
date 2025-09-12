import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import Button from ".";
import { useFavoriteMutation } from "@/hooks/query-hooks/favorites/useFavoriteMutation";
import { useFavoriteQuery } from "@/hooks/query-hooks/favorites/useFavoriteQuery";
import Loading from "../Loading";

const FavButton = ({ productId }: { productId: string }) => {
  const { addToFavorite, removeFromFavorite } = useFavoriteMutation();
  const { data: favoriteProducts } = useFavoriteQuery();
  console.log("fav products", favoriteProducts);
  const isFavorite = favoriteProducts?.some((favId) => favId.toString() === productId.toString());

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    if (isFavorite) {
      removeFromFavorite.mutate(productId);
    } else {
      addToFavorite.mutate(productId);
    }
  };

  return (
    <Button
      onClick={handleToggleFavorite}
      variant="transparent"
      rightIcon={addToFavorite.isPending || removeFromFavorite.isPending ? <Loading className="h-7 w-7" /> : <FavouriteIcon className={`${isFavorite ? "fill-fav-red" : "stroke-primary"}`} />}
      className="rounded-sm px-1 py-0"
    />
  );
};

export default FavButton;
