import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className="lg:px-0 md:px-20 sm:px-12 px-2 hero flex justify-center h-full md:py-32 bg-info">
            <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <img src={BannerImg} />
                </div>
                <div className='md:ml-16'>
                    <h1 className="text-4xl text-neutral font-bold pb-5 md:pt-2"
                    >Get the best quality equipment for your computer from</h1>
                    <h1 className="text-6xl text-secondary font-bold md:pt-2"
                    >INDUSTICO</h1>

                    <p className="py-10 text-neutral">On the Industico Manufacturer Tools website, You can find the best quality computer tools for your computer at a reasonable price. Also we deliver our product without any delivery charge</p>
                    <Link to='ourTools' className="btn btn-outline btn-secondary">Explore Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;