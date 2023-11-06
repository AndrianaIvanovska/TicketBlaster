import React, { useState, useEffect } from "react";
import { Events } from "../components/Events";

export const Concerts = () => {

    const [events, setEvents] = useState([]);
    const [offset, setOffset] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const eventsPerPage = 5;

    useEffect(() => {
        fetch("http://127.0.0.1:10002/events/totalCount")
            .then((response) => response.json())
            .then((data) => {
                setTotalEvents(data.totalCount);
                setOffset(0);
                loadEvents();
            });
        loadEvents();
    }, []);

    const loadEvents = async () => {
        let response = await fetch(`http://127.0.0.1:10002/events?offset=${offset}&limit=${eventsPerPage}`);
        response = await response.json();
        const concertEvents = response.data.events.filter(event => event.type === "concert");
        setEvents([...events, ...concertEvents]);
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

