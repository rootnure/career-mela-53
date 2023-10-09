import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);

    console.log(services);

    return (
        <div className="col-span-3">
            <h3 className="text-4xl text-center font-bold py-4 mb-12">Our Services</h3>
            <div className="grid grid-cols-1 gap-12">
                {
                    services.map((service, idx) => <Service
                        key={service.id}
                        service={service}
                        isEven={idx % 2 ? true : false}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;