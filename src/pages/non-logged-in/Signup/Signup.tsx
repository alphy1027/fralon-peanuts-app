// Signup.tsx (or the file where Signup component is located)
import React from 'react';
import SignupForm from './components/SignupForm/SignupForm';


interface SignupProps {
    handleSignup: (data: any) => void;
    loading: boolean;
    signupSuccess: boolean;
    signUpErrorMsg: string;
}

const Signup: React.FC<SignupProps> = ({
    handleSignup,
    loading,
    signupSuccess,
    signUpErrorMsg,
}) => {
    return (
        <div>


            <SignupForm
                handleSignup={handleSignup}
                loading={loading}
                signupSuccess={signupSuccess}
                signUpErrorMsg={signUpErrorMsg}
            />
        </div>
    );
};

export default Signup;
