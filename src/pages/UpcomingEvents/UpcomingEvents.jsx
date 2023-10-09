import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Event from "../EventByCategory/Event";
import RightSidebar from "../../components/RightSidebar/RightSidebar";


const UpcomingEvents = () => {

    const events = useLoaderData();

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>All Events | Career Mela</title>
            </Helmet>
            <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                    <div className="grid grid-cols-2 gap-4">
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