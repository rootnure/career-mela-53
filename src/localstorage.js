const getStoredAppliedEvents = () => {
    if (localStorage.getItem('eventsApplied')) {
        return JSON.parse(localStorage.getItem('eventsApplied'));
    }
    return [];
}

const storeAppliedEvents = (eventId) => {
    const storedEvents = getStoredAppliedEvents();
    if (!storedEvents.includes(eventId)) {
        localStorage.setItem("eventsApplied", JSON.stringify([...storedEvents, eventId]));
        return false;
    }
    return true;
}

export {
    getStoredAppliedEvents,
    storeAppliedEvents
}