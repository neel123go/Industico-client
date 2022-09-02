import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer class="footer px-40 py-20 bg-primary text-neutral">
            <div>
                <Link to="/" className="normal-case text-xl text-base-100">
                    <img className='w-40' src={Logo} alt="" />
                </Link>
                <p>INDUSTICO Industries Ltd.<br />Providing reliable tech since 2005</p>
            </div>
            <div>
                <span class="font-bold text-lg text-base-100">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="font-bold text-lg text-base-100">Company</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="font-bold text-lg text-base-100">Legal</span>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </div>
        </footer>
    )
}

export default Footer;