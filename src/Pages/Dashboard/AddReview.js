import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import reviewImg from '../../assets/review.png';
import auth from '../../Firebase.init';

export const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(1);
    const [user] = useAuthState(auth);
    const [dbUser, setDbUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
            })
    }, [user]);

    const onSubmit = (data) => {
        const reviewText = data.review;
        const review = {
            userName: dbUser.userName,
            rating,
            reviewText
        };
        console.log(review)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your review added successfully',
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
                    reset();
                }
            })
    }
    return (
        <div className='grid grid-cols-2 gap-20 w-full p-20 items-center'>
            <div className='w-full text-neutral'>
                <img src={reviewImg} alt="" />
            </div>
            <div>
                <div className="w-full mx-auto text-neutral">
                    <h1 className='text-3xl mb-2'>Add Review</h1>
                    <span className='w-52 h-1 bg-secondary block mb-16'></span>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-neutral">Rating</span>
                            </label>
                            <div className="rating gap-1 mb-2">
                                <input onClick={() => setRating(1)} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input onClick={() => setRating(2)} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating(3)} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating(4)} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input onClick={() => setRating(5)} type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="form-control mt-8">
                            <textarea
                                type="text"
                                rows="5"
                                cols="0"
                                placeholder="Write your product review here.."
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Review text is required'
                                    },
                                    maxLength: {
                                        value: 250,
                                        message: 'You can only write 250 characters'
                                    }
                                })}
                                autoComplete='off'
                                className="border-2 border-gray-400 bg-transparent rounded-md py-2 px-3 focus:border-2 focus:border-indigo-300 focus:outline-0" />
                            <label className="mt-1">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.review.message}</span>}
                                {errors.review?.type === 'maxLength' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.review.message}</span>}
                            </label>
                        </div>
                        <div className="form-control mt-16">
                            <button className="btn btn-secondary">Add Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};