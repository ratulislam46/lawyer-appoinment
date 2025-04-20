import React, { Suspense } from 'react';
import Banner from './Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import Service from './Service';

const Home = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <Banner></Banner>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Lawyers data={data}></Lawyers>
            </Suspense>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Service></Service>
            </Suspense>
        </div>
    );
};

export default Home;