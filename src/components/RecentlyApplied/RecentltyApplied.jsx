import Event from "../../components/Event/Event";
import { getStoredAppliedEvents } from "../../localstorage";
import { useEffect, useState } from "react";


const RecentlyApplied = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/allEvents.json")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    const appliedEventIds = getStoredAppliedEvents();

    const appliedEvents = events.filter(event => appliedEventIds.includes(event.id));

    return (
        <div className="container mx-auto mt-12">
            <div className="flex gap-6 my-6">
                <div className="w-full">
                    <h2 className="text-center text-3xl font-bold pb-6 divider">Recently Applied Events</h2>
                    <h3 className="text-lg italic text-gray-500 text-center">{appliedEvents.length < 1 && "Not applied any events yet"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {
                            appliedEvents.slice(0, 2).map(event => <Event
                                key={event.id}
                                isAppliedPage={false}
                                event={event}></Event>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyApplied;