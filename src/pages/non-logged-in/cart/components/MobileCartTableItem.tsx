import CloseIcon from "@/assets/svg/nav/CloseIcon";
import Button from "@/components/UI-primitives/Button";
import { CartItem } from "@/types";
import QuantityInput from "./QuantityInput";
import { RemoveFromCartAction } from "../types";

type CartProps = {
  cartItem: CartItem;
  handleRemoveFromCart: RemoveFromCartAction;
};

const MobileCartTableItem = ({ cartItem, handleRemoveFromCart }: CartProps) => {
  return (
    <article className="bg-brand-white flex items-center gap-x-4 px-1 py-4 sm:gap-x-6 sm:px-4">
      <img src={cartItem.product.productImage.image} alt="fralon product photo" className="h-[72px] w-[64px] rounded-lg bg-yellow-200" />
      <section className="flex flex-1 items-stretch justify-between">
        <div className="flex flex-col items-start gap-y-0.5">
          <h4 className="text-body-default text-body font-semibold">
            {cartItem.product.productName}({cartItem.product.packageSize})
          </h4>
          <p className="text-caption text-gray-500">{cartItem.product.type}</p>
          {/* <p className="text-error text-caption">Out in Stock</p> */}
          <div className="py-2">
            <QuantityInput quantity={cartItem.quantity} />
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <Button variant="transparent" className="translate-x-1/3" rightIcon={<CloseIcon />} onClick={() => handleRemoveFromCart(cartItem.product._id)} />
          <h5 className="text-body-default text-body-lg font-bold">Ksh {cartItem.product.unitPrice * cartItem.quantity}</h5>
        </div>
      </section>
    </article>
  );
};

export default MobileCartTableItem;
