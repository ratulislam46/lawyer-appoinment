import React from 'react';
import { useLoaderData } from 'react-router';
import LawyerDetails from './LawyerDetails';

const Lawyers = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 md:mb-0'>
            {
                data.map(lawyer=><LawyerDetails key={lawyer.id} lawyer={lawyer}></LawyerDetails>)
            }
        </div>
    );
};

export default Lawyers;