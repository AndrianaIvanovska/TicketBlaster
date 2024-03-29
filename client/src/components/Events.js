import { useNavigate } from "react-router-dom";

export const Events = ({ events }) => {

    const navigate = useNavigate();

    return <div>
        {
            events.map((event) =>
                <div key={event._id}>
                    <img src={`/public/img/events/${event.image}`}></img>
                    <h2> {event.title}</h2>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <button onClick={() => { navigate(`/gettickets/${event._id}`) }}>Get Tickets</button>
                </div>
            )
        }
    </div>

};