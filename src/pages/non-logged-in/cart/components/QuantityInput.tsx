import DecrementIcon from "@/assets/svg/nav/DecrementIcon";
import IncrementIcon from "@/assets/svg/nav/IncrementIcon";
import Button from "@/components/UI-primitives/Button";
import { useCartActionsMutation } from "@/hooks/query-hooks/cart/useCartActionsMutation";
import { useState } from "react";

type InputProps = {
  quantity: number;
};

const QuantityInput = ({ quantity }: InputProps) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const { updateItemQuantity } = useCartActionsMutation();

  const handleUpdateItem = (productId: string, quantity: number) => {
    updateItemQuantity.mutate({ productId, quantity });
  };

  const handleIncrement = () => {
    setItemQuantity((prev) => (prev += 1));
  };

  const handleDecrement = () => {
    setItemQuantity((prev) => (prev -= 1));
  };

  return (
    <div className="border-body-default custom-margin-auto flex w-fit rounded-sm border">
      <Button onClick={handleIncrement} variant="outline" leftIcon={<IncrementIcon />} className="rounded-none border-none px-1" />
      <input type="number" value={itemQuantity} onChange={() => setItemQuantity(itemQuantity)} className="w-[36px] text-center" />
      <Button onClick={handleDecrement} variant="outline" rightIcon={<DecrementIcon />} className="rounded-none border-none px-1" />
    </div>
  );
};

export default QuantityInput;
