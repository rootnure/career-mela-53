import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import RecentlyApplied from "../RecentlyApplied/RecentltyApplied";
import { AuthContext } from "../../provider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    const { user } = useContext(AuthContext);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="md:col-span-2 lg:col-span-3">
            <h3 className="text-4xl text-center font-bold py-4 mb-8">Our Services</h3>
            <div className="grid grid-cols-1 gap-12">
                {
                    services.map((service, idx) => <Service
                        key={service.id}
                        service={service}
                        isEven={idx % 2 ? true : false}></Service>)
                }
            </div>
            {user && <RecentlyApplied></RecentlyApplied>}
            <div data-aos="zoom-in" className="bg-cyan-100 rounded-lg md:px-20 mx-1 my-12 p-6" id="review">
                <h3 className="text-3xl text-center font-bold mb-4">Write a review</h3>
                <form className="w-full space-y-4">
                    <input type="text" placeholder="Mr./Mrs." className="w-full p-2 rounded" />
                    <input type="email" placeholder="example@mail.com" className="w-full p-2 rounded" />
                    <textarea rows="5" placeholder="Write your review or feedback here" className="w-full p-2 rounded"></textarea>
                    <div className="flex gap-4">
                        <input className="my-btn" type="reset" value="Reset" />
                        <input className="my-btn" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Services;