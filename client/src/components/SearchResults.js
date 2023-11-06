import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Events } from "./Events";


export const SearchResult = () => {

    // const events = Events();

    // const navigate = useNavigate();
    // const location = useLocation();
    // const searchQuery = new URLSearchParams(location.search).get('query');

    // // const [events, setEvents] = useState([]);
    // const [searchEvents, setSearchEvents] = useState([]);

    // useEffect(() => { searchedEvents() }, []);

    // // const getEvents = async () => {
    // //     let response = await fetch("http://127.0.0.1:10002/events");
    // //     //let response = await fetch("http://127.0.0.1:10000/events");
    // //     response = await response.json();
    // //     const events = response.data.events;
    // //     setEvents(events);
    // // };

    // const searchedEvents = events.filter(
    //     (event) => event.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // setSearchEvents(searchedEvents);

    return (
        <div>
            <h1>Search Results</h1>
            {/* {searchEvents.map((event) => {

                return (
                    <div>
                        <img src=""></img>
                        <h2> {event.title} </h2>
                        <p> {event.date} </p>
                        <p> {event.location} </p>
                        <button onClick={() => { navigate("/gettickets") }}>Get Tickets</button>
                    </div>
                )

            })} */}
        </div>
    )
}