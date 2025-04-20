import React from 'react';
import Banner from './Banner';
import Lawyers from '../Lawyers/Lawyers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <div>
                <Lawyers></Lawyers>
            </div>
        </div>
    );
};

export default Home;