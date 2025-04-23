import CloseIcon from "@/assets/svg/nav/CloseIcon";
import LeftArrow from "@/assets/svg/nav/LeftArrow";
import RightArrow from "@/assets/svg/nav/RightArrow";
import Button from "@/components/UI-primitives/Button";
import MobileCartTable from "./MobileCartTable";
import React from "react";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
/* import { CartItem } from "@/types"; */
/* 
type TableProps = {
  cart: CartItem[];
  getCartTotal: () => number;
  removeFromCart: (productId: string) => void;
}; */

const CartTable = (/* { cart, getCartTotal, removeFromCart }: TableProps */) => {
  return (
    <>
      <SectionTitle className="text-start">Cart(12)</SectionTitle>
      <table className="hidden md:table">
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
          {[...Array(12)].map((item, index) => (
            <tr key={index} /* {cartItem._id} */>
              <td>
                <img src="none" /* {cartItem.product.productImage.image} */ alt="" className="h-[100px] w-[100px] rounded-lg bg-yellow-200" />
              </td>
              <td>
                <div className="flex flex-col gap-1">
                  <h4 className="text-body-default text-body-lg font-semibold">
                    {/* {cartItem.product.productName} */}Fralon Peanut butter (800gms){item}
                  </h4>
                  <p className="text-body font-medium text-gray-600">{/* {cartItem.product.category} */}Butter</p>
                  <p className="text-body text-gray-500">{/* {cartItem.product.type} */}smooth</p>
                </div>
              </td>
              <td>{/* {cartItem.product.unitPrice} */}$250</td>
              <td>
                {/* {cartItem.quantity} */}
                <input type="number" defaultValue={4} className="w-[60px]" />
              </td>
              <td>{/* {cartItem.product.unitPrice * cartItem.quantity} */}$4500</td>
              <td>
                <Button variant="secondary-danger" className="custom-margin-auto" rightIcon={<CloseIcon />} /*  onClick={() => removeFromCart(cartItem.product._id)} */></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col gap-y-[1px] bg-gray-300 md:hidden">
        {[...Array(12)].map((item, index) => (
          <React.Fragment key={index}>
            <MobileCartTable />
            {item}
          </React.Fragment>
        ))}
      </div>
      <section className="bg-primary-light flex flex-col gap-y-2 p-4 lg:p-6">
        <div className="text-body lg:text-body-lg text-body-default flex items-center justify-between">
          <p>Cart Total</p>
          <p>$85000{/* {getCartTotal()} */}</p>
        </div>

        <div className="text-body lg:text-body-lg text-body-default flex items-center justify-between">
          <p>Discount</p>
          <p>$0.00</p>
        </div>

        <div className="text-body lg:text-body-lg text-body-default flex items-center justify-between">
          <p>Delivery fee</p>
          <p>$0.00</p>
        </div>

        <div className="text-heading-4 lg:text-heading-3 text-brand-black flex items-center justify-between border-t border-gray-500 pt-2 font-bold">
          <p>Total</p>
          <p>$4500</p>
        </div>
      </section>
      <section className="flex items-center justify-evenly">
        <Button variant="outline" leftIcon={<LeftArrow className="fill-primary" />}></Button>
        <Button rightIcon={<RightArrow className="fill-brand-white" />}></Button>
      </section>
    </>
  );
};

export default CartTable;
