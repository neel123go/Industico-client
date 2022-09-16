import React, { useEffect, useState } from 'react';
import UnderlineImg from '../../assets/underline.png';
import { Tool } from '../../Components/Tool';

const Tools = () => {
    const [tools, setTools] = useState('');

    useEffect(() => {
        fetch('https://fierce-escarpment-90330.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    return (
        <div className='bg-info border-t border-slate-600 lg:px-40 md:px-20 sm:px-16 px-5'>
            <div className='text-center'>
                <h1 className='md:text-4xl text-3xl text-base-100 font-bold md:pt-20 pt-10 cus-font'>Our <span className='text-secondary'>Manufacturer</span> Tools</h1>
                <img className='lg:w-1/6 md:w-2/6 w-3/6 mt-2 mx-auto' src={UnderlineImg} alt="" />
            </div>

            <div className='md:pb-20 pb-0'>
                <div className='md:mt-16 mt-10 mb-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between md:gap-16 gap-8'>

                    {
                        tools ? tools?.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>) : ''
                    }

                </div>
            </div>
        </div>
    )
}

export default Tools;