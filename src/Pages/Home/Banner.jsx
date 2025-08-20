import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero h-[550px] md:h-[650px] lg:h-[900px]"
            style={{
                backgroundImage:
                    "url(https://i.postimg.cc/TPhfZWgk/banner.png)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-5xl space-y-6">
                    <h1 data-aos="fade-right" className="text-4xl lg:text-5xl font-bold">Find & Book the Right Lawyer Easily</h1>
                    <p data-aos="fade-left" className="text-lg text-gray-400">
                    Get instant access to trusted lawyers for your legal needs. Book an appointment online anytime, anywhere with just a few clicks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;