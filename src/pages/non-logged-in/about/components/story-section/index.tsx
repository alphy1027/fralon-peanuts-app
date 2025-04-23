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
          <p className="text-caption text-body-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt ut voluptas aliquam, fuga impedit obcaecati possimus, tenetur libero deserunt, eius minus maiores hic ipsa vero
            exercitationem odit natus totam. Mollitia, sequi hic, accusantium voluptas culpa quidem tempora rerum iusto eos, sit excepturi. Iure maxime vel nobis aut facere, recusandae enim. Quas vel
            eveniet quia quisquam officiis quod eaque sint? Vel voluptates maiores debitis laudantium nam repudiandae ducimus non eaque tempora mollitia architecto harum, est omnis quia vitae corrupti
            animi fugit accusantium nesciunt. Reiciendis magni sed, eaque fugit obcaecati expedita. Quas quibusdam itaque placeat cumque consequuntur. Ipsum fugit exercitationem autem ipsa in
          </p>
        </div>
      </SectionContainter>
    </section>
  );
};

export default StorySection;
