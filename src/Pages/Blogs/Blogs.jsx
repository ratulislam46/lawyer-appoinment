import React from 'react';
import { useLoaderData } from 'react-router';
import BlogCart from './BlogCart';

const Blogs = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div className='grid grid-cols-1 md:grid-cols-1'>
            {
                data.map(ques=> <BlogCart key={ques.id} ques={ques}></BlogCart>)
            }
        </div>
    );
};

export default Blogs;