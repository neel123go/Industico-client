import React from 'react';
import { Link } from 'react-router-dom';
import UnderlineImg from '../../assets/underline.png';
import Img1 from '../../assets/tools/case.jpg';
import Img2 from '../../assets/tools/computer-hard-disk-drive-stariz-pk.jpg';
import Img3 from '../../assets/tools/mouse.jpg';
import Img4 from '../../assets/tools/webcam.jpg';

const Tools = () => {
    return (
        <div className='bg-info border-t border-slate-600 px-40'>
            <div className='text-center'>
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className='md:text-4xl text-3xl text-base-100 font-bold md:pt-20 pt-10 cus-font'>Our <span className='text-secondary'>Manufacturer</span> Tools</h1>
                <img className='w-1/6 mt-2 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='pb-20'>
                <div className='md:mt-16 mt-10 mb-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-16'>
                    <div className="bg-info text-neutral border border-secondary">
                        <figure><img src={Img1} className="w-[100%]" alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">
                                Intel® Processor E5700
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{`10th Gen Intel Core i7-10700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Discrete graphics required. Thermal solution NOT included in the box. ONLY compatible with 400 series chipset based motherboard 125W.`.slice(0, 100) + ' ...'}</p>
                            <div className="card-actions mt-2">
                                <div className="text-xl w-full">Price: $270</div>
                                <div className="text-xl w-full">Minimum Quantity: 20</div>
                                <div className="text-xl">Available Quantity: 49</div>
                            </div>
                            <Link to={`/itemDetails/`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                                <p className='inline-block pr-1 font-bold'>Purchase</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-info text-neutral border border-secondary">
                        <figure><img src={Img2} className="w-[100%]" alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">
                                Intel® Processor E5700
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{`10th Gen Intel Core i7-10700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Discrete graphics required. Thermal solution NOT included in the box. ONLY compatible with 400 series chipset based motherboard 125W.`.slice(0, 100) + ' ...'}</p>
                            <div className="card-actions mt-2">
                                <div className="text-xl w-full">Price: $270</div>
                                <div className="text-xl w-full">Minimum Quantity: 20</div>
                                <div className="text-xl">Available Quantity: 49</div>
                            </div>
                            <Link to={`/itemDetails/`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                                <p className='inline-block pr-1 font-bold'>Purchase</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-info text-neutral border border-secondary">
                        <figure><img src='https://i.ibb.co/PDgH7SF/83bc2ef0af141fc357641c48b0aca2fe.jpg' className="w-[100%]" alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">
                                Intel® Processor E5700
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{`10th Gen Intel Core i7-10700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Discrete graphics required. Thermal solution NOT included in the box. ONLY compatible with 400 series chipset based motherboard 125W.`.slice(0, 100) + ' ...'}</p>
                            <div className="card-actions mt-2">
                                <div className="text-xl w-full">Price: $270</div>
                                <div className="text-xl w-full">Minimum Quantity: 20</div>
                                <div className="text-xl">Available Quantity: 49</div>
                            </div>
                            <Link to={`/itemDetails/`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                                <p className='inline-block pr-1 font-bold'>Purchase</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-info text-neutral border border-secondary">
                        <figure><img src={Img4} className="w-[100%]" alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">
                                Intel® Processor E5700
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{`10th Gen Intel Core i7-10700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Discrete graphics required. Thermal solution NOT included in the box. ONLY compatible with 400 series chipset based motherboard 125W.`.slice(0, 100) + ' ...'}</p>
                            <div className="card-actions mt-2">
                                <div className="text-xl w-full">Price: $270</div>
                                <div className="text-xl w-full">Minimum Quantity: 20</div>
                                <div className="text-xl">Available Quantity: 49</div>
                            </div>
                            <Link to={`/itemDetails/`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                                <p className='inline-block pr-1 font-bold'>Purchase</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-info text-neutral border border-secondary">
                        <figure><img src='https://i.ibb.co/s6Dg3wS/870-evo-01-500x500.jpg' className="w-[100%]" alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">
                                Intel® Processor E5700
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{`10th Gen Intel Core i7-10700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Discrete graphics required. Thermal solution NOT included in the box. ONLY compatible with 400 series chipset based motherboard 125W.`.slice(0, 100) + ' ...'}</p>
                            <div className="card-actions mt-2">
                                <div className="text-xl w-full">Price: $270</div>
                                <div className="text-xl w-full">Minimum Quantity: 20</div>
                                <div className="text-xl">Available Quantity: 49</div>
                            </div>
                            <Link to={`/itemDetails/`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                                <p className='inline-block pr-1 font-bold'>Purchase</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-info text-neutral border border-secondary">
                        <figure><img src='https://i.ibb.co/HdKZkxg/network-interface-card.jpg' className="w-[100%]" alt="Shoes" /></figure>
                        <div className="card-body p-5">
                            <h2 className="card-title">
                                Intel® Processor E5700
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{`10th Gen Intel Core i7-10700KF unlocked desktop processor, without processor graphics. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Discrete graphics required. Thermal solution NOT included in the box. ONLY compatible with 400 series chipset based motherboard 125W.`.slice(0, 100) + ' ...'}</p>
                            <div className="card-actions mt-2">
                                <div className="text-xl w-full">Price: $270</div>
                                <div className="text-xl w-full">Minimum Quantity: 20</div>
                                <div className="text-xl">Available Quantity: 49</div>
                            </div>
                            <Link to={`/itemDetails/`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                                <p className='inline-block pr-1 font-bold'>Purchase</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools;