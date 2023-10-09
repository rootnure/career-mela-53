import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const Service = ({ service, isEven }) => {

    const { id, img, type, short_description, cost } = service;

    console.log(isEven, type);

    return (
        <>
            <div className={`flex ${isEven && "justify-end"}`}>
                <div className='w-9/12'>
                    <div className={`card group card-compact border-2 rounded-lg ${!isEven ? "flex-row" : "flex-row-reverse"}`}>
                        <div className="relative">
                            <figure className='h-72 w-96 relative'>
                                <img src={img} alt={`${type} Thumbnail`} className='w-96 transition-all duration-[250] group-hover:scale-110' />
                                <div className={`absolute h-full w-full bg-[#00000000] transition-all duration-[250] group-hover:bg-[#00000025] ${isEven ? "rounded-e-lg" : "rounded-s-lg"}`}></div>
                            </figure>
                            <div className='absolute left-0 right-0 bg-gradient-to-r from-cyan-50 via-white to-cyan-50 p-4 flex flex-col items-center w-fit mx-auto rounded-lg'>
                                <h3 className='text-2xl font-bold mb-2'>{type}</h3>
                                <p className='font-bold text-lg text-center'>{cost}/<span className="text-sm lowercase">{type === "Job Placement" ? type + " event" : type}</span></p>
                            </div>
                        </div>
                        <div className="card-body rounded-b-lg">
                            <div className='flex flex-grow'>
                                <div className={`${!isEven && "text-right"} space-y-2`}>
                                    <h2 className="text-3xl font-bold">{type}</h2>
                                    <p className='h-[calc(100%-50px)] flex items-center text-lg font-semibold'>{short_description}</p>
                                </div>
                            </div>
                            <div className={`card-actions ${!isEven && "justify-end"}`}>
                                <Link to={`/serviceDetails/${id}`}><button className="my-btn bg-gradient-to-r hover:bg-gradient-to-l rounded font-semibold from-cyan-50 to-cyan-100 transition-colors duration-1000 text-lg">View Details <span><FaArrowRight></FaArrowRight></span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
    isEven: PropTypes.bool
}

export default Service;