import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        //let response = await fetch("http://127.0.0.1:10000/events");
        response = await response.json();
        const events = response.data.events;
        setEvents(events);
        getEarliestEvent(events);
    }

    const getEarliestEvent = (events) => {
        let earliest = events.reduce((a, b) => new Date(a.date) < new Date(b.date) ? a : b);
        setEarliestEvents(earliest);
    }

    console.log(earliestEvent.image);

    return (
        <div id="home">
            <div>
                <img src={`../../../public/img/events/${earliestEvent.image}`}></img>
                <h2>{earliestEvent.title}</h2>
                <p>{earliestEvent.date}</p>
                <p>{earliestEvent.location}</p>
                <button onClick={navigateToGetTickets}>Get Tickets</button>
            </div>
            {/* <div>
                {events.map((event) => <p key={event._id}>{event.title}</p>)}
            </div> */}
            <div id="homeevents">
                <div>
                    {events.map((event) => {
                        if (event.type === "concert") {
                            return (
                                <div>
                                    <h1>Musical Concerts</h1>
                                    <img src=""></img>
                                    <h2> {event.title}</h2>
                                    <p>{event.date}</p>
                                    <p>{event.location}</p>
                                    <button onClick={navigateToGetTickets}>Get Tickets</button>
                                </div>
                            )
                        }
                    })}
                </div>
                <div>
                    {events.map((event) => {
                        if (event.type === "standup") {
                            return (
                                <div>
                                    <h1>Stand-up Comedy</h1>
                                    <img src=""></img>
                                    <h2> {event.title}</h2>
                                    <p>{event.date}</p>
                                    <p>{event.location}</p>
                                    <button onClick={navigateToGetTickets}>Get Tickets</button>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div >)
}

