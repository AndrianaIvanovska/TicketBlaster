import React, { useState, useEffect } from "react";
import { Events } from "./../components/Events";
import EventService from "../services/eventService";

export const Comedy = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => { getEvents() }, []);

    const getEvents = async () => {
        const events = await EventService.getAllEvents();
        setEvents(events.filter(event => event.type === "standup"));
    }

    return (
        <div>
            <h1>Stand-up Comedy</h1>
            <Events events={events} />
        </div>
    )
}