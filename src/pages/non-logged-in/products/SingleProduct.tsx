import FavouriteIcon from "@/assets/svg/nav/FavouriteIcon";
import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import { Rating } from "@mui/material";

const SingleProduct = () => {
  return (
    <SectionContainter className="flex flex-col">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <figure className="h-[300px] max-h-[512px] w-full max-w-[512px] overflow-hidden rounded-lg bg-red-300">
            <img src="none" alt="" className="h-full w-full bg-yellow-200" />
            <figcaption className="sr-only">Peanut butter image</figcaption>
          </figure>
          <section className="flex gap-x-2">
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
            <div className="bg-primary-light h-[64px] w-[64px] rounded-sm sm:h-[80px] sm:w-[88px] 2xl:h-[94px] 2xl:w-[112px]"></div>
          </section>
        </div>

        <section className="flex flex-col gap-y-4">
          <div className="border-b border-slate-300 py-4">
            <h4 className="text-primary font-secondary text-xs">Butter</h4>
            <div className="flex items-center justify-between">
              <SectionTitle className="text-start">Fralon Peanut Butter (800g)</SectionTitle>
              <FavouriteIcon />
            </div>
            <div className="flex items-center gap-x-1 pt-1.5 text-slate-500">
              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} size="small" readOnly />
              <span className="text-sm">12 reviews</span>
            </div>
          </div>

          <article className="">
            <h4 className="text-body-lg font-semibold underline">Description</h4>
            <BodyText className="text-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </BodyText>
          </article>
          <div className="flex flex-col gap-y-4">
            <SectionTitle className="text-primary w-fit">Ksh 500</SectionTitle>
            <Button width="full" size="md">
              Add to Cart
            </Button>
          </div>
        </section>
      </div>
    </SectionContainter>
  );
};

export default SingleProduct;
