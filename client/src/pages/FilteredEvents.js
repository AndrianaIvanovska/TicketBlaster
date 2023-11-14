import React, { useState, useEffect } from "react";
import { Events } from "../components/Events";
import EventService from "../services/eventService";

export const FilteredEvents = ({ name, type }) => {

    const [events, setEvents] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const eventsPerPage = 5;

    useEffect(() => {
        setEvents([]);
        setOffset(0);
        loadEvents();
    }, [name]);

    const loadEvents = async (offset = 0, events = []) => {
        const response = await EventService.getAllEventsPerPage(offset, eventsPerPage, type);
        setEvents([...events, ...response.events]);
        setTotalEvents(response.totalCount);
        setOffset(offset + eventsPerPage);
    }

    return (
        <div>
            <h1>{name}</h1>
            <Events events={events} />
            {events.length < totalEvents && <button onClick={() => loadEvents(offset, events)}>Load More Musical Concerts</button>}
        </div>
    )
}

