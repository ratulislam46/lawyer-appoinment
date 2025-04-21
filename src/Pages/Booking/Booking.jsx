import React, { useEffect, useState } from 'react';
import { getBook, removeBook } from '../../Utility';
import LawyerDetails from '../Lawyers/LawyerDetails'
import NoLawyars from './NoLawyars';
import AfterBooking from './AfterBooking';

const Booking = () => {

    const [displayLawyers, setDisplayLayers] = useState([]);

    useEffect(()=> {
        const saveBooking = getBook();
        setDisplayLayers(saveBooking)
    },[])


    const handleDelete = id => {
        removeBook(id)
        setDisplayLayers(getBook())
    }


    if(displayLawyers.length < 1) return <NoLawyars></NoLawyars>

    return (
        <div className='my-12'>
            <h1 className='text-center font-semibold text-5xl'>My Today Appointments</h1>
            <p className='text-center text-xl px-12 mt-5 mb-20 text-gray-500 '>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            <div>
                {
                    displayLawyers.map(booked => <AfterBooking key={booked.id} booked={booked} handleDelete={handleDelete}></AfterBooking>)
                }
            </div>
        </div>
    );
};

export default Booking;