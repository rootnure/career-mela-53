import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Event from "../../components/Event/Event";
import { getStoredAppliedEvents } from "../../localstorage";


const AppliedEvents = () => {

    const events = useLoaderData();

    const appliedEventIds = getStoredAppliedEvents();

    const appliedEvents = events.filter(event => appliedEventIds.includes(event.id));

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Applied Events | Career Mela</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
                <div className="md:col-span-3">
                    <h2 className="text-center text-4xl font-bold mb-6">{appliedEvents.length > 1 ? "Applied Events" : "No events applied yet"}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {
                            appliedEvents.map(event => <Event
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

export default AppliedEvents;