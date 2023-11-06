import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const GetTickets = () => {

    const { id } = useParams();
    console.log('Event ID', id);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:10002/events/${id}`)
            .then(response => response.json())
            .then(data => setEvent(data))
    }, [id]);

    return (
        <div>
            {event ? (
                <div>
                    <img src=""></img>
                    <h2> {event.title}</h2>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                </div>

            ) : (
                <p>Loading event details...</p>
            )}
        </div>
    );
}
