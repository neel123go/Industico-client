import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../Firebase.init';
import RegisterImg from '../../../assets/register.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;
    const [createUserWithEmailAndPassword, user, loading, hookError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const email = data?.email;
        await createUserWithEmailAndPassword(email, data?.password);
        await updateProfile({ displayName: data?.userName });
        const user = { userName: data?.userName, email };


        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { });



        // fetch('https://stormy-tundra-05889.herokuapp.com/login', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ email })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         localStorage.setItem('accessToken', data.accessToken);
        //         navigate(from, { replace: true });
        //     });
    };

    // Navigate user
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    // Handle error
    if (error || hookError || updateProfileError) {
        errorMessage = <p className='text-error text-center'>{error?.message || hookError?.message || updateProfileError?.message}</p>
    };

    // Handle loading
    if (loading || updating) {
        return <Loading />;
    };


    return (
        <div className='bg-info min-h-screen grid grid-cols-2 items-center'>
            <div>
                <div className="md:w-3/4 w-full mx-auto text-neutral">
                    <h1 className='text-3xl mb-2'>Registration Now</h1>
                    <span className='w-52 h-1 bg-secondary block mb-16'></span>
                    {errorMessage}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mb-3">User Name</span>
                            <input
                                type="text"
                                placeholder="Ayoun Paul Neel"
                                {...register("userName", {
                                    required: {
                                        value: true,
                                        message: 'User name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'User name must be contain at least 3 characters'
                                    }
                                })}
                                autoComplete='off'
                                className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                            <label className="mt-1">
                                {errors.userName?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.userName.message}</span>}
                                {errors.userName?.type === 'pattern' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.userName.message}</span>}
                            </label>


                        </div>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mt-5 mb-3">Email</span>
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
                            <button className="btn btn-neutral">Registration</button>
                        </div>
                    </form>
                    <SocialLogin />
                    <p className='text-center text-lg mt-5'>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p>
                </div>
            </div>
            <div className='p-20 w-full mx-auto'>
                <img src={RegisterImg} alt="" />
            </div>
        </div>
    )
}

export default Register;