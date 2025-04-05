import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import IdentityCard from "./components/IdentityCard";

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

      <section className="bg-primary-light">
        <SectionContainter className="flex justify-center">
          <section className="grid h-[420px] max-h-[420px] max-w-[600px] grid-cols-1 grid-rows-2 gap-2 rounded-2xl p-2">
            <figure className="max-w-[576px] grow overflow-hidden rounded-lg bg-black">
              <img src="none" alt="Co-founder image" className="bg-brand-white h-full w-full" />
              <figcaption className="sr-only">Co-founder image</figcaption>
            </figure>

            <div className="bg-secondary border-primary h-full w-full max-w-[576px] rounded-lg border-2 p-2 sm:p-4">
              <h4 className="text-caption md:text-body text-body-default font-bold">Lawrence Nunda</h4>
              <h5 className="text-extra-sm text-gray-600 italic">Co-founder Fralon</h5>
              <p className="text-extra-sm md:text-caption flex-1 pt-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem{" "}
              </p>
              <p className="text-extra-sm pt-2 text-end text-gray-600 italic">lawrencenunda@gmail.com</p>
            </div>
          </section>
        </SectionContainter>
      </section>
    </div>
  );
};

export default About;
