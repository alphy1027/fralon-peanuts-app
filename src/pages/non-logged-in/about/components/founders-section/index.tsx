import SectionContainter from "@/components/UI-primitives/SectionContainter";

const FoundersSection = () => {
  return (
    <section className="bg-primary-light py-6">
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
  );
};

export default FoundersSection;
