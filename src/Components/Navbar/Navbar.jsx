import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/'><li><a>Home</a></li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/booking'><li><a>Booking</a></li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/blogs'><li><a>blogs</a></li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/contact'><li><a>Contact</a></li></NavLink>

                    </ul>
                </div>
                <a className=" text-xl font-bold"><span className='text-[#ef476f]'>LAW</span>.BD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/'><li><a>Home</a></li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/booking'><li><a>Booking</a></li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/blogs'><li><a>blogs</a></li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold underline' : ''} to='/contact'><li><a>Contact</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn bg-[#ef476f] py-2 rounded-3xl px-4 text-white">Contact Now</a>
            </div>
        </div>
    );
};

export default Navbar;