import React, { useEffect, useState } from 'react';
import UnderlineImg from '../../assets/underline.png';
import { Tool } from '../../Components/Tool';

const Tools = () => {
    const [tools, setTools] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

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

                    {
                        tools ? tools?.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>) : ''
                    }

                </div>
            </div>
        </div>
    )
}

export default Tools;