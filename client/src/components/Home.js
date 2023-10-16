import React, { useEffect, useState } from "react";

export const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => { getEvents() }, []);

    const getEvents = async () => {
        let response = await fetch("http://127.0.0.1:10002/api/v1/events");
        //let response = await fetch("http://127.0.0.1:10000/events");
        response = await response.json();
        setEvents(response.data.events);
        console.log(response.data.events);
    }

    return (
        <div>
            <h1>Home page</h1>
            {events.map((event) => <p key={event._id}>{event.description}</p>)}
        </div>)
}

