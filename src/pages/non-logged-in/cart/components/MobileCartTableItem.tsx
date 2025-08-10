import CloseIcon from "@/assets/svg/nav/CloseIcon";
import Button from "@/components/UI-primitives/Button";
import { CartItem } from "@/types";
import QuantityInput from "./QuantityInput";
import { useCartContext } from "@/context/CartContext";

type CartProps = {
  cartItem: CartItem;
};

const MobileCartTableItem = ({ cartItem }: CartProps) => {
  const { handleRemoveFromCart } = useCartContext();

  return (
    <article className="bg-brand-white flex items-center gap-x-2 px-1 py-4 sm:gap-x-6 sm:px-4">
      <img src={cartItem.product.productImage.image} alt="fralon product photo" className="h-16 w-16 rounded-sm" />
      <section className="flex flex-1 items-stretch justify-between">
        <div className="flex flex-col justify-center gap-y-0.5">
          <h4 className="text-body-default text-body font-semibold">{cartItem.product.productName}</h4>
          <p className="text-caption text-gray-500">
            {cartItem.product.type} | {cartItem.product.packageSize}
          </p>
          {/* <p className="text-error text-caption">Out in Stock</p> */}
        </div>
        <QuantityInput quantity={cartItem.quantity} />
        <div className="flex flex-col items-end justify-between gap-y-4">
          <Button variant="transparent" className="p-1" rightIcon={<CloseIcon />} onClick={() => handleRemoveFromCart(cartItem.product._id)} />
          <h5 className="text-body-default text-body font-bold">Ksh {cartItem.product.unitPrice * cartItem.quantity}</h5>
        </div>
      </section>
    </article>
  );
};

export default MobileCartTableItem;
