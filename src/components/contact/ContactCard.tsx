import { useForm } from "react-hook-form";
import Button from "../UI-primitives/Button";
import { axiosPrivate } from "@/api/axios";
import axios from "axios";

interface ContactData {
  username: string;
  email: string;
  message: string;
}

const ContactCard = () => {
  const { register, handleSubmit, reset } = useForm<ContactData>();

  const handleContactForm = async (data: ContactData) => {
    try {
      const response = await axiosPrivate.post("/contacts", { ...data });
      console.log(response.data);
    } catch (error) {
      let errorMessage: string = "Something went wrong. Please try again.";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || error.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }

      console.log("Error submitting contact form;", errorMessage);
    }
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
