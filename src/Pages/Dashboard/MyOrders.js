import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

export const MyOrders = () => {
    const [tools, setTools] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [user, tools]);

    const deleteOrder = (id) => {
        const deleteStatus = window.confirm('Are you sure to delete this order?');
        if (deleteStatus) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    return (
        <div className='w-full p-10 h-full'>
            <h1 className='text-3xl mb-2 text-neutral'>My Orders</h1>
            <span className='w-52 h-1 bg-secondary block mb-16'></span>
            {tools?.length > 0 ? <table className="table w-full">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th className='md:block hidden'>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools?.map(tool => <tr key={tool?._id}>
                            <td>
                                <div className="flex items-center sm:space-x-5 space-x-0">
                                    <div className="avatar">
                                        <div className="mask mask-squircle md:w-12 md:h-12 w-10 h-10">
                                            <img src={tool?.productImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold sm:table-cell hidden">{tool?.productName}</div>
                                        <div className="text-sm opacity-90 sm:inline-block hidden">ID: {tool?._id}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='md:table-cell hidden'>{tool?.description.slice(0, 60) + '...'}</td>
                            <td>${tool?.price}</td>
                            <td>{tool?.quantity}</td>
                            <th>
                                {!(tool?.paid) && <button onClick={() => deleteOrder(tool._id)} className="btn btn-error btn-sm lg:table-cell hidden mr-2 w-20">Delete</button>}
                                {(tool?.price && !tool?.paid) && <Link to={`/dashboard/checkOut/${tool._id}`}><button className="btn btn-secondary btn-sm lg:table-cell hidden w-20">Pay</button></Link>}

                                {(tool?.price && tool?.paid) &&

                                    <div>
                                        <div className="font-bold sm:table-cell hidden"><button className="btn btn-secondary btn-sm lg:table-cell w-20">Paid</button></div>
                                        <div className="text-sm opacity-90 font-normal sm:inline-block hidden">TXN Id: {tool?.transactionId}</div>
                                    </div>



                                }
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:hidden table-cell p-0 m-0 w-6 h-6 text-error">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </th>
                        </tr>)
                    }
                </tbody>
            </table> : <p className='text-2xl text-neutral'>Sorry 😞, You don't have any order</p>}
        </div>
    );
};