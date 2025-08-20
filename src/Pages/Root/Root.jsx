import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-[#f3f1f1]'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-360px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;