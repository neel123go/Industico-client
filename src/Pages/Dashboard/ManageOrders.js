import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../../Firebase.init';
import DeleteProductModal from './DeleteProductModal';

export const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(null);

    useEffect(() => {
        fetch('https://fierce-escarpment-90330.herokuapp.com/orders', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json();
            })
            .then(data => setOrders(data));
    }, [orders]);


    const handleStatus = (id, transactionId) => {
        const payment = {
            status: 'shipped',
            transactionId: transactionId
        };

        fetch(`https://fierce-escarpment-90330.herokuapp.com/order/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Payment status updated',
                        {
                            icon: '✅',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        });
                } else {
                    toast('Something went wrong! Please try again',
                        {
                            icon: '❌',
                            style: {
                                borderRadius: '10px',
                                border: '1px solid #06A877',
                                marginTop: '-2px',
                                background: '#0B1322',
                                color: '#fff',
                            },
                        }
                    );
                }
            })
    }

    return (
        <div className='w-full px-10 my-10 h-full'>
            <h1 className='text-3xl mb-2 text-neutral'>Manage Orders</h1>
            <span className='w-52 h-1 bg-secondary block mb-16'></span>
            {orders.length > 0 ? <table className="table w-full">
                <thead className='text-center text-neutral rounded-lg bg-info border border-secondary' >
                    <tr className=''>
                        <th className='bg-info'>No</th>
                        <th className='bg-info'>Product</th>
                        <th className='bg-info'>User Info</th>
                        <th className='bg-info'>Address</th>
                        <th className='bg-info'>Price</th>
                        <th className='bg-info'>Quantity</th>
                        <th className='bg-info'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center text-neutral rounded-lg bg-info border border-secondary'>
                    {orders.map(order => <tr key={order?._id}>
                        <td className='bg-info'>{orders.indexOf(order) + 1}</td>
                        <td className='bg-info'>
                            <div className="flex items-center text-left space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={order?.productImage} alt="Product Image" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{order?.productName}</div>
                                    <div className="text-sm opacity-50">ID: {order?._id}</div>
                                </div>
                            </div>
                        </td>
                        <td className='bg-info'>
                            <div className='text-left'>
                                <div className="font-bold">{order?.name}</div>
                                <div className="text-sm opacity-50">{order?.email}</div>
                            </div>
                        </td>
                        <td className='bg-info'>
                            <p>{order?.address}</p>
                        </td>
                        <td className='bg-info'>${order?.price}</td>
                        <td className='bg-info'>{order?.quantity}</td>
                        <th className='bg-info'>
                            {(order.price && !order?.paid) && <>
                                <label onClick={() => setDeleteProduct(order)} htmlFor="delete-product-modal" className="btn-modal ml-2 cursor-pointer font-medium px-3 py-[9px] rounded-lg btn-error">Delete</label>
                                <button className="ml-2 font-medium cursor-default px-3 py-2 rounded-lg btn-error">Unpaid</button>
                            </>}
                            {order?.paid && <button onClick={() => handleStatus(order?._id, order?.transactionId)} className={`px-4 py-2 font-medium rounded-lg ${order?.status === 'pending' ? "bg-secondary text-primary" : "bg-primary cursor-default"}`}>{order.status}</button>}
                        </th>
                    </tr>)
                    }
                </tbody>
            </table> : <p className='text-2xl text-neutral'>Sorry 😞, Users don't have any orders</p>}
            {deleteProduct && <DeleteProductModal path="order" deleteProduct={deleteProduct}></DeleteProductModal>}
        </div>
    );
};