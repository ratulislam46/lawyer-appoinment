import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_1zko07i',
                'template_2vjjf1e',
                form.current, {
                publicKey: 'psaYyAoVgq5i8i5oV',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire({
                        title: "Send Successful!",
                        icon: "success",
                        draggable: true
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div  data-aos="fade-up"  className='container mx-auto mt-16'>
            <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://i.postimg.cc/zBGP2KCZ/tyler-franta-ius-J25i-Yu1c-unsplash.jpg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-6">
                    <div>
                        <label className="text-sm">Full name</label>
                        <input name="user_name" type="text" placeholder="Your Name" className="w-full p-3 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input name="user_email" type="email" className="w-full p-3 rounded dark:bg-gray-100" 
                        placeholder='Your Email'/>
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea name="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"
                        placeholder='Write your opinion . . .'></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;