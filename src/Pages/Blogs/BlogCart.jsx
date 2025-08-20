import React from 'react';
import { ImPower } from "react-icons/im";
import { TbHandFingerRight } from "react-icons/tb";

const BlogCart = ({ ques }) => {
    // console.log(ques);

    const { question, ans, example, explain } = ques;
    console.log({ explain });

    return (
        <div className="conatainer mx-auto mt-16 mb-12">
            <div className='flex justify-center'>
                <ImPower size={32} className='text-blue-400 hover:text-emerald-400' />
            </div>
            <h2 className="mb-4 pt-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {question}
            </h2>
            <p className="py-2 text-xl text-gray-700 px-4 text-start">
                {ans}
            </p>
            <p className='text-start px-4 text-xl py-2'><span className='font-bold '></span> {example}</p>

            {explain.map(ex => <p className='text-start px-4 text-red-400 py-1 flex gap-2 items-center'> <TbHandFingerRight /> {ex}</p>)}

            <hr className="w-full mt-6 border-gray-300" />
        </div>
    );
};

export default BlogCart;