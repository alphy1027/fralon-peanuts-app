import CloseIcon from "@/assets/svg/nav/CloseIcon";
import Button from "@/components/UI-primitives/Button";

const MobileCartTable = () => {
  return (
    <article className="bg-brand-white flex items-center gap-x-4 px-1 py-4 sm:gap-x-6 sm:px-4">
      <img src="none" alt="" className="h-[72px] w-[64px] rounded-lg bg-yellow-200" />
      <section className="flex flex-1 items-stretch justify-between">
        <div className="flex flex-col gap-y-0.5">
          <h4 className="text-body-default text-body font-semibold">Fralon Peanut Butter(800gms)</h4>
          <p className="text-caption text-gray-500">Crunchy</p>
          <p className="text-error text-caption">Out in Stock</p>
          <p>4</p>
        </div>
        <div className="flex flex-col justify-between">
          <Button variant="transparent" className="" rightIcon={<CloseIcon />} /*  onClick={() => removeFromCart(cartItem.product._id)} */></Button>
          <h5 className="text-body-default text-body-lg font-bold">$4500</h5>
        </div>
      </section>
    </article>
  );
};

export default MobileCartTable;
