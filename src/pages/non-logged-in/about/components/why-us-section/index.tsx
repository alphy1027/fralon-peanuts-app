import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import ReasonCard from "./ReasonCard";

const WhyUsSection = () => {
  return (
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
  );
};

export default WhyUsSection;
