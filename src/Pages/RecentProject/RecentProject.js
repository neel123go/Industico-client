import React from 'react';
import UnderlineImg from '../../assets/underline.png';
import './RecentProject.css';
import Img1 from '../../assets/projects/a-1024x640.jpg';
import Img2 from '../../assets/projects/BusinessPC-DeepLearning.jpg';
import Img3 from '../../assets/projects/Process Industries_hero.jpg';
import { Link } from 'react-router-dom';

const RecentProject = () => {
    return (
        <div className='min-h-screen px-20'>
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold md:pt-20 pt-10 cus-font'>Our Recent <span className='text-secondary'>Industry</span> Project</h1>
                <img className='w-1/6 mt-2 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='grid grid-cols-3 gap-6 mt-20'>
                <div className='card cus-card w-full rounded-none'>
                    <img className='image' src={Img1} alt="" />
                    <div className='behind'>
                        <p className='mb-2'>Industrial Complex</p>
                        <p className='text-sm tex-neutral'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, at perferendis culpa, reprehenderit sequi hic sed ipsam</p>
                        <Link to={`/itemDetails/`} className='cursor-pointer text-secondary readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>Read More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className='card cus-card w-full rounded-none'>
                    <img className='image' src={Img2} alt="" />
                    <div className='behind'>
                        <p className='mb-2'>Industrial Complex</p>
                        <p className='text-sm tex-neutral'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, at perferendis culpa, reprehenderit sequi hic sed ipsam</p>
                        <Link to={`/itemDetails/`} className='cursor-pointer text-secondary readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>Read More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className='card cus-card w-full rounded-none'>
                    <img className='image' src={Img3} alt="" />
                    <div className='behind'>
                        <p className='mb-2'>Industrial Complex</p>
                        <p className='text-sm tex-base-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, at perferendis culpa, reprehenderit sequi hic sed ipsam</p>
                        <Link to={`/itemDetails/`} className='cursor-pointer text-secondary readMore text-lg'>
                            <p className='inline-block pr-1 font-bold'>Read More</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecentProject;