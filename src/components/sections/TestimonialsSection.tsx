import SectionContainter from "../UI-primitives/SectionContainter";
import SectionTitle from "../UI-primitives/SectionTitle";
import Quotes from "@/assets/svg/Quotes";
import Button from "../UI-primitives/Button";
import LeftArrow from "@/assets/svg/nav/LeftArrow";
import RightArrow from "@/assets/svg/nav/RightArrow";

const TestimonialsSection = () => {
  return (
    <SectionContainter className="flex flex-col items-center gap-4">
      <SectionTitle>
        What Our Customers
        <br /> Say About Us
      </SectionTitle>
      <p className="text-body text-body-default max-w-[710px] text-center">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem{" "}
      </p>
      <Quotes />
      <article className="flex flex-col items-center gap-4">
        <p className="text-body text-body-default max-w-[550px] text-center">
          "I’ve been a peanut butter lover for years, but nothing compares to the rich, creamy texture and authentic taste of this brand. The fact that they use fresh, high-quality peanuts makes all
          the difference. Their attention to detail and commitment to quality are truly unmatched!"
        </p>
        <figure className="">
          <img src="none" alt="" className="bg-secondary h-14 w-14 rounded-full" />
          <figcaption className="sr-only">Customer image</figcaption>
        </figure>
        <div className="text-center">
          <h4 className="text-heading-4 font-secondary font">Jonathan Doe</h4>
          <h5 className="text-caption text-gray-600 italic">Satisfied Customer</h5>
        </div>
      </article>
      <div className="flex gap-2 pt-2">
        <Button variant="outline" leftIcon={<LeftArrow className="fill-primary" />}></Button>
        <Button variant="outline" rightIcon={<RightArrow className="fill-primary" />}></Button>
      </div>
    </SectionContainter>
  );
};

export default TestimonialsSection;
