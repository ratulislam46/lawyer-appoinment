import React, { useEffect, useState } from 'react';
import { getBook } from '../../Utility';
import LawyerDetails from '../Lawyers/LawyerDetails'

const Booking = () => {

    const [displayLawyers, setDisplayLayers] = useState([]);

    useEffect(()=> {
        const saveBooking = getBook();
        setDisplayLayers(saveBooking)
    },[])

    return (
        <div className='my-8'>
            <h1 className='text-center text-5xl'>Our Best Lawyers</h1>
            <p className='text-center px-12 my-5 text-gray-500 text-lg'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-0 lg:gap-4 mb-5 md:mb-0'>
                {
                    displayLawyers.map(lawyer => <LawyerDetails key={lawyer.id} lawyer={lawyer}></LawyerDetails>)
                }
            </div>
        </div>
    );
};

export default Booking;