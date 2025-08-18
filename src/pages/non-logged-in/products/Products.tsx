import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import React from "react";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import Button from "@/components/UI-primitives/Button";
import { Product } from "@/types";
import CategorySelect from "./components/CategorySelect";
import { useProductsQuery } from "@/hooks/query-hooks/products/useProductsQuery";

const Products = () => {
  const { data, isPending } = useProductsQuery();
  if (!data?.payload?.products) return <p className="">Loading products</p>;
  if (isPending) return <p className="">Pending Products</p>;
  console.log(data.payload);

  return (
    <section className="">
      <SectionContainter className="flex flex-col gap-y-8">
        <SectionTitle>Our Products</SectionTitle>
        <CategorySelect />
        <section className="">
          <section className="flex flex-wrap gap-4">
            {data?.payload?.products?.length > 0 &&
              data.payload.products.map((product: Product) => (
                <React.Fragment key={product._id}>
                  <ProductCard product={product} />
                </React.Fragment>
              ))}
          </section>
        </section>

        <div className="bg-primary custom-margin-auto flex w-[60%] min-w-fit flex-col items-center gap-4 rounded-2xl px-6 py-8 sm:gap-6">
          <p className="text-primary-light text-body-lg max-w-[400px] text-center font-bold">Do you have a business and would like us to supply you with our products</p>
          <Button size="md" variant="secondary">
            Contact us
          </Button>
        </div>
      </SectionContainter>
    </section>
  );
};

export default Products;
