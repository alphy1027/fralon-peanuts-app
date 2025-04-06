import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import Button from "../UI-primitives/Button";
import { Product } from "@/types";
import axiosInstance from "@/services/axios";
import axios from "axios";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);

  const addCart = async (productId: string) => {
    try {
      const response = await axiosInstance.post("/cart", { productId });
      console.log(response.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.message || "Error adding to Cart";
        console.log("Error adding to cart:", errorMessage);
      } else {
        console.log("Unexpected error:", err);
      }
    }
  };

  return (
    <section className="flex w-fit flex-col gap-4 p-2">
      <img src={product.productImage.image} loading="lazy" alt="Peanut Butter image" className="h-[280px] w-[220px] border border-gray-400" />
      <div className="flex flex-col">
        <h3 className="text-body-default">{product.productName}</h3>
        <p className="text-gray-700">({product.reviews.length})</p>
        <h4 className="text-body-default text-body-lg font-semibold">Ksh {product.unitPrice}</h4>
        <div className="flex items-center gap-2 pt-2 pr-2">
          <Button width="full" onClick={() => addCart(product._id)}>
            Add to Cart
          </Button>
          <FavouriteIcon />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
