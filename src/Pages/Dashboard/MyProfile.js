import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import ProfileImg from '../../assets/profile.png';
import auth from '../../Firebase.init';
import toast from 'react-hot-toast';

export const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const [dbUser, setDbUser] = useState({});

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setDbUser(data);
                })
        }
    }, [user]);

    const onSubmit = async (data) => {
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast('Your profile updated successfully',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                } else {
                    toast('Something went wrong! Please try again',
                        {
                            icon: '❌',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                }
            })
    };

    return (
        <div className='grid grid-cols-2 gap-20 w-full p-20 items-center'>
            <div className='w-full text-neutral'>
                <img src={ProfileImg} alt="" />
            </div>
            <div>
                <div className="w-full mx-auto text-neutral">
                    <h1 className='text-3xl mb-2'>My Profile</h1>
                    <span className='w-52 h-1 bg-secondary block mb-16'></span>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mb-3">User Name</span>
                            <input
                                type="text"
                                defaultValue={dbUser?.userName || user.displayName}
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
                                defaultValue={dbUser?.email || user.email}
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
                                className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                            <label className="mt-1">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mt-5 mb-3">Address</span>
                            <input
                                type="text"
                                defaultValue={dbUser?.address}
                                placeholder='Enter your address'
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Delivery address is required'
                                    }
                                })}
                                autoComplete='off'
                                className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                            <label className="mt-1">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <span className="label-text text-xl text-neutral mt-5 mb-3">phone</span>
                            <input
                                type="number"
                                defaultValue={dbUser?.phone}
                                placeholder='Enter your phone number'
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })}
                                autoComplete='off'
                                className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                            <label className="mt-1">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.number.message}</span>}
                            </label>
                        </div>
                        <div className="form-control mt-16">
                            <button className="btn btn-secondary">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};