import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const StorySection = () => {
  return (
    <section className="bg-primary-light py-6">
      <SectionContainter className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 xl:gap-x-20 xl:py-10">
        <figure>
          <img src="null" alt="Company photo" className="bg-brand-white h-56 w-64 md:h-[300px] md:w-[300px]" />
          <figcaption className="sr-only">Peanut Butter Company photo</figcaption>
        </figure>
        <div className="flex max-w-[500px] flex-col items-start gap-4">
          <SectionTitle>Our Story</SectionTitle>
          <p className="text-body text-body-default">
            Fralon Peanuts was born from a simple idea: to create peanut products that are as wholesome as they are delicious. What started as a small kitchen experiment has grown into a beloved brand
            known for quality, authenticity, and heart.Our journey began with a deep love for peanuts and a desire to bring something different to the market—products that reflect both traditional
            goodness and modern-day quality. We believed that everyone deserved snacks that are not only tasty but also nourishing and responsibly made.
          </p>
        </div>
      </SectionContainter>
    </section>
  );
};

export default StorySection;
