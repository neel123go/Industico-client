import React from 'react';
import UnderlineImg from '../../assets/underline.png';
import { Link } from 'react-router-dom';
import './CurrentAffairs.css';

const CurrentAffairs = () => {
    return (
        <div className='mt-20 px-40'>
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold'>What industrial<span className='text-secondary'> current </span>affairs?</h1>
                <img className='w-1/6 mt-2 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='flex justify-center items-center py-20'>
                <div className='w-[30%] px-5 bg-neutral'>
                    <div class="flex items-center">
                        <figure className='w-40'><img src="https://industico.preyantechnosys.com/wp-content/uploads/2022/05/02-1-85x85.jpg" alt="Movie" /></figure>
                        <div class="card-body pl-4">
                            <p className='text-sm text-primary'>20 May, 2022</p>
                            <Link to='' class="hover:text-primary text-md">{`A Reflecting on 2022 global LNG and European pipeline`.slice(0, 45) + '..'}</Link>
                        </div>
                    </div>
                    <div class="flex items-center border-t border-slate-400">
                        <figure className='w-40'><img src="https://industico.preyantechnosys.com/wp-content/uploads/2022/05/06-85x85.jpg" alt="Movie" /></figure>
                        <div class="card-body pl-4">
                            <p className='text-sm text-primary'>20 May, 2022</p>
                            <Link to='' class="hover:text-primary text-md">{`How Did The European Natural Gas Market Evolve In 2022?`.slice(0, 45) + '..'}</Link>
                        </div>
                    </div>
                    <div class="flex items-center border-t border-slate-400">
                        <figure className='w-40'><img src="https://industico.preyantechnosys.com/wp-content/uploads/2022/05/08-85x85.jpg" alt="Movie" /></figure>
                        <div class="card-body pl-4">
                            <p className='text-sm text-primary'>18 May, 2022</p>
                            <Link to='' class="hover:text-primary text-md">{`The Autonomous Plant: Entering Into A New Digital Era`.slice(0, 45) + '..'}</Link>
                        </div>
                    </div>
                </div>

                <div className='w-[70%] grid grid-cols-2 gap-5 pl-10'>
                    <div className='card custom-card w-full rounded-none'>
                        <img className='image h-[57vh]' src='https://industico.preyantechnosys.com/wp-content/uploads/2022/05/portfolio-02-610x430.jpg' alt="" />
                        <div className='text px-5 text-md'>
                            <p className='mb-2 border-b border-slate-300 pb-4'>The 9 Best Guideline For The Industry And Petrolium And Oil Refinery</p>
                            <div className='flex justify-between text-sm'>
                                <p>By Jhon Ruel</p>
                                <p>May 22, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='card custom-card w-full rounded-none'>
                        <img className='image h-[57vh]' src='https://industico.preyantechnosys.com/wp-content/uploads/2022/05/05-460x427.jpg' alt="" />
                        <div className='text px-5 text-md'>
                            <p className='mb-2 border-b border-slate-300 pb-4'>Why Is The Topic Of New Mobility Retail Important Now?</p>
                            <div className='flex justify-between text-sm'>
                                <p>By Jhon Ruel</p>
                                <p>May 20, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentAffairs;