import React, { useEffect, useState } from 'react';
import UnderlineImg from '../../assets/underline.png';
import { Tool } from '../../Components/Tool';

export const OurTools = () => {
    const [tools, setTools] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setTools(data))
    }, []);

    return (
        <div className='bg-info border-t border-slate-600 px-40'>
            <div className='pb-20'>
                <div className='md:mt-16 mt-10 mb-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-16'>

                    {
                        tools ? tools?.slice(0, 6).map(tool => <Tool key={tool._id} tool={tool}></Tool>) : ''
                    }

                </div>
            </div>
        </div>
    );
};