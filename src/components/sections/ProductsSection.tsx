import SectionContainter from "../UI-primitives/SectionContainter";
import Button from "../UI-primitives/Button";
import RightArrow from "@/assets/svg/nav/RightArrow";
import ProductCard from "../product/ProductCard";
import { useProductsQuery } from "@/hooks/query-hooks/products/useProductsQuery";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../UI-primitives/SectionTitle";

const ProductsSection = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = useProductsQuery();
  if (isPending) return <p className="">LOADING PRODUCTS</p>;
  if (error) return <p className="">ERROR {error.message}</p>;
  const products = data?.payload?.products || [];
  console.log(data);

  return (
    <section className="flex flex-col gap-y-4">
      <SectionContainter className="flex flex-col items-center gap-2">
        <SectionTitle>Our Products</SectionTitle>
        <p className="text-body-default text-body max-w-[750px] text-center">
          At Fralon Peanuts, we take pride in crafting the finest peanut-based products that are perfect for every moment—from quick snacks to hearty meals. Each product is made with premium-grade
          peanuts, roasted to perfection, and packed with love and nutrition.
        </p>
      </SectionContainter>
      <section className="flex justify-center gap-4 overflow-x-auto p-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>
      <SectionContainter className="flex justify-end">
        <Button onClick={() => navigate("/products")} size="md" variant="transparent" className="text-primary self-end px-1 py-2" rightIcon={<RightArrow className="fill-primary" />}>
          More Products
        </Button>
      </SectionContainter>
    </section>
  );
};

export default ProductsSection;
