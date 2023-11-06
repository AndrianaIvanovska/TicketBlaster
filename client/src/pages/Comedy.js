import React, { useState, useEffect } from "react";
import { Events } from "../components/Events";

export const Comedy = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => { getEvents() }, []);

    const getEvents = async () => {
        let response = await fetch("http://127.0.0.1:10002/events");
        response = await response.json();
        const events = response.data.events;
        setEvents(events.filter(event => event.type === "standup"));
    }

    return (
        <div>
            <h1>Stand-up Comedy</h1>
            <Events events={events} />
        </div>
    )
}