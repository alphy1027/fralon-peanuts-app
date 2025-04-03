import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const About = () => {
  return (
    <div className="">
      <SectionTitle>About Us</SectionTitle>
      <section className="bg-primary-light">
        <SectionContainter className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 xl:gap-x-20 xl:py-10">
          <img src="null" alt="Company photo" className="bg-brand-white h-56 w-64 md:h-[300px] md:w-[300px]" />
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

      <SectionContainter className="">
        <div className="flex flex-col items-start gap-y-4">
          <SectionTitle className="text-start">
            Unveiling Our Identity,
            <br /> Vision and Values
          </SectionTitle>
          <p className="text-caption text-body-default max-w-[590px]">
            We're passionate about quality peanut butter production. With years of experience in the industry, we have a good understanding about the product and used this to make our products better
            and better along the way. And so we can confidently assure our customers that we offer the best peanut butter in the industry.
          </p>
        </div>
      </SectionContainter>
    </div>
  );
};

export default About;
