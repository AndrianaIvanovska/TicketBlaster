const baseUrl = 'http://127.0.0.1:10002/events';

const getAllEvents = async () => {
    let response = await fetch(baseUrl);
    response = await response.json();
    return response.data.events;
}

const getAllEventsPerPage = async (offset, eventsPerPage, type) => {
    let response = await fetch(`${baseUrl}?offset=${offset}&limit=${eventsPerPage}&type=${type}`);
    response = await response.json();
    return response.data;
}

const getEventbyId = async (id) => {
    let response = await fetch(`${baseUrl}/${id}`);
    response = await response.json();
    return response.data.event;
}

const EventService = {
    getAllEvents,
    getAllEventsPerPage,
    getEventbyId
};

export default EventService;