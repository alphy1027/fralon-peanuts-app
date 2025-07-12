import { CartItem } from "@/types";
import QuantityInput from "./QuantityInput";
import Button from "@/components/UI-primitives/Button";
import CloseIcon from "@/assets/svg/nav/CloseIcon";
import { RemoveFromCartAction } from "../types";

type CartProps = {
  cartItems: CartItem[];
  handleRemoveFromCart: RemoveFromCartAction;
};

const Table = ({ cartItems, handleRemoveFromCart }: CartProps) => {
  return (
    <table className="hidden w-full md:table">
      <thead className="border-b-2 border-gray-500">
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {cartItems.map((cartItem) => (
          <tr key={cartItem._id}>
            <td>
              <img src={cartItem.product.productImage.image} alt="" className="h-[100px] w-[100px] rounded-lg bg-yellow-200" />
            </td>
            <td>
              <div className="flex flex-col gap-1">
                <h4 className="text-body-default text-body-lg font-semibold">
                  {cartItem.product.productName} ({cartItem.product.packageSize})
                </h4>
                <p className="text-body font-medium text-gray-600"> {cartItem.product.category.name}</p>
                <p className="text-body text-gray-500">{cartItem.product.type}</p>
              </div>
            </td>
            <td> {cartItem.product.unitPrice}</td>
            <td>
              <QuantityInput quantity={cartItem.quantity} />
            </td>
            <td className="font-bold">{cartItem.product.unitPrice * cartItem.quantity}</td>
            <td>
              <Button variant="secondary-danger" className="custom-margin-auto p-2" rightIcon={<CloseIcon />} onClick={() => handleRemoveFromCart(cartItem.product._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
