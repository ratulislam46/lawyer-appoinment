import React, { Suspense } from 'react';
import Contact from '../Contact/Contact';
import Navbar from '../../Components/Navbar/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Contact></Contact>
            </Suspense>
        </div>
    );
};

export default Error;