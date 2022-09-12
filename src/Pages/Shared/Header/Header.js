import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import auth from '../../../Firebase.init';

const Header = () => {
    // Get Current User
    const [user] = useAuthState(auth);

    // Handle SignOut
    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <div className="navbar bg-primary md:px-20 px-2 h-auto py-3">
            <div className="navbar-start">
                <Link to="/" className="normal-case text-xl text-base-100">
                    <img className='w-40' src={Logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-neutral">
                <ul className="menu menu-horizontal p-0 text-lg">
                    <li><Link to='/ourTools' className='hover:bg-primary hover:text-secondary'>Our Tools</Link></li>
                    {user ? <li><Link to='/dashboard' className='hover:bg-primary hover:text-secondary'>Dashboard</Link></li> : ''}
                    <li><Link to='/contactUs' className='hover:bg-primary hover:text-secondary'>Contact Us</Link></li>
                    <li><Link to='/aboutUs' className='hover:bg-primary hover:text-secondary'>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='dropdown dropdown-end'>
                    {user ? <div className='dropdown dropdown-end'>
                        <label tabIndex="0" className="avatar">
                            <div className="w-10 rounded-full border-4 border-secondary cursor-pointer">
                                <img src={(user?.photoURL) || 'https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg'} />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-9 p-2 shadow bg-primary rounded-box w-52 text-neutral border-2 border-secondary">
                            <li className='ml-4 mt-2'>{user?.displayName}</li>
                            <li className='ml-4 my-2 cursor-pointer' onClick={handleLogout}>Logout</li>
                        </ul>
                    </div> : <Link to='/login'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-secondary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>}
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" color='#fcccae' /></svg>
                    </label><ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-neutral">
                        <li><Link to='/ourTools' className='hover:bg-primary hover:text-secondary'>Our Tools</Link></li>
                        {user ? <li><Link to='/dashboard' className='hover:bg-primary hover:text-secondary'>Dashboard</Link></li> : ''}
                        <li><Link to='/contactUs' className='hover:bg-primary hover:text-secondary'>Contact Us</Link></li>
                        <li><Link to='/aboutUs' className='hover:bg-primary hover:text-secondary'>About Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;