import React, { useEffect, useState } from 'react';
import { getBook } from '../../Utility';
import LawyerDetails from '../Lawyers/LawyerDetails'
import NoLawyars from './NoLawyars';

const Booking = () => {

    const [displayLawyers, setDisplayLayers] = useState([]);

    useEffect(()=> {
        const saveBooking = getBook();
        setDisplayLayers(saveBooking)
    },[])


    if(displayLawyers.length < 1) return <NoLawyars></NoLawyars>

    return (
        <div className='my-8'>
            <h1 className='text-center font-semibold text-5xl'>My Today Appointments</h1>
            <p className='text-center text-xl px-12 mt-5 mb-12 text-gray-500 '>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-0 lg:gap-4 mb-5 md:mb-0'>
                {
                    displayLawyers.map(lawyer => <LawyerDetails key={lawyer.id} lawyer={lawyer}></LawyerDetails>)
                }
            </div>
        </div>
    );
};

export default Booking;