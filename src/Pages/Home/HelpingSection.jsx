import React, { useEffect, useState } from 'react';

const HelpingSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/helpingData.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="mt-16 mb-12 px-4">
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl mb-10'>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map(service => (
                    <div
                        data-aos="fade-up"
                        key={service.id}
                        className="p-6 rounded-lg shadow hover:shadow-lg transition">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpingSection;