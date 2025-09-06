import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import React from "react";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import { Product } from "@/types";
import CategorySelect from "./components/CategorySelect";
import { useProductsQuery } from "@/hooks/query-hooks/products/useProductsQuery";
import WholesaleBanner from "@/components/sections/WholesaleBanner";

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

        <WholesaleBanner />
      </SectionContainter>
    </section>
  );
};

export default Products;
