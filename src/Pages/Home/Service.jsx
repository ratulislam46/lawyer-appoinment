import React from 'react';
import review from '../../assets/review.png'
import staffs from '../../assets/staffs.png'
import lawyer from '../../assets/lawyer.png'
import patients from '../../assets/patients.png'
import CountUp from 'react-countup';

const Service = () => {
    return (
        
        <div className='mt-12'>
            <h1 className='text-center text-5xl'>We Provide Best Law Services</h1>
            <p className='text-center px-12 my-5 text-gray-500 text-lg'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mx-2 md:mx-2 lg:mx-0'>

                <div className='p-6 bg-gray-100 border border-gray-300 rounded-xl mb-4'>
                    <img src={lawyer} alt="" />
                    <h1 className='font-bold text-3xl my-4'>199+</h1>
                    <p className='text-gray-500'>Total Lawyer</p>
                </div>

                <div className='p-6 bg-gray-100 border border-gray-300 rounded-xl mb-4'>
                    <img src={review} alt="" />
                    <h1 className='font-bold text-3xl my-4'>467+</h1>
                    <p className='text-gray-500'>Total Reviews</p>
                </div>

                <div className='p-6 bg-gray-100 border border-gray-300 rounded-xl mb-4'>
                    <img src={patients} alt="" />
                    <h1 className='font-bold text-3xl my-4'>1900+</h1>
                    <p className='text-gray-500'>Case Initiated</p>
                </div>

                <div className='p-6 bg-gray-100 border border-gray-300 rounded-xl mb-4'>
                    <img src={staffs} alt="" />
                    <h1 className='font-bold text-3xl my-4'>300+</h1>
                    <p className='text-gray-500'>Total Stuff</p>
                </div>


                {/* react countup  */}
                <div style={{
                    width: '100px',
                    background:'black',
                    marginTop: '500px',
                    marginBottom:'200px',
                    color: 'white',
                    padding:'50px',

                }}>
                    <h1>
                        <CountUp start={0} end={800} duration={1000} delay={0}></CountUp>
                    </h1>
                </div>
            </div>
        </div>

    );
};

export default Service;