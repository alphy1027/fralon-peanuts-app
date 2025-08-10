import SummaryItem from "@/components/sections/SummaryItem";
import Button from "@/components/UI-primitives/Button";
import { useCartQuery } from "@/hooks/query-hooks/cart/useCartQuery";

type SummaryProps = {
  buttonLabel: string;
  onClickFn?: () => void;
  form?: "order-form";
  type?: "submit";
};

const CartSummary = ({ buttonLabel, onClickFn, form, type }: SummaryProps) => {
  const { data: cart, isPending, error } = useCartQuery();

  const grandTotal =
    cart?.items.reduce((acc, current) => {
      return acc + current.product.unitPrice * current.quantity;
    }, 0) || 0;

  if (!cart?.items.length) return null;

  return (
    <section className="border-outline flex h-fit w-full flex-1 flex-col gap-y-2 rounded-sm border p-3 lg:p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-heading-4 font-bold">Order Summary</h4>
        {/* <p className="text-heading-4 lg:text-heading-3 text-brand-black font-bold">Ksh {grandTotal + 200}</p> */}
      </div>

      <div className="border-outline flex flex-col gap-y-2 border-y py-4">
        <SummaryItem label="Cart Total" amount={grandTotal} />
        <SummaryItem label="Discount" amount={0.0} />
        <SummaryItem label="Delivery fee" amount={200} />
      </div>

      <div className="flex flex-col gap-y-3">
        <SummaryItem bold label="Total" amount={grandTotal + 200} />

        <Button type={type} form={form} onClick={onClickFn} size="md" className="custom-margin-auto w-full sm:w-fit lg:w-full">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};

export default CartSummary;
