import React, { useEffect, useState } from 'react';
import LawyerDetails from './LawyerDetails';

const Lawyers = ({ data }) => {


    // show and less button 
    const [displayLawyers, setDisplayLawyers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayLawyers(data);
        }
        else {
            setDisplayLawyers(data.slice(0, 6))
        }
    }, [data, showAll])
    // console.log(displayLawyers);

    return (
        <div className='mt-16 mb-12'>
            <h1 className='text-center text-3xl md:text-4xl lg:text-5xl'>Our Best Lawyers</h1>
            <p className='text-center px-4 mt-5 text-gray-500 text-lg mb-12'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    displayLawyers?.map(lawyer =>
                        <LawyerDetails
                            key={lawyer.id}
                            lawyer={lawyer}>
                        </LawyerDetails>)
                }
            </div>
            <div className='text-center'>
                <button onClick={() => {
                    setShowAll(!showAll)
                    if (showAll) window.scrollTo(0, 700)
                }} className='py-2 bg-[#ffccd5] hover:bg-[#ef476f] hover:text-white px-6 rounded-xl mt-4'>{showAll ? 'Show less Lawyer' : 'Show All Lawyer'}</button>
            </div>
        </div>
    );
};

export default Lawyers;