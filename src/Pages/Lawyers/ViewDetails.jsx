import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addBook } from '../../Utility';


const ViewDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id);

    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id));
    // console.log(singleLawyer);

    const { name, image, speciality, experience, licenseNumber, availability, fee } = singleLawyer;


    // book apointment buttons code 
    const handleButton = () => {
        addBook(singleLawyer)
    }
    return (
        <div className='my-6 mx-2 md:mx-2 lg:mx-0'>

            {/* layer profile title and description  */}
            <div className='border border-gray-300 p-5 rounded-xl'>
                <h1 className='text-center text-5xl'>Lawyer's Profile Details</h1>
                <p className='text-center px-12 my-5 text-gray-500 text-lg'>A dedicated and experienced lawyer specializing in civil and criminal law, committed to providing clients with expert legal advice and strong representation. Known for a strategic approach and excellent negotiation skills, ensuring the best possible outcomes.
                </p>
            </div>

            {/* details section  */}
            <div className='flex space-x-5 border border-gray-300 rounded-xl p-5 my-5'>
                <div>
                    <img src={image} alt="Lawyer photo" />
                </div>
                <div>
                    <p>{experience}</p>
                    <h1>{name}</h1>
                    <p ><span className='mr-4'>{speciality}</span> {licenseNumber}</p>
                    <div className='flex gap-4'>
                        <p>Availability </p>
                        {
                            availability.map((available, index) => <p key={index}>{available}</p>)
                        }
                    </div>
                    <p>Consultation Fee: <span>Taka: {fee}</span></p>
                </div>
            </div>

            {/* Book appointment button  */}
            <div className='border border-gray-300 p-5 mb-5 rounded-xl'>
                <h1 className='text-center text-4xl'>Book an Appointment</h1>
                <p className='flex justify-between'><span>Availability</span> <span>Lawyer Available Today</span></p>
                <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                <Link onClick={handleButton}>
                <button className='btn w-full'>Book Appointment Now</button>
                </Link>

            </div>

        </div>
    );
};

export default ViewDetails;