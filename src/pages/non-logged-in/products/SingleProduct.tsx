import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { Rating } from "@mui/material";
import ProductOptions from "./components/single-product/ProductOptions";
import DescriptionSelect from "./components/single-product/DescriptionSelect";

const SingleProduct = () => {
  return (
    <SectionContainter className="flex flex-col">
      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-3">
          <figure className="h-[300px] max-h-[512px] w-full max-w-[450px] overflow-hidden rounded-lg lg:h-[450px] lg:w-[430px]">
            <img src="none" alt="" className="h-full w-full bg-yellow-200" />
            <figcaption className="sr-only">Peanut butter image</figcaption>
          </figure>
          <section className="flex gap-x-2">
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
          </section>
        </div>

        <section className="flex max-w-[566px] flex-col gap-y-4 self-center md:px-4">
          <div className="border-b border-slate-300 py-4">
            <h4 className="text-primary font-secondary text-xs">Butter</h4>
            <div className="flex justify-between">
              <SectionTitle className="text-start">
                Fralon Peanut Butter <br />
                (800g)
              </SectionTitle>
              <FavouriteIcon />
            </div>
            <div className="flex items-center gap-x-1 pt-1.5 text-slate-500">
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
              <span className="text-sm">12 reviews</span>
            </div>
          </div>

          <article className="border-b border-slate-300">
            <h4 className="text-body-lg font-semibold underline">Description</h4>
            <BodyText className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </BodyText>
            <div className="flex flex-col gap-y-2 px-3 py-4">
              <ProductOptions label="Status">
                <p className="text-primary">30 in Stock</p>
              </ProductOptions>
              <ProductOptions label="Cat">
                <p className="text-slate-600">Butter</p>
              </ProductOptions>
              <ProductOptions label="Size">
                <p className="text-slate-600">800g</p>
              </ProductOptions>
              <ProductOptions label="Type">
                <DescriptionSelect />
              </ProductOptions>
              <ProductOptions label="Price">
                <DescriptionSelect />
              </ProductOptions>
            </div>
          </article>
          <div className="flex items-center justify-between">
            <SectionTitle className="text-primary w-fit text-3xl whitespace-nowrap">Ksh 500</SectionTitle>
            <Button size="md" className="w-1/2">
              Add to Cart
            </Button>
          </div>
        </section>
      </div>
    </SectionContainter>
  );
};

export default SingleProduct;
