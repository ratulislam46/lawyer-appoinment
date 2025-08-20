import React from 'react';
import { Link } from 'react-router';


const AfterBooking = ({ booked, handleDelete }) => {
    // console.log(booked);

    return (
        <div  data-aos="fade-up">
            <div className='bg-white border border-gray-300 hover:bg-green-100 hover:border-blue-400 p-5 mb-8 rounded-xl mx-2 md:mx-2 lg:mx-0'>

                <div className='flex justify-between border-b pb-4 border-dashed'>
                    <div>
                        <h1 className='text-3xl font-semibold'>{booked.name}</h1>
                        <p className='text-lg mt-2 text-gray-600 '>{booked.speciality}</p>
                    </div>
                    <div>
                        <p>Appointment Fee : <span className=' font-semibold text-[#ef476f]'>{booked.fee} Taka</span></p>
                    </div>
                </div>

                <Link >
                    <button onClick={()=>handleDelete(booked.id)} className='btn w-full hover:bg-[#ef476f] rounded-3xl hover:text-white mt-6 mb-2 border-[#ef476f] text-[#ef476f]'>Cancel Appointment</button>
                </Link>

            </div>
        </div>
    );
};

export default AfterBooking;