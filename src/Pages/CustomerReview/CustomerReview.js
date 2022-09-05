import React, { useEffect, useState } from 'react';
import UnderlineImg from '../../assets/underline.png';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <div className='py-20 min-h-screen'>
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold'>2k+<span className='text-secondary'> Customer </span>Say About Our Support</h1>
                <img className='w-1/6 mt-2 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='flex justify-center items-center'>
                <div >
                    <div className="carousel w-3/4 mx-auto text-neutral py-10">




                        {reviews.map(review => <div id={review._id} key={review._id} className="carousel-item w-full flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-secondary mx-auto mb-16 mt-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <h1 className='w-2/3 mx-auto text-xl text-center'>{review?.reviewText}</h1>
                            <div className="rating mx-auto mt-5">
                                <input type="radio" name="rating-2" disabled className={`mask mask-star-2 ${review.rating > 0 ? "bg-orange-400" : "bg-gray-400"}`} />
                                <input type="radio" name="rating-2" disabled className={`mask mask-star-2 ${review.rating > 1 ? "bg-orange-400" : "bg-gray-400"}`} />
                                <input type="radio" name="rating-2" disabled className={`mask mask-star-2 ${review.rating > 2 ? "bg-orange-400" : "bg-gray-400"}`} />
                                <input type="radio" name="rating-2" disabled className={`mask mask-star-2 ${review.rating > 3 ? "bg-orange-400" : "bg-gray-400"}`} />
                                <input type="radio" name="rating-2" disabled className={`mask mask-star-2 ${review.rating > 4 ? "bg-orange-400" : "bg-gray-400"}`} />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className='text-xl text-secondary'>{review?.userName}</h2>
                            </div>
                        </div>)}




                    </div>
                    <div className="flex justify-center w-full mt-8 gap-2">
                        {reviews.map(review => <a href={`#${review?._id}`} className="w-8 h-3 rounded-2xl bg-secondary"></a>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;