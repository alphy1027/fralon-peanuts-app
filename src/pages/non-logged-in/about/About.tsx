import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import IdentityCard from "./components/IdentityCard";
import ReasonCard from "./components/why-us/ReasonCard";
import Button from "@/components/UI-primitives/Button";
import LeftArrow from "@/assets/svg/nav/LeftArrow";
import RightArrow from "@/assets/svg/nav/RightArrow";
import Quotes from "@/assets/svg/Quotes";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="bg-primary-light">
        <SectionContainter className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 xl:gap-x-20 xl:py-10">
          <figure>
            <img src="null" alt="Company photo" className="bg-brand-white h-56 w-64 md:h-[300px] md:w-[300px]" />
            <figcaption className="sr-only">Peanut Butter Company photo</figcaption>
          </figure>
          <div className="flex max-w-[500px] flex-col items-start gap-4">
            <SectionTitle>Our Story</SectionTitle>
            <p className="text-caption text-body-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt ut voluptas aliquam, fuga impedit obcaecati possimus, tenetur libero deserunt, eius minus maiores hic ipsa
              vero exercitationem odit natus totam. Mollitia, sequi hic, accusantium voluptas culpa quidem tempora rerum iusto eos, sit excepturi. Iure maxime vel nobis aut facere, recusandae enim.
              Quas vel eveniet quia quisquam officiis quod eaque sint? Vel voluptates maiores debitis laudantium nam repudiandae ducimus non eaque tempora mollitia architecto harum, est omnis quia
              vitae corrupti animi fugit accusantium nesciunt. Reiciendis magni sed, eaque fugit obcaecati expedita. Quas quibusdam itaque placeat cumque consequuntur. Ipsum fugit exercitationem autem
              ipsa in
            </p>
          </div>
        </SectionContainter>
      </section>

      <SectionContainter className="flex flex-wrap items-end justify-center gap-x-14 gap-y-8 sm:gap-y-12 md:gap-y-14">
        <section className="flex h-fit w-fit flex-col gap-y-8 sm:gap-y-10">
          <IdentityCard index={1} className="">
            We're passionate about quality peanut butter production. With years of experience in the industry, we have a good understanding about the product and used this to make our products better
            and better along the way. And so we can confidently assure our customers that we offer the best peanut butter in the industry.
          </IdentityCard>

          <IdentityCard index={2} title="Our Values" className="bg-primary-light">
            We're passionate about quality peanut butter production. With years of experience in the industry, we have a good understanding about the product and used this to make our products better
            and better along the way. And so we can confidently assure our customers that we offer the best peanut butter in the industry. And so we can confidently assure our customers that we offer
          </IdentityCard>
        </section>

        <section className="flex h-fit w-fit flex-col gap-y-6 sm:gap-y-10">
          <IdentityCard index={3} title="Our Vission" className="bg-secondary">
            We're passionate about quality peanut butter production. With years of experience in the industry, we have a good understanding about the product and used this to make our products better
            and better along the way. And so we can confidently assure our customers that we offer the best peanut butter in the industry.
          </IdentityCard>

          <IdentityCard index={4} title="Our Mission" className="bg-primary">
            We're passionate about quality peanut butter production. With years of experience in the industry, we have a good understanding about the product and used this to make our products better
            and better along the way. And so we can confidently assure our customers that we offer the best peanut butter in the industry.
          </IdentityCard>
        </section>
      </SectionContainter>

      <section className="bg-primary-light h-fit">
        <SectionContainter className="flex justify-center">
          <section className="grid h-[420px] max-h-[420px] max-w-[350px] grid-cols-1 grid-rows-2 gap-2 rounded-2xl p-2 sm:max-w-[600px] sm:grid-cols-2 sm:grid-rows-1">
            <figure className="max-w-[576px] grow overflow-hidden rounded-lg bg-black">
              <img src="none" alt="Co-founder image" className="bg-brand-white h-full w-full" />
              <figcaption className="sr-only">Co-founder image</figcaption>
            </figure>

            <div className="bg-secondary border-primary relative flex h-full min-h-fit w-full max-w-[576px] flex-col rounded-lg border-2 p-2 sm:justify-center sm:p-4">
              <h4 className="text-caption md:text-body text-body-default font-bold">Lawrence Nunda</h4>
              <h5 className="text-extra-sm text-gray-600 italic">Co-founder Fralon</h5>
              <p className="text-extra-sm md:text-caption pt-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem{" "}
              </p>

              <p className="text-extra-sm absolute right-2 bottom-2 pt-2 text-end text-gray-600 italic">lawrencenunda@gmail.com</p>
            </div>
          </section>
        </SectionContainter>
      </section>

      <SectionContainter className="flex flex-col items-center gap-4">
        <SectionTitle>Why Choose Us</SectionTitle>
        <p className="text-body max-w-[710px] text-center text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        </p>

        <div className="flex max-w-[1000px] flex-wrap justify-center gap-2 pt-4">
          <ReasonCard index={1} title="Natural Ingredients">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          </ReasonCard>
          <ReasonCard index={2} title="Natural Ingredients">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          </ReasonCard>
          <ReasonCard index={3} title="Natural Ingredients">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          </ReasonCard>
          <ReasonCard index={4} title="Natural Ingredients">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          </ReasonCard>
        </div>
      </SectionContainter>

      <section className="bg-primary py-6">
        <SectionContainter className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-brand-white font-secondary text-heading-3 pb-3 text-center">Our Products</h2>
            <p className="text-primary-light text-caption max-w-[650px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem{" "}
            </p>
            <div className="flex gap-2 self-end pt-2">
              <Button variant="secondary-outline" leftIcon={<LeftArrow />}></Button>
              <Button variant="secondary-outline" rightIcon={<RightArrow />}></Button>
            </div>
          </div>
          <section className="bg-primary-active h-[280px]"></section>

          <Button variant="transparent" className="self-end" rightIcon={<RightArrow />}>
            More Products
          </Button>
        </SectionContainter>
      </section>

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
      <SectionContainter className="">
        <div className="bg-primary custom-margin-auto flex max-w-[850px] flex-col items-center gap-4 rounded-2xl px-4 py-8">
          <p className="text-primary-light text-heading-5 max-w-[450px] text-center font-semibold">Get yourself a Our tasty peanut butter to brighten your days</p>
          <Button variant="secondary" className="" rightIcon={<RightArrow className="fill-brand-black" />}>
            Shop Now
          </Button>
        </div>
        <p className="text-heading-5 pt-12 text-center font-semibold">
          Want to learn more about Our business, or you got further enquiries?{" "}
          <Link to="contact-us" className="text-primary underline">
            Contact Us
          </Link>
        </p>
      </SectionContainter>
    </div>
  );
};

export default About;
