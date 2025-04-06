import ContactCard from "@/components/contact/ContactCard";

// interface ContactData {
//   username: string;
//   email: string;
//   message: string;
// }

const Contacts = () => {
  return (
    <div className="w-full text-center">
      <h1>Contact Us</h1>
      <ContactCard />
    </div>
  );
};

export default Contacts;
