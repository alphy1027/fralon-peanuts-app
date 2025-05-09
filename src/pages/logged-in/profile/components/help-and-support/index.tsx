import BodyText from "@/components/UI-primitives/BodyText";
import Button from "@/components/UI-primitives/Button";
import Input from "@/components/UI-primitives/Input";
import TextArea from "@/components/UI-primitives/Input/TextArea";
import SectionContainter from "@/components/UI-primitives/SectionContainter";
import SectionTitle from "@/components/UI-primitives/SectionTitle";

const HelpAndSupport = () => {
  return (
    <SectionContainter className="flex flex-col gap-y-12">
      <SectionTitle className="text-start">Help and Support</SectionTitle>
      <section className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-body-default text-heading-4 font-bold">Report Bug</h3>
          <BodyText>If you encounter a bug, app misbehavior, or something not working properly, please let us know. Your feedback helps us improve.</BodyText>
        </div>
        <div className="flex max-w-[450px] flex-col gap-y-4">
          <Input placeholder="Bug description" />
          <TextArea name="bug-description" placeholder="Briefly describe the bug you encountered" rows={5} className=""></TextArea>
          <Button size="md" variant="danger" className="self-end">
            Report Bug
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-y-6">
        <h3 className="text-body-default text-heading-4 font-bold">Support</h3>
        <BodyText>
          For any inquiries about our product and services please get in touch with us through our Email <span className="text-primary underline">fralonpeanuts@gmail.com</span>. You can also get in
          touch through our help lines <span className="text-primary underline">+254797000000</span> or
          <span className="text-primary underline">+254735000000</span> or Whatsapp us through the number <span className="text-primary underline">+254796000000</span>. You can also reach us through
          our Contact Form by clicking the Contact us button below
        </BodyText>
        <Button size="md">Contact Us</Button>
      </section>
      <section className="flex flex-col gap-y-6">
        <h3 className="text-body-default text-heading-4 font-bold">Help</h3>
        <BodyText>
          For any technical inquiries about our platform, you can get in touch with our Technical team of Engineers through the Email{" "}
          <span className="text-primary underline">scripttag@gmail.com </span>
        </BodyText>
      </section>
    </SectionContainter>
  );
};

export default HelpAndSupport;
