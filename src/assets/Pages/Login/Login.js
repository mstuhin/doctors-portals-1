import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user) {
        console.log(user);
    }

    const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className="text-center font-bold">Log in</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>Email</p>
                        <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
                        <p>Password</p>
                        <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
                        <p>Forget password</p>

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