import PropTypes from 'prop-types';
import { BsFillPersonFill, BsFillPinMapFill, BsCalendarEvent, BsCurrencyDollar } from "react-icons/bs";
import { storeAppliedEvents } from '../../localstorage';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const Event = ({ event }) => {

    const { user } = useContext(AuthContext);

    const { id, img, title, description, motivation, speaker, event_info } = event;
    const { location, date, time, reg_fee, reg_deadline } = event_info;
    const { name, designation, company } = speaker;

    const handleEventApply = () => {
        if (storeAppliedEvents(id)) {
            toast.error("Already Applied. Thank you.");
        } else {
            toast.success("Applied Successfully");
        }
    }

    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl border">
                <figure><img src={img} alt={title} /></figure>
                <div className="card-body !text-base">
                    <div className='flex-grow space-y-4'>
                        <h2 className="card-title text-xl">{title}</h2>
                        <p className="">{description}</p>
                        <p className='text-red-500 italic font-semibold'>{motivation}</p>
                        <div className='flex items-center gap-2'>
                            <BsCalendarEvent className='text-4xl'></BsCalendarEvent>
                            <div>
                                <p className='text-sm italic'>Date & Time:</p>
                                <p className='font-bold'>{date} @ {time}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsCurrencyDollar className='text-4xl'></BsCurrencyDollar>
                            <div>
                                <p className='text-sm italic'>Registration Info:</p>
                                <p>Last Date of Registration: <span className="font-bold text-blue-500">{reg_deadline}</span></p>
                                <p>Registration fee: <span className="font-bold text-red-500">{reg_fee ? `$${reg_fee} only` : "Free"}</span></p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsFillPinMapFill className='text-4xl'></BsFillPinMapFill>
                            <div>
                                <p className='text-sm italic'>Location:</p>
                                <p className='font-bold'>{location}</p>
                            </div>
                        </div>
                        {name &&
                            <div className='flex gap-2 items-center'>
                                <BsFillPersonFill className='text-5xl'></BsFillPersonFill>
                                <div>
                                    <p className="text-sm italic">Speaker:</p>
                                    <p className='font-bold'>{name}</p>
                                    <p>{designation + ", " + company}</p>
                                </div>
                            </div>}
                    </div>
                    <div className="card-actions justify-center mt-4">
                        {user && <button onClick={handleEventApply} className="my-btn">Apply/Register</button>}
                    </div>
                </div>
            </div>
        </>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired
}

export default Event;