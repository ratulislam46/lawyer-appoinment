import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import logo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#001d3d] text-white rounded p-10">

            <aside className='flex'>
                <img src={logo} alt="logo" className='h-6' />
                <h1 className='text-2xl font-bold'>Law.BD</h1>
            </aside>

            {/* all link here  */}
            <nav className="grid grid-flow-col gap-4 border-b border-dashed">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold ' : 'text-gray-400'} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold ' : 'text-gray-400'} to='/booking'>Booking</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold' : 'text-gray-400'} to='/blogs'>blogs</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'text-red-500 font-bold ' : 'text-gray-400'} to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>

            {/* social media icon  */}
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/arfan_ratul_46/" target="_blank"><CiInstagram size={24} /></a>
                    <a href="https://web.facebook.com/mdratul.islam.46/" target="_blank"><FaFacebookSquare size={24} /></a>
                    <a href="https://github.com/ratulislam46" target="_blank"><FaGithub size={24} /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;