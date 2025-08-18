import MinusIcon from "@/assets/svg/cart/MinusIcon";
import Button from "../UI-primitives/Button";
import PlusIcon from "@/assets/svg/cart/PlusIcon";

const ProductInCartNav = ({ quantity }: { quantity: number }) => {
  return (
    <div className="flex w-fit items-center">
      <Button variant="transparent" leftIcon={<MinusIcon />} className="p-2" />
      <span className="text-body-lg flex w-10 justify-center font-semibold">{quantity}</span>
      <Button variant="transparent" rightIcon={<PlusIcon />} className="p-2" />
    </div>
  );
};

export default ProductInCartNav;
