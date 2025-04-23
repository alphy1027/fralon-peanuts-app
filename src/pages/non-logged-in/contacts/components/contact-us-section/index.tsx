import BodyText from "@/components/UI-primitives/BodyText";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";
import ContactInfo from "./ContactInfo";
import PhoneIcon from "@/assets/svg/socials/PhoneIcon";
import EmailIcon from "@/assets/svg/socials/EmailIcon";
import LocationIcon from "@/assets/svg/socials/LocationIcon";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";

const ContactUsSection = () => {
  return (
    <SectionContainter className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12 2xl:gap-x-32">
      <section className="flex max-w-[486px] flex-col items-start gap-y-6">
        <SectionTitle>Get In Touch With Us</SectionTitle>
        <BodyText className="text-start">
          We’d love to hear from you. Whether you have questions, need assistance or are interested in bulk orders, feel free to reach out to us. We’ll get back to you as soon as possible
        </BodyText>
        <section className="flex flex-col gap-8">
          <ContactInfo icon={<PhoneIcon />} title="Phone">
            +254 790 000 000
          </ContactInfo>
          <ContactInfo icon={<EmailIcon />} title="Email">
            fralonpeanuts@gmail.com
          </ContactInfo>
          <ContactInfo icon={<LocationIcon />} title="Location">
            Kayole Junction <br />
            along Kangundo Rd, Nairobi
          </ContactInfo>
        </section>
      </section>

      <form className="flex w-full max-w-[486px] flex-col gap-y-6 sm:p-4">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Message" className="flex h-[186px]" />
        <Button size="md" width="full">
          Submit
        </Button>
      </form>
    </SectionContainter>
  );
};

export default ContactUsSection;
