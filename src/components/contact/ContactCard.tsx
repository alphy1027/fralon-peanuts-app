import { useForm } from "react-hook-form";
import Button from "../UI-primitives/Button";

interface ContactData {
  username: string;
  email: string;
  message: string;
}

const ContactCard = () => {
  const { register, handleSubmit, reset } = useForm<ContactData>();

  const handleContactForm = (data: ContactData) => {
    console.log("Contact form submitted;", data);
    reset();
  };

  return (
    <section>
      <form onSubmit={handleSubmit(handleContactForm)} className="contact-form w-[50%] bg-teal-200 p-4">
        <div>
          <label htmlFor="username">Username :</label>
          <input type="username" placeholder="Enter your username..." {...register("username", { required: "Username is required..." })} />
        </div>

        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" placeholder="Enter your email address.." {...register("email", { required: "Email is required..." })} />
        </div>

        <div>
          <label htmlFor="text">Message :</label>
          <input type="text" placeholder="Type your message..." {...register("message", { required: "Message text is required..." })} />
        </div>

        <Button>SEND</Button>
      </form>
    </section>
  );
};

export default ContactCard;
