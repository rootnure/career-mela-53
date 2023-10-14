import { Link, useLoaderData } from "react-router-dom";
import Event from "../../components/Event/Event";
import { Helmet } from "react-helmet-async";
import RightSidebar from "../../components/RightSidebar/RightSidebar";


const EventsByCategory = () => {

    const events = useLoaderData();

    return (
        <div className="flex flex-col items-center gap-6 mt-6 container mx-auto">
            <Helmet>
                <title>Available {events.length > 1 ? events[0]?.category + "s" : "Events"} | Career Mela</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                <div className="md:col-span-2 lg:col-span-3">
                    <h2 className="text-center text-4xl font-bold mb-6">{events.length > 1 ? "Upcoming " + events[0]?.category + "s" : "No events in this category"}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            events?.map(event => <Event
                                key={event.id}
                                event={event}></Event>)
                        }
                        {
                            events.length < 1 &&
                            <div className="col-span-2 flex justify-center">
                                <Link to="/upcomingEvents"><button className="my-btn">Go To All Events</button></Link>
                            </div>
                        }
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default EventsByCategory;