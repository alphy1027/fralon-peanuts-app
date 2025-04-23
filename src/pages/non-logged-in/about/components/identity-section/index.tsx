import SectionContainter from "@/components/UI-primitives/SectionContainter";
import IdentityCard from "./IdentityCard";

const IdentitySection = () => {
  return (
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
  );
};

export default IdentitySection;
