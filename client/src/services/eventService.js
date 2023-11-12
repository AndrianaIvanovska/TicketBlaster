const baseUrl = 'http://127.0.0.1:10002/events';

const getAllEvents = async () => {
    let response = await fetch(baseUrl);
    response = await response.json();
    return response.data.events;
}

const getAllEventsPerPage = async (offset, eventsPerPage) => {
    let response = await fetch(`${baseUrl}?offset=${offset}&limit=${eventsPerPage}`);
    response = await response.json();
    return response.data;
}

const EventService = {
    getAllEvents,
    getAllEventsPerPage
};

export default EventService;