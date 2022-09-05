import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';

export const CheckOutFrom = ({ orderTool, totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, setCardErr] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {

        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret);
                }
            });
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        setCardErr(error?.message || '');
        setSuccessMsg('');

        // Confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: orderTool?.name,
                        email: orderTool?.email,
                        phone: orderTool?.phone
                    }
                }
            }
        );

        if (intentError) {
            setCardErr(intentError?.message);
        } else {
            setCardErr('');
            setSuccessMsg('Congratulation! Your payment is successfully completed');

            // Store payment data on database
            const payment = {
                userName: orderTool?.name,
                userEmail: orderTool?.email,
                toolName: orderTool?.productName,
                transactionId: paymentIntent.id,
                status: 'pending'
            };

            fetch(`http://localhost:5000/order/${orderTool?._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className='border-2 border-indigo-300 p-3 rounded-lg mt-2'
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#d6d3d1',
                            '::placeholder': {
                                color: '#d6d3d1',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className='text-error mt-3 text-lg'>{cardErr}</p>
            <p className='text-secondary mt-3 text-lg'>{successMsg}</p>
            <button className='btn-secondary px-6 text-lg py-1 mt-6 rounded-lg' type="submit" disabled={!stripe || !clientSecret}>Pay</button>
        </form>
    )
}
