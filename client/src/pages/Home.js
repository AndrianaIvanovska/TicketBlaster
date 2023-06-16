import { useEffect, useState } from "react";

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => { getEvents() }, []);

    const getEvents = async () => {
        let response = await fetch("http://127.0.0.1:10000/events");
        response = await response.json();
        setEvents(response.data.events);
        console.log(response.data.events);
    }

    return (<div><h1>Home page</h1> {events.map((event) => <p key={event._id}>{event.description}</p>)}</div>)
}

export default Home;