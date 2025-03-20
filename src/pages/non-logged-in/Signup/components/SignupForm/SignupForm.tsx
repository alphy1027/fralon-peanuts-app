import Button from "@/components/UI-primitives/Button";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";



interface FormData {
    username: string;
    email: string;
    phoneNumber: number;
    password: string;
    confirmPassword: string;
}

interface SignupFormProps {
    handleSignup: SubmitHandler<FormData>;
    loading: boolean;
    signupSuccess: boolean;
    signUpErrorMsg: string;
}

const SignupForm: FC<SignupFormProps> = ({
    handleSignup = () => { },
    loading,
    signupSuccess,
    signUpErrorMsg
}) => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('Signup Form data submitted:', data);
        handleSignup(data);
        reset();
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder='Type your username...'
                    {...register('username', {
                        required: 'Username is required',

                    })}
                />
                {errors.username && <p>{errors.username.message}</p>}


                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder='Type your email...'
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address'
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="number"
                    placeholder='Type your phone number...'
                    {...register('phoneNumber', {
                        required: 'Phone number is required',
                    })}
                />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='Type your password...'
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long'
                        }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    placeholder='Confirm your password...'
                    {...register('confirmPassword', {
                        required: 'Confirm Password is required',
                        validate: (value) => value === watch('password') || 'Passwords do not match',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long'
                        }
                    })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <Button type="submit">Sign Up</Button>

                {loading && <p>Loading...</p>}
                {signupSuccess && <p>Signup Successful!</p>}
                {signUpErrorMsg && <p>Error: {signUpErrorMsg}</p>}

                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        </>
    );
};

export default SignupForm;
