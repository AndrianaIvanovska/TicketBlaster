import React, { useEffect, useState } from "react";

export const Home = () => {
    const [events, setEvents] = useState([]);
    const [latestEvent, setLatestEvents] = useState({});

    useEffect(() => { getEvents() }, []);

    const getEvents = async () => {
        let response = await fetch("http://127.0.0.1:10002/api/v1/events");
        //let response = await fetch("http://127.0.0.1:10000/events");
        response = await response.json();
        const events = response.data.events;
        setEvents(events);
        getLatestEvent(events);
    }

    const getLatestEvent = (events) => {
        let latest = events.reduce((a, b) => new Date(a.date) > new Date(b.date) ? a : b);
        setLatestEvents(latest);
    }

    return (
        <div id="home">
            <img src={latestEvent.image}></img>
            <h2>{latestEvent.title}</h2>
            <p>{latestEvent.description}</p>
            {/* {events.map((event) => <p key={event._id}>{event.description}</p>)} */}
        </div>)
}

