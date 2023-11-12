import React, { useState, useEffect } from "react";
import { Events } from "../components/Events";
import EventService from "../services/eventService";

export const Concerts = () => {

    const [events, setEvents] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const eventsPerPage = 5;

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const response = await EventService.getAllEventsPerPage(offset, eventsPerPage);
        const concertEvents = response.events.filter(event => event.type === "concert");
        setEvents([...events, ...concertEvents]);
        setTotalEvents(response.totalCount);
        setOffset(offset + eventsPerPage);
    }

    return (
        <div>
            <h1>Musical Concerts</h1>
            <Events events={events} />
            {events.length < totalEvents && <button onClick={loadEvents}>Load More Musical Concerts</button>}
        </div>
    )
}

