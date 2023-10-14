import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import RightSidebar from "../../components/RightSidebar/RightSidebar";


const ServiceDetails = () => {

    const service = useLoaderData();

    const { img, type, details_description, registration_fee } = service;

    return (
        <section className="container mx-auto">
            <Helmet>
                <title>{type} Details | Career Mela</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
                <div className="md:col-span-3">
                    <div className="card card-compact bg-base-100 border rounded-md">
                        <figure className="h-[550px] group"><img src={img} alt={type} className="group-hover:scale-105 transition-all duration-300" /></figure>
                        <div className="card-body">
                            <div className="flex justify-between items-center">
                                <h2 className="card-title text-3xl md:text-4xl font-bold bg-gradient-to-l from-cyan-500 to-blue-500 text-transparent bg-clip-text">{type}</h2>
                                <h4 className="font-semibold text-base md:text-xl text-red-500"><span className="text-xs md:text-sm font-normal text-blue-600">Registration Fee:</span> {registration_fee}<span className="font-normal text-xs text-black">/event</span></h4>
                            </div>
                            <p className="leading-6 text-gray-600 text-justify">{details_description}</p>
                            <div className="card-actions justify-center my-4">
                                <Link to={`/allEvents/${type}`}><button
                                    className="my-btn hover:scale-105 transition-all duration-300">
                                    <span
                                        className="bg-gradient-to-l from-cyan-600 to-blue-500 text-transparent bg-clip-text font-semibold">Upcoming {type === "Job Placement" ? type + " Event" : type}s</span>
                                    <span className="text-blue-500"><FaArrowRight></FaArrowRight></span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </section>
    );
};

export default ServiceDetails;