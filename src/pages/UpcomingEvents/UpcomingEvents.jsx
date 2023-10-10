import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Event from "../../components/Event/Event";
import RightSidebar from "../../components/RightSidebar/RightSidebar";


const UpcomingEvents = () => {

    const events = useLoaderData();

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Upcoming Events | Career Mela</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="md:col-span-2 lg:col-span-3">

                    <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {
                            events.map(event => <Event
                                key={event.id}
                                event={event}></Event>)
                        }
                    </div>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default UpcomingEvents;