import React, { useEffect, useState } from 'react';
import Loading from '../../Pages/Shared/Loading/Loading';
import { Tool } from '../../Components/Tool';

export const OurTools = () => {
    const [tools, setTools] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://fierce-escarpment-90330.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                setTools(data)
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='bg-info border-t border-slate-600 lg:px-40 md:px-20 sm:px-16 px-5'>
            <div className='pb-20'>
                <div className='md:mt-16 mt-10 mb-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-16'>

                    {
                        tools ? tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>) : ''
                    }

                </div>
            </div>
        </div>
    );
};