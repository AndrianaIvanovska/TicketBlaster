import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventService from "../services/eventService";

export const GetTickets = () => {

    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getEvent();
    }, [id]);

    const getEvent = async () => {
        const response = await EventService.getEventbyId(id);
        setEvent(response);
    }

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
