import QuantityInput from "./QuantityInput";
import Button from "@/components/UI-primitives/Button";
import CloseIcon from "@/assets/svg/nav/CloseIcon";
import { useCartContext } from "@/context/CartContext";

const Table = () => {
  const { cartItems, handleRemoveFromCart } = useCartContext();

  return (
    <table className="hidden w-full lg:table">
      <thead className="text-primary bg-primary-light">
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody className="">
        {cartItems &&
          cartItems.map((cartItem) => (
            <tr key={cartItem.product._id} className="">
              <td>
                <Button
                  variant="secondary-danger"
                  className="custom-margin-auto hover:bg-error-light bg-transparent p-1"
                  rightIcon={<CloseIcon />}
                  onClick={() => handleRemoveFromCart(cartItem.product._id)}
                />
              </td>
              <td className="flex items-center gap-x-2">
                <img src={cartItem.product.productImage.image} alt="" className="h-20 w-20 rounded-md" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-primary text-body-lg font-semibold">{cartItem.product.productName}</h4>
                  {/* <p className="text-body font-medium text-gray-600"> {cartItem.product.category.name}</p> */}
                  <p className="text-body text-gray-500">
                    {cartItem.product.type} | {cartItem.product.packageSize}
                  </p>
                </div>
              </td>
              <td>Ksh {cartItem.product.unitPrice}</td>
              <td>
                <QuantityInput quantity={cartItem.quantity} />
              </td>
              <td className="font-bold">Ksh {cartItem.product.unitPrice * cartItem.quantity}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
