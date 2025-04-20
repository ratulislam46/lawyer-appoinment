import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewDetails = () => {

    const params= useParams();
    console.log(params);
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1>View Details </h1>
        </div>
    );
};

export default ViewDetails;