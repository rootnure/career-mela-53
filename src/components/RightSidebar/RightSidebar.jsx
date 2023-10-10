import { FaSquareXTwitter, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import SocialLogin from "../../pages/LogIn/SocialLogin";
import { useEffect, useState } from "react";
import Event from "../Event/Event";


const RightSidebar = () => {

    const [randomEvents, setRandomEvents] = useState([]);

    useEffect(() => {
        fetch('/allEvents.json')
            .then(res => res.json())
            .then(data => {
                const event1 = data[Math.floor(Math.random() * data.length)];
                const event2 = data[Math.floor(Math.random() * data.length)];
                setRandomEvents([event1, event2]);
            });
    }, []);

    return (
        <div className="md:col-span-2 lg:col-span-1 mt-12 lg:mt-0 px-6 lg:px-0">
            <div className="sticky top-24 flex gap-4 flex-col">
                <SocialLogin></SocialLogin>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Follow Us On</h2>
                    <div className="font-semibold">
                        <a href="#" className="flex items-center gap-2 border-2 rounded-t-lg p-4"><FaSquareFacebook className="text-4xl text-blue-600"></FaSquareFacebook> Facebook</a>
                        <a href="#" className="flex items-center gap-2 border-x-2 p-4"><FaSquareXTwitter className="text-4xl text-black"></FaSquareXTwitter> X (formerly Twitter)</a>
                        <a href="#" className="flex items-center gap-2 border-2 rounded-b-lg p-4"><FaInstagram className="text-4xl text-rose-500"></FaInstagram> Instagram</a>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Top Events</h2>
                    <div className="grid grid-cols-1 gap-6 max-h-[500px] overflow-auto border rounded-lg">
                        {
                            randomEvents.map((event, idx) => <Event
                                key={event.id + idx}
                                event={event}></Event>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;