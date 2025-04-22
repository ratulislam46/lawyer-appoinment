import React from 'react';
import Error from '../../assets/error.png'
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div className='text-center mt-12 mb-6'>
            <div className='flex justify-center'>
                <img src={Error} alt="" />
            </div>
            <h1 className='text-6xl text-[#ef476f] font-bold mb-6'>404 - Page Not Found</h1>
            <p className='text-xl'>Oops! The page your're looking for doesn't exist.</p>
            <Link to='/'>
                <div className=" justify-center mt-6">
                    <button className="btn rounded-3xl bg-[#ffd166] hover:bg-[#ff758f] hover:text-white px-12">Go Back Home</button>
                </div>
            </Link>
        </div>
    );
};

export default Contact;