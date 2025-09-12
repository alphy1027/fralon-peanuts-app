import { useCartContext } from "@/context/CartContext";
import { Product } from "@/types";
import { Link } from "react-router-dom";
import Button from "../UI-primitives/Button";
import ProductInCartNav from "./ProductInCartNav";
import ShoppingCartIcon from "@/assets/svg/cart/ShoppingCartIcon";
import FavButton from "../UI-primitives/Button/FavButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isProductInCart, handleAddToCart } = useCartContext();
  const productInCart = isProductInCart(product._id);

  const handleAddItemToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    handleAddToCart(product._id);
  };

  return (
    <Link to={`/products/${product._id}`} className="flex w-fit flex-col items-center gap-4 rounded-sm p-2">
      <figure className="relative overflow-hidden rounded-sm">
        <div className="absolute top-2 left-2">
          <FavButton productId={product._id} />
        </div>
        <img src={product.productImage.image} loading="lazy" alt="Peanut Butter image" className="h-[250px] w-[200px]" />
        <figcaption className="sr-only">Fralon Peanut butter photo</figcaption>
      </figure>

      <div className="flex flex-col items-center gap-1">
        <h3 className="text-body-lg text-center font-semibold">
          {/* {product.productName} */}
          Peanut Butter ({product.packageSize})
        </h3>
        <h4 className="text-heading-5 font-secondary text-primary font-semibold">Ksh {product.unitPrice}</h4>

        {productInCart ? (
          <ProductInCartNav quantity={productInCart} />
        ) : (
          <Button onClick={handleAddItemToCart} size="md" leftIcon={<ShoppingCartIcon />} variant="transparent" className="gap-x-3 py-2">
            Add to Cart
          </Button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
