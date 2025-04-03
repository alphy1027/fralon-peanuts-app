import { FC } from "react";
import ContactCard from "@/components/contact/ContactCard";

interface ContactFormProps {
  handleContactForm: (data: ContactData) => void;
}

interface ContactData {
  username: string;
  email: string;
  message: string;
}

const Contacts: FC<ContactFormProps> = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactCard />
    </div>
  );
};

export default Contacts;
