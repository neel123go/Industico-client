import React from 'react';
import UnderlineImg from '../../assets/underline.png';

const CustomerReview = () => {
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
                        <div id="item1" className="carousel-item w-full flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-secondary mx-auto mb-16 mt-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <h1 className='w-2/3 mx-auto text-xl text-center'>We as a group takes to thank all the industico crew & personnel have shown a high-quality job... with respect of HQJS procedures both in the field and in the office were very vigilant and shown on excellent attitude. The unit proved to be very well equipped.</h1>
                            <div className="rating mx-auto mt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className='text-xl text-secondary'>Ayoun Paul Neel</h2>
                                <p>Senior Software Engineer</p>
                            </div>
                        </div>
                        <div id="item2" className="carousel-item w-full flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-secondary mx-auto mb-16 mt-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <h1 className='w-2/3 mx-auto text-xl text-center'>We as a group takes to thank all the industico crew & personnel have shown a high-quality job... with respect of HQJS procedures both in the field and in the office were very vigilant and shown on excellent attitude. The unit prove.</h1>
                            <div className="rating mx-auto mt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className='text-xl text-secondary'>Lady Gaga</h2>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        <div id="item3" className="carousel-item w-full flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-secondary mx-auto mb-16 mt-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <h1 className='w-2/3 mx-auto text-xl text-center'>We as a group takes to thank all the industico crew & personnel have shown a high-quality job... with respect of HQJS procedures both in the field and in the office were very vigilant and shown on excellent attitude. The unit proved to be very well equipped. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</h1>
                            <div className="rating mx-auto mt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className='text-xl text-secondary'>Ruel B.</h2>
                                <p>Australian Researcher</p>
                            </div>
                        </div>
                        <div id="item4" className="carousel-item w-full flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-secondary mx-auto mb-16 mt-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <h1 className='w-2/3 mx-auto text-xl text-center'>We as a group takes to thank all the industico crew & personnel have shown a high-quality job... with respect of HQJS procedures both in the field and in the office were very vigilant.</h1>
                            <div className="rating mx-auto mt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className='text-center mt-5'>
                                <h2 className='text-xl text-secondary'>Olivia Rodrigo</h2>
                                <p>American Singer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full mt-8 gap-2">
                        <a href="#item1" className="w-8 h-3 rounded-2xl bg-secondary"></a>
                        <a href="#item2" className="w-8 h-3 rounded-2xl bg-secondary"></a>
                        <a href="#item3" className="w-8 h-3 rounded-2xl bg-secondary"></a>
                        <a href="#item4" className="w-8 h-3 rounded-2xl bg-secondary"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;