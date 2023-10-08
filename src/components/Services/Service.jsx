import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const Service = ({ service, isEven }) => {

    const navigate = useNavigate();

    const { id, img, title, type, short_description, registration_fee } = service;

    const handleViewDetails = () => {
        navigate(`/serviceDetails/${id}`);
        // console.log(`/serviceDetails/${id}`);
    }

    return (
        <>
            <div className="hero min-h-fit bg-base-200">
                <div className={`hero-content flex-col md:flex-col ${!isEven ? "xl:flex-row" : "xl:flex-row-reverse"}`}>
                    <img src={img} alt={`Thumbnail of ${title}`} className="max-w-lg rounded-lg shadow-lg" />
                    <div className="">
                        <h1 className="text-3xl font-bold">{type}</h1>
                        <p className='pt-2 text-gray-400 italic font-semibold'>{title}</p>
                        <p className="py-6 text-justify">{short_description}</p>
                        <p className="py-6 text-justify">{registration_fee}</p>
                        <button onClick={handleViewDetails} className="my-btn">View Details <span><FaArrowRight></FaArrowRight></span></button>
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