import React, { Suspense } from 'react';
import Banner from './Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import Service from './Service';
import HelpingSection from './HelpingSection';
import Contact from '../Contact/Contact';

const Home = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <Banner></Banner>
            <div className='container mx-auto'>
                <HelpingSection></HelpingSection>

                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <Lawyers data={data}></Lawyers>
                </Suspense>

                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <Service></Service>
                </Suspense>
                
                <section className='mb-12'> 
                    <Contact></Contact>
                </section>
            </div>
        </div>
    );
};

export default Home;