import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ContactImg from '../../assets/contact.png';

export const ContactUs = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let errorMessage;

    const onSubmit = async (data) => {
        const name = data?.userName;
        const number = data?.number;
        const email = data?.email;
        const message = data?.message;
        const messageInfo = { name, number, email, message };

        fetch('http://localhost:5000/queries', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast('Thank You, for contact with us..',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        });
                    reset();
                }
            })
    };

    return (
        <div class="hero min-h-screen bg-info text-neutral">
            <div class="hero-content grid grid-cols-2">
                <div class="text-center lg:text-left h-full mt-36">
                    <div className='flex justify-center'>
                        <img src={ContactImg} className="w-1/2" alt="" />
                    </div>
                    <h1 className='md:text-5xl text-2xl text-center mb-10'><span className='text-secondary'>Contact </span>with us</h1>
                    <h2 className='md:text-2xl text-2xl text-center'>We'd love to here from you</h2>
                    <p class="pt-3 text-center">Whether you have a question about features, trails, pricing, or anything else, our teat is ready to answer all your questions</p>
                </div>
                <div className="hero md:mb-20 mb-10 bg-info">
                    <div className="hero-content w-full">
                        <div className="card-body">
                            <h1 className='md:text-3xl text-2xl mb-10'><span className='text-secondary'>Get in touch </span>with us</h1>
                            {errorMessage}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-neutral">User Name</span>
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="User Name"
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
                                        className="input input-bordered bg-primary" />
                                    <label className="mt-1">
                                        {errors.userName?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.userName.message}</span>}
                                        {errors.userName?.type === 'minLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.userName.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control my-5">
                                    <label className="label">
                                        <span className="label-text text-neutral">Email</span>
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="example@your.com"
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
                                        className="input input-bordered bg-primary" />
                                    <label className="mt-1">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-neutral">Phone Number</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="+8801732843###"
                                        {...register("number", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is required'
                                            }
                                        })}
                                        autoComplete='off'
                                        className="input input-bordered bg-primary" />
                                    <label className="mt-1">
                                        {errors.number?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.number.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control mt-5">
                                    <label className="label">
                                        <span className="label-text text-neutral">Your Message</span>
                                    </label>
                                    <textarea
                                        className="textarea input input-bordered h-28 bg-primary"
                                        type="text"
                                        placeholder="Type your message here...."
                                        {...register("message", {
                                            required: {
                                                value: true,
                                                message: 'Your message is required'
                                            }
                                        })}
                                        autoComplete='off' />
                                    <label className="mt-1">
                                        {errors.message?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.message.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary">Sent</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
