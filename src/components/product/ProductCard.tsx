import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import { Product } from "@/types";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Button from "../UI-primitives/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);

  return (
    <Link to={`/products/${product._id}`} className="bg-primary-light flex w-fit flex-col items-center gap-4 p-2">
      <figure className="relative">
        <div className="absolute top-2 right-2">
          <FavouriteIcon />
        </div>
        <img src={product.productImage.image} loading="lazy" alt="Peanut Butter image" className="h-[280px] w-[220px]" />
        <figcaption className="sr-only">Fralon Peanut butter photo</figcaption>
      </figure>
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-body-default text-center">
          {product.productName}
          <br />({product.packageSize})
        </h3>
        <div className="flex gap-2">
          <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
          <p className="text-gray-700">({product.reviews.length})</p>
        </div>
        <h4 className="text-body-default text-body-lg font-semibold">Ksh {product.unitPrice}</h4>
        <Button width="full">Add to Cart</Button>
      </div>
    </Link>
  );
};

export default ProductCard;
