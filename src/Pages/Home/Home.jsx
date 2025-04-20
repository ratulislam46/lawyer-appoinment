import React from 'react';
import Banner from './Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data= useLoaderData();
    // console.log(data);

    return (
        <div>
            <Banner></Banner>
            
            <div>
                <Lawyers data={data}></Lawyers>
            </div>
        </div>
    );
};

export default Home;