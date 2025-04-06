import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { Product } from "@/types";

interface ApiResponse {
  products: Product[];
}

const Products = () => {
  const { data, loading, error } = useFetch<ApiResponse>({ url: "/products" });
  const { products = [] } = data || {};

  if (!data) return <p>No Products found</p>;
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  return (
    <section className="">
      <SectionTitle>Products</SectionTitle>
      <section className="flex flex-wrap gap-4">
        {products?.length > 0 &&
          products.map((product) => (
            <React.Fragment key={product._id}>
              <ProductCard product={product} />
            </React.Fragment>
          ))}
      </section>
    </section>
  );
};

export default Products;
