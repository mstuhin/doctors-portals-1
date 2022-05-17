import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (loading || gLoading) {
        return <Loading></Loading>

    }

    if (error || gError) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser);
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-center font-bold">Log in</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Email</p>
                        <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
                        <p>Password</p>
                        <input type="password" placeholder="" class="input input-bordered w-full max-w-xs" />
                        <p>Forget password</p>

                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></p>
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

export default Login;