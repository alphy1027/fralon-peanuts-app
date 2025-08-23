import SignupForm from "./components/SignupForm/SignupForm";

interface SignupProps {
  handleSignup: (data: any) => void;
  loading: boolean;
  signupSuccess: boolean;
  signUpErrorMsg: string;
}

const Signup = ({ handleSignup, loading, signupSuccess, signUpErrorMsg }: SignupProps) => {
  return <SignupForm handleSignup={handleSignup} loading={loading} signupSuccess={signupSuccess} signUpErrorMsg={signUpErrorMsg} />;
};

export default Signup;
