import React, { useEffect, useState } from 'react';
import { getBook, removeBook } from '../../Utility';
import LawyerDetails from '../Lawyers/LawyerDetails'
import NoLawyars from './NoLawyars';
import AfterBooking from './AfterBooking';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { BsTriangle } from 'react-icons/bs';
import { TbTriangle } from 'react-icons/tb';

const Booking = () => {

    const [displayLawyers, setDisplayLayers] = useState([]);
    // console.log(displayLawyers);

    useEffect(() => {
        const saveBooking = getBook();
        setDisplayLayers(Array.isArray(saveBooking) ? saveBooking : [saveBooking])
    }, [])


    const handleDelete = id => {
        removeBook(id)
        setDisplayLayers(getBook())
    }

    const booked = [...displayLawyers];
    // console.log(booked);


    if (displayLawyers.length < 1) return <NoLawyars></NoLawyars>

    return (
        <div className='my-12'>

            {/* rechart  */}
            <div className='flex justify-center'>
                <div>
                    <BarChart width={600} height={400} data={booked}>
                        <XAxis dataKey="name" stroke='#03045e' ></XAxis>
                        <YAxis dataKey="fee" className='text-2xl' stroke='#03045e'></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey='fee' barSize={30} fill='#f72585' />
                    </BarChart>
                </div>
            </div>

            {/* booking Appointment  */}
            <h1 className='text-center font-semibold text-5xl mt-16'>My Today Appointments</h1>
            <p className='text-center text-xl px-12 mt-5 mb-20 text-gray-500 '>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            <div>
                {
                    displayLawyers?.map(booked =>
                        <AfterBooking
                            key={booked.id}
                            booked={booked}
                            handleDelete={handleDelete}
                        >
                        </AfterBooking>)
                }
            </div>
        </div>
    );
};

export default Booking;