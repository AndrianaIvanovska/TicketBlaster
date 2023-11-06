import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EarliestEvent } from "./EarliestEvent";
import { Events } from "./Events";

export const Home = () => {
    const [events, setEvents] = useState([]);
    const [earliestEvent, setEarliestEvents] = useState({});

    useEffect(() => { getEvents() }, []);

    const navigate = useNavigate();

    const navigateToGetTickets = () => {
        navigate("/gettickets");
    };

    const getEvents = async () => {
        let response = await fetch("http://127.0.0.1:10002/events");
        response = await response.json();
        const events = response.data.events;
        setEvents(events);
        getEarliestEvent(events);
    }

    const getEarliestEvent = (events) => {
        let earliest = events.reduce((a, b) => new Date(a.date) < new Date(b.date) ? a : b);
        setEarliestEvents(earliest);
    }

    return (
        <div id="home">
            <div>
                <img src={`../../../public/img/events/${earliestEvent.image}`}></img>
                <h2>{earliestEvent.title}</h2>
                <p>{earliestEvent.date}</p>
                <p>{earliestEvent.location}</p>
                <button onClick={navigateToGetTickets}>Get Tickets</button>
            </div>
            <div id="homeevents">
                <div>
                    <h1>Musical Concerts</h1>
                    <Events events={events.filter(event => event.type === "concert")} />
                    <button onClick={() => { navigate("/concerts") }}>See All Musical Concerts</button>
                </div>
                <div>
                    <h1>Stand-up Comedy</h1>
                    <Events events={events.filter(event => event.type === "standup")} />
                    <button onClick={() => { navigate("/comedy") }}>See All Stand-up Comedy Shows</button>
                </div>
            </div>
        </div >)
}

