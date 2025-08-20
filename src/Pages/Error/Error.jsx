import React, { Suspense } from 'react';
import Contact from '../Contact/Contact';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router';
import ErrorImg from '../../assets/error.png'

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={ErrorImg} alt="" />
                </div>
                <h1 className='text-6xl text-[#ef476f] font-bold mb-6'>404 - Page Not Found</h1>
                <p className='text-xl'>Oops! The page your're looking for doesn't exist.</p>
                <Link to='/'>
                    <div className=" justify-center mt-6">
                        <button className="btn rounded-3xl bg-[#ffd166] hover:bg-[#ff758f] hover:text-white px-12">Go Back Home</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Error;