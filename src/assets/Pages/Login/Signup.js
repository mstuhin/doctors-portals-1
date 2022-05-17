import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>

    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser);
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done')
        navigate('/appointment');
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-center font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Your Name</p>
                        <input type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
                        <p>Email</p>
                        <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />

                        <p>Password</p>
                        <input type="password" placeholder="" class="input input-bordered w-full max-w-xs" />
                        <p>Forget password</p>

                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p>Already have an account?  <Link className='text-primary' to="/login">Please login</Link></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary"
                    >Continue With Google</button>

                </div>
            </div>

        </div>
    );
};

export default Signup;  