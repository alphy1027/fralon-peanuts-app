import BodyText from "@/components/UI-primitives/BodyText";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import OpeningHours from "./OpeningHours";

const WorkingHoursSection = () => {
  return (
    <div className="bg-primary-light py-4">
      <SectionContainter className="flex flex-wrap items-center justify-center gap-x-28 gap-y-10 md:gap-y-14 2xl:gap-x-40">
        <section className="flex flex-col items-start gap-y-4">
          <SectionTitle className="text-start">
            See Where The Magic <br />
            Happens
          </SectionTitle>
          <BodyText className="max-w-[612px]">
            We invite you to visit our production facility to experience firsthand how our delicious peanut butter is made. Witness our passion for quality and learn more about what makes us stand
            out. Watch as we process your order an be the boss, we take pride in gaining customer confidence with this.
          </BodyText>
        </section>
        <div className="bg-primary relative flex h-[300px] w-[285px] flex-col items-center justify-center gap-y-4 rounded-2xl">
          <div className="bg-secondary text-primary absolute top-0 right-1/2 flex w-[150px] translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg py-1 font-semibold uppercase">
            opening hours
          </div>
          <OpeningHours title="Monday - Friday">8.00am - 7.30pm</OpeningHours>
          <OpeningHours title="Saturday">9.00am - 7.00pm</OpeningHours>
          <OpeningHours title="Sunday">Closed</OpeningHours>
        </div>
      </SectionContainter>
    </div>
  );
};

export default WorkingHoursSection;
