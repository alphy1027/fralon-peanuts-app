import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import Button from "../UI-primitives/Button";
import { Product } from "@/types";
import axiosInstance from "@/services/axios";
import Rating from "@mui/material/Rating";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);

  const addCart = async (productId: string) => {
    try {
      const response = await axiosInstance.post("/cart/add", { productId });
      console.log(response.data);
    } catch (err: unknown) {
      console.log("Error adding item to cart;", err);
    }
  };

  //   const addCart = (productId: string) => {
  //     const existingItem = cartItems.find((item:CartItem) => item._id === productId);

  //     if (existingItem) {
  //       const updatedCartItems = cartItems.map((item:CartItem) => (item._id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  //       console.log("Updated Cart Items:", updatedCartItems);

  //       return { cartItems: updatedCartItems };
  //     } else {
  //       const updatedCartItems = [cartItems, { existingItem, quantity: 1 }];
  //       console.log("Updated Cart Items:", updatedCartItems); // Log the updated cart items

  //       return { cartItems: updatedCartItems };
  //     }
  //   };

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
