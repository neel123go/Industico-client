import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import RegisterImg from '../../assets/user.png';
import { signOut } from 'firebase/auth';

export const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [dbUser, setDbUser] = useState({});
    const [qty, setQty] = useState('');
    const [message, setMessage] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fierce-escarpment-90330.herokuapp.com/items/${id}`)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [tool, id]);

    useEffect(() => {
        fetch(`https://fierce-escarpment-90330.herokuapp.com/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data));
    }, [user]);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const address = data.address;
        const phone = data.number;
        const userEmail = user?.email;
        const userName = user?.displayName;
        const quantity = qty + '';
        fetch(`https://fierce-escarpment-90330.herokuapp.com/user/${userEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ address, phone })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    const order = {
                        name: userName,
                        email: userEmail,
                        address,
                        phone,
                        productName: tool.name,
                        productImage: tool.image,
                        price: tool.price,
                        description: tool.description,
                        quantity: (quantity ? quantity : tool.minQty)
                    };
                    fetch('https://fierce-escarpment-90330.herokuapp.com/order', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(order)
                    })
                        .then(res => {
                            if (res.status === 401 || res.status === 403) {
                                signOut(auth);
                                localStorage.removeItem('accessToken');
                            }
                            return res.json();
                        })
                        .then(data => {
                            if (data?.insertedId) {
                                navigate('/dashboard/myOrders');
                            }
                        })
                }
            });
    }

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
        <div className='lg:px-40 md:px-32 sm:px-12 px-5 md:py-20 py-5 bg-info text-neutral'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <figure className='w-5/6 mx-auto flex justify-center items-center'><img src={tool?.image} alt="Movie" /></figure>
                <div className='lg:px-10 px-0 w-full lg:mt-0 mt-5'>
                    <p>Item Id: {tool?._id}</p>
                    <h2 className='text-3xl mt-2 font-bold'>{tool?.name}</h2>
                    <p className='mt-7'>{tool?.description}</p>
                    <h2 className='text-3xl mt-6'>Price: ${tool?.price}</h2>
                    <h2 className='text-xl mt-3'>Minimum Qty: {tool?.minQty}</h2>
                    <h2 className='text-xl mt-2'>Available Qty: {tool?.availableQty}</h2>
                    <p className='text-success text-xl mt-2 h-8'>{message}</p>
                    <div className='flex justify-start items-center'>
                        <button onClick={() => decreaseQty(qty ? qty : tool?.minQty)} className='btn btn-secondary w-12 h-10 mr-[-5px] disabled:border disabled:border-secondary disabled:bg-neutral disabled:text-primary' disabled={!qty || qty === (tool?.minQty - 0)} >-</button>
                        <input type="number" className='pl-3 outline-none border border-secondary text-xl text-center w-20 h-12 z-10 text-primary' defaultValue={qty ? qty : tool?.minQty} name="quantity" id="number" readOnly />
                        <button onClick={() => increaseQty(qty ? qty : tool?.minQty)} className='btn btn-secondary w-12 h-10 ml-[-5px] disabled:border disabled:border-secondary disabled:bg-neutral disabled:text-primary' disabled={qty == tool?.availableQty} >+</button>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className='bg-info min-h-screen grid grid-cols-2 items-center border-t border-slate-400'>
                    <div>
                        <div className="md:w-4/5 w-full mx-auto text-neutral">
                            <h1 className='text-3xl mb-2'>User Information</h1>
                            <span className='w-60 h-1 bg-secondary block mb-16'></span>
                            {message}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <span className="label-text text-xl text-neutral mb-3">User Name</span>
                                    <input
                                        type="text"
                                        readOnly
                                        defaultValue={user?.displayName}
                                        className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                </div>
                                <div className="form-control">
                                    <span className="label-text text-xl text-neutral mt-5 mb-3">Email</span>
                                    <input
                                        type="text"
                                        readOnly
                                        defaultValue={user?.email}
                                        className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                </div>
                                <div className="form-control">
                                    <span className="label-text text-xl text-neutral mt-5 mb-3">Address</span>
                                    <input
                                        type="text"
                                        defaultValue={dbUser?.address}
                                        placeholder="Dariapara, sylhet, Bangladesh"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Delivery address is required'
                                            }
                                        })}
                                        autoComplete='off'
                                        className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                    <label className="mt-1">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.address.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control">
                                    <span className="label-text text-xl text-neutral mt-5 mb-3">phone</span>
                                    <input
                                        type="number"
                                        defaultValue={dbUser?.phone}
                                        placeholder="017318323##"
                                        {...register("number", {
                                            required: {
                                                value: true,
                                                message: 'Phone number is required'
                                            }
                                        })}
                                        autoComplete='off'
                                        className="bg-transparent border-b-2 border-neutral pb-1 outline-none" />
                                    <label className="mt-1">
                                        {errors.number?.type === 'required' && <span className="label-text-alt text-error" style={{ fontSize: '15px' }}>{errors.number.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control mt-16">
                                    <button className="btn btn-neutral">Purchase</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='p-10 w-full mx-auto'>
                        <img src={RegisterImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};