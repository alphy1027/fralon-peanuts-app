// Signup.tsx (or the file where Signup component is located)
import React from "react";
import SignupForm from "./components/SignupForm/SignupForm";
import Badge from "@/components/logo+title/Badge";

interface SignupProps {
  handleSignup: (data: any) => void;
  loading: boolean;
  signupSuccess: boolean;
  signUpErrorMsg: string;
}

const Signup: React.FC<SignupProps> = ({ handleSignup, loading, signupSuccess, signUpErrorMsg }) => {
  return (
    <section>
      <Badge size="large" />

      <SignupForm handleSignup={handleSignup} loading={loading} signupSuccess={signupSuccess} signUpErrorMsg={signUpErrorMsg} />
    </section>
  );
};

export default Signup;
