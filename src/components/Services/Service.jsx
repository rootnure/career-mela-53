import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const Service = ({ service }) => {

    const { id, img, title, type, short_description, registration_fee } = service;

    return (
        <>
            <div className="card group card-compact bg-base-100 shadow-xl">
                <div className="relative rounded-t-lg">
                    <figure className='border h-60 relative'>
                        <img src={img} alt={`${title} Thumbnail`} className='h-full transition-all duration-[250] group-hover:scale-110' />
                        <div className='absolute h-full w-full bg-[#00000000] transition-all duration-[250] group-hover:bg-[#00000025]'></div>
                    </figure>
                    <div className='absolute bg-gradient-to-r from-cyan-50 via-white to-cyan-50 p-4 flex flex-col items-center mx-auto left-0 right-0 w-fit rounded'>
                        <h3 className='text-2xl font-bold mb-2'>{type}</h3>
                        <p className='font-bold text-lg text-center'>{registration_fee}</p>
                    </div>
                </div>
                <div className="card-body rounded-b-lg">
                    <div className='flex flex-grow'>
                        <div className=''>
                            <h2 className="card-title">{title}</h2>
                            <p>{short_description}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/serviceDetails/${id}`}><button className="my-btn bg-gradient-to-r hover:bg-gradient-to-l rounded font-semibold from-cyan-50 to-cyan-100 transition-colors duration-1000">View Details <span><FaArrowRight></FaArrowRight></span></button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;