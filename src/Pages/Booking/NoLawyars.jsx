import React from 'react';
import { Link } from 'react-router';

const NoLawyars = () => {
    return (
        <div className='mt-30 text-center'>
            <h1 className='text-center text-[#ef476f] text-5xl font-bold'>You Have not Booked any appointment yet</h1>
            <p className='text-center px-12 my-5 text-gray-500 text-xl'>Our platform connects you with verified, experienced Lawyers across various specialities - all at your convenience. </p>

            <Link to='/'>
                <div className=" justify-center mt-6">
                    <button className="btn rounded-3xl bg-[#ffd166] hover:bg-[#ff758f] hover:text-white px-12">Go Back Home</button>
                </div>
            </Link>
        </div>
    );
};

export default NoLawyars;