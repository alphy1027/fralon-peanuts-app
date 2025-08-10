import Button from "../UI-primitives/Button";

const ProductInCartNav = ({ quantity }: { quantity: number }) => {
  return (
    <div className="flex w-fit items-center">
      <Button className="">-</Button>
      <span className="flex w-10 justify-center">{quantity}</span>
      <Button>+</Button>
    </div>
  );
};

export default ProductInCartNav;
