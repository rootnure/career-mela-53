import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Job = ({ job, isEven }) => {

    const navigate = useNavigate();

    const { id, img, title, description, company } = job;

    const handleViewDetails = () => {
        console.log('details clicked');
        navigate(`/jobDetails/${id}`);

    }

    return (
        <>
            <div className="hero min-h-fit bg-base-200">
                <div className={`hero-content flex-col lg:${!isEven ? "flex-row" : "flex-row-reverse"}`}>
                    <img src={img[0]} className="max-w-lg rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-3xl font-bold">{title} <span className='text-lg italic font-semibold'>(at {company})</span></h1>
                        <p className="py-6 text-justify">{description[499] === " " ? description.slice(0, 499) : description.slice(0, 500)}...<span onClick={handleViewDetails} className='font-bold cursor-pointer rounded px-1 hover:bg-gray-300'>Read More</span></p>
                        <button onClick={handleViewDetails} className="btn btn-primary font-bold">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
    isEven: PropTypes.bool
}

export default Job;