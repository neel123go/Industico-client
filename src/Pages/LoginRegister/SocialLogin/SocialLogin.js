import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    useEffect(() => {
        if (user) {
            const dbUser = {
                email: user?.user.email,
                userName: user?.user.displayName,
                address: '',
                phone: '',
            };

            fetch(`http://localhost:5000/user/${user?.user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(dbUser)
            })
                .then(res => res.json())
                .then(data => { });
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            const email = user.user.email;
            fetch('https://stormy-tundra-05889.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate(from, { replace: true });
                });
        }
    }, [user, navigate, from]);

    // Navigate user
    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user, navigate, from]);

    // Handle loading
    if (loading) {
        // return <SocialLoader />;
    }

    // Handle error
    if (error) {
        errorMessage = <p className='text-error text-center mb-2'>{error?.message}</p>
    }

    return (
        <div className='mt-5'>
            {errorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-full'>Continue With Google</button>
        </div>
    )
}

export default SocialLogin;