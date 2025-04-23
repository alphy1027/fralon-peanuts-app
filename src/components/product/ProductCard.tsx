import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import Button from "../UI-primitives/Button";
import { Product } from "@/types";
import Rating from "@mui/material/Rating";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);

  return (
    <section className="flex w-fit flex-col gap-4 p-2">
      <img src={product.productImage.image} loading="lazy" alt="Peanut Butter image" className="h-[280px] w-[220px] border border-gray-400" />
      <div className="flex flex-col gap-1">
        <h3 className="text-body-default">{product.productName}</h3>
        <div className="flex gap-2">
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
          <p className="text-gray-700">({product.reviews.length})</p>
        </div>
        <h4 className="text-body-default text-body-lg font-semibold">Ksh {product.unitPrice}</h4>
        <div className="flex items-center gap-2 pt-2 pr-2">
          <Button width="full">Add to Cart</Button>
          <FavouriteIcon />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
