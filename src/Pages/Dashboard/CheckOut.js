import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckOutFrom } from './CheckOutFrom';
import Loading from '../Shared/Loading/Loading';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase.init';

const stripePromise = loadStripe('pk_test_51L0k6GABT6F4bUNXZRqu1uksgYfGD6jRTTLQzu13Lwj2ht3vFBtijx1NCinU0P0ILDuwcdkKLvJdJ4vNAmBg9dPT00nw0GGha5');

export const CheckOut = () => {
    const { id } = useParams();
    const [orderTool, setOrderTool] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fierce-escarpment-90330.herokuapp.com/orders/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
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
            .then(data => {
                setOrderTool(data)
                setIsLoading(false);
            })

    }, [id]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="hero min-h-screen py-10 px-0 md:px-5 lg:px-10">
            <div className="hero-content flex-col lg:flex-row w-full p-26">
                <div className="w-full lg:w-1/2 text-left lg:text-left">
                    <h1 className="text-4xl font-bold mb-8 text-neutral">Pay Your Order now!</h1>
                    <img src={orderTool?.productImage} className='w-1/3' alt="" />
                    <p className='text-neutral text-2xl mt-5'>{orderTool?.productName}</p>
                    <p className='text-neutral text-xl mt-3'>Quantity: {orderTool?.quantity}</p>
                    <h2 className='text-xl text-neutral'>Price: <span className='text-secondary'>${orderTool?.price}</span></h2>
                    <p className='text-xl text-neutral'>Total Price: <span className='text-secondary'>${orderTool?.price * orderTool?.quantity}</span></p>
                </div>
                <div className="card flex-shrink-0 mt-5 shadow-2xl lg:w-2/5 md:w-3/5 md:my-0 my-10 w-full border border-secondary">
                    <div className="p-5 sm:p-10 card-body bg-info">
                        <h2 className="text-md sm:card-title text-neutral">Pay for: {orderTool?.productName}</h2>
                        <Elements stripe={stripePromise}>
                            <CheckOutFrom totalPrice={orderTool?.price * orderTool?.quantity} orderTool={orderTool} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};