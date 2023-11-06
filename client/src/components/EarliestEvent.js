import React, { useState } from "react";
import { Events } from "./Events";

export const EarliestEvent = (e) => {

    const [earliestEvent, setEarliestEvents] = useState({});

    const getEarliestEvent = (events) => {
        let earliest = events.reduce((a, b) => new Date(a.date) < new Date(b.date) ? a : b);
        setEarliestEvents(earliest);
    };

    getEarliestEvent(e);
};