
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import Lawyer from '../../assets/lawyer.png';
import review from '../../assets/review.png';
import patients from '../../assets/patients.png';
import staffs from '../../assets/staffs.png';


const Service = () => {

    const { ref, inView } = useInView({ triggerOnce: false });

    return (

        <div className='mt-12 mb-6'>


            <h1 className='text-center text-5xl'>We Provide Best Law Services</h1>
            <p className='text-center px-12 my-5 text-gray-500 text-lg'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>


            <div ref={ref} className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                
                <div className='border border-gray-200 p-5 rounded-xl  space-y-2 bg-gray-100'> 
                    <img src={Lawyer} alt="lawyer" />
                    <h1 className='font-bold text-5xl'>
                        {
                            inView &&
                            <CountUp
                                key={inView}
                                start={0}
                                end={199}
                                duration={8}>
                            </CountUp>
                        }
                        +
                    </h1>
                    <p className='text-2xl mt-4'>Total Lawyer</p>
                </div>

                <div className='border border-gray-200 p-5 rounded-xl  space-y-2 bg-gray-100'>
                    <img src={review} alt="reviews" />
                    <h1 className='font-bold text-5xl'>
                        {
                            inView &&
                            <CountUp
                                key={inView}
                                start={0}
                                end={467}
                                duration={9}>
                            </CountUp>
                        }
                        +
                    </h1>
                    <p className='text-2xl mt-4'>Total Reviews</p>
                </div>

                <div className='border border-gray-200 p-5 rounded-xl  space-y-2 bg-gray-100'>
                    <img src={patients} alt="" />
                    <h1 className='font-bold text-5xl'>
                        {
                            inView &&
                            <CountUp
                                key={inView}
                                start={0}
                                end={1900}
                                duration={10}>
                            </CountUp>
                        }
                        +
                    </h1>
                    <p className='text-2xl mt-4'>Cases Initiated</p>
                </div>

                <div className='border border-gray-200 p-5 rounded-xl  space-y-2 bg-gray-100'>
                    <img src={staffs} alt="" />
                    <h1 className='font-bold text-5xl'>
                        {
                            inView &&
                            <CountUp
                                key={inView}
                                start={0}
                                end={300}
                                duration={8}>
                            </CountUp>
                        }
                        +
                    </h1>
                    <p className='text-2xl mt-4'>Total Stuffs</p>
                </div>
            </div>
        </div>

    );
};

export default Service;