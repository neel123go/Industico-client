import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer lg:px-40 md:px-32 px-5 py-20 bg-primary text-neutral">
            <div>
                <Link to="/" className="normal-case text-xl text-base-100">
                    <img className='w-40' src={Logo} alt="" />
                </Link>
                <p>INDUSTICO Industries Ltd.<br />Providing reliable tech since 2005</p>
            </div>
            <div>
                <span className="font-bold text-lg text-base-100">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="font-bold text-lg text-base-100">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="font-bold text-lg text-base-100">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    )
}

export default Footer;