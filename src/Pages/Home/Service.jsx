
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import Lawyer from '../../assets/lawyer.png';
import review from '../../assets/review.png';
import patients from '../../assets/patients.png';
import staffs from '../../assets/staffs.png';


const Service = () => {

    const { ref, inView } = useInView({ triggerOnce: false });

    return (

        <div className='mb-12 mt-16'>

            <h1 data-aos="fade-up" className='text-center text-3xl md:text-4xl lg:text-5xl'>Counters</h1>
            <p data-aos="fade-up" className='text-center px-4 mt-5 text-gray-500 text-lg mb-12'>Trusted by hundreds of clients and professionals.</p>
            <div ref={ref} className='grid grid-cols-2 md:grid-cols-4 gap-4 px-1 lg:px-0'>

                <div  data-aos="fade-up" className='border border-gray-200 p-5 rounded-lg space-y-2 bg-white'>
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

                <div data-aos="fade-up" className='border border-gray-200 p-5 rounded-lg space-y-2 bg-white'>
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

                <div data-aos="fade-up" className='border border-gray-200 p-5 rounded-lg space-y-2 bg-white'>
                    <img src={patients} alt="" />
                    <h1 className='font-bold text-5xl'>
                        {
                            inView &&
                            <CountUp
                                key={inView}
                                start={0}
                                end={900}
                                duration={10}>
                            </CountUp>
                        }
                        +
                    </h1>
                    <p className='text-2xl mt-4'>Cases Initiated</p>
                </div>

                <div data-aos="fade-up" className='border border-gray-200 p-5 rounded-lg space-y-2 bg-white'>
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