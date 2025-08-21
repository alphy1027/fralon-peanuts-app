import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { Rating } from "@mui/material";
import ProductOptions from "./components/single-product/ProductOptions";
import { useSingleProductQuery } from "@/hooks/query-hooks/products/useSingleProductQuery";
import { useParams } from "react-router-dom";
import PriceSelect from "./components/single-product/PriceSelect";
import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import ProductInCartNav from "@/components/product/ProductInCartNav";

const SingleProduct = () => {
  const [price, setPrice] = useState("unitPrice");
  const { productId } = useParams<{ productId: string }>();
  const { isProductInCart, handleAddToCart } = useCartContext();
  if (!productId) return <p className="">No product ID provided</p>;
  const { data, isPending, error } = useSingleProductQuery(productId);

  if (!data?.payload?.product) return <p className="">Loading product</p>;
  if (isPending) return <p className="">Pending Product</p>;
  if (error) return <p className="">{error.message}</p>;

  const product = data?.payload?.product;
  const productInCart = isProductInCart(productId);
  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value);
  };

  return (
    <SectionContainter className="flex flex-col">
      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-3">
          <figure className="h-[300px] max-h-[512px] w-full max-w-[450px] overflow-hidden rounded-sm lg:h-[450px] lg:w-[430px]">
            <img src={product.productImage.image} alt="" className="h-full w-full bg-yellow-200" />
            <figcaption className="sr-only">Fralon peanut butter photo</figcaption>
          </figure>
          <section className="flex gap-x-2">
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
          </section>
        </div>

        <section className="flex w-full flex-col gap-y-6 self-center px-2 sm:w-[550px] md:w-[600px] md:px-4 lg:max-w-[450px] lg:self-start">
          <div className="border-b border-slate-300 py-4">
            <h4 className="text-primary font-secondary text-xs font-medium tracking-wide">Butter</h4>
            <div className="flex justify-between gap-x-10">
              <SectionTitle className="text-start tracking-wide">
                {product.productName} <br />({product.packageSize})
              </SectionTitle>
              <FavouriteIcon />
            </div>
            <div className="flex items-center gap-x-1 pt-1.5 text-slate-500">
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
              <span className="text-sm">{product.reviews.length} reviews</span>
            </div>
          </div>

          <article className="border-b border-slate-300">
            <h4 className="text-body-lg font-semibold underline">Description</h4>
            <BodyText className="text-sm text-slate-600">{product.description}</BodyText>
            <div className="flex flex-col gap-y-2 px-3 py-4">
              {/* <ProductOptions label="Status">
                <p className="text-primary">30 in Stock</p>
              </ProductOptions>*/}
              <ProductOptions label="Cat">
                <p className="text-slate-600">{product.category.name}</p>
              </ProductOptions>
              <ProductOptions label="Size">
                <p className="text-slate-600">{product.packageSize}</p>
              </ProductOptions>

              <ProductOptions label="Price">
                <PriceSelect handlePriceChange={handlePriceChange} />
              </ProductOptions>
            </div>
          </article>
          <div className="flex items-center justify-between">
            <SectionTitle className="text-primary w-fit text-3xl whitespace-nowrap">Ksh {price === "unitPrice" ? product.unitPrice : product.wholesaleUnitPrice}</SectionTitle>

            {productInCart ? (
              <ProductInCartNav quantity={productInCart} />
            ) : (
              <Button size="md" className="w-1/2" onClick={() => handleAddToCart(product._id)}>
                Add to Cart
              </Button>
            )}
          </div>
        </section>
      </div>
    </SectionContainter>
  );
};

export default SingleProduct;
