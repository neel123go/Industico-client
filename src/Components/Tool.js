import React from 'react'
import { Link } from 'react-router-dom';

export const Tool = ({ tool }) => {
    return (
        <div className="bg-info text-neutral border border-secondary">
            <figure><img src={tool?.image} className="w-[100%]" alt="Shoes" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title">
                    {tool?.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{tool?.description.slice(0, 100) + ' ...'}</p>
                <div className="card-actions mt-2">
                    <div className="text-xl w-full">Price: ${tool?.price}</div>
                    <div className="text-xl w-full">Minimum Qty: {tool?.minQty}</div>
                    <div className="text-xl">Available Qty: {tool?.availableQty}</div>
                </div>
                <Link to={`/purchase/${tool?._id}`} className='mt-2 cursor-pointer text-secondary readMore text-lg'>
                    <p className='inline-block pr-1 font-bold'>Purchase</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};