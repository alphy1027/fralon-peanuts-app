import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const FoundersSection = () => {
  return (
    <SectionContainter className="flex flex-col items-center gap-y-10">
      <SectionTitle>Hear from the owners</SectionTitle>
      <section className="bg-secondary border-primary relative flex max-w-[400px] items-center rounded-l-[60px] rounded-r-md border sm:rounded-l-xl">
        <figure className="h-[290px] w-[200px] -translate-x-[10%] scale-y-105 transform overflow-hidden rounded-lg sm:h-[330px] sm:w-[250px] sm:-translate-x-1/4">
          <img src="none" alt="Co-founder image" className="bg-primary border-primary h-full w-full rounded-t-full rounded-b-full border" />
          <figcaption className="sr-only">Co-founder image</figcaption>
        </figure>

        <div className="flex h-full min-h-fit w-full max-w-[350px] flex-col justify-center p-2 sm:pr-6">
          <div className="">
            <h4 className="text-caption md:text-body text-body-default font-bold">Lawrence Nunda</h4>
            <h5 className="text-extra-sm text-gray-600 italic">Co-founder Fralon</h5>
            <p className="text-caption pt-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem{" "}
            </p>
          </div>
        </div>
        <p className="text-extra-sm absolute right-2 bottom-2 pt-2 text-end text-gray-600 italic sm:right-4">lawrencenunda@gmail.com</p>
      </section>
    </SectionContainter>
  );
};

export default FoundersSection;
