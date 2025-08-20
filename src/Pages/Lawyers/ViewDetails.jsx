import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addBook } from '../../Utility';
import { BiError } from "react-icons/bi";


const ViewDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id));

    const { name, image, speciality, experience, licenseNumber, availability, fee } = singleLawyer;


    // book apointment buttons code 
    const handleButton = () => {
        addBook(singleLawyer)
    }
    return (
        <div className='mt-16 mx-2 md:mx-2 lg:mx-0'>

            {/* layer profile title and description  */}
            <div className=' p-5 rounded-xl'>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Lawyer's Profile Details</h1>
                <p className='text-center px-4 mb-12 mt-5 text-gray-500 text-lg'>A dedicated and experienced lawyer specializing in civil and criminal law, committed to providing clients with expert legal advice and strong representation. Known for a strategic approach and excellent negotiation skills, ensuring the best possible outcomes.
                </p>
            </div>

            {/* details section  */}
            <div className='flex space-x-5 border border-gray-300 rounded-xl p-5 items-center'>
                <div>
                    <img src={image} alt="Lawyer photo" className='p-4 rounded-lg' />
                </div>
                <div className='space-y-4'>
                    <p className='text-blue-600 px-4 py-1 bg-blue-100 text-center rounded-lg inline-block'>{experience}</p>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <p className='text-gray-500 text-xl'><span className='mr-4'>{speciality}</span> {licenseNumber}</p>
                    <div className='flex gap-4'>
                        <p className='font-semibold text-xl'>Availability : </p>
                        {
                            availability.map((available, index) => <p className='text-green-500 text-xl' key={index}>{available}</p>)
                        }
                    </div>
                    <p className='font-semibold text-xl'>Consultation Fee: <span className='text-green-500'> {fee} TK.</span></p>
                </div>
            </div>

            {/* title  */}
            <div className='mt-16 mb-12'>
                <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>Book an Appointment</h1>
            </div>

            {/* Book appointment button  */}
            <div className='border border-gray-300 p-5 mb-5 rounded-xl'>

                <p className='flex justify-between border-b border-gray-400 pb-2'><span className='font-bold'>Availability</span> <span className='font-semibold text-[#ef476f]'>Lawyer Available Today</span></p>
                <p className='text-yellow-400 py-4 flex items-center gap-1'> <span><BiError size={20} /></span> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                <Link to='/booking' onClick={handleButton}>
                    <button
                        className='btn w-full hover:bg-[#ef476f] bg-green-500 rounded-3xl text-white'>
                        Book Appointment Now
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default ViewDetails;