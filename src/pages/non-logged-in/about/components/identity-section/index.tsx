import SectionContainter from "@/components/UI-primitives/SectionContainter";
import IdentityCard from "./IdentityCard";

const IdentitySection = () => {
  return (
    <SectionContainter className="flex flex-wrap items-end justify-center gap-x-14 gap-y-8 sm:gap-y-12 md:gap-y-14">
      <section className="flex h-fit w-fit flex-col gap-y-8 sm:gap-y-10">
        <IdentityCard index={1} className="">
          We are more than just a peanut brand, we’re a purpose-driven team with a passion for quality, community, and impact. Everything we do is guided by a clear vision, a meaningful mission, and
          values that shape every decision we make. Here's what fuels our journey and defines who we are:
        </IdentityCard>

        <IdentityCard index={2} title="Our Values" className="bg-primary-light">
          We never compromise on taste, freshness, or ingredients. Every product is made to meet the highest standards.We believe in building strong, lasting relationships rooted in trust and respect.
          We embrace creativity in developing exciting new flavors and formats to delight our customers.
        </IdentityCard>
      </section>

      <section className="flex h-fit w-fit flex-col gap-y-6 sm:gap-y-10">
        <IdentityCard index={3} title="Our Vision" className="bg-secondary">
          To become Africa’s most loved peanut brand—celebrated for quality, nutrition, and community impact. We envision a future where every household enjoys wholesome, flavorful peanut products
          made with integrity and care.
        </IdentityCard>

        <IdentityCard index={4} title="Our Mission" className="bg-primary">
          To craft high-quality peanut products that nourish lives, support local farmers, and celebrate authentic flavor. Through sustainable sourcing, honest production, and innovation, we aim to
          bring joy to every bite while empowering the communities we serve.
        </IdentityCard>
      </section>
    </SectionContainter>
  );
};

export default IdentitySection;
