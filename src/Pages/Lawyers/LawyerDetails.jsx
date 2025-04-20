import React from 'react';
import { Link } from 'react-router';

const LawyerDetails = ({ lawyer }) => {

    // console.log(lawyer);

    const { id, name, image, speciality, experience, licenseNumber } = lawyer;

    return (
        <div className="card card-side bg-[#f8ebef] shadow-sm border border-gray-200 p-4 mx-4 md:mx-2 lg:mx-0">
            <figure className='w-1/3 bg-[#cbf3f0] rounded-lg'>
                <img
                    src={image}
                    alt="Movie" />
            </figure>
            <div className="card-body w-2/3">
                <p><span className='bg-green-100 py-1 px-3 rounded-2xl text-green-600 mr-4 inline-block md:block lg:inline-block mb-0 md:mb-2 lg:mb-0'>Available</span><span className='bg-blue-100 py-1 px-4 rounded-2xl text-blue-600'>{experience}</span></p>
                <h2 className="card-title text-xl lg:text-2xl">{name}</h2>
                <p className='text-gray-600'>{speciality}</p>
                <p className='text-gray-600'>License No : {licenseNumber}</p>

                <Link to={`/viewDetails/${id}`}>
                    <div className="card-actions justify-start">
                        <button className="btn w-full rounded-2xl hover:bg-[#ff758f] hover:text-white">View Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LawyerDetails;