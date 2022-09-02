import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [qty, setQty] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [tool, id]);

    const increaseQty = (quantity) => {
        const newQuantity = parseInt(quantity) + 1;
        setQty(newQuantity);
        document.getElementById('number').value = newQuantity;
    }

    const decreaseQty = (quantity) => {
        const newQuantity = parseInt(quantity) - 1;
        setQty(newQuantity);
        document.getElementById('number').value = newQuantity;
    }

    return (
        <div className='lg:px-40 md:px-32 sm:px-12 px-5 md:py-20 py-5'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <figure className='w-5/6 mx-auto border border-primary flex justify-center items-center'><img src={tool?.image} alt="Movie" /></figure>
                <div className='lg:px-10 px-0 w-full lg:mt-0 mt-5'>
                    <p>Item Id: {tool?._id}</p>
                    <h2 className='text-3xl mt-2 font-bold'>{tool?.name}</h2>
                    <p className='mt-7'>{tool?.description}</p>
                    <h2 className='text-3xl mt-6'>Price: ${tool?.price}</h2>
                    <h2 className='text-xl mt-3'>Minimum Qty: {tool?.minQty}</h2>
                    <h2 className='text-xl mt-2'>Available Qty: {tool?.availableQty}</h2>
                    <p className='text-success text-xl mt-2 h-8'>{message}</p>
                    <div className='flex justify-start items-center'>
                        <button onClick={() => decreaseQty(qty ? qty : tool?.minQty)} className='btn btn-primary w-12 h-10 mr-[-5px] disabled:border disabled:border-secondary disabled:bg-neutral disabled:text-primary' disabled={!qty || qty === (tool?.minQty - 0)} >-</button>
                        <input type="number" className='pl-3 outline-none border border-secondary text-xl text-center w-20 h-12 z-10' defaultValue={qty ? qty : tool?.minQty} name="quantity" id="number" readOnly />
                        <button onClick={() => increaseQty(qty ? qty : tool?.minQty)} className='btn btn-primary w-12 h-10 ml-[-5px] disabled:border disabled:border-secondary disabled:bg-neutral disabled:text-primary' disabled={qty == tool?.availableQty} >+</button>
                    </div>
                </div>
            </div>
        </div>
    )
};