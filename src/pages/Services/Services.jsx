import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch(`http://localhost:5000/menu`)
            .then(res => res.json())
            .then(data => {
            setServices(data)
        })
    }, [])
    
    return (
        <>
            <p className='text-center text-2xl underline mt-10 mb-3'>Food Items</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service=> <Service key={service._id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;