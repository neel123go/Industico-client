import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../../Firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import LoginImg from '../../../assets/login.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let errorMessage;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const email = data?.email
        await signInWithEmailAndPassword(email, data.password);
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
                navigate(from, { replace: true });
            });
    };

    // Navigate user
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if (error) {
        errorMessage = <p className='text-error text-center mb-5'>{error?.message}</p>
    }

    // Handle Loading
    if (loading) {
        return <Loading />;
    }

    return (
        <div className='bg-info min-h-screen grid grid-cols-2 items-center'>
            <div>
                <div className="md:w-3/4 w-full mx-auto text-neutral">
                    <h1 className='text-3xl mb-2'>Please Login</h1>
                    <span className='w-52 h-1 bg-secondary block mb-16'></span>
                    {errorMessage}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mb-3">Email</span>

                            <input
                                type="text"
                                placeholder="example@your.com"
                                id="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email address is required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                autoComplete='off'
                                className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                            <label className="mt-1">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                            </label>


                        </div>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mt-5 mb-3">Password</span>
                            <input
                                type="password"
                                placeholder="password123"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be contain at least 8 characters'
                                    }
                                })}
                                autoComplete='off'
                                className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                            <label className="mt-1">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className="form-control mt-16">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                    </form>
                    <SocialLogin />
                    <div className='flex justify-between mt-5'>
                        <p className='text-center text-lg'>Don't have any account? <Link to='/registration' className='text-secondary'>Sign Up</Link></p>
                        <p className='text-md text-secondary cursor-pointer'
                        >Forgot Password?</p>
                    </div>
                </div>
            </div>
            <div className='p-20 w-full mx-auto'>
                <img src={LoginImg} alt="" />
            </div>
        </div>
    )
}

export default Login;