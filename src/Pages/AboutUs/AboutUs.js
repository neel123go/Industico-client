import React from 'react';
import AboutImg from '../../assets/about.png';
import UnderlineImg from '../../assets/underline.png';

export const AboutUs = () => {
    return (
        <div className='md:px-20 sm:px-12 px-5 bg-info text-neutral'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold md:pt-16 pt-10 cus-font'>About Us</h1>
                <img className='xl:w-1/6 md:w-2/6 sm:w-3/6 w-2/3 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='grid grid-cols-1 lg:gap-0 gap-5 lg:grid-cols-2 md:my-20 my-10'>
                <figure className='w-full'><img src={AboutImg} alt="Movie" /></figure>
                <div className='md:px-10 px-0 w-full'>
                    <p className='inline-block md:text-3xl text-2xl mt-2 h-8'>On the <span className='text-secondary font-bold'>Industico Manufacturer Tools</span> website, You can find the best quality computer tools for your computer at a reasonable price. Also we deliver our product without any delivery charge</p>
                    <div className='mt-5'>
                        <span className='w-40 h-2 bg-secondary block'></span>
                    </div>
                    <p className='mt-16'>From 2005, we start our journey with only 200 customer & 10 employee. But now we have more than 2+ Million customer & 5000+ employee. Hopefully it will continue to grow day by day. We are working in the hope that maybe one day Sales Tracking Warehouse will become the largest warehouse in the world. We are working for you with our best.</p>
                    <p className='mt-8'>We want every customer to get the best service from us. For do this we try our best. We store items in our warehouse. We keep the product in our warehouse in such a way that there is no damage to the product. For this we use many technics. Also we communicate with our customers through one-to-one meeting session. So believe us & join with us soon.</p>
                </div>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-32 gap-5 lg:px-40 px-0 pb-20' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
                <div className="card-body items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <h2 className="card-title">Call Now</h2>
                    <p>+880173190394</p>
                </div>
                <div className="card-body items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <h2 className="card-title">Mail Us</h2>
                    <p>industrico@manufacturer.com</p>
                </div>
                <div className="card-body items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h2 className="card-title">Address</h2>
                    <p>Dariapara, Sylhet, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};