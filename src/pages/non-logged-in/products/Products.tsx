import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import React from "react";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import Button from "@/components/UI-primitives/Button";
import LeftArrow from "@/assets/svg/nav/LeftArrow";
import RightArrow from "@/assets/svg/nav/RightArrow";
import useFetch from "@/hooks/useFetch";
import { ApiResponse, Product } from "@/types";

const Products = () => {
  const { data } = useFetch<ApiResponse>({ url: "/products" });
  const { products = [] } = data || {};

  /* if (!data) return <p>No Products found</p>;
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>; */

  return (
    <section className="">
      <SectionContainter className="flex flex-col gap-y-8">
        <SectionTitle>Our Products</SectionTitle>
        <div className="flex items-center gap-4 sm:gap-6">
          <label htmlFor="category" className="text-body-default text-heading-5 font-semibold">
            Categories
          </label>
          <select name="category" id="category" className="w-[300px] min-w-[150px] rounded-md border border-gray-300 px-1 py-1.5">
            <option value="butter">All Products</option>
            <option value="butter">Butter</option>
            <option value="powder">Powder</option>
            <option value="roasted">Roasted</option>
            <option value="raw">Raw</option>
            <option value="butter">Butter</option>
          </select>
        </div>
        <section className="bg-primary-light h-[600px]">
          <section className="flex flex-wrap gap-4">
            {products?.length > 0 &&
              products.map((product: Product) => (
                <React.Fragment key={product._id}>
                  <ProductCard product={product} />
                </React.Fragment>
              ))}
          </section>
        </section>
        <div className="flex gap-4 self-end py-2">
          <Button variant="outline" className="border-gray-300" leftIcon={<LeftArrow className="fill-gray-300" />}></Button>
          <Button variant="outline" rightIcon={<RightArrow className="fill-primary" />}></Button>
        </div>
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
